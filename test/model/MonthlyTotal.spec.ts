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
import { MonthlyTotal } from '../../src/models'

const instance: MonthlyTotal = {
  net: 12345,
  gross: 654,
  count: 98
}

// beforeEach(function () {
// })

describe('MonthlyTotal', function () {
  it('should create an instance of MonthlyTotal', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property net (base name: "net")', function () {
    expect(instance.net).to.be.a('number')
  })

  it('should have the property gross (base name: "gross")', function () {
    expect(instance.gross).to.be.a('number')
  })

  it('should have the property count (base name: "count")', function () {
    expect(instance.count).to.be.a('number')
  })
})
