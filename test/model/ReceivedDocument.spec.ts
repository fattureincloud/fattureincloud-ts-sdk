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
import { ReceivedDocument } from '../../src/models';

  var instance: ReceivedDocument = {
    id: 12345,
    type: "expense",
    description: "Soggiorno di lavoro",
    category: "cat",
    amortization: 1,
    rc_center: "rcc",
    invoice_number: "inv12345",
    is_marked: false,
    is_detailed: false,
    e_invoice: false,
    date: "2021-08-15",
    next_due_date: "2021-08-15",
    amount_net: 592,
    amount_vat: 0,
    amount_gross: 592,
    amount_withholding_tax: 0,
    amount_other_withholding_tax: 0,
    tax_deductibility: 50,
    vat_deductibility: 100,
    attachment_url: "spesa_ger5i783t45hu6ti.pdf",
    attachment_preview_url: "/preview.pdf",
    entity: {
      id : 111,
      name : "Hotel Rubino Palace"
    },
    currency: {
      id : "EUR",
      exchange_rate : "1.00000",
      symbol : "€"
    },
    payments_list: [
      {
        amount : 592,
        due_date : "2021-08-15",
        paid_date : "2021-08-15",
        id : 777,
        payment_terms : {
          days : 0,
          type : "standard"
        },
        status : "paid",
        payment_account : {
          id : 222,
          name : "Contanti",
          virtual : false
        }
      }
    ],
    items_list: [
      {
      id : 12345,
      product_id : 54321,
      code : "pdr01",
      measure : "very big",
      name : "prod uan",
      net_price : 100,
      category : "other",
      qty : 1,
      stock : 99,
      vat : {
          id : 1020,
          value : 0,
          description : "PA Non imp art. 2",
          is_disabled : false
      }
    }],
    attachment_token: "sjfbisfb43t5y454y65uhete",
  };

  beforeEach(function() {
  });


  describe('ReceivedDocument', function() {
    it('should create an instance of ReceivedDocument', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance.id).to.be.a('number');
    });

    it('should have the property type (base name: "type")', function() {
      expect(instance.type).to.be.a('string');
    });

    it('should have the property entity (base name: "entity")', function() {
      expect(instance.entity).to.be.a('object');
    });

    it('should have the property date (base name: "date")', function() {
      expect(instance.date).to.be.a('string');
    });

    it('should have the property category (base name: "category")', function() {
      expect(instance.category).to.be.a('string');
    });

    it('should have the property description (base name: "description")', function() {
      expect(instance.description).to.be.a('string');
    });

    it('should have the property amountNet (base name: "amount_net")', function() {
      expect(instance.amount_net).to.be.a('number');
    });

    it('should have the property amountVat (base name: "amount_vat")', function() {
      expect(instance.amount_vat).to.be.a('number');
    });

    it('should have the property amountWithholdingTax (base name: "amount_withholding_tax")', function() {
      expect(instance.amount_withholding_tax).to.be.a('number');
    });

    it('should have the property amountOtherWithholdingTax (base name: "amount_other_withholding_tax")', function() {
      expect(instance.amount_other_withholding_tax).to.be.a('number');
    });

    it('should have the property amountGross (base name: "amount_gross")', function() {
      expect(instance.amount_gross).to.be.a('number');
    });

    it('should have the property amortization (base name: "amortization")', function() {
      expect(instance.amortization).to.be.a('number');
    });

    it('should have the property rcCenter (base name: "rc_center")', function() {
      expect(instance.rc_center).to.be.a('string');
    });

    it('should have the property invoiceNumber (base name: "invoice_number")', function() {
      expect(instance.invoice_number).to.be.a('string');
    });

    it('should have the property isMarked (base name: "is_marked")', function() {
      expect(instance.is_marked).to.be.a('boolean');
    });

    it('should have the property isDetailed (base name: "is_detailed")', function() {
      expect(instance.is_detailed).to.be.a('boolean');
    });

    it('should have the property eInvoice (base name: "e_invoice")', function() {
      expect(instance.e_invoice).to.be.a('boolean');
    });

    it('should have the property nextDueDate (base name: "next_due_date")', function() {
      expect(instance.next_due_date).to.be.a('string');
    });

    it('should have the property currency (base name: "currency")', function() {
      expect(instance.currency).to.be.a('object');
    });

    it('should have the property taxDeductibility (base name: "tax_deductibility")', function() {
      expect(instance.tax_deductibility).to.be.a('number');
    });

    it('should have the property vatDeductibility (base name: "vat_deductibility")', function() {
      expect(instance.vat_deductibility).to.be.a('number');
    });

    it('should have the property itemsList (base name: "items_list")', function() {
      expect(instance.items_list).to.be.a('array');
    });

    it('should have the property paymentsList (base name: "payments_list")', function() {
      expect(instance.payments_list).to.be.a('array');
    });

    it('should have the property attachmentUrl (base name: "attachment_url")', function() {
      expect(instance.attachment_url).to.be.a('string');
    });

    it('should have the property attachmentPreviewUrl (base name: "attachment_preview_url")', function() {
      expect(instance.attachment_preview_url).to.be.a('string');
    });

    it('should have the property attachmentToken (base name: "attachment_token")', function() {
      expect(instance.attachment_token).to.be.a('string');
    });

  });

