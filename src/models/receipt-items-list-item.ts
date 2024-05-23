/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.33
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface ReceiptItemsListItem
 */
export interface ReceiptItemsListItem {
    /**
     * Receipt item id
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'id'?: number | null;
    /**
     * Receipt item total net amount
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'amount_net'?: number | null;
    /**
     * Receipt item total gross amount
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'amount_gross'?: number | null;
    /**
     * Receipt item category
     * @type {string}
     * @memberof ReceiptItemsListItem
     */
    'category'?: string | null;
    /**
     * 
     * @type {VatType}
     * @memberof ReceiptItemsListItem
     */
    'vat'?: VatType | null;
}

