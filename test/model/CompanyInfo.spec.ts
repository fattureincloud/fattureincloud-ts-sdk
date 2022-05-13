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
import { CompanyInfo } from '../../src/models'

const instance: CompanyInfo = {
  id: 12345,
  name: 'Studio Commercialista',
  email: 'mario.rossi@example.com',
  type: 'accountant',
  is_accountant: true,
  accountant_id: 12345,
  access_info: {
    role: 'master',
    through_accountant: false,
    permissions: {
      fic_situation: 'read',
      fic_clients: 'write',
      fic_suppliers: 'write',
      fic_products: 'write',
      fic_issued_documents: 'detailed',
      fic_issued_documents_detailed: {
        quotes: 'write',
        proformas: 'write',
        invoices: 'write',
        receipts: 'write',
        delivery_notes: 'write',
        credit_notes: 'write',
        orders: 'write',
        work_reports: 'write',
        supplier_orders: 'write',
        self_invoices: 'write'
      },
      fic_received_documents: 'write',
      fic_receipts: 'write',
      fic_calendar: 'write',
      fic_archive: 'write',
      fic_taxes: 'write',
      fic_stock: 'write',
      fic_cashbook: 'write',
      fic_settings: 'write',
      fic_emails: 'read',
      dic_employees: 'none',
      dic_timesheet: 'none',
      dic_settings: 'none',
      fic_export: 'write',
      fic_import_clients_suppliers: 'write',
      fic_import_products: 'write',
      fic_import_issued_documents: 'none',
      fic_import_bankstatements: 'none',
      fic_recurring: 'write',
      fic_riba: 'write'
    }
  },
  plan_info: {
    limits: {
      clients: 5000,
      suppliers: 5000,
      products: 5000,
      documents: 3000
    },
    functions: {
      document_attachments: true,
      archive: true,
      payment_notifications: true,
      paypal: true,
      receipts: true,
      e_invoice: true,
      genius: true,
      stock: true,
      smtp: true,
      mail_tracking: true,
      subaccounts: true,
      tessera_sanitaria: true,
      recurring: true,
      sofort: false,
      cerved: true,
      ts_digital: true,
      ts_pay: true,
      ts_invoice_trading: true
    },
    functions_status: {
      ts_digital: {
        active: true
      },
      ts_pay: {
        active: true
      }
    }
  }

}

// beforeEach(function () {
// }),

describe('CompanyInfo', function () {
  it('should create an instance of CompanyInfo', function () {
    expect(instance).to.be.a('object')
  })

  it('should have the property id (base name: "id")', function () {
    expect(instance.id).to.be.a('number')
  })

  it('should have the property name (base name: "name")', function () {
    expect(instance.name).to.be.a('string')
  })

  it('should have the property email (base name: "email")', function () {
    expect(instance.email).to.be.a('string')
  })

  it('should have the property type (base name: "type")', function () {
    expect(instance.type).to.be.a('string')
  })

  it('should have the property accessInfo (base name: "access_info")', function () {
    expect(instance.access_info).to.be.a('object')
  })

  it('should have the property planInfo (base name: "plan_info")', function () {
    expect(instance.plan_info).to.be.a('object')
  })

  it('should have the property accountantId (base name: "accountant_id")', function () {
    expect(instance.accountant_id).to.be.a('number')
  })

  it('should have the property isAccountant (base name: "is_accountant")', function () {
    expect(instance.is_accountant).to.be.a('boolean')
  })
})
