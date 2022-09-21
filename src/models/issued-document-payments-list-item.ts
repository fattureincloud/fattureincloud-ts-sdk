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


// May contain unused imports in some cases
// @ts-ignore
import { IssuedDocumentPaymentsListItemPaymentTerms } from './issued-document-payments-list-item-payment-terms';
// May contain unused imports in some cases
// @ts-ignore
import { IssuedDocumentStatus } from './issued-document-status';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentAccount } from './payment-account';

/**
 * 
 * @export
 * @interface IssuedDocumentPaymentsListItem
 */
export interface IssuedDocumentPaymentsListItem {
    /**
     * Unique identifier.
     * @type {number}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'id'?: number | null;
    /**
     * Due date.
     * @type {string}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'due_date'?: string | null;
    /**
     * Payment amount.
     * @type {number}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'amount'?: number | null;
    /**
     * 
     * @type {IssuedDocumentStatus}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'status'?: IssuedDocumentStatus;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'payment_account'?: PaymentAccount | null;
    /**
     * Payment date. [Only if status is paid]
     * @type {string}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'paid_date'?: string | null;
    /**
     * Advanced raw attributes for e-invoices.
     * @type {object}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'ei_raw'?: object | null;
    /**
     * 
     * @type {IssuedDocumentPaymentsListItemPaymentTerms}
     * @memberof IssuedDocumentPaymentsListItem
     */
    'payment_terms'?: IssuedDocumentPaymentsListItemPaymentTerms;
}

