/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { DetailedCountry } from '../../src/models'

const instance: DetailedCountry = {
  name: 'Italia',
  settings_name: 'Italia',
  iso: 'IT',
  fiscal_iso: 'IT',
  uic: '086'
}

// beforeEach(function () {
// })

describe('DetailedCountry', function () {
  it('should create an instance of DetailedCountry', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property name (base name: "name")', function () {
    expect(instance.name).to.be.a('string')
  })

  it('should have the property settingsName (base name: "settings_name")', function () {
    expect(instance.settings_name).to.be.a('string')
  })

  it('should have the property iso (base name: "iso")', function () {
    expect(instance.iso).to.be.a('string')
  })

  it('should have the property fiscalIso (base name: "fiscal_iso")', function () {
    expect(instance.fiscal_iso).to.be.a('string')
  })

  it('should have the property uic (base name: "uic")', function () {
    expect(instance.uic).to.be.a('string')
  })
})
