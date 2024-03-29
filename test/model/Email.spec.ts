/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { Email } from '../../src/models'

const instance: Email = {}
instance.id = 1
instance.status = 'sent'
instance.sent_date = new Date(2022, 7, 17, 13, 53, 12).toString()
instance.errors_count = 0
instance.error_log = ''
instance.from_email = 'test@mail.it'
instance.from_name = 'Test mail'
instance.to_email = 'mail@test.it'
instance.to_name = 'Mario'
instance.subject = 'Test'
instance.content = 'Test send email'
instance.copy_to = ''
instance.recipient_status = 'unknown'
instance.recipient_date = new Date(2022, 7, 17, 13, 53, 12).toString()
instance.kind = 'Fatture'
instance.attachments = []

// beforeEach(function () {
// })

describe('Email', function () {
  it('should create an instance of Email', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property status (base name: "status")', function () {
    expect(instance.status).to.be.a('string')
  })

  it('should have the property sentDate (base name: "sent_date")', function () {
    expect(instance.sent_date).to.be.a('string')
  })

  it('should have the property errorsCount (base name: "errors_count")', function () {
    expect(instance.errors_count).to.be.a('number')
  })

  it('should have the property errorLog (base name: "error_log")', function () {
    expect(instance.error_log).to.be.a('string')
  })

  it('should have the property fromEmail (base name: "from_email")', function () {
    expect(instance.from_email).to.be.a('string')
  })

  it('should have the property fromName (base name: "from_name")', function () {
    expect(instance.from_name).to.be.a('string')
  })

  it('should have the property toEmail (base name: "to_email")', function () {
    expect(instance.to_email).to.be.a('string')
  })

  it('should have the property toName (base name: "to_name")', function () {
    expect(instance.to_name).to.be.a('string')
  })

  it('should have the property subject (base name: "subject")', function () {
    expect(instance.subject).to.be.a('string')
  })

  it('should have the property content (base name: "content")', function () {
    expect(instance.content).to.be.a('string')
  })

  it('should have the property copyTo (base name: "copy_to")', function () {
    expect(instance.copy_to).to.be.a('string')
  })

  it('should have the property recipientStatus (base name: "recipient_status")', function () {
    expect(instance.recipient_status).to.be.a('string')
  })

  it('should have the property recipientDate (base name: "recipient_date")', function () {
    expect(instance.recipient_date).to.be.a('string')
  })

  it('should have the property kind (base name: "kind")', function () {
    expect(instance.kind).to.be.a('string')
  })

  it('should have the property attachments (base name: "attachments")', function () {
    expect(instance.attachments).to.be.a('array')
  })
})
