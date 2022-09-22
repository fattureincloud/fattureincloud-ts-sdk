import axios from 'axios'
import { OAuth2AuthorizationCodeParams } from './oauth2-authorization-code-params'
import { OAuth2AuthorizationCodeTokenResponse } from './oauth2-authorization-code-token-response'
import { Scope } from './scope'

/**
 * The OAuth2AuthorizationCodeManager oauth module.
 * @module oauth2/OAuth2AuthorizationCodeManager
 */
export class OAuth2AuthorizationCodeManager {
  /**
     * The client id.
     * @member {String} clientId
     */
  clientId: string

  /**
     * The client secret.
     * @member {String} clientSecret
     */
  clientSecret: string

  /**
     * The redirect uri.
     * @member {String} redirectUri
     */
  redirectUri: string

  /**
     * The base uri.
     * @member {String} baseUri
     */
  baseUri = 'https://api-v2.fattureincloud.it'

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeManager</code>.
     * @param {String} clientId The client id.
     * @param {String} clientSecret The client secret.
     * @param {String} redirectUri The redirect uri.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId: string, clientSecret: string, redirectUri: string, baseUri = 'https://api-v2.fattureincloud.it') {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.redirectUri = redirectUri
    this.baseUri = baseUri
  }

  /**
     * Get the authorization url.
     * @param {Array.<oauth2/Scope>} scopes The scopes.
     * @return {String} The query.
     */
  getAuthorizationUrl (scopes: Array<Scope>, state: string) {
    const authorizationUri = `${this.baseUri}/oauth/authorize`
    const scopeStr = OAuth2AuthorizationCodeManager.getScopeString(scopes)

    const params = {
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: scopeStr,
      state
    }
    const query = new URLSearchParams(params).toString()

    return `${authorizationUri}?${query}`
  }

  getParamsFromUrl (url: string) {
    const query = url.split('?')[1]
    const params = new URLSearchParams(query)

    return new OAuth2AuthorizationCodeParams(params.get('code'), params.get('state'))
  }

  fetchToken (code: string) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'authorization_code',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      code
    }

    const res = this.tokenRequest(tokenUri, data)
    return res
  }

  refreshToken (refreshToken: string) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'refresh_token',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken
    }

    return this.tokenRequest(tokenUri, data)
  }

  tokenRequest (uri: string, data: object) {
    return axios.post<{token_type: string, access_token: string, refresh_token: string, expires_in: number}>(uri, data)
      .then(({ data }) => new OAuth2AuthorizationCodeTokenResponse(data.token_type, data.access_token, data.refresh_token, data.expires_in))
      .catch(e => { throw new Error(`${e.response.data.error}: ${e.response.data.error_description}`) })
  }

  static getScopeString (scopes: Array<Scope>) {
    return scopes.map(scope => scope.toString()).join(' ')
  }
}
