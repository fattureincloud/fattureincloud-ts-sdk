/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CashbookEntryDocument } from './cashbook-entry-document';
// May contain unused imports in some cases
// @ts-ignore
import type { CashbookEntryKind } from './cashbook-entry-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { CashbookEntryType } from './cashbook-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentAccount } from './payment-account';

/**
 * 
 * @export
 * @interface CashbookEntry
 */
export interface CashbookEntry {
    /**
     * Cashbook id
     * @type {string}
     * @memberof CashbookEntry
     */
    'id'?: string | null;
    /**
     * Cashbook date
     * @type {string}
     * @memberof CashbookEntry
     */
    'date'?: string | null;
    /**
     * Cashbook description
     * @type {string}
     * @memberof CashbookEntry
     */
    'description'?: string | null;
    /**
     * 
     * @type {CashbookEntryKind}
     * @memberof CashbookEntry
     */
    'kind'?: CashbookEntryKind;
    /**
     * 
     * @type {CashbookEntryType}
     * @memberof CashbookEntry
     */
    'type'?: CashbookEntryType | null;
    /**
     * Cashbook entity name
     * @type {string}
     * @memberof CashbookEntry
     */
    'entity_name'?: string | null;
    /**
     * 
     * @type {CashbookEntryDocument}
     * @memberof CashbookEntry
     */
    'document'?: CashbookEntryDocument | null;
    /**
     * [Only for cashbook entry in] Cashbook total amount in
     * @type {number}
     * @memberof CashbookEntry
     */
    'amount_in'?: number | null;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof CashbookEntry
     */
    'payment_account_in'?: PaymentAccount | null;
    /**
     * [Only for cashbook entry out] Cashbook total amount out
     * @type {number}
     * @memberof CashbookEntry
     */
    'amount_out'?: number | null;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof CashbookEntry
     */
    'payment_account_out'?: PaymentAccount | null;
}



