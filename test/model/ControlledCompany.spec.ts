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
import { ControlledCompany } from '../../src/models';

  var instance: ControlledCompany = {
    id: 12345,
    name: "Studio Commercialista",
    tax_code: "ABCSFN94T17A794K",
    type: "accountant",
    access_token: "4ff5f0fe5abcd1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95",
    connection_id: 94566
  };

  beforeEach(function() {
  });


  describe('ControlledCompany', function() {
    it('should create an instance of ControlledCompany', function() {
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

    it('should have the property accessToken (base name: "access_token")', function() {
      expect(instance.access_token).to.be.a('string');
    });

    it('should have the property connectionId (base name: "connection_id")', function() {
      expect(instance.connection_id).to.be.a('number');
    });

    it('should have the property taxCode (base name: "tax_code")', function() {
      expect(instance.tax_code).to.be.a('string');
    });

  });

