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
import { VerifyEInvoiceXmlErrorResponseError } from '../../src/models'

const instance: VerifyEInvoiceXmlErrorResponseError = {
  message: 'something went wrong',
  validation_result: {
    xml_errors: ["err", "or"]
  }
}

// beforeEach(function () {
// })

describe('VerifyEInvoiceXmlErrorResponseError', function () {
  it('should create an instance of VerifyEInvoiceXmlErrorResponseError', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property message (base name: "message")', function () {
    expect(instance.message).to.be.a('string')
  })

  it('should have the property validationResult (base name: "validation_result")', function () {
    expect(instance.validation_result).to.be.a('object')
  })
})
