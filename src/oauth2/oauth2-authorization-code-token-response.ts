/**
 * The OAuth2AuthorizationCodeTokenResponse oauth module.
 * @module oauth2/OAuth2AuthorizationCodeTokenResponse
 */
export class OAuth2AuthorizationCodeTokenResponse {
  /**
     * The client id.
     * @member {String} tokenType
     */
  tokenType: string

  /**
     * The client secret.
     * @member {String} accessToken
     */
  accessToken: string

  /**
     * The redirect uri.
     * @member {String} refreshToken
     */
  refreshToken: string

  /**
     * The expire time.
     * @member {String} expiresIn
     */
  expiresIn: number

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeTokenResponse</code>.
     * @param {String} tokenType The token type.
     * @param {String} accessToken The access token.
     * @param {String} refreshToken The refresh token.
     * @param {Number} expiresIn The expire time.
     */
  constructor (tokenType: string, accessToken: string, refreshToken: string, expiresIn: number) {
    this.tokenType = tokenType
    this.accessToken = accessToken
    this.refreshToken = refreshToken
    this.expiresIn = expiresIn
  }
}
