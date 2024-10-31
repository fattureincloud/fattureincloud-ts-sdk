/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { EntityType } from './entity-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethod } from './payment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentTermsType } from './payment-terms-type';
// May contain unused imports in some cases
// @ts-ignore
import type { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * Entity id
     * @type {number}
     * @memberof Entity
     */
    'id'?: number | null;
    /**
     * Entity code
     * @type {string}
     * @memberof Entity
     */
    'code'?: string | null;
    /**
     * Entity name
     * @type {string}
     * @memberof Entity
     */
    'name'?: string | null;
    /**
     * 
     * @type {EntityType}
     * @memberof Entity
     */
    'type'?: EntityType | null;
    /**
     * Entity first name
     * @type {string}
     * @memberof Entity
     */
    'first_name'?: string | null;
    /**
     * Entity last name
     * @type {string}
     * @memberof Entity
     */
    'last_name'?: string | null;
    /**
     * Entity contact person
     * @type {string}
     * @memberof Entity
     */
    'contact_person'?: string | null;
    /**
     * Entity vat number
     * @type {string}
     * @memberof Entity
     */
    'vat_number'?: string | null;
    /**
     * Entity tax code
     * @type {string}
     * @memberof Entity
     */
    'tax_code'?: string | null;
    /**
     * Entitity address street
     * @type {string}
     * @memberof Entity
     */
    'address_street'?: string | null;
    /**
     * Entity address postal code
     * @type {string}
     * @memberof Entity
     */
    'address_postal_code'?: string | null;
    /**
     * Entity address city
     * @type {string}
     * @memberof Entity
     */
    'address_city'?: string | null;
    /**
     * Entity address province
     * @type {string}
     * @memberof Entity
     */
    'address_province'?: string | null;
    /**
     * Entity address extra info
     * @type {string}
     * @memberof Entity
     */
    'address_extra'?: string | null;
    /**
     * Entity country
     * @type {string}
     * @memberof Entity
     */
    'country'?: string | null;
    /**
     * Entity country iso code
     * @type {string}
     * @memberof Entity
     */
    'country_iso'?: string | null;
    /**
     * Entity email
     * @type {string}
     * @memberof Entity
     */
    'email'?: string | null;
    /**
     * Entity certified email
     * @type {string}
     * @memberof Entity
     */
    'certified_email'?: string | null;
    /**
     * Entity phone
     * @type {string}
     * @memberof Entity
     */
    'phone'?: string | null;
    /**
     * Entity fax
     * @type {string}
     * @memberof Entity
     */
    'fax'?: string | null;
    /**
     * Entity extra
     * @type {string}
     * @memberof Entity
     */
    'notes'?: string | null;
    /**
     * [Only for client] Client default payment terms
     * @type {number}
     * @memberof Entity
     */
    'default_payment_terms'?: number | null;
    /**
     * 
     * @type {VatType}
     * @memberof Entity
     */
    'default_vat'?: VatType | null;
    /**
     * 
     * @type {PaymentTermsType}
     * @memberof Entity
     */
    'default_payment_terms_type'?: PaymentTermsType;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof Entity
     */
    'default_payment_method'?: PaymentMethod;
    /**
     * [Only for client] Client bank name
     * @type {string}
     * @memberof Entity
     */
    'bank_name'?: string | null;
    /**
     * [Only for client] Client bank iban
     * @type {string}
     * @memberof Entity
     */
    'bank_iban'?: string | null;
    /**
     * [Only for client] Client bank swift code
     * @type {string}
     * @memberof Entity
     */
    'bank_swift_code'?: string | null;
    /**
     * [Only for client] Client Shipping address
     * @type {string}
     * @memberof Entity
     */
    'shipping_address'?: string | null;
    /**
     * [Only for client] Use e-invoices.
     * @type {boolean}
     * @memberof Entity
     */
    'e_invoice'?: boolean | null;
    /**
     * [Only for client] E-invoices code.
     * @type {string}
     * @memberof Entity
     */
    'ei_code'?: string | null;
    /**
     * [Only for client] Has intent declaration.
     * @type {boolean}
     * @memberof Entity
     */
    'has_intent_declaration'?: boolean | null;
    /**
     * [Only for client] Client intent declaration protocol number
     * @type {string}
     * @memberof Entity
     */
    'intent_declaration_protocol_number'?: string | null;
    /**
     * [Only for client] Client intent declaration protocol date
     * @type {string}
     * @memberof Entity
     */
    'intent_declaration_protocol_date'?: string | null;
    /**
     * Entity creation date
     * @type {string}
     * @memberof Entity
     */
    'created_at'?: string | null;
    /**
     * Entity last update date
     * @type {string}
     * @memberof Entity
     */
    'updated_at'?: string | null;
}



