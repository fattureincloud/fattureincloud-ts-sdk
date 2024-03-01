/**
 * The OAuth2TokenResponse oauth module.
 * @module oauth2/OAuth2TokenResponse
 */
export class OAuth2TokenResponse {
  /**
     * The token type.
     * @member {String} tokenType
     */
  tokenType: string

  /**
     * The access token.
     * @member {String} accessToken
     */
  accessToken: string

  /**
     * The refresh token.
     * @member {String} refreshToken
     */
  refreshToken: string

  /**
     * The expire time.
     * @member {String} expiresIn
     */
  expiresIn: number

  /**
     * Constructs a new <code>OAuth2TokenResponse</code>.
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
