import axios from 'axios'

/**
 * A preconfigured axios object
 *
 * @memberof http-common
 * @name HTTP
 */
const HTTP = axios.create({
  baseURL: "http://localhost:4000"
})

/**
 * @module
 */
export {
  HTTP
}
