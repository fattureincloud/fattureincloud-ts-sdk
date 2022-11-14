/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.22
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Currency } from './currency';
import { DocumentTemplate } from './document-template';
import { Entity } from './entity';
import { IssuedDocumentEiData } from './issued-document-ei-data';
import { IssuedDocumentExtraData } from './issued-document-extra-data';
import { IssuedDocumentItemsListItem } from './issued-document-items-list-item';
import { IssuedDocumentPaymentsListItem } from './issued-document-payments-list-item';
import { IssuedDocumentType } from './issued-document-type';
import { Language } from './language';
import { PaymentMethod } from './payment-method';
import { ShowTotalsMode } from './show-totals-mode';

/**
 * 
 * @export
 * @interface IssuedDocument
 */
export interface IssuedDocument {
    /**
     * Unique identifier of the document.
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
     * Number of the document [If not specified, next number is used]
     * @type {number}
     * @memberof IssuedDocument
     */
    'number'?: number | null;
    /**
     * Numeration of the document [Not available if type=delivery_note]
     * @type {string}
     * @memberof IssuedDocument
     */
    'numeration'?: string | null;
    /**
     * Date of the document [If not specified, today date is used]
     * @type {string}
     * @memberof IssuedDocument
     */
    'date'?: string | null;
    /**
     * Invoice year.
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
     * Issued document subject.
     * @type {string}
     * @memberof IssuedDocument
     */
    'subject'?: string | null;
    /**
     * Issued document visible subject.
     * @type {string}
     * @memberof IssuedDocument
     */
    'visible_subject'?: string | null;
    /**
     * Revenue center [or cost center if type=supplier_order].
     * @type {string}
     * @memberof IssuedDocument
     */
    'rc_center'?: string | null;
    /**
     * Issued document extra notes.
     * @type {string}
     * @memberof IssuedDocument
     */
    'notes'?: string | null;
    /**
     * \"Rivalsa INPS\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'rivalsa'?: number | null;
    /**
     * \"Cassa previdenziale\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa'?: number | null;
    /**
     * [Read Only] Cassa amount.
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa'?: number | null;
    /**
     * Cassa taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa_taxable'?: number | null;
    /**
     * [Can be set only if cassa_taxable is NULL] Cassa2 taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa_taxable'?: number | null;
    /**
     * \"Cassa previdenziale 2\" percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa2'?: number | null;
    /**
     * [Read Only] Cassa amount.
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa2'?: number | null;
    /**
     * Cassa2 taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'cassa2_taxable'?: number | null;
    /**
     * [Can be set only if cassa2_taxable is NULL] Cassa2 taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_cassa2_taxable'?: number | null;
    /**
     * Global cassa taxable percentage
     * @type {number}
     * @memberof IssuedDocument
     */
    'global_cassa_taxable'?: number | null;
    /**
     * [Can be set only if global_cassa_taxable is NULL] Global cassa taxable amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_global_cassa_taxable'?: number | null;
    /**
     * Withholding tax (ritenuta d\'acconto) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'withholding_tax'?: number | null;
    /**
     * Withholding tax taxable (imponibile) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'withholding_tax_taxable'?: number | null;
    /**
     * Other withholding tax (altra ritenuta) percentual value
     * @type {number}
     * @memberof IssuedDocument
     */
    'other_withholding_tax'?: number | null;
    /**
     * Stamp duty value [0 if not present]
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
     * Use split payment
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'use_split_payment'?: boolean | null;
    /**
     * Use gross prices
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'use_gross_prices'?: boolean | null;
    /**
     * Indicates if this is an e-invoice.
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
     * Horizontal margins.
     * @type {number}
     * @memberof IssuedDocument
     */
    'h_margins'?: number | null;
    /**
     * Vertical margins.
     * @type {number}
     * @memberof IssuedDocument
     */
    'v_margins'?: number | null;
    /**
     * Shows the expiration dates of the payments on the document.
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_payments'?: boolean | null;
    /**
     * Show the payment method details on the document.
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
     * Show paypal button
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_paypal_button'?: boolean | null;
    /**
     * Show notification button
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_notification_button'?: boolean | null;
    /**
     * Show ts pay button.
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'show_tspay_button'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'delivery_note'?: boolean | null;
    /**
     * Attach an accompanying invoice.
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'accompanying_invoice'?: boolean | null;
    /**
     * Number (for the attached delivery note).
     * @type {number}
     * @memberof IssuedDocument
     */
    'dn_number'?: number | null;
    /**
     * Date (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_date'?: string | null;
    /**
     * Number of packages (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_packages_number'?: string | null;
    /**
     * Weight (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_weight'?: string | null;
    /**
     * Causal (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_causal'?: string | null;
    /**
     * Destination (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_destination'?: string | null;
    /**
     * Transporter (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_transporter'?: string | null;
    /**
     * Notes (for the attached delivery note).
     * @type {string}
     * @memberof IssuedDocument
     */
    'dn_ai_notes'?: string | null;
    /**
     * This is true if the document is marked.
     * @type {boolean}
     * @memberof IssuedDocument
     */
    'is_marked'?: boolean | null;
    /**
     * [Read Only] Total net amount (competenze).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_net'?: number | null;
    /**
     * [Read Only] Total vat amount (IVA).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_vat'?: number | null;
    /**
     * [Read Only] Total gross amount (totale documento).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_gross'?: number | null;
    /**
     * Amount due discount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_due_discount'?: number | null;
    /**
     * [Read Only] Rivalsa amount.
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_rivalsa'?: number | null;
    /**
     * Taxable rivalsa amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_rivalsa_taxable'?: number | null;
    /**
     * [Read Only] Withholding tax amount (ritenuta d\'acconto).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_withholding_tax'?: number | null;
    /**
     * Taxable withholding tax amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_withholding_tax_taxable'?: number | null;
    /**
     * [Read Only] Other withholding tax amount (altra ritenuta).
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_other_withholding_tax'?: number | null;
    /**
     * Taxable other withholding tax amount
     * @type {number}
     * @memberof IssuedDocument
     */
    'amount_other_withholding_tax_taxable'?: number | null;
    /**
     * Taxable enasarco amount
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
     * Date when the client/supplier has seen the document.
     * @type {string}
     * @memberof IssuedDocument
     */
    'seen_date'?: string | null;
    /**
     * Date of the next not paid payment.
     * @type {string}
     * @memberof IssuedDocument
     */
    'next_due_date'?: string | null;
    /**
     * Public url of the document PDF file.
     * @type {string}
     * @memberof IssuedDocument
     */
    'url'?: string | null;
    /**
     * [Read Only] Public url of the attached file. Authomatically set if a valid attachment token is passed via POST /issued_documents or PUT /issued_documents/{documentId}.
     * @type {string}
     * @memberof IssuedDocument
     */
    'attachment_url'?: string | null;
    /**
     * [Write Only] Attachment token returned by POST /issued_documents/attachment. Used to attach the file already uploaded.
     * @type {string}
     * @memberof IssuedDocument
     */
    'attachment_token'?: string | null;
    /**
     * Advanced raw attributes for e-invoices.
     * @type {object}
     * @memberof IssuedDocument
     */
    'ei_raw'?: object | null;
    /**
     * [Read only] Status of the e-invoice.   * `attempt` - We are trying to send the invoice, please wait up to 2 hours   * `missing` - The invoice is missing   * `not_sent` - The invoice has yet to be sent   * `sent` - The invoice was sent   * `pending` - The checks for the digital signature and sending are in progress   * `processing` - The SDI is delivering the invoice to the customer   * `error` - An error occurred while handling the invoice, please try to resend it or contact support   * `discarded` - The invoice has been rejected by the SDI, so it must be corrected and re-sent   * `not_delivered` - The SDI was unable to deliver the invoice   * `accepted` - The customer accepted the invoice   * `rejected` - The customer rejected the invoice, so it must be corrected   * `no_response` - A response has not yet been received whithin the deadline, contact the customer to ascertain the status of the invoice   * `manual_accepted` - The customer accepted the invoice   * `manual_rejected` - The customer rejected the invoice 
     * @type {string}
     * @memberof IssuedDocument
     */
    'ei_status'?: IssuedDocumentEiStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof IssuedDocument
     */
    'created_at'?: string | null;
    /**
     * 
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


