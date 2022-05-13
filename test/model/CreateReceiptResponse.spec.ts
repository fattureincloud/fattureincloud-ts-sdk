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
import { CreateReceiptResponse } from '../../src/models'

const instance: CreateReceiptResponse = {
  data: {
    id: 12346,
    date: '2021-08-19',
    number: 6,
    numeration: 'REC006',
    amount_net: 8.2,
    amount_vat: 1.8,
    amount_gross: 10,
    use_gross_prices: true,
    type: 'sales_receipt',
    description: 'cassa 1',
    rc_center: '',
    created_at: '2021-08-19',
    updated_at: '2021-08-19',
    payment_account: {
      id: 555,
      name: 'contanti'
    },
    items_list: [
      {
        id: 888,
        amount_net: 8.2,
        amount_gross: 10,
        category: 'altro',
        vat: {
          id: 0,
          value: 22,
          description: 'iva'
        }
      }
    ]
  }
}

// beforeEach(function () {
// })

describe('CreateReceiptResponse', function () {
  it('should create an instance of CreateReceiptResponse', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('object')
  })
})
