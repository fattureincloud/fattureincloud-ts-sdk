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
import { ListUserCompaniesResponse } from '../../src/models';

  var instance: ListUserCompaniesResponse = {
    data: {
      companies: [
        {
          id : 12345,
          name : "Studio Commercialista",
          tax_code : "ABCSFN94T17A794K",
          type : "accountant",
          access_token : "4ff5f0fe5abcd1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95",
          connection_id : 94566,
          controlled_companies : [
            {
              id : 12246,
              name : "Studio Commercialista",
              tax_code : "ABCSFN94T17A794K",
              type : "company",
              access_token : "4ff5f0fe5abcdf1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95",
              connection_id : 94566
            }
          ]
        }
      ]
    }
  };

  beforeEach(function() {
  });


  describe('ListUserCompaniesResponse', function() {
    it('should create an instance of ListUserCompaniesResponse', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property data (base name: "data")', function() {
      expect(instance.data).to.be.a('object');
    });

  });

