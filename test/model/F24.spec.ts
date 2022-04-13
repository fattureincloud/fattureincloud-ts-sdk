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
import { F24 } from '../../src/models';

  var instance: F24 = {
    id: 12345,
    amount: 840.36,
    description: "PAGAMENTO IVA 2021",
    due_date: "2021-12-31",
    status: "paid",
    attachment_url: "b19c01da9b1688fb73d0d9e8adae89a8.pdf",
    payment_account: {
        id : 111,
        name : "Indesa - carta conto"
    },
    attachment_token: "Adfqregwthwrt6whrtghsrgbsdthyeruerur6u6676e5879"
  };

  beforeEach(function() {
  });


  describe('F24', function() {
    it('should create an instance of F24', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance.id).to.be.a('number');
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      expect(instance.due_date).to.be.a('string');
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance.status).to.be.a('string');
    });

    it('should have the property paymentAccount (base name: "payment_account")', function() {
      expect(instance.payment_account).to.be.a('object');
    });

    it('should have the property amount (base name: "amount")', function() {
      expect(instance.amount).to.be.a('number');
    });

    it('should have the property attachmentUrl (base name: "attachment_url")', function() {
      expect(instance.attachment_url).to.be.a('string');
    });

    it('should have the property attachmentToken (base name: "attachment_token")', function() {
      expect(instance.attachment_token).to.be.a('string');
    });

    it('should have the property description (base name: "description")', function() {
      expect(instance.description).to.be.a('string');
    });

  });
