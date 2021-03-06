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
import { ClientsApi } from '../../src/api/clients-api'
import { CreateClientRequest, CreateClientResponse, GetClientResponse, ListClientsResponse, ModifyClientResponse } from '../../src/models'

const sandbox = require('sinon').createSandbox()

const instance = new ClientsApi()

const createClientResponseObj: CreateClientResponse = { data: { id: 16451, code: 'AE86', name: 'Avv. Maria Rossi', type: 'person', first_name: 'Maria', last_name: 'Rossi', contact_person: '', vat_number: 'IT12345640962', tax_code: 'BLTGNI5ABCDA794E', address_street: 'Via Roma, 1', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', email: 'maria.rossi@example.com', certified_email: 'maria.rossi@pec.example.com', phone: '1234567890', fax: '', notes: '', created_at: '2021-04-29 08:53:07', updated_at: '2021-04-29 08:53:07', default_payment_terms: 1, default_payment_terms_type: 'standard', bank_name: 'Indesa', bank_iban: 'IT40P123456781000000123456', bank_swift_code: 'AK86PCT', shipping_address: 'Corso Magellano 4', e_invoice: true, ei_code: '111111', default_vat: { id: 54321, value: 45, description: '', is_disabled: false }, default_payment_method: { id: 386092, name: 'Credit card' } } }
const createClientStub = sandbox.stub(instance, 'createClient').returns(createClientResponseObj)

const deleteClientResponseObj = {}
sandbox.stub(instance, 'deleteClient').returns(deleteClientResponseObj)

const getClientResponseObj: GetClientResponse = { data: { id: 16451, code: 'GB01', name: 'Avv. Gino Belotti', type: 'person', first_name: '', last_name: '', contact_person: '', vat_number: 'IT05548040962', tax_code: 'BLTGNI54R25A794E', address_street: 'Via del froschio, 3', address_postal_code: '20900', address_city: 'Monza', address_province: 'MB', address_extra: '', country: 'Italia', email: '', certified_email: 'gigino54@pec.example.com', phone: '', fax: '', notes: '', created_at: null, updated_at: '2021-04-29 08:53:07', default_payment_terms: 1, default_payment_terms_type: 'standard', bank_name: '', bank_iban: 'IT40S0542811101000000123456', bank_swift_code: '', shipping_address: 'Via le mani dal Naso 2', e_invoice: true, ei_code: '', default_vat: null, default_payment_method: { id: 386692, name: 'Teeest 2' } } }
sandbox.stub(instance, 'getClient').returns(getClientResponseObj)

const listClientsResponseObj: ListClientsResponse = { current_page: 1, data: [{ id: 16451, code: 'AE86', name: 'Avv. Maria Rossi', type: 'person', first_name: 'Maria', last_name: 'Rossi', contact_person: '', vat_number: 'IT12345640962', tax_code: 'BLTGNI5ABCDA794E', address_street: 'Via Roma, 1', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', email: 'maria.rossi@example.com', certified_email: 'maria.rossi@pec.example.com', phone: '1234567890', fax: '', notes: '', created_at: '2021-04-29 08:53:07', updated_at: '2021-04-29 08:53:07', default_payment_terms: 1, default_payment_terms_type: 'standard', bank_name: 'Indesa', bank_iban: 'IT40P123456781000000123456', bank_swift_code: 'AK86PCT', shipping_address: 'Corso Magellano 4', e_invoice: true, ei_code: '111111', default_vat: { id: 54321, value: 45, description: '', is_disabled: false }, default_payment_method: { id: 386092, name: 'Credit card' } }, { id: 25330696, code: 'PD00', name: 'Mario Rossi', type: 'person', first_name: 'Mario', last_name: 'Rossi', contact_person: '', vat_number: 'IT1234567890', tax_code: 'ABCDEF12G34H567I', address_street: 'Via largo augusto 123', address_postal_code: '21012', address_city: 'Bergamo', address_province: 'BG', address_extra: '', country: 'Italia', email: 'info@mariorossi.it', certified_email: 'info@pec.mariorossi.it', phone: '012345678', fax: '012345678', notes: '', created_at: '2021-04-29 08:53:07', default_payment_terms: 0, default_payment_terms_type: 'standard', bank_name: 'Monte dei Pascoli', bank_iban: 'IT00P123456781000000123456', bank_swift_code: 'APL86PCT', shipping_address: 'Via Miilano 4', e_invoice: false, ei_code: '7654321', default_vat: { id: 66, value: 22, description: '', is_disabled: false }, default_payment_method: null }], first_page_url: 'page=1', from: 1, last_page: 2, last_page_url: 'page=2', next_page_url: 'page=2', path: 'entities/clients', per_page: 5, prev_page_url: null, to: 50, total: 8 }
sandbox.stub(instance, 'listClients').returns(listClientsResponseObj)

const modifyClientResponseObj: ModifyClientResponse = { data: { id: 16451, code: 'GB01', name: 'Avv. Gino Belotti', type: 'person', first_name: '', last_name: '', contact_person: '', vat_number: 'IT05548040962', tax_code: 'BLTGNI54R25A794E', address_street: 'Via del froschio, 3', address_postal_code: '20900', address_city: 'Monza', address_province: 'MB', address_extra: '', country: 'Italia', email: '', certified_email: 'gigino54@pec.example.com', phone: '', fax: '', notes: '', created_at: null, updated_at: '2021-04-29 08:53:07', default_payment_terms: 1, default_payment_terms_type: 'standard', bank_name: '', bank_iban: 'IT40S0542811101000000123456', bank_swift_code: '', shipping_address: 'Via le mani dal Naso 2', e_invoice: true, ei_code: '', default_vat: null, default_payment_method: { id: 386692, name: 'Teeest 2' } } }
const modifyClientStub = sandbox.stub(instance, 'modifyClient').returns(modifyClientResponseObj)

// beforeEach(function () {

// })

describe('ClientsApi', function () {
  describe('createClient', function () {
    it('should call createClient successfully', function (done) {
      const opts: CreateClientRequest = { data: { code: '1234asd', name: 'Avv. Maria Rossi', type: 'person', first_name: 'Maria', last_name: 'Rossi', contact_person: '', vat_number: 'IT12345640962', tax_code: 'BLTGNI5ABCDA794E', address_street: 'Via Roma, 1', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', email: 'maria.rossi@example.com', certified_email: 'maria.rossi@pec.example.com', phone: '1234567890', fax: '', notes: '', default_payment_terms: 1, default_payment_terms_type: 'standard', bank_name: 'Indesa', bank_iban: 'IT40P123456781000000123456', bank_swift_code: 'AK86PCT', shipping_address: 'Corso Magellano 4', e_invoice: true, ei_code: '111111', default_vat: { id: 1409, value: 45, description: '', is_disabled: false } } }
      const response = instance.createClient(2, opts)
      const expectedJson = JSON.stringify(createClientResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(createClientStub.getCall(0).args[1]).to.equal(opts)
      done()
    })
  })
  describe('deleteClient', function () {
    it('should call deleteClient successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('getClient', function () {
    it('should call getClient successfully', function (done) {
      const response = instance.getClient(2, 12345)
      const expectedJson = JSON.stringify(getClientResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('listClients', function () {
    it('should call listClients successfully', function (done) {
      const response = instance.listClients(2)
      const expectedJson = JSON.stringify(listClientsResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('modifyClient', function () {
    it('should call modifyClient successfully', function (done) {
      const opts = { data: { address_city: 'Mario' } }
      const response = instance.modifyClient(2, 12345, opts)
      const expectedJson = JSON.stringify(modifyClientResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(modifyClientStub.getCall(0).args[2]).to.equal(opts)
      done()
    })
  })
})
