/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentAccount } from './payment-account';
// May contain unused imports in some cases
// @ts-ignore
import type { ReceivedDocumentInfoDefaultValues } from './received-document-info-default-values';
// May contain unused imports in some cases
// @ts-ignore
import type { ReceivedDocumentInfoItemsDefaultValues } from './received-document-info-items-default-values';
// May contain unused imports in some cases
// @ts-ignore
import type { VatType } from './vat-type';

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
     * Countries list
     * @type {Array<string>}
     * @memberof ReceivedDocumentInfo
     */
    'countries_list'?: Array<string> | null;
    /**
     * Currencies list
     * @type {Array<Currency>}
     * @memberof ReceivedDocumentInfo
     */
    'currencies_list'?: Array<Currency> | null;
    /**
     * Categories list
     * @type {Array<string>}
     * @memberof ReceivedDocumentInfo
     */
    'categories_list'?: Array<string> | null;
    /**
     * Payments accounts list
     * @type {Array<PaymentAccount>}
     * @memberof ReceivedDocumentInfo
     */
    'payment_accounts_list'?: Array<PaymentAccount> | null;
    /**
     * Vat types list
     * @type {Array<VatType>}
     * @memberof ReceivedDocumentInfo
     */
    'vat_types_list'?: Array<VatType> | null;
}

