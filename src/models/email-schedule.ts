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


// May contain unused imports in some cases
// @ts-ignore
import type { EmailScheduleInclude } from './email-schedule-include';

/**
 * 
 * @export
 * @interface EmailSchedule
 */
export interface EmailSchedule {
    /**
     * Email sender id [required if **sender_email** is not specified]
     * @type {number}
     * @memberof EmailSchedule
     */
    'sender_id'?: number | null;
    /**
     * Email sender address [required if **sender_id** is not specified]
     * @type {string}
     * @memberof EmailSchedule
     */
    'sender_email'?: string | null;
    /**
     * Email recipient emails [comma separated]
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
     * Email body [HTML Escaped] [max size 50KiB]
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
     * Attach the pdf of the document
     * @type {boolean}
     * @memberof EmailSchedule
     */
    'attach_pdf'?: boolean | null;
    /**
     * Send a copy of the email to the **cc_email** specified by **Get email data**
     * @type {boolean}
     * @memberof EmailSchedule
     */
    'send_copy'?: boolean | null;
}

