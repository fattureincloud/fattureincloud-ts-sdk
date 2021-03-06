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
import { CashbookApi } from '../../src/api/cashbook-api'
import { CreateCashbookEntryRequest, CreateCashbookEntryResponse, GetCashbookEntryResponse, ListCashbookEntriesResponse, ModifyCashbookEntryResponse } from '../../src/models'

const sandbox = require('sinon').createSandbox()

const instance = new CashbookApi()

const createCashbookEntryResponseObj: CreateCashbookEntryResponse = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
const createCashbookEntryStub = sandbox.stub(instance, 'createCashbookEntry').returns(createCashbookEntryResponseObj)

const deleteCashbookEntryResponseObj = {}
sandbox.stub(instance, 'deleteCashbookEntry').returns(deleteCashbookEntryResponseObj)

const getCashbookEntryResponseObj: GetCashbookEntryResponse = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
sandbox.stub(instance, 'getCashbookEntry').returns(getCashbookEntryResponseObj)

const modifyCashbookEntryResponseObj: ModifyCashbookEntryResponse = { data: { date: '2021-08-24', amount_out: 122, payment_account_out: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'out' } }
sandbox.stub(instance, 'modifyCashbookEntry').returns(modifyCashbookEntryResponseObj)

const listCashbookEntriesResponseObj: ListCashbookEntriesResponse = { data: [{ date: '2021-08-24', amount_in: 122, payment_account_in: { id: 333 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'in' }, { date: '2021-08-29', amount_out: 211, payment_account_out: { id: 444 }, description: 'Fattura n. 202/2021', entity_name: 'Red S.r.l.', kind: 'issued_document', document: { id: 12345 }, type: 'out' }] }
sandbox.stub(instance, 'listCashbookEntries').returns(listCashbookEntriesResponseObj)

// beforeEach(function () {

// })

describe('CashbookApi', function () {
  describe('createCashbookEntry', function () {
    it('should call createCashbookEntry successfully', function (done) {
      const opts: CreateCashbookEntryRequest = { data: { date: '2021-08-24', amount_in: 122, payment_account_in: { id: 21 }, description: 'Fattura n. 201/2021', entity_name: 'Rossi S.r.l.', kind: 'issued_document', document: { id: 54321 }, type: 'in' } }
      const response = instance.createCashbookEntry(2, opts)
      const expectedJson = JSON.stringify(createCashbookEntryResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(createCashbookEntryStub.getCall(0).args[1]).to.equal(opts)
      done()
    })
  })
  describe('deleteCashbookEntry', function () {
    it('should call deleteCashbookEntry successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('getCashbookEntry', function () {
    it('should call getCashbookEntry successfully', function (done) {
      const response = instance.getCashbookEntry(2, '12345')
      const expectedJson = JSON.stringify(getCashbookEntryResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('listCashbookEntries', function () {
    it('should call listCashbookEntries successfully', function (done) {
      const response = instance.listCashbookEntries(2, '2021-10-10', '2022-10-10')
      const expectedJson = JSON.stringify(listCashbookEntriesResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('modifyCashbookEntry', function () {
    it('should call modifyCashbookEntry successfully', function (done) {
      const response = instance.modifyCashbookEntry(2, '12345')
      const expectedJson = JSON.stringify(modifyCashbookEntryResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
})
