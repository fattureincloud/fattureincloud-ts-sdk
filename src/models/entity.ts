/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.16
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DefaultPaymentTermsType } from './default-payment-terms-type';
import { EntityType } from './entity-type';
import { PaymentMethod } from './payment-method';
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * Unique identifier
     * @type {number}
     * @memberof Entity
     */
    'id'?: number | null;
    /**
     * Code.
     * @type {string}
     * @memberof Entity
     */
    'code'?: string | null;
    /**
     * Name
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
     * First name.
     * @type {string}
     * @memberof Entity
     */
    'first_name'?: string | null;
    /**
     * Last name.
     * @type {string}
     * @memberof Entity
     */
    'last_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    'contact_person'?: string | null;
    /**
     * Vat number
     * @type {string}
     * @memberof Entity
     */
    'vat_number'?: string | null;
    /**
     * Tax code.
     * @type {string}
     * @memberof Entity
     */
    'tax_code'?: string | null;
    /**
     * Street address.
     * @type {string}
     * @memberof Entity
     */
    'address_street'?: string | null;
    /**
     * Postal code.
     * @type {string}
     * @memberof Entity
     */
    'address_postal_code'?: string | null;
    /**
     * City.
     * @type {string}
     * @memberof Entity
     */
    'address_city'?: string | null;
    /**
     * Province.
     * @type {string}
     * @memberof Entity
     */
    'address_province'?: string | null;
    /**
     * Address extra info.
     * @type {string}
     * @memberof Entity
     */
    'address_extra'?: string | null;
    /**
     * Country
     * @type {string}
     * @memberof Entity
     */
    'country'?: string | null;
    /**
     * Email.
     * @type {string}
     * @memberof Entity
     */
    'email'?: string | null;
    /**
     * Certified email.
     * @type {string}
     * @memberof Entity
     */
    'certified_email'?: string | null;
    /**
     * Phone.
     * @type {string}
     * @memberof Entity
     */
    'phone'?: string | null;
    /**
     * Fax.
     * @type {string}
     * @memberof Entity
     */
    'fax'?: string | null;
    /**
     * Extra notes.
     * @type {string}
     * @memberof Entity
     */
    'notes'?: string | null;
    /**
     * 
     * @type {VatType}
     * @memberof Entity
     */
    'default_vat'?: VatType | null;
    /**
     * [Only for client] Default payment terms.
     * @type {number}
     * @memberof Entity
     */
    'default_payment_terms'?: number | null;
    /**
     * 
     * @type {DefaultPaymentTermsType}
     * @memberof Entity
     */
    'default_payment_terms_type'?: DefaultPaymentTermsType;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof Entity
     */
    'default_payment_method'?: PaymentMethod;
    /**
     * [Only for client] Bank name.
     * @type {string}
     * @memberof Entity
     */
    'bank_name'?: string | null;
    /**
     * [Only for client] Iban.
     * @type {string}
     * @memberof Entity
     */
    'bank_iban'?: string | null;
    /**
     * [Only for client] Bank swift code.
     * @type {string}
     * @memberof Entity
     */
    'bank_swift_code'?: string | null;
    /**
     * [Only for client] Shipping address.
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
     * [Only for client] Intent declaration protocol number.
     * @type {string}
     * @memberof Entity
     */
    'intent_declaration_protocol_number'?: string | null;
    /**
     * [Only for client] Intent declaration protocol date.
     * @type {string}
     * @memberof Entity
     */
    'intent_declaration_protocol_date'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    'updated_at'?: string | null;
}

