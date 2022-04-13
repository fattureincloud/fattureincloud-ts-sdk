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
import { ListReceivedDocumentsResponse } from '../../src/models';

  var instance: ListReceivedDocumentsResponse = {
    current_page: 2,
    first_page_url: "page=1",
    from: 1,
    last_page: 3,
    last_page_url: "page=3",
    next_page_url: "page=3",
    path: "/archive",
    per_page: 50,
    prev_page_url: "page=1",
    to: 3,
    total: 155,
    data: [
      {
        id : 12345,
        type : "expense",
        description : "Soggiorno di lavoro",
        amortization : 1,
        rc_center : "",
        invoice_number : "",
        is_marked : false,
        is_detailed : false,
        e_invoice : false,
        entity : {
          id : 111,
          name : "Hotel Rubino Palace"
        },
        date : "2021-08-15",
        next_due_date : "2021-08-15",
        currency : {
          id : "EUR",
          exchange_rate : "1.00000",
          symbol : "€"
        },
        amount_net : 592,
        amount_vat : 0,
        amount_gross : 592,
        amount_withholding_tax : 0,
        amount_other_withholding_tax : 0,
        tax_deductibility : 50,
        vat_deductibility : 100,
        items_list : null,
        payments_list : [
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
        attachment_url : "spesa_ger5i783t45hu6ti.pdf",
        attachment_preview_url : null
      },
      {
        id : 12346,
        type : "expense",
        description : "Assicurazione RCA",
        amortization : 1,
        rc_center : "",
        invoice_number : "",
        is_marked : false,
        is_detailed : false,
        e_invoice : false,
        entity : {
          id : 89,
          name : "Indesa Assicurazioni S.P.A."
        },
        date : "2021-08-08",
        next_due_date : "2021-08-08",
        currency : {
          id : "EUR",
          exchange_rate : "1.00000",
          symbol : "€"
        },
        amount_net : 645.69,
        amount_vat : 0,
        amount_gross : 645.69,
        amount_withholding_tax : 0,
        amount_other_withholding_tax : 0,
        tax_deductibility : 50,
        vat_deductibility : 100,
        items_list : null,
        payments_list : [
          {
            amount : 645.69,
            due_date : "2021-08-08",
            paid_date : "2021-08-08",
            id : 999,
            payment_terms : {
              days : 0,
              type : "standard"
            },
            status : "paid",
            payment_account : {
              id : 333,
              name : "Carta conto",
              virtual : false
            }
          }
        ],
        attachment_url : "spesa_gjsd567e5hu6ti.pdf",
        attachment_preview_url : null
      }
    ]
  };

  beforeEach(function() {
  });


  describe('ListReceivedDocumentsResponse', function() {
    it('should create an instance of ListReceivedDocumentsResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      expect(instance.current_page).to.be.a('number');
    });

    it('should have the property firstPageUrl (base name: "first_page_url")', function() {
      expect(instance.first_page_url).to.be.a('string');
    });

    it('should have the property from (base name: "from")', function() {
      expect(instance.from).to.be.a('number');
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      expect(instance.last_page).to.be.a('number');
    });

    it('should have the property lastPageUrl (base name: "last_page_url")', function() {
      expect(instance.last_page_url).to.be.a('string');
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      expect(instance.next_page_url).to.be.a('string');
    });

    it('should have the property path (base name: "path")', function() {
      expect(instance.path).to.be.a('string');
    });

    it('should have the property perPage (base name: "per_page")', function() {
      expect(instance.per_page).to.be.a('number');
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      expect(instance.prev_page_url).to.be.a('string');
    });

    it('should have the property to (base name: "to")', function() {
      expect(instance.to).to.be.a('number');
    });

    it('should have the property total (base name: "total")', function() {
      expect(instance.total).to.be.a('number');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('array');
    });

  });
