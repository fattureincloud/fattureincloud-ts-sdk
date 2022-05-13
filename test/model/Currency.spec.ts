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
import { Currency } from '../../src/models'

const instance: Currency = {
  id: 'EUR',
  symbol: '€',
  html_symbol: '&euro;',
  exchange_rate: '1.00000'
}

// beforeEach(function () {
// })

describe('Currency', function () {
  it('should create an instance of Currency', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('string')
  })

  it('should have the property symbol (base name: "symbol")', function () {
    expect(instance.symbol).to.be.a('string')
  })

  it('should have the property exchangeRate (base name: "exchange_rate")', function () {
    expect(instance.exchange_rate).to.be.a('string')
  })

  it('should have the property htmlSymbol (base name: "html_symbol")', function () {
    expect(instance.html_symbol).to.be.a('string')
  })
})
