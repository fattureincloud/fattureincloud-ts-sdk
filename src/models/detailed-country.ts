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



/**
 * 
 * @export
 * @interface DetailedCountry
 */
export interface DetailedCountry {
    /**
     * Country name.
     * @type {string}
     * @memberof DetailedCountry
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DetailedCountry
     */
    'settings_name'?: string | null;
    /**
     * Country iso.
     * @type {string}
     * @memberof DetailedCountry
     */
    'iso'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DetailedCountry
     */
    'fiscal_iso'?: string | null;
    /**
     * Country uic.
     * @type {string}
     * @memberof DetailedCountry
     */
    'uic'?: string | null;
}
