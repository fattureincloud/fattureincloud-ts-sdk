/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.28
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PaymentTermsType } from './payment-terms-type';

/**
 * 
 * @export
 * @interface IssuedDocumentPaymentsListItemPaymentTerms
 */
export interface IssuedDocumentPaymentsListItemPaymentTerms {
    /**
     * The number of days by which the payment must be made.
     * @type {number}
     * @memberof IssuedDocumentPaymentsListItemPaymentTerms
     */
    'days'?: number | null;
    /**
     * 
     * @type {PaymentTermsType}
     * @memberof IssuedDocumentPaymentsListItemPaymentTerms
     */
    'type'?: PaymentTermsType;
}



