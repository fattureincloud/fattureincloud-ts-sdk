/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { UserApi } from '../../src/api/user-api'
import { GetUserInfoResponse, ListUserCompaniesResponse } from '../../src/models'

const sandbox = require('sinon').createSandbox()

const instance = new UserApi()

const getUserInfoResponse: GetUserInfoResponse = { data: { id: 2, name: 'Mario Rossi', first_name: 'Mario', last_name: 'Rossi', email: 'marior@example.com', picture: null, hash: '5add29e1046432a1bf2ed7b612043029' }, info: { need_password_change: false, need_marketing_consents_confirmation: false, need_terms_of_service_confirmation: false }, email_confirmation_state: { need_confirmation: false } }
sandbox.stub(instance, 'getUserInfo').returns(getUserInfoResponse)

const listUserCompaniesResponse: ListUserCompaniesResponse = { data: { companies: [{ type: 'accountant', id: 12345, name: 'Studio Commercialista', access_token: '4ff5f0fe5abcd1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95', controlled_companies: [{ type: 'company', id: 12246, name: 'Studio Commercialista', access_token: '4ff5f0fe5abcdf1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95', connection_id: 94566.0, tax_code: 'ABCSFN94T17A794K' }, { type: 'company', id: 12347, name: 'Mario Rossi SRL', access_token: '86690c98be13592e78b763c52fab2ba0c22faa118708ca5273da2b4dcdc7ad1234517107266d463fd9ae424a78c16cde', connection_id: 94566.0, tax_code: '57398280214' }], connection_id: 94566, tax_code: 'ABCSFN94T17A794K' }] } }
sandbox.stub(instance, 'listUserCompanies').returns(listUserCompaniesResponse)

// beforeEach(function () {

// })

describe('UserApi', function () {
  describe('getUserInfo', function () {
    it('should call getUserInfo successfully', function (done) {
      const response = instance.getUserInfo()
      const expectedJson = JSON.stringify(getUserInfoResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('listUserCompanies', function () {
    it('should call listUserCompanies successfully', function (done) {
      const response = instance.listUserCompanies()
      const expectedJson = JSON.stringify(listUserCompaniesResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
})
