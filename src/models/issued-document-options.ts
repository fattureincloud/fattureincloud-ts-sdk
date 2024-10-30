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



/**
 * 
 * @export
 * @interface IssuedDocumentOptions
 */
export interface IssuedDocumentOptions {
    /**
     * Fixes your last payment amount to match your document total
     * @type {boolean}
     * @memberof IssuedDocumentOptions
     */
    'fix_payments'?: boolean | null;
    /**
     * Original documents ids [only for join/transform]
     * @type {Array<string>}
     * @memberof IssuedDocumentOptions
     */
    'create_from'?: Array<string> | null;
    /**
     * Tranform a document [only for transform]
     * @type {boolean}
     * @memberof IssuedDocumentOptions
     */
    'transform'?: boolean | null;
    /**
     * Keep original document [only for transform]
     * @type {boolean}
     * @memberof IssuedDocumentOptions
     */
    'keep_copy'?: boolean | null;
    /**
     * Join type [only for join]
     * @type {string}
     * @memberof IssuedDocumentOptions
     */
    'join_type'?: string | null;
}

