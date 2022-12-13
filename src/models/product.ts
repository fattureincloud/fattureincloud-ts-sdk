/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.23
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
 * @interface Product
 */
export interface Product {
    /**
     * Unique identifier.
     * @type {number}
     * @memberof Product
     */
    'id'?: number | null;
    /**
     * Product name.
     * @type {string}
     * @memberof Product
     */
    'name'?: string | null;
    /**
     * Product code.
     * @type {string}
     * @memberof Product
     */
    'code'?: string | null;
    /**
     * Net sale price (used if use_gross_price is false, otherwise it\'s competed automatically).
     * @type {number}
     * @memberof Product
     */
    'net_price'?: number | null;
    /**
     * Gross sale price (used if use_gross_price is false, otherwise it\'s competed automatically).
     * @type {number}
     * @memberof Product
     */
    'gross_price'?: number | null;
    /**
     * Determine which price to use for calculations.
     * @type {boolean}
     * @memberof Product
     */
    'use_gross_price'?: boolean | null;
    /**
     * 
     * @type {VatType}
     * @memberof Product
     */
    'default_vat'?: VatType | null;
    /**
     * Net cost of the product (used for received documents).
     * @type {number}
     * @memberof Product
     */
    'net_cost'?: number | null;
    /**
     * Unit of measure.
     * @type {string}
     * @memberof Product
     */
    'measure'?: string | null;
    /**
     * Product description.
     * @type {string}
     * @memberof Product
     */
    'description'?: string | null;
    /**
     * Product category.
     * @type {string}
     * @memberof Product
     */
    'category'?: string | null;
    /**
     * Extra notes.
     * @type {string}
     * @memberof Product
     */
    'notes'?: string | null;
    /**
     * Determine if the product is in stock.
     * @type {boolean}
     * @memberof Product
     */
    'in_stock'?: boolean | null;
    /**
     * Product initial stock.
     * @type {number}
     * @memberof Product
     */
    'stock_initial'?: number | null;
    /**
     * [Read Only] Product current stock.
     * @type {number}
     * @memberof Product
     */
    'stock_current'?: number | null;
    /**
     * Product average cost.
     * @type {number}
     * @memberof Product
     */
    'average_cost'?: number | null;
    /**
     * Product average price.
     * @type {number}
     * @memberof Product
     */
    'average_price'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'updated_at'?: string | null;
}

