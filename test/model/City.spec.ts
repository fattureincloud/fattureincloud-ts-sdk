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
import { City } from '../../src/models';

  var instance: City = {
    postal_code: "89867",
    city: "Zungri",
    province: "VV"
  };

  beforeEach(function() {
  });


  describe('City', function() {
    it('should create an instance of City', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      expect(instance.postal_code).to.be.a('string');
    });

    it('should have the property city (base name: "city")', function() {
      expect(instance.city).to.be.a('string');
    });

    it('should have the property province (base name: "province")', function() {
      expect(instance.province).to.be.a('string');
    });

  });
