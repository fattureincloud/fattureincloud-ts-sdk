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
import { CompanyInfoPlanInfoFunctionsStatus } from '../../src/models'

const instance: CompanyInfoPlanInfoFunctionsStatus = {
  ts_digital: {
    active: true
  },
  ts_pay: {
    active: true
  }
}

// beforeEach(function () {
// })

describe('CompanyInfoPlanInfoFunctionsStatus', function () {
  it('should create an instance of CompanyInfoPlanInfoFunctionsStatus', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property tsDigital (base name: "ts_digital")', function () {
    expect(instance.ts_digital).to.be.a('object')
  })

  it('should have the property tsPay (base name: "ts_pay")', function () {
    expect(instance.ts_pay).to.be.a('object')
  })
})
