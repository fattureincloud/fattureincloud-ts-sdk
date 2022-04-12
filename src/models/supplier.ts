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


import { SupplierType } from './supplier-type';

/**
 * 
 * @export
 * @interface Supplier
 */
export interface Supplier {
    /**
     * Unique identifier
     * @type {number}
     * @memberof Supplier
     */
    'id'?: number | null;
    /**
     * Supplier code.
     * @type {string}
     * @memberof Supplier
     */
    'code'?: string | null;
    /**
     * Supplier name.
     * @type {string}
     * @memberof Supplier
     */
    'name'?: string | null;
    /**
     * 
     * @type {SupplierType}
     * @memberof Supplier
     */
    'type'?: SupplierType | null;
    /**
     * Supplier first name.
     * @type {string}
     * @memberof Supplier
     */
    'first_name'?: string | null;
    /**
     * Supplier last name.
     * @type {string}
     * @memberof Supplier
     */
    'last_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Supplier
     */
    'contact_person'?: string | null;
    /**
     * Supplier vat number.
     * @type {string}
     * @memberof Supplier
     */
    'vat_number'?: string | null;
    /**
     * Supplier tax code.
     * @type {string}
     * @memberof Supplier
     */
    'tax_code'?: string | null;
    /**
     * Supplier street address.
     * @type {string}
     * @memberof Supplier
     */
    'address_street'?: string | null;
    /**
     * Supplier postal code.
     * @type {string}
     * @memberof Supplier
     */
    'address_postal_code'?: string | null;
    /**
     * Supplier city.
     * @type {string}
     * @memberof Supplier
     */
    'address_city'?: string | null;
    /**
     * Supplier province.
     * @type {string}
     * @memberof Supplier
     */
    'address_province'?: string | null;
    /**
     * Supplier address extra info.
     * @type {string}
     * @memberof Supplier
     */
    'address_extra'?: string | null;
    /**
     * Supplier country.
     * @type {string}
     * @memberof Supplier
     */
    'country'?: string | null;
    /**
     * Supplier email.
     * @type {string}
     * @memberof Supplier
     */
    'email'?: string | null;
    /**
     * Supplier certified email.
     * @type {string}
     * @memberof Supplier
     */
    'certified_email'?: string | null;
    /**
     * Supplier phone.
     * @type {string}
     * @memberof Supplier
     */
    'phone'?: string | null;
    /**
     * Supplier fax.
     * @type {string}
     * @memberof Supplier
     */
    'fax'?: string | null;
    /**
     * Supplier extra notes.
     * @type {string}
     * @memberof Supplier
     */
    'notes'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Supplier
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Supplier
     */
    'updated_at'?: string | null;
}
