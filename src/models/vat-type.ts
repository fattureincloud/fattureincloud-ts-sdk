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



/**
 * 
 * @export
 * @interface VatType
 */
export interface VatType {
    /**
     * Unique identifier
     * @type {number}
     * @memberof VatType
     */
    'id'?: number | null;
    /**
     * [Read Only] Percentual value.
     * @type {number}
     * @memberof VatType
     */
    'value'?: number | null;
    /**
     * Short description.
     * @type {string}
     * @memberof VatType
     */
    'description'?: string | null;
    /**
     * Long description and notes shown in documents.
     * @type {string}
     * @memberof VatType
     */
    'notes'?: string | null;
    /**
     * Usable for e-invoices.
     * @type {boolean}
     * @memberof VatType
     */
    'e_invoice'?: boolean | null;
    /**
     * E-invoice type (natura).
     * @type {string}
     * @memberof VatType
     */
    'ei_type'?: string | null;
    /**
     * E-invoice description.
     * @type {string}
     * @memberof VatType
     */
    'ei_description'?: string | null;
    /**
     * [Read Only] Determine if this vat type is editable.
     * @type {boolean}
     * @memberof VatType
     */
    'editable'?: boolean | null;
    /**
     * Determine if the vat type is disabled.
     * @type {boolean}
     * @memberof VatType
     */
    'is_disabled'?: boolean | null;
}

