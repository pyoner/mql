'use strict'

const urlHttp = require('url-http/lightweight')
const { flattie: flatten } = require('flattie')
const factory = require('./factory')
const { default: ky } = require('ky')

class MicrolinkError extends Error {
  constructor (props) {
    super()
    this.name = 'MicrolinkError'
    Object.assign(this, props)
    this.description = this.message
    this.message = this.code
      ? `${this.code}, ${this.description}`
      : this.description
  }
}

const got = async (url, opts) => {
  try {
    if (opts.retry > 0) opts.retry = opts.retry + 1
    if (opts.timeout === undefined) opts.timeout = false
    const response = await ky(url, opts)
    const body = await response.json()
    const { headers, status: statusCode } = response
    return { url: response.url, body, headers, statusCode }
  } catch (err) {
    if (err.response) {
      const { response } = err
      err.response = {
        ...response,
        headers: Array.from(response.headers.entries()).reduce(
          (acc, [key, value]) => {
            acc[key] = value
            return acc
          },
          {}
        ),
        statusCode: response.status,
        body: await response.text()
      }
    }
    throw err
  }
}

const mql = factory({
  MicrolinkError,
  urlHttp,
  got,
  flatten,
  VERSION: '__MQL_VERSION__'
})

module.exports = mql
module.exports.MicrolinkError = mql.MicrolinkError
module.exports.getApiUrl = mql.getApiUrl
module.exports.mapRules = mql.mapRules
module.exports.version = mql.version
