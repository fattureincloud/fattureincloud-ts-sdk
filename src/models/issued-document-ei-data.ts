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


// May contain unused imports in some cases
// @ts-ignore
import { OriginalDocumentType } from './original-document-type';
// May contain unused imports in some cases
// @ts-ignore
import { VatKind } from './vat-kind';

/**
 * Issued document e-invoice data [Only if e_invoice=true]
 * @export
 * @interface IssuedDocumentEiData
 */
export interface IssuedDocumentEiData {
    /**
     * 
     * @type {VatKind}
     * @memberof IssuedDocumentEiData
     */
    'vat_kind'?: VatKind | null;
    /**
     * 
     * @type {OriginalDocumentType}
     * @memberof IssuedDocumentEiData
     */
    'original_document_type'?: OriginalDocumentType | null;
    /**
     * E-invoice original document number
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'od_number'?: string | null;
    /**
     * E-invoice original document date
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'od_date'?: string | null;
    /**
     * E-invoice CIG
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'cig'?: string | null;
    /**
     * E-invoice CUP
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'cup'?: string | null;
    /**
     * E-invoice payment method [required for e-invoices] (see [here](https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.2/Rappresentazione_Tabellare_FattOrdinaria_V1.2.2.pdf) for the accepted values of ModalitaPagamento)
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'payment_method'?: string | null;
    /**
     * E-invoice bank name
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_name'?: string | null;
    /**
     * E-invoice bank IBAN
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_iban'?: string | null;
    /**
     * E-invoice bank beneficiary
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_beneficiary'?: string | null;
    /**
     * E-invoice invoice number
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'invoice_number'?: string | null;
    /**
     * E-invoice invoice date
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'invoice_date'?: string | null;
}



