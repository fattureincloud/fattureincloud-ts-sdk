/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { ReceivedDocumentPaymentsListItem } from '../../src/models'

const instance: ReceivedDocumentPaymentsListItem = {
  amount: 592,
  due_date: '2021-08-15',
  paid_date: '2021-08-15',
  id: 777,
  payment_terms: {
    days: 0,
    type: 'standard'
  },
  status: 'paid',
  payment_account: {
    id: 222,
    name: 'Contanti',
    virtual: false
  }
}

// beforeEach(function () {
// })

describe('ReceivedDocumentPaymentsList', function () {
  it('should create an instance of ReceivedDocumentPaymentsListItem', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property amount (base name: "amount")', function () {
    expect(instance.amount).to.be.a('number')
  })

  it('should have the property dueDate (base name: "due_date")', function () {
    expect(instance.due_date).to.be.a('string')
  })

  it('should have the property paidDate (base name: "paid_date")', function () {
    expect(instance.paid_date).to.be.a('string')
  })

  it('should have the property paymentTerms (base name: "payment_terms")', function () {
    expect(instance.payment_terms).to.be.a('object')
  })

  it('should have the property status (base name: "status")', function () {
    expect(instance.status).to.be.a('string')
  })

  it('should have the property paymentAccount (base name: "payment_account")', function () {
    expect(instance.payment_account).to.be.a('object')
  })
})
