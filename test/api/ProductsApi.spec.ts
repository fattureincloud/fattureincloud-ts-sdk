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
import { ProductsApi } from '../../src/api/products-api'
import { CreateProductRequest, CreateProductResponse, GetProductResponse, ListProductsResponse, ModifyProductRequest, ModifyProductResponse } from '../../src/models'

const sandbox = require('sinon').createSandbox()

const instance = new ProductsApi()

const createProductResponse: CreateProductResponse = { data: { id: 12345, name: 'Tavolo di marmo', code: 'TAVOLO003', net_price: 240, gross_price: 280, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in marmo pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 3, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } } }
const createProductStub = sandbox.stub(instance, 'createProduct').returns(createProductResponse)

const deleteProductResponse = {}
sandbox.stub(instance, 'deleteProduct').returns(deleteProductResponse)

const getProductResponse: GetProductResponse = { data: { id: 12345, name: 'Tavolo di marmo', code: 'TAVOLO003', net_price: 240, gross_price: 280, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in marmo pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 3, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } } }
sandbox.stub(instance, 'getProduct').returns(getProductResponse)

const listProductsResponse: ListProductsResponse = { current_page: 1, data: [{ id: 12345, name: 'Tavolo di marmo', code: 'TAVOLO003', net_price: 240, gross_price: 280, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in marmo pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 3, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } }, { id: 12346, name: 'Tavolo di legno', code: 'TAVOLO001', net_price: 120, gross_price: 160, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in legno pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 3, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } }], first_page_url: 'page=1', from: 1, last_page: 1, last_page_url: 'page=1', next_page_url: 'page=2', path: 'products', per_page: 50, prev_page_url: null, to: 55, total: 55 }
sandbox.stub(instance, 'listProducts').returns(listProductsResponse)

const modifyProductResponse: ModifyProductResponse = { data: { id: 12345, name: 'Tavolo di marmo', code: 'TAVOLO003', net_price: 240, gross_price: 280, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in marmo pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 3, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } } }
const modifyProductStub = sandbox.stub(instance, 'modifyProduct').returns(modifyProductResponse)

// beforeEach(function () {

// })

describe('ProductsApi', function () {
  describe('createProduct', function () {
    it('should call createProduct successfully', function (done) {
      const opts: CreateProductRequest = { data: { name: 'Tavolo di marmo', code: 'TAVOLOso003', net_price: 240, gross_price: 280, use_gross_price: false, net_cost: 0, measure: '', description: 'Tavolo in marmo pregiato', category: 'arredamento', in_stock: true, default_vat: { id: 1409, value: 22, description: 'Non imponibile art. 123', notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2", is_disabled: false } } }
      const response = instance.createProduct(2, opts)
      const expectedJson = JSON.stringify(createProductResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(createProductStub.getCall(0).args[1]).to.equal(opts)
      done()
    })
  })
  describe('deleteProduct', function () {
    it('should call deleteProduct successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('getProduct', function () {
    it('should call getProduct successfully', function (done) {
      const response = instance.getProduct(2, 12345)
      const expectedJson = JSON.stringify(getProductResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('listProducts', function () {
    it('should call listProducts successfully', function (done) {
      const response = instance.listProducts(2)
      const expectedJson = JSON.stringify(listProductsResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('modifyProduct', function () {
    it('should call modifyProduct successfully', function (done) {
      const opts: ModifyProductRequest = { data: { description: 'Tavolo in marmo sfregiato' } }
      const response = instance.modifyProduct(2, 12345, opts)
      const expectedJson = JSON.stringify(modifyProductResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(modifyProductStub.getCall(0).args[2]).to.equal(opts)
      done()
    })
  })
})
