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
import { DocumentTemplate } from '../../src/models'

const instance: DocumentTemplate = {
  id: 10,
  name: 'New Standard S1',
  type: ''
}

// beforeEach(function () {
// })

describe('DocumentTemplate', function () {
  it('should create an instance of DocumentTemplate', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property name (base name: "name")', function () {
    expect(instance.name).to.be.a('string')
  })

  it('should have the property type (base name: "type")', function () {
    expect(instance.type).to.be.a('string')
  })
})
