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

import { expect } from 'chai';
import { IssuedDocumentPaymentsListItem } from '../../src/models';

  var instance: IssuedDocumentPaymentsListItem = {
    due_date: "2021-12-10",
    amount: 333,
    status: "paid",
    paid_date: "2021-12-11",
    payment_account: {
      id : 21,
      name : "Indesa - Carta conto",
      type : "standard",
      virtual : false
    },
    ei_raw: {
      prop : true
    }    
  };

  beforeEach(function() {
  });


  describe('IssuedDocumentPaymentsList', function() {
    it('should create an instance of IssuedDocumentPaymentsListItem', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      expect(instance.due_date).to.be.a('string');
    });

    it('should have the property amount (base name: "amount")', function() {
      expect(instance.amount).to.be.a('number');
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance.status).to.be.a('string');
    });

    it('should have the property paymentAccount (base name: "payment_account")', function() {
      expect(instance.payment_account).to.be.a('object');
    });

    it('should have the property paidDate (base name: "paid_date")', function() {
      expect(instance.paid_date).to.be.a('string');
    });

    it('should have the property eiRaw (base name: "ei_raw")', function() {
      expect(instance.ei_raw).to.be.a('object');
    });

  });
