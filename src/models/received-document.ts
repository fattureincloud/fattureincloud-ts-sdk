/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.21
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Currency } from './currency';
import { ReceivedDocumentEntity } from './received-document-entity';
import { ReceivedDocumentItemsListItem } from './received-document-items-list-item';
import { ReceivedDocumentPaymentsListItem } from './received-document-payments-list-item';
import { ReceivedDocumentType } from './received-document-type';

/**
 * 
 * @export
 * @interface ReceivedDocument
 */
export interface ReceivedDocument {
    /**
     * Unique identifier of the document.
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
     * @type {ReceivedDocumentEntity}
     * @memberof ReceivedDocument
     */
    'entity'?: ReceivedDocumentEntity | null;
    /**
     * Date of the document [If not specified, today date is used].
     * @type {string}
     * @memberof ReceivedDocument
     */
    'date'?: string | null;
    /**
     * Document category.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'category'?: string | null;
    /**
     * Document description.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'description'?: string | null;
    /**
     * Total net amount.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_net'?: number | null;
    /**
     * Total vat amount.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_vat'?: number | null;
    /**
     * Withholding tax amount.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Other withholding tax amount.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * [Read Only] Total gross amount.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amount_gross'?: number | null;
    /**
     * Amortization value
     * @type {number}
     * @memberof ReceivedDocument
     */
    'amortization'?: number | null;
    /**
     * Revenue center.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'rc_center'?: string | null;
    /**
     * Invoice number
     * @type {string}
     * @memberof ReceivedDocument
     */
    'invoice_number'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'is_marked'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'is_detailed'?: boolean | null;
    /**
     * [Read Only] Indicates if this is an e-invoice.
     * @type {boolean}
     * @memberof ReceivedDocument
     */
    'e_invoice'?: boolean | null;
    /**
     * [Read Only] Next due date.
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
     * Tax deducibility percentage.
     * @type {number}
     * @memberof ReceivedDocument
     */
    'tax_deductibility'?: number | null;
    /**
     * Vat deducibility percentage.
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
     * [Read Only] Attachment url.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_url'?: string | null;
    /**
     * [Read Only] Attachment preview url.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_preview_url'?: string | null;
    /**
     * Uploaded attachement token.
     * @type {string}
     * @memberof ReceivedDocument
     */
    'attachment_token'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReceivedDocument
     */
    'created_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReceivedDocument
     */
    'updated_at'?: string | null;
}

