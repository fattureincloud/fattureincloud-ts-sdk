/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.23
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PaymentAccount } from './payment-account';
import { ReceiptItemsListItem } from './receipt-items-list-item';
import { ReceiptType } from './receipt-type';

/**
 * 
 * @export
 * @interface Receipt
 */
export interface Receipt {
    /**
     * Receipt unique identifier.
     * @type {number}
     * @memberof Receipt
     */
    'id'?: number | null;
    /**
     * Receipt date.
     * @type {string}
     * @memberof Receipt
     */
    'date'?: string | null;
    /**
     * Receipt number.
     * @type {number}
     * @memberof Receipt
     */
    'number'?: number | null;
    /**
     * If it\'s null or empty string use the default numeration.
     * @type {string}
     * @memberof Receipt
     */
    'numeration'?: string | null;
    /**
     * Total net amount.
     * @type {number}
     * @memberof Receipt
     */
    'amount_net'?: number | null;
    /**
     * Total vat amount.
     * @type {number}
     * @memberof Receipt
     */
    'amount_vat'?: number | null;
    /**
     * Total gross amount.
     * @type {number}
     * @memberof Receipt
     */
    'amount_gross'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof Receipt
     */
    'use_gross_prices'?: boolean | null;
    /**
     * 
     * @type {ReceiptType}
     * @memberof Receipt
     */
    'type'?: ReceiptType;
    /**
     * Receipt description.
     * @type {string}
     * @memberof Receipt
     */
    'description'?: string | null;
    /**
     * Revenue center.
     * @type {string}
     * @memberof Receipt
     */
    'rc_center'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'updated_at'?: string | null;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof Receipt
     */
    'payment_account'?: PaymentAccount | null;
    /**
     * 
     * @type {Array<ReceiptItemsListItem>}
     * @memberof Receipt
     */
    'items_list'?: Array<ReceiptItemsListItem> | null;
}

