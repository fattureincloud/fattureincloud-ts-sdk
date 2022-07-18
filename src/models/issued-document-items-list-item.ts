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


import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface IssuedDocumentItemsListItem
 */
export interface IssuedDocumentItemsListItem {
    /**
     * Unique identifier.
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'id'?: number | null;
    /**
     * Unique identifier of the product.
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'product_id'?: number | null;
    /**
     * Product code.
     * @type {string}
     * @memberof IssuedDocumentItemsListItem
     */
    'code'?: string | null;
    /**
     * Product name.
     * @type {string}
     * @memberof IssuedDocumentItemsListItem
     */
    'name'?: string | null;
    /**
     * Product category
     * @type {string}
     * @memberof IssuedDocumentItemsListItem
     */
    'category'?: string | null;
    /**
     * Product description.
     * @type {string}
     * @memberof IssuedDocumentItemsListItem
     */
    'description'?: string | null;
    /**
     * Items quantity,
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'qty'?: number | null;
    /**
     * Item measure.
     * @type {string}
     * @memberof IssuedDocumentItemsListItem
     */
    'measure'?: string | null;
    /**
     * Net price.
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'net_price'?: number | null;
    /**
     * Gross price.
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'gross_price'?: number | null;
    /**
     * 
     * @type {VatType}
     * @memberof IssuedDocumentItemsListItem
     */
    'vat'?: VatType | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentItemsListItem
     */
    'not_taxable'?: boolean | null;
    /**
     * Apply withholding taxes, rivalsa and cassa.
     * @type {boolean}
     * @memberof IssuedDocumentItemsListItem
     */
    'apply_withholding_taxes'?: boolean | null;
    /**
     * Discount percentual value.
     * @type {number}
     * @memberof IssuedDocumentItemsListItem
     */
    'discount'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentItemsListItem
     */
    'discount_highlight'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentItemsListItem
     */
    'in_ddt'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentItemsListItem
     */
    'stock'?: boolean | null;
    /**
     * Advanced raw attributes for e-invoices.
     * @type {object}
     * @memberof IssuedDocumentItemsListItem
     */
    'ei_raw'?: object | null;
}

