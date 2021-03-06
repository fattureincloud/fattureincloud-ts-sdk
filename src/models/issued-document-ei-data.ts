/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OriginalDocumentType } from './original-document-type';
import { VatKind } from './vat-kind';

/**
 * E-invoice data. [Only if e_invoice=true]
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
     * Original document number.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'od_number'?: string | null;
    /**
     * Original document date.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'od_date'?: string | null;
    /**
     * CIG.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'cig'?: string | null;
    /**
     * CUP.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'cup'?: string | null;
    /**
     * Payment method (see https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Rappresentazione-tabellare-fattura-ordinaria.pdf for the accepted values of ModalitaPagamento).
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'payment_method'?: string | null;
    /**
     * Bank name.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_name'?: string | null;
    /**
     * IBAN.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_iban'?: string | null;
    /**
     * Bank beneficiary.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'bank_beneficiary'?: string | null;
    /**
     * Invoice number.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'invoice_number'?: string | null;
    /**
     * Invoice date.
     * @type {string}
     * @memberof IssuedDocumentEiData
     */
    'invoice_date'?: string | null;
}

