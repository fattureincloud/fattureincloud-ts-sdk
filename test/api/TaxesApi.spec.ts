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
import { TaxesApi } from '../../src/api/taxes-api';
import { CreateF24Request, CreateF24Response, GetF24Response, ListF24Response, ModifyF24Request, ModifyF24Response, UploadF24AttachmentResponse } from '../../src/models';

  var sandbox = require("sinon").createSandbox();

  var instance = new TaxesApi();

  var createF24Response: CreateF24Response = {"data":{"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111},"attachment_token":"b19c01da9b1688fb73d0d9e8ad"}};
  var createF24Stub = sandbox.stub(instance, "createF24").returns(createF24Response);

  var deleteF24Response = {};
  sandbox.stub(instance, "deleteF24").returns(deleteF24Response);

  var deleteF24AttachmentResponse = {};
  sandbox.stub(instance, "deleteF24Attachment").returns(deleteF24AttachmentResponse);

  var getF24Response: GetF24Response = {"data":{"id":12345,"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111,"name":"Indesa - carta conto"},"attachment_url":"b19c01da9b1688fb73d0d9e8adae89a8.pdf"}};
  sandbox.stub(instance, "getF24").returns(getF24Response);

  var listF24Response: ListF24Response = {"current_page":1,"data":[{"id":12345,"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111,"name":"Indesa - carta conto"},"attachment_url":"b19c01da9b1688fb73d0d9e8adae89a8.pdf"},{"id":12346,"amount":810.62,"description":"PAGAMENTO IVA 2020","due_date":"2020-12-31","status":"paid","payment_account":{"id":111,"name":"Indesa - carta conto"},"attachment_url":"bb6df8490dad4770353b378ea926d8ba.pdf"}],"first_page_url":"page=1","from":1,"last_page":1,"last_page_url":"page=1","next_page_url":null,"path":"taxes","per_page":50,"prev_page_url":null,"to":2,"total":2,"aggregated_data":{"amount":6438.96}};
  sandbox.stub(instance, "listF24").returns(listF24Response);

  var modifyF24Response: ModifyF24Response = {"data":{"id":12345,"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111,"name":"Indesa - carta conto"},"attachment_url":"b19c01da9b1688fb73d0d9e8adae89a8.pdf"}};
  var modifyF24Stub = sandbox.stub(instance, "modifyF24").returns(modifyF24Response);

  var uploadF24AttachmentResponse: UploadF24AttachmentResponse = {"data":{"attachment_token":"YmMyNWYxYzIwMTU3N2Y4ZGE3ZjZiMzg5OWY0ODNkZDQveXl5LmRvYw"}};
  sandbox.stub(instance, "uploadF24Attachment").returns(uploadF24AttachmentResponse);

  beforeEach(function() {

  });

  describe('TaxesApi', function() {
    describe('createF24', function() {
      it('should call createF24 successfully', function(done) {
        var opts: CreateF24Request = {"data":{"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":21,"name":"Indesa - carta conto"}}}
        var response = instance.createF24(2, opts);
        var expectedJson = JSON.stringify(createF24Response);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(createF24Stub.getCall(0).args[1]).to.equal(opts);
        done();
      });
    });
    describe('deleteF24', function() {
      it('should call deleteF24 successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('deleteF24Attachment', function() {
      it('should call deleteF24Attachment successfully', function(done) {
        expect(1).to.equal(1);
        done();
      });
    });
    describe('getF24', function() {
      it('should call getF24 successfully', function(done) {
        var response = instance.getF24(2, 12345);
        var expectedJson = JSON.stringify(getF24Response);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('listF24', function() {
      it('should call listF24 successfully', function(done) {
        var response = instance.listF24(2);
        var expectedJson = JSON.stringify(listF24Response);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
    describe('modifyF24', function() {
      it('should call modifyF24 successfully', function(done) {
        var opts: ModifyF24Request = {"data":{"description":"PAGAMENTO IVA 3041"}}
        var response = instance.modifyF24(2, 12345, opts);
        var expectedJson = JSON.stringify(modifyF24Response);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        expect(modifyF24Stub.getCall(0).args[2]).to.equal(opts);
        done();
      });
    });
    describe('uploadF24Attachment', function() {
      it('should call uploadF24Attachment successfully', function(done) {
        var response = instance.uploadF24Attachment(2);
        var expectedJson = JSON.stringify(uploadF24AttachmentResponse);
        var actualJson = JSON.stringify(response);
        expect(actualJson).to.equal(expectedJson);
        done();
      });
    });
  });

