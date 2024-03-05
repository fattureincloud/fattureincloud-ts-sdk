/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.32
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { EmailDataDefaultSenderEmail } from './email-data-default-sender-email';
// May contain unused imports in some cases
// @ts-ignore
import { SenderEmail } from './sender-email';

/**
 * 
 * @export
 * @interface EmailData
 */
export interface EmailData {
    /**
     * Email recipient
     * @type {string}
     * @memberof EmailData
     */
    'recipient_email'?: string | null;
    /**
     * 
     * @type {EmailDataDefaultSenderEmail}
     * @memberof EmailData
     */
    'default_sender_email'?: EmailDataDefaultSenderEmail | null;
    /**
     * List of all emails from which the document can be sent
     * @type {Array<SenderEmail>}
     * @memberof EmailData
     */
    'sender_emails_list'?: Array<SenderEmail> | null;
    /**
     * Email cc [by default is the logged company email]
     * @type {string}
     * @memberof EmailData
     */
    'cc_email'?: string | null;
    /**
     * Email subject
     * @type {string}
     * @memberof EmailData
     */
    'subject'?: string | null;
    /**
     * Email body
     * @type {string}
     * @memberof EmailData
     */
    'body'?: string | null;
    /**
     * Document exists if it is not a delivery note
     * @type {boolean}
     * @memberof EmailData
     */
    'document_exists'?: boolean | null;
    /**
     * Document is a delivery note
     * @type {boolean}
     * @memberof EmailData
     */
    'delivery_note_exists'?: boolean | null;
    /**
     * Document has attachment
     * @type {boolean}
     * @memberof EmailData
     */
    'attachment_exists'?: boolean | null;
    /**
     * Document has accompanying invoice
     * @type {boolean}
     * @memberof EmailData
     */
    'accompanying_invoice_exists'?: boolean | null;
    /**
     * Attach document pdf
     * @type {boolean}
     * @memberof EmailData
     */
    'default_attach_pdf'?: boolean | null;
}

