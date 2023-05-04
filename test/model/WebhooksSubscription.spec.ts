/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.27
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import { expect } from 'chai'
import { WebhooksSubscription } from '../../src/models'

const instance: WebhooksSubscription = {
  id: 'SUB123',
  sink: 'https://endpoint.test',
  verified: true,
  types: ['it.fattureincloud.cashbook.create']
}

// beforeEach(function () {
// })

describe('WebhooksSubscription', function () {
  it('should create an instance of WebhooksSubscription', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('string')
  })

  it('should have the property sink (base name: "sink")', function () {
    expect(instance.sink).to.be.a('string')
  })

  it('should have the property verified (base name: "verified")', function () {
    expect(instance.verified).to.be.a('boolean')
  })

  it('should have the property types (base name: "types")', function () {
    expect(instance.types).to.be.a('array')
  })
})
