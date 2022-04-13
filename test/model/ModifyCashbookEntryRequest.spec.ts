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
import { ModifyCashbookEntryRequest } from '../../src/models';

  var instance: ModifyCashbookEntryRequest = {
    data: {
      date : "2021-08-24",
      amount_in : 122,
      payment_account_in : {
        id : 333
      },
      description : "Fattura n. 201/2021",
      entity_name : "Rossi S.r.l."
    }
  };

  beforeEach(function() {
  });


  describe('ModifyCashbookEntryRequest', function() {
    it('should create an instance of ModifyCashbookEntryRequest', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

  });

