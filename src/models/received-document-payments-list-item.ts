/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.25
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PaymentAccount } from './payment-account';
import { ReceivedDocumentPaymentsListItemPaymentTerms } from './received-document-payments-list-item-payment-terms';

/**
 * 
 * @export
 * @interface ReceivedDocumentPaymentsListItem
 */
export interface ReceivedDocumentPaymentsListItem {
    /**
     * Unique identifier.
     * @type {number}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'id'?: number | null;
    /**
     * Amount of items.
     * @type {number}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'amount'?: number | null;
    /**
     * Due date
     * @type {string}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'due_date'?: string | null;
    /**
     * Paid date
     * @type {string}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'paid_date'?: string | null;
    /**
     * 
     * @type {ReceivedDocumentPaymentsListItemPaymentTerms}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'payment_terms'?: ReceivedDocumentPaymentsListItemPaymentTerms | null;
    /**
     * Payment status.
     * @type {string}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'status'?: string | null;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof ReceivedDocumentPaymentsListItem
     */
    'payment_account'?: PaymentAccount | null;
}

