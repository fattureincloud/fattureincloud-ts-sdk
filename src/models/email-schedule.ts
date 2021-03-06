/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EmailScheduleInclude } from './email-schedule-include';

/**
 * 
 * @export
 * @interface EmailSchedule
 */
export interface EmailSchedule {
    /**
     * Sender id. Required if `sender_email` is not specified
     * @type {number}
     * @memberof EmailSchedule
     */
    'sender_id'?: number | null;
    /**
     * Sender email. Required if `sender_id` is not specified
     * @type {string}
     * @memberof EmailSchedule
     */
    'sender_email'?: string | null;
    /**
     * One or more comma separated recipient emails
     * @type {string}
     * @memberof EmailSchedule
     */
    'recipient_email'?: string | null;
    /**
     * Email subject
     * @type {string}
     * @memberof EmailSchedule
     */
    'subject'?: string | null;
    /**
     * Email body
     * @type {string}
     * @memberof EmailSchedule
     */
    'body'?: string | null;
    /**
     * 
     * @type {EmailScheduleInclude}
     * @memberof EmailSchedule
     */
    'include'?: EmailScheduleInclude | null;
    /**
     * If set to true, documents will be sent as PDF attachments too
     * @type {boolean}
     * @memberof EmailSchedule
     */
    'attach_pdf'?: boolean | null;
    /**
     * If set to true, a copy of the email will be sent to the `cc_email` specified by `Get email data`
     * @type {boolean}
     * @memberof EmailSchedule
     */
    'send_copy'?: boolean | null;
}

