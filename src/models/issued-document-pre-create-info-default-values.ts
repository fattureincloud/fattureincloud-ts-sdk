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


import { DocumentTemplate } from './document-template';
import { PaymentMethod } from './payment-method';

/**
 * Default values for the document.
 * @export
 * @interface IssuedDocumentPreCreateInfoDefaultValues
 */
export interface IssuedDocumentPreCreateInfoDefaultValues {
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'default_template'?: DocumentTemplate;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'dn_template'?: DocumentTemplate;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'ai_template'?: DocumentTemplate;
    /**
     * Default notes.
     * @type {string}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'notes'?: string | null;
    /**
     * Default rivalsa percentage.
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'rivalsa'?: number | null;
    /**
     * Default cassa percentage.
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'cassa'?: number | null;
    /**
     * Default withholding tax percentage.
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'withholding_tax'?: number | null;
    /**
     * Default withholding tax taxable percentage.
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'withholding_tax_taxable'?: number | null;
    /**
     * Default other withholding tax percentage.
     * @type {number}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'other_withholding_tax'?: number | null;
    /**
     * Use gross price by default.
     * @type {boolean}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'use_gross_prices'?: boolean | null;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof IssuedDocumentPreCreateInfoDefaultValues
     */
    'payment_method'?: PaymentMethod;
}

