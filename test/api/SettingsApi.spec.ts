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

import { expect } from 'chai';
import { SettingsApi } from '../../src/api/settings-api';
import { CreatePaymentAccountRequest, CreatePaymentAccountResponse, CreatePaymentMethodRequest, CreatePaymentMethodResponse, GetPaymentAccountResponse, GetPaymentMethodResponse, ModifyPaymentAccountRequest, ModifyPaymentAccountResponse, ModifyPaymentMethodRequest, ModifyPaymentMethodResponse } from '../../src/models';

  var sandbox = require("sinon").createSandbox();

  var instance = new SettingsApi();

  var createPaymentAccountResponse: CreatePaymentAccountResponse = {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}};
  var createPaymentAccountStub = sandbox.stub(instance, "createPaymentAccount").returns(createPaymentAccountResponse);
  
  var createPaymentMethodResponse: CreatePaymentMethodResponse = {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}};
  var createPaymentMethodStub = sandbox.stub(instance, "createPaymentMethod").returns(createPaymentMethodResponse);
 
  var deletePaymentAccountResponse = {};
  sandbox.stub(instance, "deletePaymentAccount").returns(deletePaymentAccountResponse);
  
  var deletePaymentMethodResponse = {};
  sandbox.stub(instance, "deletePaymentMethod").returns(deletePaymentMethodResponse);
  
  var getPaymentAccountResponse: GetPaymentAccountResponse = {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}};
  sandbox.stub(instance, "getPaymentAccount").returns(getPaymentAccountResponse);
  
  var getPaymentMethodResponse: GetPaymentMethodResponse = {"data":{"id":386683,"name":"Bonifico bancario","type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}};
  sandbox.stub(instance, "getPaymentMethod").returns(getPaymentMethodResponse);

  var modifyPaymentAccountResponse: ModifyPaymentAccountResponse = {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}};
  var modifyPaymentAccountStub = sandbox.stub(instance, "modifyPaymentAccount").returns(modifyPaymentAccountResponse);
  
  var modifyPaymentMethodResponse: ModifyPaymentMethodResponse = {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}};
  var modifyPaymentMethodStub = sandbox.stub(instance, "modifyPaymentMethod").returns(modifyPaymentMethodResponse);
 
  beforeEach(function() {

  });

  describe('SettingsApi', function() {
    describe('createPaymentAccount', function() {
      it('should call createPaymentAccount successfully', function(done) {
        var opts: CreatePaymentAccountRequest = {"data":{"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}}
        var response = instance.createPaymentAccount(2, opts);
        var expectedJson = JSON.stringify(createPaymentAccountResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(createPaymentAccountStub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('createPaymentMethod', function() {
      it('should call createPaymentMethod successfully', function(done) {
        var opts: CreatePaymentMethodRequest = {"data":{"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}}
        var response = instance.createPaymentMethod(2, opts);
        var expectedJson = JSON.stringify(createPaymentMethodResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(createPaymentMethodStub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('deletePaymentAccount', function() {
      it('should call deletePaymentAccount successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('deletePaymentMethod', function() {
      it('should call deletePaymentMethod successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('getPaymentAccount', function() {
      it('should call getPaymentAccount successfully', function(done) {
        var response = instance.getPaymentAccount(2, 12345);
        var expectedJson = JSON.stringify(getPaymentAccountResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('getPaymentMethod', function() {
      it('should call getPaymentMethod successfully', function(done) {
        var response = instance.getPaymentMethod(2, 12345);
        var expectedJson = JSON.stringify(getPaymentMethodResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('modifyPaymentAccount', function() {
      it('should call modifyPaymentAccount successfully', function(done) {
        var opts: ModifyPaymentAccountRequest = {"data":{"name":"Indessa"}}
        var response = instance.modifyPaymentAccount(2, 12345,  opts);
        var expectedJson = JSON.stringify(modifyPaymentAccountResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(modifyPaymentAccountStub.getCall(0).args[2]).to.equal(opts);
        done();
      });
    });
    describe('modifyPaymentMethod', function() {
      it('should call modifyPaymentMethod successfully', function(done) {
        var opts: ModifyPaymentMethodRequest = {"data":{"name":"Bonifico bancariolo"}}
        var response = instance.modifyPaymentMethod(2, 12345,  opts);
        var expectedJson = JSON.stringify(modifyPaymentMethodResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(modifyPaymentMethodStub.getCall(0).args[2]).to.equal(opts);
        done();
      });
    });
  });
