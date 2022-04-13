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
import { Supplier } from '../../src/models';

  var instance: Supplier = {
    id: 12345,
    code: "AE86",
    name: "Mario Rossi S.R.L.",
    type: "company",
    first_name: "Mario",
    last_name: "Rossi",
    contact_person: "",
    vat_number: "111222333",
    tax_code: "111122233",
    address_street: "Corso Magellano 46",
    address_postal_code: "20146",
    address_city: "Milano",
    address_province: "MI",
    address_extra: "",
    country: "Italia",
    email: "mario.rossi@example.com",
    certified_email: "mario.rossi@pec.example.com",
    phone: "1234567890",
    fax: "123456789",
    notes: "",
    created_at: "2021-15-08",
    updated_at: "2021-15-08",  
  };

  beforeEach(function() {
  });


  describe('Supplier', function() {
    it('should create an instance of Supplier', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance.id).to.be.a('number');
    });

    it('should have the property code (base name: "code")', function() {
      expect(instance.code).to.be.a('string');
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance.name).to.be.a('string');
    });

    it('should have the property type (base name: "type")', function() {
      expect(instance.type).to.be.a('string');
    });

    it('should have the property firstName (base name: "first_name")', function() {
      expect(instance.first_name).to.be.a('string');
    });

    it('should have the property lastName (base name: "last_name")', function() {
      expect(instance.last_name).to.be.a('string');
    });

    it('should have the property contactPerson (base name: "contact_person")', function() {
      expect(instance.contact_person).to.be.a('string');
    });

    it('should have the property vatNumber (base name: "vat_number")', function() {
      expect(instance.vat_number).to.be.a('string');
    });

    it('should have the property taxCode (base name: "tax_code")', function() {
      expect(instance.tax_code).to.be.a('string');
    });

    it('should have the property addressStreet (base name: "address_street")', function() {
      expect(instance.address_street).to.be.a('string');
    });

    it('should have the property addressPostalCode (base name: "address_postal_code")', function() {
      expect(instance.address_postal_code).to.be.a('string');
    });

    it('should have the property addressCity (base name: "address_city")', function() {
      expect(instance.address_city).to.be.a('string');
    });

    it('should have the property addressProvince (base name: "address_province")', function() {
      expect(instance.address_province).to.be.a('string');
    });

    it('should have the property addressExtra (base name: "address_extra")', function() {
      expect(instance.address_extra).to.be.a('string');
    });

    it('should have the property country (base name: "country")', function() {
      expect(instance.country).to.be.a('string');
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance.email).to.be.a('string');
    });

    it('should have the property certifiedEmail (base name: "certified_email")', function() {
      expect(instance.certified_email).to.be.a('string');
    });

    it('should have the property phone (base name: "phone")', function() {
      expect(instance.phone).to.be.a('string');
    });

    it('should have the property fax (base name: "fax")', function() {
      expect(instance.fax).to.be.a('string');
    });

    it('should have the property notes (base name: "notes")', function() {
      expect(instance.notes).to.be.a('string');
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      expect(instance.created_at).to.be.a('string');
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      expect(instance.updated_at).to.be.a('string');
    });

  });
