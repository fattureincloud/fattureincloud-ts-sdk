/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.33
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Currency } from './currency';
// May contain unused imports in some cases
// @ts-ignore
import type { DocumentTemplate } from './document-template';
// May contain unused imports in some cases
// @ts-ignore
import type { Entity } from './entity';
// May contain unused imports in some cases
// @ts-ignore
import type { IssuedDocumentEiData } from './issued-document-ei-data';
// May contain unused imports in some cases
// @ts-ignore
import type { IssuedDocumentExtraData } from './issued-document-extra-data';
// May contain unused imports in some cases
// @ts-ignore
import type { IssuedDocumentItemsListItem } from './issued-document-items-list-item';
// May contain unused imports in some cases
// @ts-ignore
import type { IssuedDocumentPaymentsListItem } from './issued-document-payments-list-item';
// May contain unused imports in some cases
// @ts-ignore
import type { IssuedDocumentType } from './issued-document-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Language } from './language';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethod } from './payment-method';
// May contain unused imports in some cases
// @ts-ignore
import type { ShowTotalsMode } from './show-totals-mode';

/**
 * 
 * @export
 * @interface IssuedDocument
 */
export interface IssuedDocument {
    /**
     * Issued document id
     * @type {number}
     * @memberof IssuedDocument
     */
    'id'?: number | null;
    /**
     * 
     * @type {Entity}
     * @memberof IssuedDocument
     */
    'entity'?: Entity;
    /**
     * 
     * @type {IssuedDocumentType}
     * @memberof IssuedDocument
     */
    'type'?: IssuedDocumentType;
    /**
     * Issued document number [If not specified, next number is used]
     * @type {number}
     * @memberof IssuedDocument
     */
    'number'?: number | null;
    /**
     * Issued document numeration [Not available if type=delivery_note]
     * @type {string}
     * @memberof IssuedDocument
     */
    'numeration'?: string | null;
    /**
     * Issued document date [defaults to today\'s date]
     * @type {string}
     * @memberof IssuedDocument
     */
    'date'?: string | null;
    /**
     * Issued document year
     * @type {number}
     * @memberof IssuedDocument
     */
    'year'?: number | null;
    /**
     * 
     * @type {Currency}
     * @memberof IssuedDocument
     */
    'currency'?: Currency;
    /**
     * 
     * @type {Language}
     * @memberof IssuedDocument
     */
    'language'?: Language;
    /**
     * Issued document subject
     * @type {string}
     * @memberof IssuedDocument
     */
    'subject'?: string | null;
    /**
     * Issued document visible subject
     * @type {string}
     * @memberof IssuedDocument
     */
    'visible_subject'?: string | null;
    /**
     * Issued document revenue center [or cost center if type=supplier_order].
     * @type {string}
     * @memberof IssuedDocument
     */
    'rc_center'?: string | null;
    /**
     * Issued document extra notes
     * @type {string}
     * @memberof IssuedDocument
     */
    'notes'?: string | null;
    /**
     * Issued document \"Rivalsa INPS\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'rivalsa'?: number | null;
    /**
     * Issued document \"Cassa previdenziale\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa'?: number | null;
    /**
     * [Read Only] Issued document cassa amount.
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa'?: number | null;
    /**
     * Issued document cassa taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa_taxable'?: number | null;
    /**
     * [Can be set only if cassa_taxable is NULL] Issued document cassa taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa_taxable'?: number | null;
    /**
     * Issued document \"Cassa previdenziale 2\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa2'?: number | null;
    /**
     * [Read Only] Issued document cassa2 amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa2'?: number | null;
    /**
     * Issued document cassa2 taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa2_taxable'?: number | null;
    /**
     * [Can be set only if cassa2_taxable is NULL] Issued document cassa2 taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa2_taxable'?: number | null;
    /**
     * Issued document global cassa taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'global_cassa_taxable'?: number | null;
    /**
     * [Can be set only if global_cassa_taxable is NULL] Issued document global cassa taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_global_cassa_taxable'?: number | null;
    /**
     * Issued document withholding tax (ritenuta d\'acconto) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'withholding_tax'?: number | null;
    /**
     * Issued document withholding tax taxable (imponibile) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'withholding_tax_taxable'?: number | null;
    /**
     * Issued document other withholding tax (altra ritenuta) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'other_withholding_tax'?: number | null;
    /**
     * Issued document stamp duty value [0 if not present]
     * @type {number}
     * @memberof IssuedDocument
     */
    'stamp_duty'?: number | null;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof IssuedDocument
     */
    'payment_method'?: PaymentMethod;
    /**
     * Issued document uses split payment
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'use_split_payment'?: boolean | null;
    /**
     * Issued document uses gross prices
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'use_gross_prices'?: boolean | null;
    /**
     * Issued document is an e-invoice.
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'e_invoice'?: boolean | null;
    /**
     * 
     * @type {IssuedDocumentEiData}
     * @memberof IssuedDocument
     */
    'ei_data'?: IssuedDocumentEiData | null;
    /**
     * E-invoice cassa type
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_cassa_type'?: string | null;
    /**
     * E-invoice cassa2 type
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_cassa2_type'?: string | null;
    /**
     * E-invoice withholding tax causal
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_withholding_tax_causal'?: string | null;
    /**
     * E-invoice other withholding tax type
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_other_withholding_tax_type'?: string | null;
    /**
     * E-invoice other withholding tax causal
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_other_withholding_tax_causal'?: string | null;
    /**
     * 
     * @type {Array<IssuedDocumentItemsListItem>}
     * @memberof IssuedDocument
     */
    'items_list'?: Array<IssuedDocumentItemsListItem> | null;
    /**
     * 
     * @type {Array<IssuedDocumentPaymentsListItem>}
     * @memberof IssuedDocument
     */
    'payments_list'?: Array<IssuedDocumentPaymentsListItem> | null;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocument
     */
    'template'?: DocumentTemplate;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocument
     */
    'delivery_note_template'?: DocumentTemplate;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof IssuedDocument
     */
    'acc_inv_template'?: DocumentTemplate;
    /**
     * Issued document PDF horizontal margins
     * @type {number}
     * @memberof IssuedDocument
     */
    'h_margins'?: number | null;
    /**
     * Issued document PDF vertical margins
     * @type {number}
     * @memberof IssuedDocument
     */
    'v_margins'?: number | null;
    /**
     * Show the expiration dates of the payments on the document
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_payments'?: boolean | null;
    /**
     * Show the payment method details on the document
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_payment_method'?: boolean | null;
    /**
     * 
     * @type {ShowTotalsMode}
     * @memberof IssuedDocument
     */
    'show_totals'?: ShowTotalsMode;
    /**
     * Show notification button in the PDF
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_notification_button'?: boolean | null;
    /**
     * Show ts pay button in the PDF
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_tspay_button'?: boolean | null;
    /**
     * Issued document has delivery note
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'delivery_note'?: boolean | null;
    /**
     * Issued document has an accompanying invoice
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'accompanying_invoice'?: boolean | null;
    /**
     * Issued document attached delivery note number
     * @type {number}
     * @memberof IssuedDocument
     */
    'dn_number'?: number | null;
    /**
     * Issued document attached delivery note date
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_date'?: string | null;
    /**
     * Issued document attached delivery note number of packages
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_packages_number'?: string | null;
    /**
     * Issued document attached delivery note package weight
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_weight'?: string | null;
    /**
     * Issued document attached delivery note causal
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_causal'?: string | null;
    /**
     * Issued document attached delivery note destination
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_destination'?: string | null;
    /**
     * Issued document attached delivery note transporter
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_transporter'?: string | null;
    /**
     * Issued document attached delivery note notes
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_notes'?: string | null;
    /**
     * Issued document is marked
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'is_marked'?: boolean | null;
    /**
     * [Read only] Issued document total net amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_net'?: number | null;
    /**
     * [Read Only] Issued document total vat amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_vat'?: number | null;
    /**
     * [Read Only] Issued document total gross amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_gross'?: number | null;
    /**
     * Issued document amount due discount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_due_discount'?: number | null;
    /**
     * [Read Only] Issued document rivalsa amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_rivalsa'?: number | null;
    /**
     * Issued document taxable rivalsa amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_rivalsa_taxable'?: number | null;
    /**
     * [Read Only] Issued document withholding tax amount (ritenuta d\'acconto).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Issued document taxable withholding tax amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_withholding_tax_taxable'?: number | null;
    /**
     * [Read Only] Issued document other withholding tax amount (altra ritenuta)
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * Issued document taxable other withholding tax amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_other_withholding_tax_taxable'?: number | null;
    /**
     * Issued document taxable enasarco amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_enasarco_taxable'?: number | null;
    /**
     * 
     * @type {IssuedDocumentExtraData}
     * @memberof IssuedDocument
     */
    'extra_data'?: IssuedDocumentExtraData | null;
    /**
     * Issued document seen date
     * @type {string}
     * @memberof IssuedDocument
     */
    'seen_date'?: string | null;
    /**
     * Issued document date of the next not paid payment
     * @type {string}
     * @memberof IssuedDocument
     */
    'next_due_date'?: string | null;
    /**
     * [Temporary] [Read Only] Issued document url of the document PDF file
     * @type {string}
     * @memberof IssuedDocument
     */
    'url'?: string | null;
    /**
     * [Temporary] [Read Only] Issued document url of the attached delivery note PDF file
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_url'?: string | null;
    /**
     * [Temporary] [Read Only] Issued document url of the accompanying invoice PDF file
     * @type {string}
     * @memberof IssuedDocument
     */
    'ai_url'?: string | null;
    /**
     * [Temporary] [Read Only] Issued document url of the attached file
     * @type {string}
     * @memberof IssuedDocument
     */
    'attachment_url'?: string | null;
    /**
     * [Write Only] Issued document attachment token returned by POST /issued_documents/attachment
     * @type {string}
     * @memberof IssuedDocument
     */
    'attachment_token'?: string | null;
    /**
     * Issued document advanced raw attributes for e-invoices
     * @type {object}
     * @memberof IssuedDocument
     */
    'ei_raw'?: object | null;
    /**
     * [Read only] Status of the e-invoice.   * **attempt** - We are trying to send the invoice, please wait up to 2 hours   * **missing** - The invoice is missing   * **not_sent** - The invoice has yet to be sent   * **sent** - The invoice was sent   * **pending** - The checks for the digital signature and sending are in progress   * **processing** - The SDI is delivering the invoice to the customer   * **error** - An error occurred while handling the invoice, please try to resend it or contact support   * **discarded** - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * **not_delivered** - The SDI was unable to deliver the invoice   * **accepted** - The customer accepted the invoice   * **rejected** - The customer rejected the invoice, so it must be corrected   * **no_response** - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * **manual_accepted** - The customer accepted the invoice   * **manual_rejected** - The customer rejected the invoice 
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_status'?: IssuedDocumentEiStatusEnum | null;
    /**
     * Issued Document can\'t be edited
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'locked'?: boolean | null;
    /**
     * Issued document creation date
     * @type {string}
     * @memberof IssuedDocument
     */
    'created_at'?: string | null;
    /**
     * Issued document last update date
     * @type {string}
     * @memberof IssuedDocument
     */
    'updated_at'?: string | null;
}

export const IssuedDocumentEiStatusEnum = {
    Attempt: 'attempt',
    Missing: 'missing',
    NotSent: 'not_sent',
    Sent: 'sent',
    Pending: 'pending',
    Processing: 'processing',
    Error: 'error',
    Discarded: 'discarded',
    NotDelivered: 'not_delivered',
    Accepted: 'accepted',
    Rejected: 'rejected',
    NoResponse: 'no_response',
    ManualAccepted: 'manual_accepted',
    ManualRejected: 'manual_rejected'
} as const;

export type IssuedDocumentEiStatusEnum = typeof IssuedDocumentEiStatusEnum[keyof typeof IssuedDocumentEiStatusEnum];


