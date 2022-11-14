/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.21
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PaymentAccount } from './payment-account';
import { PaymentMethodDetails } from './payment-method-details';
import { PaymentMethodType } from './payment-method-type';

/**
 * 
 * @export
 * @interface PaymentMethod
 */
export interface PaymentMethod {
    /**
     * Unique identifier
     * @type {number}
     * @memberof PaymentMethod
     */
    'id'?: number | null;
    /**
     * Name of the payment method
     * @type {string}
     * @memberof PaymentMethod
     */
    'name'?: string | null;
    /**
     * 
     * @type {PaymentMethodType}
     * @memberof PaymentMethod
     */
    'type'?: PaymentMethodType;
    /**
     * Determines if this is the default payment method.
     * @type {boolean}
     * @memberof PaymentMethod
     */
    'is_default'?: boolean | null;
    /**
     * 
     * @type {PaymentAccount}
     * @memberof PaymentMethod
     */
    'default_payment_account'?: PaymentAccount | null;
    /**
     * Method details rows
     * @type {Array<PaymentMethodDetails>}
     * @memberof PaymentMethod
     */
    'details'?: Array<PaymentMethodDetails> | null;
    /**
     * Bank iban
     * @type {string}
     * @memberof PaymentMethod
     */
    'bank_iban'?: string | null;
    /**
     * Bank name
     * @type {string}
     * @memberof PaymentMethod
     */
    'bank_name'?: string | null;
    /**
     * Bank beneficiary
     * @type {string}
     * @memberof PaymentMethod
     */
    'bank_beneficiary'?: string | null;
    /**
     * E-invoice payment method
     * @type {string}
     * @memberof PaymentMethod
     */
    'ei_payment_method'?: string | null;
}

