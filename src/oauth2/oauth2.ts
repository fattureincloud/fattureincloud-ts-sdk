import axios from 'axios'
import { Scope } from './scope'

/**
 * The OAuth2Manager oauth module.
 * @module oauth2/OAuth2Manager
 */
export class OAuth2Manager {
  /**
     * The client id.
     * @member {String} clientId
     */
  clientId: string

  /**
     * The base uri.
     * @member {String} baseUri
     */
  baseUri = 'https://api-v2.fattureincloud.it'

  /**
     * Constructs a new <code>OAuth2Manager</code>.
     * @param {String} clientId The client id.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId: string, baseUri = 'https://api-v2.fattureincloud.it') {
    this.clientId = clientId
    this.baseUri = baseUri
  }

  executePost<T = unknown> (uri: string, data: object) {
    return axios.post<T>(uri, data)
      .then(({ data }) => data)
      .catch(e => { throw new Error(`${e.response.data.error}: ${e.response.data.error_description}`) })
  }

  static getScopeString (scopes: Array<Scope>) {
    return scopes.map(scope => scope.toString()).join(' ')
  }
}
