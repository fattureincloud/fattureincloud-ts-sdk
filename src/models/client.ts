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


import { ClientType } from './client-type';
import { DefaultPaymentTermsType } from './default-payment-terms-type';
import { PaymentMethod } from './payment-method';
import { VatType } from './vat-type';

/**
 * 
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * Unique identifier
     * @type {number}
     * @memberof Client
     */
    'id'?: number | null;
    /**
     * Client code.
     * @type {string}
     * @memberof Client
     */
    'code'?: string | null;
    /**
     * Client name
     * @type {string}
     * @memberof Client
     */
    'name'?: string | null;
    /**
     * 
     * @type {ClientType}
     * @memberof Client
     */
    'type'?: ClientType | null;
    /**
     * Client first name.
     * @type {string}
     * @memberof Client
     */
    'first_name'?: string | null;
    /**
     * Client last name.
     * @type {string}
     * @memberof Client
     */
    'last_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'contact_person'?: string | null;
    /**
     * Client vat number
     * @type {string}
     * @memberof Client
     */
    'vat_number'?: string | null;
    /**
     * Client tax code.
     * @type {string}
     * @memberof Client
     */
    'tax_code'?: string | null;
    /**
     * Client street address.
     * @type {string}
     * @memberof Client
     */
    'address_street'?: string | null;
    /**
     * Client postal code.
     * @type {string}
     * @memberof Client
     */
    'address_postal_code'?: string | null;
    /**
     * Client city.
     * @type {string}
     * @memberof Client
     */
    'address_city'?: string | null;
    /**
     * Client province.
     * @type {string}
     * @memberof Client
     */
    'address_province'?: string | null;
    /**
     * Client address extra info.
     * @type {string}
     * @memberof Client
     */
    'address_extra'?: string | null;
    /**
     * Client country
     * @type {string}
     * @memberof Client
     */
    'country'?: string | null;
    /**
     * Client email.
     * @type {string}
     * @memberof Client
     */
    'email'?: string | null;
    /**
     * Client certified email.
     * @type {string}
     * @memberof Client
     */
    'certified_email'?: string | null;
    /**
     * Client phone.
     * @type {string}
     * @memberof Client
     */
    'phone'?: string | null;
    /**
     * Client fax.
     * @type {string}
     * @memberof Client
     */
    'fax'?: string | null;
    /**
     * Extra notes.
     * @type {string}
     * @memberof Client
     */
    'notes'?: string | null;
    /**
     * 
     * @type {VatType}
     * @memberof Client
     */
    'default_vat'?: VatType | null;
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    'default_payment_terms'?: number | null;
    /**
     * 
     * @type {DefaultPaymentTermsType}
     * @memberof Client
     */
    'default_payment_terms_type'?: DefaultPaymentTermsType;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof Client
     */
    'default_payment_method'?: PaymentMethod;
    /**
     * Client bank name.
     * @type {string}
     * @memberof Client
     */
    'bank_name'?: string | null;
    /**
     * Client iban.
     * @type {string}
     * @memberof Client
     */
    'bank_iban'?: string | null;
    /**
     * Client bank swift code.
     * @type {string}
     * @memberof Client
     */
    'bank_swift_code'?: string | null;
    /**
     * Client shipping address.
     * @type {string}
     * @memberof Client
     */
    'shipping_address'?: string | null;
    /**
     * Use e-invoices for this entity
     * @type {boolean}
     * @memberof Client
     */
    'e_invoice'?: boolean | null;
    /**
     * E-invoice code
     * @type {string}
     * @memberof Client
     */
    'ei_code'?: string | null;
    /**
     * Discount Highlight.
     * @type {boolean}
     * @memberof Client
     */
    'discount_highlight'?: boolean | null;
    /**
     * Default discount.
     * @type {number}
     * @memberof Client
     */
    'default_discount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'updated_at'?: string | null;
}
