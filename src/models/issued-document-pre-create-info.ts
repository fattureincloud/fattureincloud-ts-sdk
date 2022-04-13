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
import { DocumentTemplate } from './document-template';
import { IssuedDocumentPreCreateInfoDefaultValues } from './issued-document-pre-create-info-default-values';
import { IssuedDocumentPreCreateInfoExtraDataDefaultValues } from './issued-document-pre-create-info-extra-data-default-values';
import { IssuedDocumentPreCreateInfoItemsDefaultValues } from './issued-document-pre-create-info-items-default-values';
import { PaymentAccount } from './payment-account';
import { PaymentMethod } from './payment-method';
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface IssuedDocumentPreCreateInfo
 */
export interface IssuedDocumentPreCreateInfo {
    /**
     * 
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'numerations'?: { [key: string]: { [key: string]: number; }; };
    /**
     * 
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'dn_numerations'?: { [key: string]: { [key: string]: number; }; };
    /**
     * 
     * @type {IssuedDocumentPreCreateInfoDefaultValues}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'default_values'?: IssuedDocumentPreCreateInfoDefaultValues | null;
    /**
     * 
     * @type {IssuedDocumentPreCreateInfoExtraDataDefaultValues}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'extra_data_default_values'?: IssuedDocumentPreCreateInfoExtraDataDefaultValues | null;
    /**
     * 
     * @type {IssuedDocumentPreCreateInfoItemsDefaultValues}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'items_default_values'?: IssuedDocumentPreCreateInfoItemsDefaultValues | null;
    /**
     * Countries list.
     * @type {Array<string>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'countries_list'?: Array<string> | null;
    /**
     * Currencies list.
     * @type {Array<Currency>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'currencies_list'?: Array<Currency> | null;
    /**
     * Document templates list.
     * @type {Array<DocumentTemplate>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'templates_list'?: Array<DocumentTemplate> | null;
    /**
     * Delivery note templates list.
     * @type {Array<DocumentTemplate>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'dn_templates_list'?: Array<DocumentTemplate> | null;
    /**
     * Accompanying invoice templates list.
     * @type {Array<DocumentTemplate>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'ai_templates_list'?: Array<DocumentTemplate> | null;
    /**
     * Payment methods list.
     * @type {Array<PaymentMethod>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'payment_methods_list'?: Array<PaymentMethod> | null;
    /**
     * Payment accounts list.
     * @type {Array<PaymentAccount>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'payment_accounts_list'?: Array<PaymentAccount> | null;
    /**
     * Vat types list.
     * @type {Array<VatType>}
     * @memberof IssuedDocumentPreCreateInfo
     */
    'vat_types_list'?: Array<VatType> | null;
}

