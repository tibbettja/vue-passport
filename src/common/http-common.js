import axios from 'axios'

/**
 * A preconfigured axios object
 *
 * @memberof http-common
 * @name HTTP
 */
const HTTP = axios.create({
  baseURL: 'http://localhost:8081/api',
  withCredentials: true
})

/**
 * @module
 */
export {
  HTTP
}
