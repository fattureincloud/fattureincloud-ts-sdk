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
import { PaymentMethod } from '../../src/models';

  var instance: PaymentMethod = {
    id: 12346,
    name: "Bonifico bancario",
    type: "standard",
    is_default: true,
    details: [{
      title: "t1"
    }],
    default_payment_account: {
      id : 21,
      name : "n1"
    }    
  };

  beforeEach(function() {
  });


  describe('PaymentMethod', function() {
    it('should create an instance of PaymentMethod', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance.id).to.be.a('number');
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance.name).to.be.a('string');
    });

    it('should have the property type (base name: "type")', function() {
      expect(instance.type).to.be.a('string');
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      expect(instance.is_default).to.be.a('boolean');
    });

    it('should have the property defaultPaymentAccount (base name: "default_payment_account")', function() {
      expect(instance.default_payment_account).to.be.a('object');
    });

    it('should have the property details (base name: "details")', function() {
      expect(instance.details).to.be.a('array');
    });

  });

