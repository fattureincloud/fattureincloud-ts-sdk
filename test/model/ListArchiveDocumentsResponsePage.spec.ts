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
import { ListArchiveDocumentsResponsePage } from '../../src/models'

const instance: ListArchiveDocumentsResponsePage = {
  data: [
    {
      id: 12345,
      date: '2021-08-20',
      category: 'Altri documenti',
      description: 'spesa 2',
      attachment_url: 'spesa2.pdf'
    },
    {
      id: 12346,
      date: '2021-08-19',
      category: 'Altri documenti',
      description: 'spesa 1',
      attachment_url: 'spesa1.pdf'
    }
  ]
}

// beforeEach(function () {
// })

describe('ListArchiveDocumentsResponsePage', function () {
  it('should create an instance of ListArchiveDocumentsResponsePage', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('array')
  })
})
