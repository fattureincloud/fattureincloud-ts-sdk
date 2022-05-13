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
import { ListF24Response } from '../../src/models'

const instance: ListF24Response = {
  current_page: 2,
  first_page_url: 'page=1',
  from: 1,
  last_page: 3,
  last_page_url: 'page=3',
  next_page_url: 'page=3',
  path: '/archive',
  per_page: 50,
  prev_page_url: 'page=1',
  to: 3,
  total: 155,
  data: [
    {
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
    },
    {
      id: 12346,
      amount: 810.62,
      description: 'PAGAMENTO IVA 2020',
      due_date: '2020-12-31',
      status: 'paid',
      payment_account: {
        id: 111,
        name: 'Indesa - carta conto'
      },
      attachment_url: 'bb6df8490dad4770353b378ea926d8ba.pdf'
    }
  ],
  aggregated_data: {
    amount: 6438.96
  }
}

// beforeEach(function () {
// })

describe('ListF24Response', function () {
  it('should create an instance of ListF24Response', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property currentPage (base name: "current_page")', function () {
    expect(instance.current_page).to.be.a('number')
  })

  it('should have the property firstPageUrl (base name: "first_page_url")', function () {
    expect(instance.first_page_url).to.be.a('string')
  })

  it('should have the property from (base name: "from")', function () {
    expect(instance.from).to.be.a('number')
  })

  it('should have the property lastPage (base name: "last_page")', function () {
    expect(instance.last_page).to.be.a('number')
  })

  it('should have the property lastPageUrl (base name: "last_page_url")', function () {
    expect(instance.last_page_url).to.be.a('string')
  })

  it('should have the property nextPageUrl (base name: "next_page_url")', function () {
    expect(instance.next_page_url).to.be.a('string')
  })

  it('should have the property path (base name: "path")', function () {
    expect(instance.path).to.be.a('string')
  })

  it('should have the property perPage (base name: "per_page")', function () {
    expect(instance.per_page).to.be.a('number')
  })

  it('should have the property prevPageUrl (base name: "prev_page_url")', function () {
    expect(instance.prev_page_url).to.be.a('string')
  })

  it('should have the property to (base name: "to")', function () {
    expect(instance.to).to.be.a('number')
  })

  it('should have the property total (base name: "total")', function () {
    expect(instance.total).to.be.a('number')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('array')
  })
})
