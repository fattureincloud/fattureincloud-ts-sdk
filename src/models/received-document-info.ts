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


import { Currency } from './currency';
import { PaymentAccount } from './payment-account';
import { ReceivedDocumentInfoDefaultValues } from './received-document-info-default-values';
import { ReceivedDocumentInfoItemsDefaultValues } from './received-document-info-items-default-values';
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface ReceivedDocumentInfo
 */
export interface ReceivedDocumentInfo {
    /**
     * 
     * @type {ReceivedDocumentInfoDefaultValues}
     * @memberof ReceivedDocumentInfo
     */
    'default_values'?: ReceivedDocumentInfoDefaultValues | null;
    /**
     * 
     * @type {ReceivedDocumentInfoItemsDefaultValues}
     * @memberof ReceivedDocumentInfo
     */
    'items_default_values'?: ReceivedDocumentInfoItemsDefaultValues | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReceivedDocumentInfo
     */
    'countries_list'?: Array<string> | null;
    /**
     * 
     * @type {Array<Currency>}
     * @memberof ReceivedDocumentInfo
     */
    'currencies_list'?: Array<Currency> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReceivedDocumentInfo
     */
    'categories_list'?: Array<string> | null;
    /**
     * 
     * @type {Array<PaymentAccount>}
     * @memberof ReceivedDocumentInfo
     */
    'payment_accounts_list'?: Array<PaymentAccount> | null;
    /**
     * 
     * @type {Array<VatType>}
     * @memberof ReceivedDocumentInfo
     */
    'vat_types_list'?: Array<VatType> | null;
}
