import { combineReducers } from 'redux'

const getPublications = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PUBLIS_LOADING':
      return {
        isLoading: true,
        isError: false,
        isSuccess: false,
        pubList: null,
        errors: null
      }

    case 'GET_PUBLIS_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        isSuccess: true,
        pubList: action.payload,
        errors: null
      }

    case 'GET_PUBLIS_FAIL':
      return {
        isLoading: false,
        isError: true,
        isSuccess: false,
        pubList: null,
        errors: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  getPublications
})
