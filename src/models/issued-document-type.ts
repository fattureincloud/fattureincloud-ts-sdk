/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.31
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Issued document type
 * @export
 * @enum {string}
 */

export const IssuedDocumentType = {
    Invoice: 'invoice',
    Quote: 'quote',
    Proforma: 'proforma',
    Receipt: 'receipt',
    DeliveryNote: 'delivery_note',
    CreditNote: 'credit_note',
    Order: 'order',
    WorkReport: 'work_report',
    SupplierOrder: 'supplier_order',
    SelfOwnInvoice: 'self_own_invoice',
    SelfSupplierInvoice: 'self_supplier_invoice'
} as const;

export type IssuedDocumentType = typeof IssuedDocumentType[keyof typeof IssuedDocumentType];



