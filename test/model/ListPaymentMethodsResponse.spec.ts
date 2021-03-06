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
import { ListPaymentMethodsResponse } from '../../src/models'

const instance: ListPaymentMethodsResponse = {
  data: [
    {
      id: 21,
      name: 'Indesa - Carta conto',
      type: 'riba',
      bank_iban: null
    },
    {
      id: 109,
      name: 'Indesa',
      type: 'riba',
      bank_iban: 'IT17A1234563200000003498936'
    }
  ]
}

// beforeEach(function () {
// })

describe('ListPaymentMethodsResponse', function () {
  it('should create an instance of ListPaymentMethodsResponse', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('array')
  })
})
