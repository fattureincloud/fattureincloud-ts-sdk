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


// May contain unused imports in some cases
// @ts-ignore
import type { EmailAttachment } from './email-attachment';
// May contain unused imports in some cases
// @ts-ignore
import type { EmailRecipientStatus } from './email-recipient-status';
// May contain unused imports in some cases
// @ts-ignore
import type { EmailStatus } from './email-status';

/**
 * 
 * @export
 * @interface Email
 */
export interface Email {
    /**
     * Email id
     * @type {number}
     * @memberof Email
     */
    'id'?: number | null;
    /**
     * 
     * @type {EmailStatus}
     * @memberof Email
     */
    'status'?: EmailStatus;
    /**
     * Email sent date
     * @type {string}
     * @memberof Email
     */
    'sent_date'?: string | null;
    /**
     * Email errors count
     * @type {number}
     * @memberof Email
     */
    'errors_count'?: number | null;
    /**
     * Email errors log
     * @type {string}
     * @memberof Email
     */
    'error_log'?: string | null;
    /**
     * Email sender email
     * @type {string}
     * @memberof Email
     */
    'from_email'?: string | null;
    /**
     * Email sender name
     * @type {string}
     * @memberof Email
     */
    'from_name'?: string | null;
    /**
     * Email recipient email
     * @type {string}
     * @memberof Email
     */
    'to_email'?: string | null;
    /**
     * Email receipient name
     * @type {string}
     * @memberof Email
     */
    'to_name'?: string | null;
    /**
     * Email subject
     * @type {string}
     * @memberof Email
     */
    'subject'?: string | null;
    /**
     * Email content
     * @type {string}
     * @memberof Email
     */
    'content'?: string | null;
    /**
     * Email cc
     * @type {string}
     * @memberof Email
     */
    'copy_to'?: string | null;
    /**
     * 
     * @type {EmailRecipientStatus}
     * @memberof Email
     */
    'recipient_status'?: EmailRecipientStatus;
    /**
     * Email recipient date
     * @type {string}
     * @memberof Email
     */
    'recipient_date'?: string | null;
    /**
     * Email kind
     * @type {string}
     * @memberof Email
     */
    'kind'?: string | null;
    /**
     * Email attachments
     * @type {Array<EmailAttachment>}
     * @memberof Email
     */
    'attachments'?: Array<EmailAttachment> | null;
}



