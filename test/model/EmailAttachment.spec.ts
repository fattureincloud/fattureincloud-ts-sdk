/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { EmailAttachment } from '../../src/models'

const instance: EmailAttachment = {}
instance.filename = 'say my name'
instance.url = 'www.jjj.com'

// beforeEach(function () {
// })

describe('EmailAttachment', function () {
  it('should create an instance of EmailAttachment', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property filename (base name: "filename")', function () {
    expect(instance.filename).to.be.a('string')
  })

  it('should have the property url (base name: "url")', function () {
    expect(instance.url).to.be.a('string')
  })
})
