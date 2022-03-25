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
import { ModifyPaymentAccountResponse } from '../../src/models';

  var instance: ModifyPaymentAccountResponse = {
    data: {
      id : 12345,
      name : "Indesa",
      type : "bank",
      iban : "IT17Q0051343200000003497636",
      sia : "T1234",
      virtual : false
    }
  };

  beforeEach(function() {
  });


  describe('ModifyPaymentAccountResponse', function() {
    it('should create an instance of ModifyPaymentAccountResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

  });

