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
import { CompanyInfoPlanInfoFunctions } from '../../src/models'

const instance: CompanyInfoPlanInfoFunctions = {
  document_attachments: true,
  archive: true,
  payment_notifications: true,
  paypal: true,
  receipts: true,
  e_invoice: true,
  genius: true,
  stock: true,
  smtp: true,
  mail_tracking: true,
  subaccounts: true,
  tessera_sanitaria: true,
  recurring: true,
  sofort: false,
  cerved: true,
  ts_digital: true,
  ts_pay: true,
  ts_invoice_trading: true
}

// beforeEach(function () {
// })

describe('CompanyInfoPlanInfoFunctions', function () {
  it('should create an instance of CompanyInfoPlanInfoFunctions', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property archive (base name: "archive")', function () {
    expect(instance.archive).to.be.a('boolean')
  })

  it('should have the property cerved (base name: "cerved")', function () {
    expect(instance.cerved).to.be.a('boolean')
  })

  it('should have the property documentAttachments (base name: "document_attachments")', function () {
    expect(instance.document_attachments).to.be.a('boolean')
  })

  it('should have the property eInvoice (base name: "e_invoice")', function () {
    expect(instance.e_invoice).to.be.a('boolean')
  })

  it('should have the property genius (base name: "genius")', function () {
    expect(instance.genius).to.be.a('boolean')
  })

  it('should have the property mailTracking (base name: "mail_tracking")', function () {
    expect(instance.mail_tracking).to.be.a('boolean')
  })

  it('should have the property paymentNotifications (base name: "payment_notifications")', function () {
    expect(instance.payment_notifications).to.be.a('boolean')
  })

  it('should have the property paypal (base name: "paypal")', function () {
    expect(instance.paypal).to.be.a('boolean')
  })

  it('should have the property receipts (base name: "receipts")', function () {
    expect(instance.receipts).to.be.a('boolean')
  })

  it('should have the property recurring (base name: "recurring")', function () {
    expect(instance.recurring).to.be.a('boolean')
  })

  it('should have the property smtp (base name: "smtp")', function () {
    expect(instance.smtp).to.be.a('boolean')
  })

  it('should have the property sofort (base name: "sofort")', function () {
    expect(instance.sofort).to.be.a('boolean')
  })

  it('should have the property stock (base name: "stock")', function () {
    expect(instance.stock).to.be.a('boolean')
  })

  it('should have the property subaccounts (base name: "subaccounts")', function () {
    expect(instance.subaccounts).to.be.a('boolean')
  })

  it('should have the property tesseraSanitaria (base name: "tessera_sanitaria")', function () {
    expect(instance.tessera_sanitaria).to.be.a('boolean')
  })

  it('should have the property tsDigital (base name: "ts_digital")', function () {
    expect(instance.ts_digital).to.be.a('boolean')
  })

  it('should have the property tsInvoiceTrading (base name: "ts_invoice_trading")', function () {
    expect(instance.ts_invoice_trading).to.be.a('boolean')
  })

  it('should have the property tsPay (base name: "ts_pay")', function () {
    expect(instance.ts_pay).to.be.a('boolean')
  })
})
