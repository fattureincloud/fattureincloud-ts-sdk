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
import { ListF24ResponsePage } from '../../src/models';

  var instance: ListF24ResponsePage = {
    data: [
      {
        id : 12345,
        amount : 840.36,
        description : "PAGAMENTO IVA 2021",
        due_date : "2021-12-31",
        status : "paid",
        payment_account : {
          id : 111,
          name : "Indesa - carta conto"
        },
        attachment_url : "b19c01da9b1688fb73d0d9e8adae89a8.pdf"
      },
      {
        id : 12346,
        amount : 810.62,
        description : "PAGAMENTO IVA 2020",
        due_date : "2020-12-31",
        status : "paid",
        payment_account : {
          id : 111,
          name : "Indesa - carta conto"
        },
        attachment_url : "bb6df8490dad4770353b378ea926d8ba.pdf"
      }
    ]
  };

  beforeEach(function() {
  });


  describe('ListF24ResponsePage', function() {
    it('should create an instance of ListF24ResponsePage', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('array');
    });

  });
