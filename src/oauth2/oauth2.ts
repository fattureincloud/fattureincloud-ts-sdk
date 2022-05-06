import axios from 'axios';
import { OAuth2AuthorizationCodeParams } from "./oauth2-authorization-code-params";
import { OAuth2AuthorizationCodeTokenResponse } from "./oauth2-authorization-code-token-response";
import { Scope } from './scope';

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
    baseUri: string = 'https://api-v2.fattureincloud.it'

    /**
     * Constructs a new <code>OAuth2AuthorizationCodeManager</code>.
     * @param {String} clientId The client id.
     * @param {String} clientSecret The client secret.
     * @param {String} redirectUri The redirect uri.
     * @param {String} baseUri The base uri.
     */
    constructor(clientId: string, clientSecret: string, redirectUri: string, baseUri: string = 'https://api-v2.fattureincloud.it') {
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
    getAuthorizationUrl(scopes: Array<Scope>, state: string) {

        var authorizationUri = `${this.baseUri}/oauth/authorize`
        var scopeStr = OAuth2AuthorizationCodeManager.getScopeString(scopes)

        var params = {
            response_type: 'code',
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            scope: scopeStr,
            state: state
        }
        var query = new URLSearchParams(params).toString()

        return `${authorizationUri}?${query}`
    }

    getParamsFromUrl(url: string) {
        var query = url.split('?')[1];
        var params = new URLSearchParams(query);

        return new OAuth2AuthorizationCodeParams(params.get('code'), params.get('state'))
    }

    fetchToken(code: string) {
        var tokenUri = `${this.baseUri}/oauth/token`

        var data = {
            grant_type: 'authorization_code',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUri,
            code: code
        }

        var res = this.tokenRequest(tokenUri, data)
        return res
    }

    refreshToken(refreshToken: string) {
        var tokenUri = `${this.baseUri}/oauth/token`

        var data = {
            grant_type: 'refresh_token',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken
        }

        return this.tokenRequest(tokenUri, data)
    }

    tokenRequest(uri: string, data: object) {
        return axios.post<OAuth2AuthorizationCodeTokenResponse>(uri, data)
            .then((d) => d.data)
            .catch(e => { throw new Error(e.response.data) })
    }

    static getScopeString(scopes: Array<Scope>) {
        return scopes.map(scope => scope.toString()).join(' ');
    }

}