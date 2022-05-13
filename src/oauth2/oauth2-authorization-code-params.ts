/**
 * The OAuth2AuthorizationCodeParams oauth module.
 * @module oauth2/OAuth2AuthorizationCodeParams
 */
export class OAuth2AuthorizationCodeParams {
  /**
     * The authorization code.
     * @member {String} authorizationCode
     */
  authorizationCode: string

  /**
     * The state.
     * @member {String} state
     */
  state: string

  /**
     * Constructs a new <code>OAuth2AuthorizationCodeParams</code>.
     * @param {String} authorizationCode The authorization code.
     * @param {String} state The state.
     */
  constructor (authorizationCode: string, state: string) {
    this.authorizationCode = authorizationCode
    this.state = state
  }
}
