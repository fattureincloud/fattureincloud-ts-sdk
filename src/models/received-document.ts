/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.29
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import { Entity } from './entity';
// May contain unused imports in some cases
// @ts-ignore
import { ReceivedDocumentItemsListItem } from './received-document-items-list-item';
// May contain unused imports in some cases
// @ts-ignore
import { ReceivedDocumentPaymentsListItem } from './received-document-payments-list-item';
// May contain unused imports in some cases
// @ts-ignore
import { ReceivedDocumentType } from './received-document-type';

/**
 * 
 * @export
 * @interface ReceivedDocument
 */
export interface ReceivedDocument {
    /**
     * Received document id
     * @type {number}
     * @memberof ReceivedDocument
     */
    'id'?: number | null;
    /**
     * 
     * @type {ReceivedDocumentType}
     * @memberof ReceivedDocument
     */
    'type'?: ReceivedDocumentType;
    /**
     * 
     * @type {Entity}
     * @memberof ReceivedDocument
     */
    'entity'?: Entity;
    /**
     * Received document date [defaults to today\'s date]
     * @type {string}
     * @memberof ReceivedDocument
     */
    'date'?: string | null;
    /**
     * Received document category
     * @type {string}
     * @memberof ReceivedDocument
     */
    'category'?: string | null;
    /**
     * Received document description
     * @type {string}
     * @memberof ReceivedDocument
     */
    'description'?: string | null;
    /**
     * Received document total net amount
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_net'?: number | null;
    /**
     * Received document total vat amount
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_vat'?: number | null;
    /**
     * Received document withholding tax amount
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Received document other withholding tax amount
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * [Read Only] Received document total gross amount
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_gross'?: number | null;
    /**
     * Received document amortization value
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amortization'?: number | null;
    /**
     * Received document revenue center
     * @type {string}
     * @memberof ReceivedDocument
     */
    'rc_center'?: string | null;
    /**
     * Received document invoice number
     * @type {string}
     * @memberof ReceivedDocument
     */
    'invoice_number'?: string | null;
    /**
     * Received document is marked
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'is_marked'?: boolean | null;
    /**
     * Received document has items
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'is_detailed'?: boolean | null;
    /**
     * [Read Only] Received document is an e-invoice
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'e_invoice'?: boolean | null;
    /**
     * [Read Only] Received document date of the next not paid payment
     * @type {string}
     * @memberof ReceivedDocument
     */
    'next_due_date'?: string | null;
    /**
     * 
     * @type {Currency}
     * @memberof ReceivedDocument
     */
    'currency'?: Currency;
    /**
     * Received document tax deducibility percentage
     * @type {number}
     * @memberof ReceivedDocument
     */
    'tax_deductibility'?: number | null;
    /**
     * Received document vat deducibility percentage
     * @type {number}
     * @memberof ReceivedDocument
     */
    'vat_deductibility'?: number | null;
    /**
     * 
     * @type {Array<ReceivedDocumentItemsListItem>}
     * @memberof ReceivedDocument
     */
    'items_list'?: Array<ReceivedDocumentItemsListItem> | null;
    /**
     * 
     * @type {Array<ReceivedDocumentPaymentsListItem>}
     * @memberof ReceivedDocument
     */
    'payments_list'?: Array<ReceivedDocumentPaymentsListItem> | null;
    /**
     * [Temporary] [Read Only] Received document url of the attached file
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_url'?: string | null;
    /**
     * [Temporary] [Read Only] Received document url of the attachment preview
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_preview_url'?: string | null;
    /**
     * Received document total items amount and total payments amount can differ if this field is set to false
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'auto_calculate'?: boolean | null;
    /**
     * [Write Only] Received document attachment token returned by POST /received_documents/attachment
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_token'?: string | null;
    /**
     * Received document creation date
     * @type {string}
     * @memberof ReceivedDocument
     */
    'created_at'?: string | null;
    /**
     * Received document last update date
     * @type {string}
     * @memberof ReceivedDocument
     */
    'updated_at'?: string | null;
}



