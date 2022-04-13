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
import { ListSuppliersResponsePage } from '../../src/models';

  var instance: ListSuppliersResponsePage = {
    data: [
      {
        id : 12345,
        code : "AE86",
        name : "Mario Rossi S.R.L.",
        type : "company",
        first_name : "Mario",
        last_name : "Rossi",
        contact_person : "",
        vat_number : "111222333",
        tax_code : "111122233",
        address_street : "Corso Magellano, 46",
        address_postal_code : "20146",
        address_city : "Milano",
        address_province : "MI",
        address_extra : "",
        country : "Italia",
        email : "mario.rossi@example.com",
        certified_email : "mario.rossi@pec.example.com",
        phone : "1234567890",
        fax : "123456789",
        notes : "",
        created_at : "2021-15-08",
        updated_at : "2021-15-08"
      },
      {
        id : 12346,
        code : "GT86",
        name : "Maria Grossi S.R.L.",
        type : "company",
        first_name : "",
        last_name : "",
        contact_person : "",
        vat_number : "200020102020",
        tax_code : "200020102020",
        address_street : "Vicolo stretto, 32",
        address_postal_code : "20146",
        address_city : "Milano",
        address_province : "MI",
        address_extra : "",
        country : "Italia",
        email : "maria.grossi@example.com",
        certified_email : "maria.grossi@pec.example.com",
        phone : "0987654321",
        fax : "098765432",
        notes : "",
        created_at : "2021-15-09",
        updated_at : "2021-15-09"
      }
    ]
  };

  beforeEach(function() {
  });


  describe('ListSuppliersResponsePage', function() {
    it('should create an instance of ListSuppliersResponsePage', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('array');
    });

  });

