/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { Client } from '../../src/models'

const instance: Client = {
  type: 'company'
}

// beforeEach(function () {
// })

describe('ClientType', function () {
  it('should create an instance of ClientType', function () {
    expect(instance.type).to.be.a('string')
  })
})
