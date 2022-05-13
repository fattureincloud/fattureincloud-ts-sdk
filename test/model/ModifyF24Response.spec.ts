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
import { ModifyF24Response } from '../../src/models'

const instance: ModifyF24Response = {
  data: {
    id: 12345,
    amount: 840.36,
    description: 'PAGAMENTO IVA 2021',
    due_date: '2021-12-31',
    status: 'paid',
    payment_account: {
      id: 111,
      name: 'Indesa - carta conto'
    },
    attachment_url: 'b19c01da9b1688fb73d0d9e8adae89a8.pdf'
  }
}

// beforeEach(function () {
// })

describe('ModifyF24Response', function () {
  it('should create an instance of ModifyF24Response', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('object')
  })
})
