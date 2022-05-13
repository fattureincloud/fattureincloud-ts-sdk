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
import { Receipt } from '../../src/models'

const instance: Receipt = {
  id: 12345,
  date: '2021-08-20',
  number: 5,
  numeration: 'REC005',
  amount_net: 16.39,
  amount_vat: 3.61,
  amount_gross: 20,
  use_gross_prices: true,
  type: 'sales_receipt',
  description: 'cassa 1',
  rc_center: '',
  created_at: '2021-08-20',
  updated_at: '2021-08-20',
  payment_account: {
    id: 222,
    name: 'carta di credito'
  },
  items_list: [
    {
      id: 666,
      amount_net: 10,
      amount_gross: 12.2,
      category: 'altro',
      vat: {
        id: 0,
        value: 22,
        description: 'iva'
      }
    }
  ]
}

// beforeEach(function () {
// })

describe('Receipt', function () {
  it('should create an instance of Receipt', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property date (base name: "date")', function () {
    expect(instance.date).to.be.a('string')
  })

  it('should have the property number (base name: "number")', function () {
    expect(instance.number).to.be.a('number')
  })

  it('should have the property numeration (base name: "numeration")', function () {
    expect(instance.numeration).to.be.a('string')
  })

  it('should have the property amountNet (base name: "amount_net")', function () {
    expect(instance.amount_net).to.be.a('number')
  })

  it('should have the property amountVat (base name: "amount_vat")', function () {
    expect(instance.amount_vat).to.be.a('number')
  })

  it('should have the property amountGross (base name: "amount_gross")', function () {
    expect(instance.amount_gross).to.be.a('number')
  })

  it('should have the property useGrossPrices (base name: "use_gross_prices")', function () {
    expect(instance.use_gross_prices).to.be.a('boolean')
  })

  it('should have the property type (base name: "type")', function () {
    expect(instance.type).to.be.a('string')
  })

  it('should have the property description (base name: "description")', function () {
    expect(instance.description).to.be.a('string')
  })

  it('should have the property rcCenter (base name: "rc_center")', function () {
    expect(instance.rc_center).to.be.a('string')
  })

  it('should have the property createdAt (base name: "created_at")', function () {
    expect(instance.created_at).to.be.a('string')
  })

  it('should have the property updatedAt (base name: "updated_at")', function () {
    expect(instance.updated_at).to.be.a('string')
  })

  it('should have the property paymentAccount (base name: "payment_account")', function () {
    expect(instance.payment_account).to.be.a('object')
  })

  it('should have the property itemsList (base name: "items_list")', function () {
    expect(instance.items_list).to.be.a('array')
  })
})
