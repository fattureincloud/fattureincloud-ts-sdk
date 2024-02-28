/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.32
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PaymentAccount } from './payment-account';
// May contain unused imports in some cases
// @ts-ignore
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
     * Receipt used numerations list
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'numerations_list'?: Array<string> | null;
    /**
     * Receipt used revenue centers list
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'rc_centers_list'?: Array<string> | null;
    /**
     * Payment accounts list
     * @type {Array<PaymentAccount>}
     * @memberof ReceiptPreCreateInfo
     */
    'payment_accounts_list'?: Array<PaymentAccount> | null;
    /**
     * Receipt categories list
     * @type {Array<string>}
     * @memberof ReceiptPreCreateInfo
     */
    'categories_list'?: Array<string> | null;
    /**
     * Vat types list
     * @type {Array<VatType>}
     * @memberof ReceiptPreCreateInfo
     */
    'vat_types_list'?: Array<VatType> | null;
}

