/**
 * The OAuth2DeviceCodeResponse oauth module.
 * @module oauth2/OAuth2DeviceCodeResponse
 */
export class OAuth2DeviceCodeResponse {
  /**
     * The device code.
     * @member {String} deviceCode
     */
  deviceCode: string

  /**
     * The user code.
     * @member {String} userCode
     */
  userCode: string

  /**
     * The scope.
     * @member {Map<String, String>} scope
     */
  scope: Map<string, string>

  /**
     * The verification uri.
     * @member {String} verificationUri
     */
  verificationUri: string

  /**
     * The interval.
     * @member {Number} interval
     */
  interval: number

  /**
     * The expire time.
     * @member {Number} expiresIn
     */
  expiresIn: number

  /**
     * Constructs a new <code>OAuth2DeviceCodeResponse</code>.
     * @param {String} deviceCode The device code.
     * @param {String} userCode The user code.
     * @param {Maop<String, String>} scope The scope.
     * @param {String} verificationUri The verification uri.
     * @param {Number} interval The interval.
     * @param {Number} expiresIn The expire time.
     */
  constructor (deviceCode: string, userCode: string, scope: Map<string, string>, verificationUri: string, interval: number, expiresIn: number) {
    this.deviceCode = deviceCode
    this.userCode = userCode
    this.scope = scope
    this.verificationUri = verificationUri
    this.interval = interval
    this.expiresIn = expiresIn
  }
}
