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
import { ReceiptPreCreateInfo } from '../../src/models';

  var instance: ReceiptPreCreateInfo ={"numerations":{"2016":{"sales_receipt":2,"till_receipt":2},"2017":{"sales_receipt":2,"till_receipt":2},"2018":{"sales_receipt":2},"2019":{"sales_receipt":3,"till_receipt":3},"2020":{"sales_receipt":3},"2021":{"sales_receipt":4}},"numerations_list":["REC001","REC002","REC003","REC005","REC006"],"rc_centers_list":["Sede generale","Negozio Bergamo","Negozio Milano"],"payment_accounts_list":[{"id":111,"name":"Indesa - carta conto"},{"id":222,"name":"Contanti"},{"id":333,"name":"Bonifico Bancario"}],"categories_list":["altro","arredamento"],"vat_types_list":[{"id":1334,"value":0,"description":"Non imp. art. 17 c. 6 DPR 633\/72 e s.m.i.","is_disabled":false},{"id":1333,"value":0,"description":"Non sogg. art. 74 c. 7 e 8 DPR 633\/72","is_disabled":false},{"id":1332,"value":0,"description":"Non imp. art. 17 c. 6 lett. A TER DPR 633\/72","is_disabled":false},{"id":1331,"value":22,"description":"Pippus","is_disabled":false},{"id":1330,"value":0,"description":"Natura 4","is_disabled":false},{"id":1020,"value":0,"description":"PA Non imp art. 2","is_disabled":false},{"id":1018,"value":0,"description":"Aliq. 22% reverse charge","is_disabled":false},{"id":1015,"value":22,"description":"Speciale prova","is_disabled":false},{"id":1014,"value":0,"description":"Ai sensi dellarticolo 123","is_disabled":false},{"id":1013,"value":0,"description":"Non imponibile art. 8 lett. A DPR 633\/72","is_disabled":false},{"id":1010,"value":0,"description":"NON IMPONIBILE IVA EX ART. 8 COMMA 1 LETT.A","is_disabled":false},{"id":1009,"value":20,"description":"Aliquota 20%","is_disabled":false},{"id":1008,"value":0,"description":"Non imp. art. 41 D.L. 427\/93","is_disabled":false},{"id":1007,"value":0,"description":"Non imp. art. 71 DPR 633\/72","is_disabled":false},{"id":1006,"value":0,"description":"Escl. art. 15 DPR 633\/72","is_disabled":false},{"id":1004,"value":0,"description":"Non imp. art. 1 L. 244\/2007","is_disabled":false},{"id":1003,"value":0,"description":"Non imp. art. 8 DPR 633\/72","is_disabled":false},{"id":1002,"value":0,"description":"Omaggi art. 2 c. 2 n. 4 DPR 633\/72","is_disabled":false},{"id":1000,"value":0,"description":"art.26 COMMA\' 3 DPR 633\/72","is_disabled":false}]}
  // var instance: ReceiptPreCreateInfo = {
  //   numerations: {
  //     2020 : {
  //       sales_receipt : {
  //           REC001 : 3
  //       }
  //     },
  //     2021 : {
  //       sales_receipt : {
  //           REC005 : 3,
  //           REC004 : 2,
  //           REC003 : 2,
  //           REC001 : 7
  //         }
  //       }
  //     },
  //   numerations_list: [
  //         "REC001",
  //         "REC002",
  //         "REC003",
  //         "REC005",
  //         "REC006"
  //     ],
  //   rc_centers_list: [
  //         "Sede generale",
  //         "Negozio Bergamo",
  //         "Negozio Milano"
  //     ],
  //   payment_accounts_list: [
  //         {
  //         id : 111,
  //         name : "Indesa - carta conto"
  //         },
  //         {
  //         id : 222,
  //         name : "Contanti"
  //         }
  //     ],
  //   categories_list: [
  //         "altro",
  //         "arredamento"
  //     ],
  //   vat_types_list: [
  //         {
  //         id : 1334,
  //         value : 0,
  //         description : "Non imp. art. 17 c. 6 DPR 633/72 e s.m.i.",
  //         is_disabled : false
  //         },
  //         {
  //         id : 1333,
  //         value : 0,
  //         description : "Non sogg. art. 74 c. 7 e 8 DPR 633/72",
  //         is_disabled : false
  //         }
  //     ]
  // };

  beforeEach(function() {
  });


  describe('ReceiptPreCreateInfo', function() {
    it('should create an instance of ReceiptPreCreateInfo', function() {
      expect(instance).to.be.a('object');
    });

    it('should have the property numerations (base name: "numerations")', function() {
      expect(instance.numerations).to.be.a('object');
    });

    it('should have the property numerationsList (base name: "numerations_list")', function() {
      expect(instance.numerations_list).to.be.a('array');
    });

    it('should have the property rcCentersList (base name: "rc_centers_list")', function() {
      expect(instance.rc_centers_list).to.be.a('array');
    });

    it('should have the property paymentAccountsList (base name: "payment_accounts_list")', function() {
      expect(instance.payment_accounts_list).to.be.a('array');
    });

    it('should have the property categoriesList (base name: "categories_list")', function() {
      expect(instance.categories_list).to.be.a('array');
    });

    it('should have the property vatTypesList (base name: "vat_types_list")', function() {
      expect(instance.vat_types_list).to.be.a('array');
    });

  });
