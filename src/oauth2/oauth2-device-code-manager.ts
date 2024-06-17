import { Scope } from './scope'
import { OAuth2Manager } from './oauth2'
import { OAuth2DeviceCodeResponse } from './oauth2-device-code-response'
import { OAuth2TokenResponse } from './oauth2-token-response'

/**
 * The OAuth2DeviceCodeManager oauth module.
 * @module oauth2/OAuth2DeviceCodeManager
 */
export class OAuth2DeviceCodeManager extends OAuth2Manager {
  /**
     * Constructs a new <code>OAuth2DeviceCodeManager</code>.
     * @param {String} clientId The client id.
     * @param {String} baseUri The base uri.
     */
  constructor (clientId: string, baseUri = 'https://api-v2.fattureincloud.it') {
    super(clientId, baseUri)
  }

  getDeviceCode (scopes: Array<Scope>) {
    const tokenUri = `${this.baseUri}/oauth/device`
    const scopeStr = OAuth2Manager.getScopeString(scopes)

    const data = {
      client_id: this.clientId,
      scope: scopeStr
    }

    return this.executePost<{data:{device_code: string, user_code:string, scope: Map<string, string>, verification_uri: string, interval: number, expires_in: number}}>(tokenUri, data)
      .then((data) => new OAuth2DeviceCodeResponse(data.data.device_code, data.data.user_code, data.data.scope, data.data.verification_uri, data.data.interval, data.data.expires_in))
      .catch(e => { throw new Error(`${e.response.data.error}: ${e.response.data.error_description}`) })
  }

  fetchToken (code: string) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      client_id: this.clientId,
      device_code: code
    }

    return this.executePost<{token_type: string, access_token: string, refresh_token: string, expires_in: number}>(tokenUri, data)
      .then((data) => new OAuth2TokenResponse(data.token_type, data.access_token, data.refresh_token, data.expires_in))
      .catch(e => { throw new Error(`${e.response.data.error}: ${e.response.data.error_description}`) })
  }

  refreshToken (refreshToken: string) {
    const tokenUri = `${this.baseUri}/oauth/token`

    const data = {
      grant_type: 'refresh_token',
      client_id: this.clientId,
      refresh_token: refreshToken
    }

    return this.executePost<{token_type: string, access_token: string, refresh_token: string, expires_in: number}>(tokenUri, data)
      .then((data) => new OAuth2TokenResponse(data.token_type, data.access_token, data.refresh_token, data.expires_in))
      .catch(e => { throw new Error(`${e.response.data.error}: ${e.response.data.error_description}`) })
  }
}
