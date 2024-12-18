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


// May contain unused imports in some cases
// @ts-ignore
import type { VatItem } from './vat-item';

/**
 * 
 * @export
 * @interface IssuedDocumentTotals
 */
export interface IssuedDocumentTotals {
    /**
     * Issued document total net amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_net'?: number | null;
    /**
     * Issued document rivalsa amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_rivalsa'?: number | null;
    /**
     * Issued document net amount with rivalsa
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_net_with_rivalsa'?: number | null;
    /**
     * Issued document cassa amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_cassa'?: number | null;
    /**
     * Issued document taxable amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount'?: number | null;
    /**
     * Issued document not taxable amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'not_taxable_amount'?: number | null;
    /**
     * Issued document total vat amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_vat'?: number | null;
    /**
     * Issued document total gross amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_gross'?: number | null;
    /**
     * Issued document Taxable withholding tax amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount_withholding_tax'?: number | null;
    /**
     * Issued document withholding tax amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Issued document other withholding tax taxable amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount_other_withholding_tax'?: number | null;
    /**
     * Issued document other withholding tax amount
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * Issued document stamp duty value [0 if not present].
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'stamp_duty'?: number | null;
    /**
     * Issued document total amount due
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_due'?: number | null;
    /**
     * Is enasarco maximal excedeed
     * @type {boolean}
     * @memberof IssuedDocumentTotals
     */
    'is_enasarco_maximal_exceeded'?: boolean | null;
    /**
     * Issued document payments sum
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'payments_sum'?: number | null;
    /**
     * 
     * @type {{ [key: string]: VatItem; }}
     * @memberof IssuedDocumentTotals
     */
    'vat_list'?: { [key: string]: VatItem; };
}

