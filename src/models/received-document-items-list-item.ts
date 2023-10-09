/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface ReceivedDocumentItemsListItem
 */
export interface ReceivedDocumentItemsListItem {
    /**
     * Received document item id
     * @type {number}
     * @memberof ReceivedDocumentItemsListItem
     */
    'id'?: number | null;
    /**
     * Received document product id
     * @type {number}
     * @memberof ReceivedDocumentItemsListItem
     */
    'product_id'?: number | null;
    /**
     * Received document item product code
     * @type {string}
     * @memberof ReceivedDocumentItemsListItem
     */
    'code'?: string | null;
    /**
     * Received document item product name
     * @type {string}
     * @memberof ReceivedDocumentItemsListItem
     */
    'name'?: string | null;
    /**
     * Received document item measure
     * @type {string}
     * @memberof ReceivedDocumentItemsListItem
     */
    'measure'?: string | null;
    /**
     * Received document item product net price
     * @type {number}
     * @memberof ReceivedDocumentItemsListItem
     */
    'net_price'?: number | null;
    /**
     * Received document item product category
     * @type {string}
     * @memberof ReceivedDocumentItemsListItem
     */
    'category'?: string | null;
    /**
     * Received document item quantity
     * @type {number}
     * @memberof ReceivedDocumentItemsListItem
     */
    'qty'?: number | null;
    /**
     * 
     * @type {VatType}
     * @memberof ReceivedDocumentItemsListItem
     */
    'vat'?: VatType | null;
    /**
     * Received document item product number of items in stock
     * @type {number}
     * @memberof ReceivedDocumentItemsListItem
     */
    'stock'?: number | null;
}

