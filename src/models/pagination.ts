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



/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Current page number.
     * @type {number}
     * @memberof Pagination
     */
    'current_page'?: number | null;
    /**
     * First page url.
     * @type {string}
     * @memberof Pagination
     */
    'first_page_url'?: string | null;
    /**
     * First result of the page.
     * @type {number}
     * @memberof Pagination
     */
    'from'?: number | null;
    /**
     * Last page number.
     * @type {number}
     * @memberof Pagination
     */
    'last_page'?: number | null;
    /**
     * Last page url.
     * @type {string}
     * @memberof Pagination
     */
    'last_page_url'?: string | null;
    /**
     * Next page url
     * @type {string}
     * @memberof Pagination
     */
    'next_page_url'?: string | null;
    /**
     * Request path.
     * @type {string}
     * @memberof Pagination
     */
    'path'?: string | null;
    /**
     * Number of result per page.
     * @type {number}
     * @memberof Pagination
     */
    'per_page'?: number | null;
    /**
     * Previous page url.
     * @type {string}
     * @memberof Pagination
     */
    'prev_page_url'?: string | null;
    /**
     * Last result of the page.
     * @type {number}
     * @memberof Pagination
     */
    'to'?: number | null;
    /**
     * Total number of results
     * @type {number}
     * @memberof Pagination
     */
    'total'?: number | null;
}

