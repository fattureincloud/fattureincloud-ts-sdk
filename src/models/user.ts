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



/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * User identifier.
     * @type {number}
     * @memberof User
     */
    'id'?: number | null;
    /**
     * Full name of the user.
     * @type {string}
     * @memberof User
     */
    'name'?: string | null;
    /**
     * First name of the user.
     * @type {string}
     * @memberof User
     */
    'first_name'?: string | null;
    /**
     * Last name of the user.
     * @type {string}
     * @memberof User
     */
    'last_name'?: string | null;
    /**
     * Email of the user.
     * @type {string}
     * @memberof User
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'hash'?: string | null;
    /**
     * Picture of the user.
     * @type {string}
     * @memberof User
     */
    'picture'?: string | null;
}

