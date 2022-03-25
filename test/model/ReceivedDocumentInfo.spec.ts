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
import { ReceivedDocumentInfo } from '../../src/models';

  var instance: ReceivedDocumentInfo = {
    default_values: {
      detailed : false
    },
    items_default_values: {
          vat : 21
    },
    countries_list: [
      "Italia",
      "Afghanistan",
      "Albania"
    ],
    currencies_list: [
      {
        id : "AED",
        symbol : "AED",
        html_symbol : "AED",
        exchange_rate : "4.09500"
      },
      {
        id : "ALL",
        symbol : "ALL",
        html_symbol : "ALL",
        exchange_rate : "121.50000"
      }
    ],
    categories_list: [
      "Auto",
      "Telefono e internet"
    ],
    payment_accounts_list: [
      {
        id : 111,
        name : "Indesa - carta conto"
      }
    ],
    vat_types_list: [
      {
        id : 1334,
        value : 0,
        description : "Non imp. art. 17 c. 6 DPR 633/72 e s.m.i.",
        is_disabled : false
      },
      {
        id : 1333,
        value : 0,
        description : "Non sogg. art. 74 c. 7 e 8 DPR 633/72",
        is_disabled : false
      }
    ]
  };

  beforeEach(function() {
  });


  describe('ReceivedDocumentInfo', function() {
    it('should create an instance of ReceivedDocumentInfo', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property defaultValues (base name: "default_values")', function() {
      expect(instance.default_values).to.be.a('object');
    });

    it('should have the property itemsDefaultValues (base name: "items_default_values")', function() {
      expect(instance.items_default_values).to.be.a('object');
    });

    it('should have the property countriesList (base name: "countries_list")', function() {
      expect(instance.countries_list).to.be.a('array');
    });

    it('should have the property currenciesList (base name: "currencies_list")', function() {
      expect(instance.currencies_list).to.be.a('array');
    });

    it('should have the property categoriesList (base name: "categories_list")', function() {
      expect(instance.categories_list).to.be.a('array');
    });

    it('should have the property paymentAccountsList (base name: "payment_accounts_list")', function() {
      expect(instance.payment_accounts_list).to.be.a('array');
    });

    it('should have the property vatTypesList (base name: "vat_types_list")', function() {
      expect(instance.vat_types_list).to.be.a('array');
    });

  });

