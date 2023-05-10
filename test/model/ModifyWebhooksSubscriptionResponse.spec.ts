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
import { ModifyWebhooksSubscriptionResponse } from '../../src/models'

const instance: ModifyWebhooksSubscriptionResponse = {
  data: {
    id: 'SUB123',
    sink: 'https://endpoint.test',
    verified: true,
    types: ['it.fattureincloud.webhooks.cashbook.create']
  },
  warnings: ['error']
}

// beforeEach(function () {
// })

describe('ModifyWebhooksSubscriptionResponse', function () {
  it('should create an instance of ModifyWebhooksSubscriptionResponse', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('object')
  })

  it('should have the property warnings (base name: "warnings")', function () {
    expect(instance.warnings).to.be.a('array')
  })
})
