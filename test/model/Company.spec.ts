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
import { Company } from '../../src/models'

const instance: Company = {
  id: 12345,
  name: 'Studio Commercialista',
  tax_code: 'ABCSFN94T17A794K',
  vat_number: 'IT1234564774563A',
  type: 'accountant',
  access_token: '4ff5f0fe5abcd1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95',
  connection_id: 94566,
  fic_license_expire: '2024-10-10',
  fic_plan: 'standard',
  controlled_companies: [
    {
      id: 12246,
      name: 'Studio Commercialista',
      tax_code: 'ABCSFN94T17A794K',
      type: 'company',
      access_token: '4ff5f0fe5abcdf1d7157fa13ca72ab62b6183db0667a576a0e19164801c18c4f7362a848fa32dbb8c3a3f94c34f3df95',
      connection_id: 94566
    },
    {
      id: 12347,
      name: 'Mario Rossi SRL',
      tax_code: '57398280214',
      type: 'company',
      access_token: '86690c98be13592e78b763c52fab2ba0c22faa118708ca5273da2b4dcdc7ad1234517107266d463fd9ae424a78c16cde',
      connection_id: 94566
    }
  ]
}

// beforeEach(function () {
// })

describe('Company', function () {
  it('should create an instance of Company', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property name (base name: "name")', function () {
    expect(instance.name).to.be.a('string')
  })

  it('should have the property type (base name: "type")', function () {
    expect(instance.type).to.be.a('string')
  })

  it('should have the property accessToken (base name: "access_token")', function () {
    expect(instance.access_token).to.be.a('string')
  })

  it('should have the property connectionId (base name: "connection_id")', function () {
    expect(instance.connection_id).to.be.a('number')
  })

  it('should have the property taxCode (base name: "tax_code")', function () {
    expect(instance.tax_code).to.be.a('string')
  })

  it('should have the property vatNumber (base name: "vat_number")', function () {
    expect(instance.vat_number).to.be.a('string')
  })

  it('should have the property ficLicenseExpire (base name: "fic_license_expire")', function () {
    expect(instance.fic_license_expire).to.be.a('string')
  })

  it('should have the property ficPlan (base name: "fic_plan")', function () {
    expect(instance.fic_plan).to.be.a('string')
  })
})
