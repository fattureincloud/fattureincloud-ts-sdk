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
import { ListReceiptsResponse } from '../../src/models';

  var instance: ListReceiptsResponse = {
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
        date : "2021-08-20",
        number : 5,
        numeration : "REC005",
        amount_net : 16.39,
        amount_vat : 3.61,
        amount_gross : 20,
        use_gross_prices : true,
        type : "sales_receipt",
        description : "cassa 1",
        rc_center : "",
        created_at : "2021-08-20",
        updated_at : "2021-08-20",
        payment_account : {
          id : 222,
          name : "carta di credito"
        },
        items_list : [
          {
            id : 666,
            amount_net : 10,
            amount_gross : 12.2,
            category : "altro",
            vat : {
              id : 0,
              value : 22,
              description : "iva"
            }
          },
          {
            id : 777,
            amount_net : 100,
            amount_gross : 104,
            category : "altro",
            vat : {
              id : 0,
              value : 22,
              description : "iva"
            }
          }
        ]
      },
      {
        id : 12346,
        date : "2021-08-19",
        number : 6,
        numeration : "REC006",
        amount_net : 8.2,
        amount_vat : 1.8,
        amount_gross : 10,
        use_gross_prices : true,
        type : "sales_receipt",
        description : "cassa 1",
        rc_center : "",
        created_at : "2021-08-19",
        updated_at : "2021-08-19",
        payment_account : {
          id : 555,
          name : "contanti"
        },
        items_list : [
          {
            id : 888,
            amount_net : 8.2,
            amount_gross : 10,
            category : "altro",
            vat : {
              id : 0,
              value : 22,
              description : "iva"
            }
          }
        ]
      }
    ]    
  };

  beforeEach(function() {
  });


  describe('ListReceiptsResponse', function() {
    it('should create an instance of ListReceiptsResponse', function() {
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

