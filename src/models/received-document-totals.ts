/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.25
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ReceivedDocumentTotals
 */
export interface ReceivedDocumentTotals {
    /**
     * Total net amount.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_net'?: number | null;
    /**
     * Total vat amount.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_vat'?: number | null;
    /**
     * Total gross amount.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_gross'?: number | null;
    /**
     * Total withholding tax amount.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Total other withholding tax amount.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * Total amount due.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'amount_due'?: number | null;
    /**
     * Payments sum.
     * @type {number}
     * @memberof ReceivedDocumentTotals
     */
    'payments_sum'?: number | null;
}

