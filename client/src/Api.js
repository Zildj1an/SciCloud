/*
 * Javascript wrapper for the REST API.
 * Contains data structures and methods.
 */

const API = 'https://localhost:5000'

// Param struct for the login call
const LoginParams = {
  email: '',
  password: ''
}


// Param struct for the register call
const RegisterParams = {
  email: '',
  password: '',
  date: new Date(),
  tel: '',
  firstName: '',
  lastName1: '',
  lastname2: ''
}

// Return struct for the profile call
const ProfileInfo = {
  email: '',
  date: new Date(),
  tel: '',
  firstName: '',
  lastName1: '',
  lastname2: ''
}

// Attemp to log in
// Usage: login(params).then(success, failure)
// success will receive an authentication token
// failure will receive an error message
function login(params) {

  return new Promise(
    (resolve, reject) => {
      fetch(API+'/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
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
        .catch(reject);
    });
}

// Attemp to register
// Usage: register(params).then(success, failure)
// success will receive an authentication token
// failure will receive an error message
function register(params) {

  return new Promise(
    (resolve, reject) => {
      fetch(API+'/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
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
        .catch(reject);
    });
}

// Fetch profile info.
// Params must contain a valid authentication token.
// success receives a ProfileInfo-like object
function profile(params) {

  return new Promise(
    (resolve, reject) => {
      fetch(API+'/profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
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
        .catch(reject);
    });
}
