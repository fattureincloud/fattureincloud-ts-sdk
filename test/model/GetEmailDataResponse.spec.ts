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
import { GetEmailDataResponse } from '../../src/models';

  var instance: GetEmailDataResponse = {
    data: {
      recipient_email : "mary.red@example.com",
      default_sender_email : {
        id : 0,
        email : "no-reply@fattureincloud.it"
      },
      sender_emails_list : [
        {
          id : 0,
          email : "no-reply@fattureincloud.it"
        },
        {
          id : 888,
          email : "mariorossi@fattureincloud.it"
        }
      ],
      cc_email : "m.rossi@exxample.com",
      subject : "Nostra pro forma nr. 1",
      body : "Gentile Mario Rossi,<br>per vedere la nostra pro forma di  o per scaricarne una copia in versione PDF prema sul bottone sottoastante.<br><br>{{allegati}}<br><br>Cordiali saluti,<br><b>Mario Rossi</b>",
      document_exists : true,
      delivery_note_exists : false,
      attachment_exists : false,
      accompanying_invoice_exists : false
    }
  };

  beforeEach(function() {
  });


  describe('GetEmailDataResponse', function() {
    it('should create an instance of GetEmailDataResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

  });

