/*
 * Javascript wrapper for the REST API.
 * Contains data structures and methods.
 */

const API = 'https://scicloud-apirest.herokuapp.com/api'

const Api = {
  // Param struct for the login call
  LoginParams: {
    email: '',
    password: ''
  },

  // Param struct for the register call
  RegisterParams: {
    email: '',
    password: '',
    birthdate: new Date(),
    phone: '',
    name: '',
    surname1: '',
    surname2: ''
  },

  // Return struct for the profile call
  ProfileInfo: {
    email: '',
    password: '',
    birthdate: new Date(),
    phone: '',
    name: '',
    surname1: '',
    surname2: ''
  },

  // Attemp to log in
  // Usage: login(params).then(success, failure)
  // success will receive an authentication token
  // failure will receive an error message
  login: (params) => {
    return new Promise(
      (resolve, reject) => {
        fetch(API + '/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(params)
        })
          .then(res => res.json())
          .then((data) =>
            data.success === true ? resolve(data.token) : reject(data.error)
          )
          .catch(reject)
      })
  },
  
  // Attemp to register
  // Usage: register(params).then(success, failure)
  // success will receive an authentication token
  // failure will receive an error message
  register: (params) => {
    return new Promise(
      (resolve, reject) => {
        console.log(params)
        fetch(API + '/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(params)
        })
          .then(res => res.json())
          .then((data) =>
            data.message === 'New contact created!' ? resolve(data) : reject(data)
          )
          .catch(reject)
      })
  },
  
  // Fetch profile info.
  // Params must contain a valid authentication token.
  // success receives a ProfileInfo-like object
  profile: (params) => {
    return new Promise(
      (resolve, reject) => {
        fetch(API + '/profile', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(params)
        })
          .then(res => res.json())
          .then((data) =>
            data.success === true ? resolve(data.info) : reject(data.error)
          )
          .catch(reject)
      })
  },

}

export default Api
