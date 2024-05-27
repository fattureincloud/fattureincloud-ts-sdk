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
 * Issued document extra data default values
 * @export
 * @interface IssuedDocumentPreCreateInfoExtraDataDefaultValues
 */
export interface IssuedDocumentPreCreateInfoExtraDataDefaultValues {
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentPreCreateInfoExtraDataDefaultValues
     */
    'ts_communication'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof IssuedDocumentPreCreateInfoExtraDataDefaultValues
     */
    'ts_tipo_spesa'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoExtraDataDefaultValues
     */
    'ts_flag_tipo_spesa'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentPreCreateInfoExtraDataDefaultValues
     */
    'ts_pagamento_tracciato'?: boolean | null;
}

