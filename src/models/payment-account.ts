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


import { PaymentAccountType } from './payment-account-type';

/**
 * 
 * @export
 * @interface PaymentAccount
 */
export interface PaymentAccount {
    /**
     * Unique identifier
     * @type {number}
     * @memberof PaymentAccount
     */
    'id'?: number | null;
    /**
     * Payment account name.
     * @type {string}
     * @memberof PaymentAccount
     */
    'name'?: string | null;
    /**
     * 
     * @type {PaymentAccountType}
     * @memberof PaymentAccount
     */
    'type'?: PaymentAccountType;
    /**
     * Payment account iban.
     * @type {string}
     * @memberof PaymentAccount
     */
    'iban'?: string | null;
    /**
     * Payment account sia.
     * @type {string}
     * @memberof PaymentAccount
     */
    'sia'?: string | null;
    /**
     * Payment account cuc.
     * @type {string}
     * @memberof PaymentAccount
     */
    'cuc'?: string | null;
    /**
     * Determine if the payment method is virtual.
     * @type {boolean}
     * @memberof PaymentAccount
     */
    'virtual'?: boolean | null;
}

