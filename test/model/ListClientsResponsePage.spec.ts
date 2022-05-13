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

import { expect } from 'chai'
import { ListClientsResponsePage } from '../../src/models'

const instance: ListClientsResponsePage = {
  data: [
    {
      id: 16451,
      code: 'AE86',
      name: 'Avv. Maria Rossi',
      type: 'person',
      first_name: 'Maria',
      last_name: 'Rossi',
      contact_person: '',
      vat_number: 'IT12345640962',
      tax_code: 'BLTGNI5ABCDA794E',
      address_street: 'Via Roma, 1',
      address_postal_code: '20900',
      address_city: 'Milano',
      address_province: 'MI',
      address_extra: '',
      country: 'Italia',
      email: 'maria.rossi@example.com',
      certified_email: 'maria.rossi@pec.example.com',
      phone: '1234567890',
      fax: '',
      notes: '',
      created_at: '2021-04-29',
      updated_at: '2021-04-29',
      default_payment_terms: 1,
      default_payment_terms_type: 'standard',
      bank_name: 'Indesa',
      bank_iban: 'IT40P123456781000000123456',
      bank_swift_code: 'AK86PCT',
      shipping_address: 'Corso Magellano 4',
      e_invoice: true,
      ei_code: '111111',
      default_vat: {
        id: 54321,
        value: 45,
        description: '',
        is_disabled: false
      },
      default_payment_method: {
        id: 386092,
        name: 'Credit card'
      }
    },
    {
      id: 25330696,
      code: 'PD00',
      name: 'Mario Rossi',
      type: 'person',
      first_name: 'Mario',
      last_name: 'Rossi',
      contact_person: '',
      vat_number: 'IT1234567890',
      tax_code: 'ABCDEF12G34H567I',
      address_street: 'Via largo augusto 123',
      address_postal_code: '21012',
      address_city: 'Bergamo',
      address_province: 'BG',
      address_extra: '',
      country: 'Italia',
      email: 'info@mariorossi.it',
      certified_email: 'info@pec.mariorossi.it',
      phone: '012345678',
      fax: '012345678',
      notes: '',
      created_at: '2021-04-29',
      default_payment_terms: 0,
      default_payment_terms_type: 'standard',
      bank_name: 'Monte dei Pascoli',
      bank_iban: 'IT00P123456781000000123456',
      bank_swift_code: 'APL86PCT',
      shipping_address: 'Via Miilano 4',
      e_invoice: false,
      ei_code: '7654321',
      default_vat: {
        id: 66,
        value: 22,
        description: '',
        is_disabled: false
      },
      default_payment_method: null
    }
  ]
}

// beforeEach(function () {
// })

describe('ListClientsResponsePage', function () {
  it('should create an instance of ListClientsResponsePage', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property data (base name: "data")', function () {
    expect(instance.data).to.be.a('array')
  })
})
