/*
 *  API calls
 */

const API = 'https://scicloud-apirest.herokuapp.com/api'

/*
 * Make a generic HTTP api request, encoding the parameters.
 * Returns a response or timeout.
 */
export const api = async (url, method, body = null, params = null, headers = {}) => {
  try {
    const reqBody = body ? JSON.stringify(body) : null
    const reqParams = params ? Object.keys(params).map(
      key => key + '=' + encodeURIComponent(params[key])).join('&') : null
    const endPoint = reqParams ? API.concat(url).concat('?' + reqParams) :
      API.concat(url)

    const fetchParams = { method, headers }

    if ((method === 'POST' || method === 'PUT') && !reqBody) {
      throw new Error('Request body required')
    }

    if (reqBody) {
      fetchParams.headers.Accept = 'application/json'
      fetchParams.headers['Content-type'] = 'application/json'
      fetchParams.mode = 'cors'
      fetchParams.cache = 'default'
      fetchParams.body = reqBody
    }

    console.log("API fetch parameters:")
    console.log(fetchParams)

    const fetchPromise = fetch(endPoint, fetchParams)
    const timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Request Timeout')
      }, 3000)
    })

    const response = await Promise.race([fetchPromise, timeOutPromise])

    return response
  } catch (e) {
    return e
  }
}

/*
 * Make an API call, managing headers and authentication.
 * Returns an 'result' object containing a token, a success code, and the response body
 */
export const fetchApi = async (url, method, body, statusCode, token = null, params = null, loader = false) => {
  try {
    const headers = {}
    const result = {
      token: null,
      success: false,
      responseBody: null
    }
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await api(url, method, body, params, headers)

    if (response.status === statusCode) {
      result.success = true

      let responseBody
      const responseText = await response.text()

      try {
        responseBody = JSON.parse(responseText)
        result.token = responseBody.token
      } catch (e) {
        responseBody = responseText
      }

      result.responseBody = responseBody

      return result
    } else if (response.status === 503) {
      result.responseBody = 'Application Error'
      throw result
    }

    // Error handling: log and return error

    let errorBody
    const errorText = await response.text()

    try {
      errorBody = JSON.parse(errorText)
    } catch (e) {
      errorBody = errorText
    }

    result.responseBody = errorBody

    console.log(`API: Error result: ${JSON.stringify(result)}`)

    throw result
  } catch (error) {
    return error
  }
}

export const createUser = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'CREATE_USER_LOADING'
      })
      console.log(payload)
      const response = await fetchApi('/users', 'POST', payload, 200)

      if (response.success) {
        dispatch({
          type: 'CREATE_USER_SUCCESS'
        })
        return response
      } else {
        throw response
      }
    } catch (error) {
      dispatch({
        type: 'CREATE_USER_FAIL',
        payload: error.responseBody
      })
      return error
    }
  }
}

export const loginUser = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOGIN_USER_LOADING'
      })
      const response = await fetchApi('/login', 'POST', payload, 200)

      if (response.success && response.responseBody.token) {
        dispatch({
          type: 'LOGIN_USER_SUCCESS'
        })
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.responseBody.token,
          // The server can return more than one user
          user: response.responseBody.data.length
            ? response.responseBody.data[0]
            : response.responseBody.data
        })
        return response
      } else {
        throw response
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_USER_FAIL',
        payload: error.responseBody
      })
      return { ...error, success: false }
    }
  }
}

// Note: there's no api endpoint for logout yet, so this is client-only.
export const logoutUser = () => {
  return async (dispatch, getState) => {
    const state = getState()
    try {
      const { authReducer: { authData: { token } } } = state
      console.log(token)
      dispatch({
        type: 'USER_LOGGED_OUT_SUCCESS'
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getUser = () => {
  return async (dispatch, getState) => {
    const state = getState()
    try {
      dispatch({
        type: 'LOGIN_USER_LOADING'
      })
      const { authReducer: { authData: { token, user: { _id } } } } = state
      console.log('API: Attepmting to get user ' + _id)
      const response = await fetchApi('/users/' + _id, 'GET', null, 200, token)
      console.log(response)
      console.log(response.responseBody.data)
      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: response.responseBody.data
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: 'GET_USER_FAILURE',
        payload: e
      })
    }
  }
}

export const getPublications = () => {
  return async (dispatch, getState) => {
    const state = getState()
    try {
      dispatch({
        type: 'GET_PUBLIS_LOADING'
      })
      const { authReducer: { authData: { token } } } = state
      console.log('API: Attepmting to get publications')
      const response = await fetchApi('/publications', 'GET', null, 200, token)
      console.log(response)
      if (response.success && response.responseBody.data) {
        dispatch({
          type: 'GET_PUBLIS_SUCCESS',
          payload: response.responseBody.data
        })
      }
      throw response
    } catch (e) {
      console.log(e)
      dispatch({
        type: 'GET_PUBLIS_FAILURE',
        payload: e
      })
    }
  }
}

export const getProfiles = () => {
  return async (dispatch, getState) => {
    const state = getState()
    try {
      dispatch({
        type: 'GET_PROFILES_LOADING'
      })
      const { authReducer: { authData: { token } } } = state
      console.log('API: Attepmting to get profiles')
      const response = await fetchApi('/users', 'GET', null, 200, token)
      console.log(response)
      if (response.success && response.responseBody.data) {
        dispatch({
          type: 'GET_PROFILES_SUCCESS',
          payload: response.responseBody.data
        })
      }
      throw response
    } catch (e) {
      console.log(e)
      dispatch({
        type: 'GET_PROFILES_FAILURE',
        payload: e
      })
    }
  }
}
