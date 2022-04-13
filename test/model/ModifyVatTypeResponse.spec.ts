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
import { ModifyVatTypeResponse } from '../../src/models';

  var instance: ModifyVatTypeResponse = {
    data: {
      id: 0,
      value: 22,
      description: "Non imponibile art. 123",
      notes: "IVA non imponibile ai sensi dell'articolo 123, comma 2",
      e_invoice: true,
      ei_type: "2",
      ei_description: "string",
      editable: true,
      is_disabled: true
    }
  };

  beforeEach(function() {
  });


  describe('ModifyVatTypeResponse', function() {
    it('should create an instance of ModifyVatTypeResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

  });
