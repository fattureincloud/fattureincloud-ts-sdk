/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.20
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface EmailScheduleInclude
 */
export interface EmailScheduleInclude {
    /**
     * If set to true, the email will have a button to view the document
     * @type {boolean}
     * @memberof EmailScheduleInclude
     */
    'document'?: boolean | null;
    /**
     * If set to true, the email will have a button to view the delivery note
     * @type {boolean}
     * @memberof EmailScheduleInclude
     */
    'delivery_note'?: boolean | null;
    /**
     * If set to true, the email will have a button to view the attachment
     * @type {boolean}
     * @memberof EmailScheduleInclude
     */
    'attachment'?: boolean | null;
    /**
     * If set to true, the email will have a button to view the accompanying invoice
     * @type {boolean}
     * @memberof EmailScheduleInclude
     */
    'accompanying_invoice'?: boolean | null;
}

