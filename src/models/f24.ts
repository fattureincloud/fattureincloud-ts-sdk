/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.24
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { F24Status } from './f24-status';
import { PaymentAccount } from './payment-account';

/**
 * 
 * @export
 * @interface F24
 */
export interface F24 {
    /**
     * Unique F24 identifier.
     * @type {number}
     * @memberof F24
     */
    'id'?: number | null;
    /**
     * Due date.
     * @type {string}
     * @memberof F24
     */
    'due_date'?: string | null;
    /**
     * 
     * @type {F24Status}
     * @memberof F24
     */
    'status'?: F24Status;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof F24
     */
    'payment_account'?: PaymentAccount | null;
    /**
     * Taxes amount.
     * @type {number}
     * @memberof F24
     */
    'amount'?: number | null;
    /**
     * [Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /taxes or PUT /taxes/{documentId}.
     * @type {string}
     * @memberof F24
     */
    'attachment_url'?: string | null;
    /**
     * [Write Only] Attachment token returned by POST /taxes/attachment. Used to attach the file already uploaded.
     * @type {string}
     * @memberof F24
     */
    'attachment_token'?: string | null;
    /**
     * Name or brief description.
     * @type {string}
     * @memberof F24
     */
    'description'?: string | null;
}

