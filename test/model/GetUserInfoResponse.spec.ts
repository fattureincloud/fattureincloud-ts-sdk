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
import { GetUserInfoResponse } from '../../src/models';

  var instance: GetUserInfoResponse = {
    data: {
      id : 12345,
      name : "Mario Rossi",
      first_name : "Mario",
      last_name : "Rossi",
      email : "mario.rossi@example.com",
      hash : "5add29e1234532a1bf2ed7b612043029",
      picture : "picture.jpg"
    },
    info: {
      need_marketing_consents_confirmation : false,
      need_password_change : false,
      need_terms_of_service_confirmation : false
    },
    email_confirmation_state: {
      need_confirmation : false
    }
  };

  beforeEach(function() {
  });


  describe('GetUserInfoResponse', function() {
    it('should create an instance of GetUserInfoResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

    it('should have the property info (base name: "info")', function() {
      expect(instance.info).to.be.a('object');
    });

    it('should have the property emailConfirmationState (base name: "email_confirmation_state")', function() {
      expect(instance.email_confirmation_state).to.be.a('object');
    });

  });
