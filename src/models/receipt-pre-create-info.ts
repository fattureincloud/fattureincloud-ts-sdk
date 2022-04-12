/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PaymentAccount } from './payment-account';
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface ReceiptPreCreateInfo
 */
export interface ReceiptPreCreateInfo {
    /**
     * 
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof ReceiptPreCreateInfo
     */
    'numerations'?: { [key: string]: { [key: string]: number; }; };
    /**
     * List of series used in the past.
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'numerations_list'?: Array<string> | null;
    /**
     * List of revenue centers used in the past.
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'rc_centers_list'?: Array<string> | null;
    /**
     * User payment accounts list.
     * @type {Array<PaymentAccount>}
     * @memberof ReceiptPreCreateInfo
     */
    'payment_accounts_list'?: Array<PaymentAccount> | null;
    /**
     * List of categories used in the past.
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'categories_list'?: Array<string> | null;
    /**
     * List of user vat types with the default 22%, 10%, 4% and 0% vats.
     * @type {Array<VatType>}
     * @memberof ReceiptPreCreateInfo
     */
    'vat_types_list'?: Array<VatType> | null;
}
