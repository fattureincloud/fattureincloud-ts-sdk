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
import { User } from '../../src/models';

  var instance: User = {
    id: 12345,
    name: "Mario Rossi",
    first_name: "Mario",
    last_name: "Rossi",
    email: "mario.rossi@example.com",
    hash: "5add29e1234532a1bf2ed7b612043029",
    picture: "picture.jpg"
  };

  beforeEach(function() {
  });


  describe('User', function() {
    it('should create an instance of User', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance.id).to.be.a('number');
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance.name).to.be.a('string');
    });

    it('should have the property firstName (base name: "first_name")', function() {
      expect(instance.first_name).to.be.a('string');
    });

    it('should have the property lastName (base name: "last_name")', function() {
      expect(instance.last_name).to.be.a('string');
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance.email).to.be.a('string');
    });

    it('should have the property hash (base name: "hash")', function() {
      expect(instance.hash).to.be.a('string');
    });

    it('should have the property picture (base name: "picture")', function() {
      expect(instance.picture).to.be.a('string');
    });

  });

