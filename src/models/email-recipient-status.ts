/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Email recipient status
 * @export
 * @enum {string}
 */

export const EmailRecipientStatus = {
    Unknown: 'unknown',
    DocumentOpened: 'document_opened',
    EmailOpened: 'email_opened'
} as const;

export type EmailRecipientStatus = typeof EmailRecipientStatus[keyof typeof EmailRecipientStatus];



