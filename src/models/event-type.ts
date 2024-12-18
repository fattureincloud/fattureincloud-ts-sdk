/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Webhooks event type
 * @export
 * @enum {string}
 */

export const EventType = {
    IssuedDocumentsInvoicesCreate: 'it.fattureincloud.webhooks.issued_documents.invoices.create',
    IssuedDocumentsInvoicesUpdate: 'it.fattureincloud.webhooks.issued_documents.invoices.update',
    IssuedDocumentsInvoicesDelete: 'it.fattureincloud.webhooks.issued_documents.invoices.delete',
    IssuedDocumentsQuotesCreate: 'it.fattureincloud.webhooks.issued_documents.quotes.create',
    IssuedDocumentsQuotesUpdate: 'it.fattureincloud.webhooks.issued_documents.quotes.update',
    IssuedDocumentsQuotesDelete: 'it.fattureincloud.webhooks.issued_documents.quotes.delete',
    IssuedDocumentsProformasCreate: 'it.fattureincloud.webhooks.issued_documents.proformas.create',
    IssuedDocumentsProformasUpdate: 'it.fattureincloud.webhooks.issued_documents.proformas.update',
    IssuedDocumentsProformasDelete: 'it.fattureincloud.webhooks.issued_documents.proformas.delete',
    IssuedDocumentsReceiptsCreate: 'it.fattureincloud.webhooks.issued_documents.receipts.create',
    IssuedDocumentsReceiptsUpdate: 'it.fattureincloud.webhooks.issued_documents.receipts.update',
    IssuedDocumentsReceiptsDelete: 'it.fattureincloud.webhooks.issued_documents.receipts.delete',
    IssuedDocumentsDeliveryNotesCreate: 'it.fattureincloud.webhooks.issued_documents.delivery_notes.create',
    IssuedDocumentsDeliveryNotesUpdate: 'it.fattureincloud.webhooks.issued_documents.delivery_notes.update',
    IssuedDocumentsDeliveryNotesDelete: 'it.fattureincloud.webhooks.issued_documents.delivery_notes.delete',
    IssuedDocumentsCreditNotesCreate: 'it.fattureincloud.webhooks.issued_documents.credit_notes.create',
    IssuedDocumentsCreditNotesUpdate: 'it.fattureincloud.webhooks.issued_documents.credit_notes.update',
    IssuedDocumentsCreditNotesDelete: 'it.fattureincloud.webhooks.issued_documents.credit_notes.delete',
    IssuedDocumentsOrdersCreate: 'it.fattureincloud.webhooks.issued_documents.orders.create',
    IssuedDocumentsOrdersUpdate: 'it.fattureincloud.webhooks.issued_documents.orders.update',
    IssuedDocumentsOrdersDelete: 'it.fattureincloud.webhooks.issued_documents.orders.delete',
    IssuedDocumentsWorkReportsCreate: 'it.fattureincloud.webhooks.issued_documents.work_reports.create',
    IssuedDocumentsWorkReportsUpdate: 'it.fattureincloud.webhooks.issued_documents.work_reports.update',
    IssuedDocumentsWorkReportsDelete: 'it.fattureincloud.webhooks.issued_documents.work_reports.delete',
    IssuedDocumentsSupplierOrdersCreate: 'it.fattureincloud.webhooks.issued_documents.supplier_orders.create',
    IssuedDocumentsSupplierOrdersUpdate: 'it.fattureincloud.webhooks.issued_documents.supplier_orders.update',
    IssuedDocumentsSupplierOrdersDelete: 'it.fattureincloud.webhooks.issued_documents.supplier_orders.delete',
    IssuedDocumentsSelfInvoicesCreate: 'it.fattureincloud.webhooks.issued_documents.self_invoices.create',
    IssuedDocumentsSelfInvoicesUpdate: 'it.fattureincloud.webhooks.issued_documents.self_invoices.update',
    IssuedDocumentsSelfInvoicesDelete: 'it.fattureincloud.webhooks.issued_documents.self_invoices.delete',
    IssuedDocumentsAllCreate: 'it.fattureincloud.webhooks.issued_documents.all.create',
    IssuedDocumentsAllUpdate: 'it.fattureincloud.webhooks.issued_documents.all.update',
    IssuedDocumentsAllDelete: 'it.fattureincloud.webhooks.issued_documents.all.delete',
    ReceivedDocumentsCreate: 'it.fattureincloud.webhooks.received_documents.create',
    ReceivedDocumentsUpdate: 'it.fattureincloud.webhooks.received_documents.update',
    ReceivedDocumentsDelete: 'it.fattureincloud.webhooks.received_documents.delete',
    ReceiptsCreate: 'it.fattureincloud.webhooks.receipts.create',
    ReceiptsUpdate: 'it.fattureincloud.webhooks.receipts.update',
    ReceiptsDelete: 'it.fattureincloud.webhooks.receipts.delete',
    TaxesCreate: 'it.fattureincloud.webhooks.taxes.create',
    TaxesUpdate: 'it.fattureincloud.webhooks.taxes.update',
    TaxesDelete: 'it.fattureincloud.webhooks.taxes.delete',
    ArchiveDocumentsCreate: 'it.fattureincloud.webhooks.archive_documents.create',
    ArchiveDocumentsUpdate: 'it.fattureincloud.webhooks.archive_documents.update',
    ArchiveDocumentsDelete: 'it.fattureincloud.webhooks.archive_documents.delete',
    CashbookCreate: 'it.fattureincloud.webhooks.cashbook.create',
    CashbookUpdate: 'it.fattureincloud.webhooks.cashbook.update',
    CashbookDelete: 'it.fattureincloud.webhooks.cashbook.delete',
    ProductsCreate: 'it.fattureincloud.webhooks.products.create',
    ProductsUpdate: 'it.fattureincloud.webhooks.products.update',
    ProductsDelete: 'it.fattureincloud.webhooks.products.delete',
    ProductsStockUpdate: 'it.fattureincloud.webhooks.products.stock_update',
    EntitiesClientsCreate: 'it.fattureincloud.webhooks.entities.clients.create',
    EntitiesClientsUpdate: 'it.fattureincloud.webhooks.entities.clients.update',
    EntitiesClientsDelete: 'it.fattureincloud.webhooks.entities.clients.delete',
    EntitiesSuppliersCreate: 'it.fattureincloud.webhooks.entities.suppliers.create',
    EntitiesSuppliersUpdate: 'it.fattureincloud.webhooks.entities.suppliers.update',
    EntitiesSuppliersDelete: 'it.fattureincloud.webhooks.entities.suppliers.delete',
    EntitiesAllCreate: 'it.fattureincloud.webhooks.entities.all.create',
    EntitiesAllUpdate: 'it.fattureincloud.webhooks.entities.all.update',
    EntitiesAllDelete: 'it.fattureincloud.webhooks.entities.all.delete',
    IssuedDocumentsEInvoicesStatusUpdate: 'it.fattureincloud.webhooks.issued_documents.e_invoices.status_update',
    ReceivedDocumentsEInvoicesReceive: 'it.fattureincloud.webhooks.received_documents.e_invoices.receive',
    IssuedDocumentsInvoicesEmailSent: 'it.fattureincloud.webhooks.issued_documents.invoices.email_sent',
    IssuedDocumentsQuotesEmailSent: 'it.fattureincloud.webhooks.issued_documents.quotes.email_sent',
    IssuedDocumentsProformasEmailSent: 'it.fattureincloud.webhooks.issued_documents.proformas.email_sent',
    IssuedDocumentsReceiptsEmailSent: 'it.fattureincloud.webhooks.issued_documents.receipts.email_sent',
    IssuedDocumentsDeliveryNotesEmailSent: 'it.fattureincloud.webhooks.issued_documents.delivery_notes.email_sent',
    IssuedDocumentsCreditNotesEmailSent: 'it.fattureincloud.webhooks.issued_documents.credit_notes.email_sent',
    IssuedDocumentsOrdersEmailSent: 'it.fattureincloud.webhooks.issued_documents.orders.email_sent',
    IssuedDocumentsWorkReportsEmailSent: 'it.fattureincloud.webhooks.issued_documents.work_reports.email_sent',
    IssuedDocumentsSupplierOrdersEmailSent: 'it.fattureincloud.webhooks.issued_documents.supplier_orders.email_sent',
    IssuedDocumentsSelfInvoicesEmailSent: 'it.fattureincloud.webhooks.issued_documents.self_invoices.email_sent',
    IssuedDocumentsAllEmailSent: 'it.fattureincloud.webhooks.issued_documents.all.email_sent'
} as const;

export type EventType = typeof EventType[keyof typeof EventType];



