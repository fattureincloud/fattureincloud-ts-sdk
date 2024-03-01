import { expect } from 'chai'
import { OAuth2AuthorizationCodeManager } from '../../src/oauth2/oauth2-authorization-code-manager'
import { OAuth2AuthorizationCodeParams } from '../../src/oauth2/oauth2-authorization-code-params'
import { OAuth2TokenResponse } from '../../src/oauth2/oauth2-token-response'
import { Scope } from '../../src/oauth2/scope'
import { OAuth2DeviceCodeManager } from '../../src/oauth2/oauth2-device-code-manager'
import { OAuth2DeviceCodeResponse } from '../../src/oauth2/oauth2-device-code-response'

let oauth: OAuth2AuthorizationCodeManager
let device: OAuth2DeviceCodeManager
beforeEach(function () {
  oauth = new OAuth2AuthorizationCodeManager('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:3000/redirect')
  device = new OAuth2DeviceCodeManager('CLIENT_ID')
})

describe('test Oauth class', function () {
  it('should create an instance of OAuth2AuthorizationCodeManager', function () {
    expect(oauth.clientId).to.equal('CLIENT_ID')
    expect(oauth.clientSecret).to.equal('CLIENT_SECRET')
    expect(oauth.redirectUri).to.equal('http://localhost:3000/redirect')
    expect(oauth.baseUri).to.equal('https://api-v2.fattureincloud.it')

    oauth.clientId = 'CLIENT_ID_2'
    expect(oauth.clientId).to.equal('CLIENT_ID_2')
    oauth.clientSecret = 'CLIENT_SECRET_2'
    expect(oauth.clientSecret).to.equal('CLIENT_SECRET_2')
    oauth.redirectUri = 'http://localhost:3000/redirect_2'
    expect(oauth.redirectUri).to.equal('http://localhost:3000/redirect_2')
    oauth.baseUri = 'https://api-v2.fattureincloud.it_2'
    expect(oauth.baseUri).to.equal('https://api-v2.fattureincloud.it_2')
  })

  it('should create an instance of OAuth2DeviceCodeManager', function () {
    expect(device.clientId).to.equal('CLIENT_ID')
    expect(device.baseUri).to.equal('https://api-v2.fattureincloud.it')

    oauth.clientId = 'NATI'
    expect(oauth.clientId).to.equal('NATI')
    oauth.baseUri = 'https://api-v2.fattureincloud.it/lion'
    expect(oauth.baseUri).to.equal('https://api-v2.fattureincloud.it/lion')
  })

  it('should create an instance of OAuth2AuthorizationCodeParams', function () {
    const params = new OAuth2AuthorizationCodeParams('EXAMPLE_CODE', 'EXAMPLE_STATE')
    expect(params.authorizationCode).to.equal('EXAMPLE_CODE')
    expect(params.state).to.equal('EXAMPLE_STATE')

    params.authorizationCode = 'EXAMPLE_CODE_2'
    expect(params.authorizationCode).to.equal('EXAMPLE_CODE_2')
    params.state = 'EXAMPLE_STATE_2'
    expect(params.state).to.equal('EXAMPLE_STATE_2')
  })

  it('should create an instance of OAuth2TokenResponse', function () {
    const params = new OAuth2TokenResponse('bearer', 'EXAMPLE_ACCESS_TOKEN', 'EXAMPLE_REFRESH_TOKEN', 86400)
    expect(params.tokenType).to.equal('bearer')
    expect(params.accessToken).to.equal('EXAMPLE_ACCESS_TOKEN')
    expect(params.refreshToken).to.equal('EXAMPLE_REFRESH_TOKEN')
    expect(params.expiresIn).to.equal(86400)

    params.tokenType = 'basic'
    expect(params.tokenType).to.equal('basic')
    params.accessToken = 'EXAMPLE_ACCESS_TOKEN_2'
    expect(params.accessToken).to.equal('EXAMPLE_ACCESS_TOKEN_2')
    params.refreshToken = 'EXAMPLE_REFRESH_TOKEN_2'
    expect(params.refreshToken).to.equal('EXAMPLE_REFRESH_TOKEN_2')
    params.expiresIn = 86401
    expect(params.expiresIn).to.equal(86401)
  })

  it('should create an instance of OAuth2DeviceCodeResponse', function () {
    const scope = new Map<string, string>()
    scope.set('situation', 'r')
    scope.set('settings', 'a')
    const params = new OAuth2DeviceCodeResponse('PAPAYA', 'LION', scope, 'https://fattureincloud.it/connetti', 5, 300)
    expect(params.deviceCode).to.equal('PAPAYA')
    expect(params.userCode).to.equal('LION')
    expect(params.scope).to.equal(scope)
    expect(params.verificationUri).to.equal('https://fattureincloud.it/connetti')
    expect(params.interval).to.equal(5)
    expect(params.expiresIn).to.equal(300)

    const scope2 = new Map<string, string>()
    scope.set('situation', 'r')
    params.deviceCode = 'MANGO'
    expect(params.deviceCode).to.equal('MANGO')
    params.userCode = 'TEDDY-BEAR'
    expect(params.userCode).to.equal('TEDDY-BEAR')
    params.scope = scope2
    expect(params.scope).to.equal(scope2)
    params.verificationUri = 'https://fattureincloud.it/filandia'
    expect(params.verificationUri).to.equal('https://fattureincloud.it/filandia')
    params.interval = 69
    expect(params.interval).to.equal(69)
    params.expiresIn = 86401
    expect(params.expiresIn).to.equal(86401)
  })

  it('test method "getScopeString"', function () {
    const scopes = [
      Scope.ENTITY_SUPPLIERS_READ,
      Scope.ISSUED_DOCUMENTS_INVOICES_READ
    ]

    const scopeStr = OAuth2AuthorizationCodeManager.getScopeString(scopes)
    expect(scopeStr).to.equal('entity.suppliers:r issued_documents.invoices:r')
  })

  it('test method "getAuthorizationUrl"', function () {
    const scopes = [
      Scope.SETTINGS_ALL,
      Scope.ISSUED_DOCUMENTS_INVOICES_READ
    ]

    const url = oauth.getAuthorizationUrl(scopes, 'EXAMPLE_STATE')
    expect(url).to.equal('https://api-v2.fattureincloud.it/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=settings%3Aa+issued_documents.invoices%3Ar&state=EXAMPLE_STATE')
  })
})
