/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { VatItem } from './vat-item';

/**
 * 
 * @export
 * @interface IssuedDocumentTotals
 */
export interface IssuedDocumentTotals {
    /**
     * Total net amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_net'?: number | null;
    /**
     * Rivalsa amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_rivalsa'?: number | null;
    /**
     * Net amount with rivalsa.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_net_with_rivalsa'?: number | null;
    /**
     * Cassa amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_cassa'?: number | null;
    /**
     * Taxable amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount'?: number | null;
    /**
     * Not taxable amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'not_taxable_amount'?: number | null;
    /**
     * Total vat amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_vat'?: number | null;
    /**
     * Total grosas amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_gross'?: number | null;
    /**
     * Taxable withholding tax amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount_withholding_tax'?: number | null;
    /**
     * Withholding tax amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Other withholding tax taxable amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'taxable_amount_other_withholding_tax'?: number | null;
    /**
     * Other withholding tax amount.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * Stamp duty value [0 if not present].
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'stamp_duty'?: number | null;
    /**
     * Total amount due.
     * @type {number}
     * @memberof IssuedDocumentTotals
     */
    'amount_due'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentTotals
     */
    'is_enasarco_maximal_exceeded'?: boolean | null;
    /**
     * Payments sum.
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

