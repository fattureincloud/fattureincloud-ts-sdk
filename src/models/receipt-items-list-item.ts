/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.26
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface ReceiptItemsListItem
 */
export interface ReceiptItemsListItem {
    /**
     * Item unique identifier.
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'id'?: number | null;
    /**
     * Item total net amount.
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'amount_net'?: number | null;
    /**
     * Item total gross amount.
     * @type {number}
     * @memberof ReceiptItemsListItem
     */
    'amount_gross'?: number | null;
    /**
     * Item category.
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

