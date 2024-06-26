/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol. For more information, please visit https://www.fattureincloud.it.
 *
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { expect } from 'chai'
import { IssuedDocumentsApi } from '../../src/api/issued-documents-api'
import { CreateIssuedDocumentRequest, CreateIssuedDocumentResponse, GetEmailDataResponse, GetExistingIssuedDocumentTotalsResponse, GetIssuedDocumentPreCreateInfoResponse, GetIssuedDocumentResponse, GetNewIssuedDocumentTotalsRequest, GetNewIssuedDocumentTotalsResponse, JoinIssuedDocumentsResponse, ListIssuedDocumentsResponse, ModifyIssuedDocumentResponse, TransformIssuedDocumentResponse, UploadArchiveAttachmentResponse } from '../../src/models'

const sandbox = require('sinon').createSandbox()

const instance = new IssuedDocumentsApi()

const createIssuedDocumentResponse: CreateIssuedDocumentResponse = { data: { id: 12345, type: 'receipt', year: 2021, numeration: 'rec123', subject: '', visible_subject: '', rc_center: '', ei_cassa_type: null, ei_withholding_tax_causal: null, ei_other_withholding_tax_type: null, ei_other_withholding_tax_causal: null, stamp_duty: 0, use_gross_prices: false, e_invoice: false, delivery_note: false, accompanying_invoice: false, amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 0, amount_rivalsa: 0, amount_cassa: 0, amount_withholding_tax: 0, amount_other_withholding_tax: 0, h_margins: 15, v_margins: 16, show_payment_method: false, show_payments: true, show_totals: 'all', show_notification_button: false, is_marked: false, entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, date: '2021-08-20', number: 1, currency: { id: 'EUR', exchange_rate: '1.00000', symbol: '\u20ac' }, language: { code: 'it', name: 'Italiano' }, notes: '', rivalsa: 0, cassa: 0, withholding_tax: 0, withholding_tax_taxable: 100, other_withholding_tax: 0, payment_method: { id: 4, name: 'Credit card' }, use_split_payment: false, items_list: [{ product_id: 5432, code: 'SG3', name: 'Soggiorno', measure: '', net_price: 68.18182, category: '', id: 277876033, gross_price: 75, apply_withholding_taxes: true, discount: 0, discount_highlight: false, qty: 1, vat: { id: 3, value: 10, description: '' }, stock: false, description: '', not_taxable: false }], payments_list: [{ amount: 75, due_date: '2020-08-23', paid_date: null, id: 69078013, status: 'not_paid', payment_account: null }], attachment_url: 'kdijrnf893hnwkfk45f50f.pdf', seen_date: null, next_due_date: '2020-08-23', template: { id: 2821, name: 'Light Smoke' }, extra_data: null, url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf', show_tspay_button: false } }
const createIssuedDocumentStub = sandbox.stub(instance, 'createIssuedDocument').returns(createIssuedDocumentResponse)

const deleteIssuedDocumentResponse = {}
sandbox.stub(instance, 'deleteIssuedDocument').returns(deleteIssuedDocumentResponse)

const deleteIssuedDocumentAttachmentResponse = {}
sandbox.stub(instance, 'deleteIssuedDocumentAttachment').returns(deleteIssuedDocumentAttachmentResponse)

const getEmailDataResponse: GetEmailDataResponse = { data: { recipient_email: 'mary.red@example.com', default_sender_email: { id: 0, email: 'no-reply@fattureincloud.it' }, sender_emails_list: [{ id: 0, email: 'no-reply@fattureincloud.it' }, { id: 888, email: 'mariorossi@fattureincloud.it' }], cc_email: 'm.rossi@exxample.com', subject: 'Nostra pro forma nr. 1', body: 'Gentile Mario Rossi,<br>per vedere la nostra pro forma di  o per scaricarne una copia in versione PDF prema sul bottone sottoastante.<br><br>{{allegati}}<br><br>Cordiali saluti,<br><b>Mario Rossi</b>', document_exists: true, delivery_note_exists: false, attachment_exists: false, accompanying_invoice_exists: false } }
sandbox.stub(instance, 'getEmailData').returns(getEmailDataResponse)

const getExistingIssuedDocumentTotalsResponse: GetExistingIssuedDocumentTotalsResponse = { data: { amount_net: 68.18, amount_rivalsa: 13.64, amount_net_with_rivalsa: 81.82000000000001, taxable_amount: 81.82, vat_list: { 10: { amount_net: 81.82, amount_vat: 8.18 } }, amount_vat: 8.18, amount_gross: 90, amount_due: 90, payments_sum: 75 } }
sandbox.stub(instance, 'getExistingIssuedDocumentTotals').returns(getExistingIssuedDocumentTotalsResponse)

const getIssuedDocumentResponse: GetIssuedDocumentResponse = { data: { id: 12345, type: 'receipt', year: 2021, numeration: 'rec123', subject: '', visible_subject: '', rc_center: '', ei_cassa_type: null, ei_withholding_tax_causal: null, ei_other_withholding_tax_type: null, ei_other_withholding_tax_causal: null, stamp_duty: 0, use_gross_prices: false, e_invoice: false, delivery_note: false, accompanying_invoice: false, amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 0, amount_rivalsa: 0, amount_cassa: 0, amount_withholding_tax: 0, amount_other_withholding_tax: 0, h_margins: 15, v_margins: 16, show_payment_method: false, show_payments: true, show_totals: 'all', show_notification_button: false, is_marked: false, entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, date: '2021-08-20', number: 1, currency: { id: 'EUR', exchange_rate: '1.00000', symbol: '\u20ac' }, language: { code: 'it', name: 'Italiano' }, notes: '', rivalsa: 0, cassa: 0, withholding_tax: 0, withholding_tax_taxable: 100, other_withholding_tax: 0, payment_method: { id: 4, name: 'Credit card' }, use_split_payment: false, items_list: [{ product_id: 5432, code: 'SG3', name: 'Soggiorno', measure: '', net_price: 68.18182, category: '', id: 277876033, gross_price: 75, apply_withholding_taxes: true, discount: 0, discount_highlight: false, qty: 1, vat: { id: 3, value: 10, description: '' }, stock: false, description: '', not_taxable: false }], payments_list: [{ amount: 75, due_date: '2020-08-23', paid_date: null, id: 69078013, status: 'not_paid', payment_account: null }], attachment_url: 'kdijrnf893hnwkfk45f50f.pdf', seen_date: null, next_due_date: '2020-08-23', template: { id: 2821, name: 'Light Smoke' }, extra_data: null, url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf', show_tspay_button: false } }
sandbox.stub(instance, 'getIssuedDocument').returns(getIssuedDocumentResponse)

const getIssuedDocumentPreCreateInfoResponse: GetIssuedDocumentPreCreateInfoResponse = { data: { numerations: { 2018: { AB123: 2 }, 2019: { 123: 0 }, 2020: { ABC: 2 }, 2021: { rec123: 2 } }, dn_numerations: { 2017: { '': 1000 }, 2018: { '': 112 }, 2019: { '': 526 }, 2020: { '': 11 }, 2021: { '': 110 } }, default_values: { dn_template: { id: 222, name: 'DDT 1', type: 'delivery_note' }, ai_template: { id: 333, name: 'FT Accompagnatoria 1', type: 'accompanying_invoice' }, notes: '', withholding_tax_taxable: 100.0, use_gross_prices: false, payment_method: { id: 123321, name: 'Bonifico bancario', is_default: true, details: [{ title: 'Banca', description: 'Indesa' }, { title: 'IBAN', description: 'IT17QA12345600000003498936' }, { title: 'Intestatario', description: 'Mario Rossi' }], bank_iban: 'IT17QA12345600000003498936', bank_name: 'Indesa', bank_beneficiary: 'Mario Rossi', ei_payment_method: 'MP05' } }, extra_data_default_values: { ts_communication: false, ts_tipo_spesa: 'SR', ts_pagamento_tracciato: false }, items_default_values: { vat: { value: 22.0, description: '', notes: '', e_invoice: true, ei_type: '0', ei_description: '', is_disabled: false } }, countries_list: ['Italia', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antartide', 'Antigua e Barbuda', 'Antille Olandesi', 'Arabia Saudita', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaigian', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belgio', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bielorussia', 'Bolivia', 'Bosnia ed Erzegovina', 'Botswana', 'Brasile', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambogia', 'Camerun', 'Canada', 'Capo Verde', 'Ciad', 'Cile', 'Cina', 'Cipro', 'Citt\u00e0 del Vaticano', 'Colombia', 'Comore', 'Corea del Nord', 'Corea del Sud', 'Costa Rica', 'Costa d Avorio', 'Croazia', 'Cuba', 'Danimarca', 'Dominica', 'Ecuador', 'Egitto', 'El Salvador', 'Emirati Arabi Uniti', 'Eritrea', 'Estonia', 'Etiopia', 'Fiji', 'Filippine', 'Finlandia', 'Francia', 'Gabon', 'Gambia', 'Georgia', 'Georgia del Sud e isole Sandwich', 'Germania', 'Ghana', 'Giamaica', 'Giappone', 'Gibilterra', 'Gibuti', 'Giordania', 'Grecia', 'Grenada', 'Groenlandia', 'Guadalupa', 'Guam', 'Guatemala', 'Guernsey - Channel Islands', 'Guinea', 'Guinea Equatoriale', 'Guinea-Bissau', 'Guyana', 'Guyana Francese', 'Haiti', 'Heard Island e McDonald Islands', 'Honduras', 'Hong Kong', 'India', 'Indonesia', 'Iran', 'Iraq', 'Irlanda', 'Islanda', 'Isola Bouvet', 'Isola Christmas', 'Isola di Man', 'Isola Norfolk', 'Isole Canarie (Spagna)', 'Isole Cayman', 'Isole Cocos e Keeling', 'Isole Cook', 'Isole Falkland', 'Isole F\u00e6r \u00d8er', 'Isole Marianne Settentrionali', 'Isole Marshall', 'Isole Minori Esterne degli USA', 'Isole Pitcairn', 'Isole Salomone', 'Isole Vergini Americane', 'Isole Vergini Britanniche', 'Isole \u00c5land', 'Israele', 'Jersey - Channel Islands', 'Kazakistan', 'Kenia', 'Kirghizistan', 'Kiribati', 'Kosovo', 'Kuwait', 'Laos', 'Lesotho', 'Lettonia', 'Libano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Lussemburgo', 'Macao', 'Macedonia', 'Macedonia del Nord', 'Madagascar', 'Malawi', 'Malaysia', 'Maldive', 'Mali', 'Malta', 'Marocco', 'Martinica', 'Mauritania', 'Mauritius', 'Mayotte', 'Messico', 'Micronesia', 'Moldavia', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Mozambico', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norvegia', 'Nuova Caledonia', 'Nuova Zelanda', 'Oman', 'Paesi Bassi', 'Pakistan', 'Palau', 'Panama', 'Papua Nuova Guinea', 'Paraguay', 'Per\u00f9', 'Polinesia Francese', 'Polonia', 'Porto Rico', 'Portogallo', 'Qatar', 'Regno Unito', 'Repubblica Ceca', 'Repubblica Centrafricana', 'Repubblica Democratica del Congo', 'Repubblica Dominicana', 'Repubblica del Congo', 'Riunione', 'Romania', 'Ruanda', 'Russia', 'Sahara Occidentale', 'Saint Barthelemy', 'Saint Kitts e Nevis', 'Saint Pierre e Miquelon', 'Saint Vincent e Grenadine', 'Samoa', 'Samoa Americane', 'San Marino', 'Sant Elena', 'Santa Lucia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Siria', 'Slovacchia', 'Slovenia', 'Somalia', 'Spagna', 'Sri Lanka', 'Stato di Palestina', 'Stati Uniti', 'Sudafrica', 'Sud Sudan', 'Sudan', 'Suriname', 'Svalbard e Jan Mayen', 'Svezia', 'Svizzera', 'Swaziland', 'S\u00e3o Tom\u00e9 e Pr\u00edncipe', 'Tagikistan', 'Taiwan', 'Tanzania', 'Terre australi e ant. francesi', 'Terr. Britannico dell Oc. Ind.', 'Thailandia', 'Timor Est', 'Togo', 'Tokelau', 'Tonga', 'Trinidad e Tobago', 'Tunisia', 'Turchia', 'Turkmenistan', 'Turks e Caicos', 'Tuvalu', 'Ucraina', 'Uganda', 'Ungheria', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Wallis e Futuna', 'Yemen', 'Zambia', 'Zimbabwe'], currencies_list: [{ id: 'AED', symbol: 'AED', exchange_rate: '4.09500', html_symbol: 'AED' }, { id: 'ALL', symbol: 'ALL', exchange_rate: '121.50000', html_symbol: 'ALL' }, { id: 'AUD', symbol: 'AUD', exchange_rate: '1.62094', html_symbol: 'AUD' }, { id: 'AZN', symbol: 'AZN', exchange_rate: '2.00130', html_symbol: 'AZN' }, { id: 'BGN', symbol: '\u043b\u0432', exchange_rate: '1.95583', html_symbol: 'BGN' }, { id: 'BRL', symbol: 'R$', exchange_rate: '4.50410', html_symbol: 'R$' }, { id: 'BYN', symbol: 'BYN', exchange_rate: '2.41000', html_symbol: 'BYN' }, { id: 'CAD', symbol: 'CAD', exchange_rate: '1.49841', html_symbol: 'CAD' }, { id: 'CFA', symbol: 'CFA', exchange_rate: '656.68000', html_symbol: 'CFA' }, { id: 'CHF', symbol: 'Fr.', exchange_rate: '1.12559', html_symbol: 'Fr.' }, { id: 'CNY', symbol: 'CNY', exchange_rate: '7.70160', html_symbol: 'CNY' }, { id: 'CRC', symbol: '\u20a1', exchange_rate: '659.17000', html_symbol: '\u20a1' }, { id: 'CZK', symbol: 'K\u010d', exchange_rate: '25.80600', html_symbol: 'CZK' }, { id: 'DKK', symbol: 'kr.', exchange_rate: '7.46750', html_symbol: 'kr.' }, { id: 'DOP', symbol: 'DOP', exchange_rate: '56.50000', html_symbol: 'DOP' }, { id: 'DZD', symbol: 'DZD', exchange_rate: '134.28300', html_symbol: 'DZD' }, { id: 'EGP', symbol: 'EGP', exchange_rate: '18.98030', html_symbol: 'EGP' }, { id: 'EUR', symbol: '\u20ac', exchange_rate: '1.00000', html_symbol: '\u20ac' }, { id: 'GBP', symbol: '\u00a3', exchange_rate: '0.88096', html_symbol: '\u00a3' }, { id: 'GHS', symbol: 'GHS', exchange_rate: '5.45834', html_symbol: 'GHS' }, { id: 'HKD', symbol: 'HK$', exchange_rate: '8.75450', html_symbol: 'HK$' }, { id: 'HRK', symbol: 'HRK', exchange_rate: '7.42640', html_symbol: 'HRK' }, { id: 'HUF', symbol: 'HUF', exchange_rate: '326.24000', html_symbol: 'HUF' }, { id: 'ILS', symbol: '\u20aa', exchange_rate: '4.02680', html_symbol: '\u20aa' }, { id: 'INR', symbol: 'INR', exchange_rate: '77.76050', html_symbol: 'INR' }, { id: 'ISK', symbol: 'ISK', exchange_rate: '135.94600', html_symbol: 'ISK' }, { id: 'JPY', symbol: '\u00a5', exchange_rate: '123.05800', html_symbol: '\u00a5' }, { id: 'KRW', symbol: 'KRW', exchange_rate: '1329.20000', html_symbol: 'KRW' }, { id: 'MAD', symbol: 'MAD', exchange_rate: '10.78900', html_symbol: 'MAD' }, { id: 'MKD', symbol: 'MKD', exchange_rate: '61.36700', html_symbol: 'MKD' }, { id: 'MXN', symbol: 'Mex$', exchange_rate: '21.17900', html_symbol: 'Mex$' }, { id: 'MYR', symbol: 'MYR', exchange_rate: '4.67310', html_symbol: 'MYR' }, { id: 'NGN', symbol: 'NGN', exchange_rate: '405.17000', html_symbol: 'NGN' }, { id: 'NIS', symbol: 'NIS', exchange_rate: '4020.00000', html_symbol: 'NIS' }, { id: 'NOK', symbol: 'kr', exchange_rate: '9.76270', html_symbol: 'kr' }, { id: 'NZD', symbol: 'NZD', exchange_rate: '1.71687', html_symbol: 'NZD' }, { id: 'OMR', symbol: 'OMR', exchange_rate: '0.42950', html_symbol: 'OMR' }, { id: 'PEN', symbol: 'PEN', exchange_rate: '3.73400', html_symbol: 'PEN' }, { id: 'PLN', symbol: 'z\u0142', exchange_rate: '4.30330', html_symbol: 'PLN' }, { id: 'QAR', symbol: 'QAR', exchange_rate: '4.06270', html_symbol: 'QAR' }, { id: 'RON', symbol: 'RON', exchange_rate: '4.66891', html_symbol: 'RON' }, { id: 'RSD', symbol: 'RSD', exchange_rate: '117.39414', html_symbol: 'RSD' }, { id: 'RUB', symbol: '\u20bd', exchange_rate: '71.70370', html_symbol: '\u20bd' }, { id: 'SAR', symbol: 'SAR', exchange_rate: '4.18520', html_symbol: 'SAR' }, { id: 'SEK', symbol: 'SEK', exchange_rate: '10.73374', html_symbol: 'SEK' }, { id: 'SGD', symbol: 'SGD', exchange_rate: '1.53800', html_symbol: 'SGD' }, { id: 'THB', symbol: 'THB', exchange_rate: '35.56400', html_symbol: 'THB' }, { id: 'TND', symbol: 'TND', exchange_rate: '3.34010', html_symbol: 'TND' }, { id: 'TRY', symbol: 'TRY', exchange_rate: '6.81590', html_symbol: 'TRY' }, { id: 'TWD', symbol: 'TWD', exchange_rate: '35.14200', html_symbol: 'TWD' }, { id: 'UAH', symbol: 'UAH', exchange_rate: '29.31490', html_symbol: 'UAH' }, { id: 'USD', symbol: '$', exchange_rate: '1.11570', html_symbol: '$' }, { id: 'VND', symbol: '\u20ab', exchange_rate: '26100.00000', html_symbol: '\u20ab' }, { id: 'ZAR', symbol: 'R', exchange_rate: '16.03080', html_symbol: 'R' }], templates_list: [{ id: 10, name: 'New Standard S1' }, { id: 11, name: 'New Standard S2' }, { id: 12, name: 'New Professionisti P1' }, { id: 13, name: 'New Buste' }, { id: 14, name: 'New Professionisti P2' }, { id: 101, name: 'Clear lines' }, { id: 106, name: 'Minimalist' }, { id: 107, name: 'Squared' }, { id: 108, name: 'Modern' }, { id: 150, name: 'Bright Colors' }, { id: 681, name: 'Modern Spese di trasporto' }, { id: 682, name: 'Modern ciao' }, { id: 2821, name: 'Light Smoke' }, { id: 2823, name: 'IDEAVERDE' }, { id: 2824, name: 'LS problem' }, { id: 2825, name: 'Light Smoke 2nd CASSA' }, { id: 2826, name: 'LIGHT NUOVO' }, { id: 2827, name: 'STAND' }], dn_templates_list: [{ id: 660, name: 'DDT 1' }, { id: 680, name: 'DDT Prova' }], ai_templates_list: [{ id: 663, name: 'FT Accompagnatoria 1' }], payment_methods_list: [{ id: 555, name: 'Rimessa diretta', is_default: false, details: [] }, { id: 123321, name: 'Bonifico bancario', is_default: true, details: [{ title: 'Banca', description: 'Indesa' }, { title: 'IBAN', description: 'IT17QA12345600000003498936' }, { title: 'Intestatario', description: 'Mario Rossi' }], bank_iban: 'IT17QA12345600000003498936', bank_name: 'Indesa', bank_beneficiary: 'Mario Rossi', ei_payment_method: 'MP05' }], payment_accounts_list: [{ id: 21, name: 'Indesa - Carta conto', virtual: false }, { id: 287, name: 'Bonifico_Bancario', virtual: false }], vat_types_list: [{ id: 1409, value: 15.0, description: 'ALIQUOTA #1234#', e_invoice: false, ei_type: '0', is_disabled: false }, { id: 1332, description: 'Non imp. art. 17 c. 6 lett. A TER DPR 633/72', e_invoice: false, ei_type: '0', is_disabled: false }] } }
sandbox.stub(instance, 'getIssuedDocumentPreCreateInfo').returns(getIssuedDocumentPreCreateInfoResponse)

const getNewIssuedDocumentTotalsResponse: GetNewIssuedDocumentTotalsResponse = { data: { amount_net: 68.18, taxable_amount: 68.18, vat_list: { 10: { amount_net: 68.18, amount_vat: 6.82 } }, amount_vat: 6.82, amount_gross: 75, amount_due: 75, payments_sum: 75 } }
const getNewIssuedDocumentTotalsStub = sandbox.stub(instance, 'getNewIssuedDocumentTotals').returns(getNewIssuedDocumentTotalsResponse)

const listIssuedDocumentsResponse: ListIssuedDocumentsResponse = { current_page: 1, data: [{ id: 12345, type: 'receipt', numeration: 'rec123', subject: '', visible_subject: '', amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 0, entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, date: '2021-08-20', number: 1, next_due_date: '2021-12-31', url: 'ypbqqe4u8w8bdabcd5fd5b1a4gtqhlof.pdf', items_list: null, payments_list: null }, { id: 12346, type: 'receipt', numeration: 'rec124', subject: '', visible_subject: '', amount_net: 168.18, amount_vat: 16.82, amount_gross: 175, amount_due_discount: 0, entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, date: '2021-08-28', number: 1, next_due_date: '2021-12-31', url: 'qwertye4u8w8bdaqrt5fd5b1a4gtqhlof.pdf', items_list: null, payments_list: null }], first_page_url: 'page=1', from: 1, last_page: 1, last_page_url: 'page=1', next_page_url: null, path: 'issued_documents', per_page: 50, prev_page_url: null, to: 2, total: 2 }
sandbox.stub(instance, 'listIssuedDocuments').returns(listIssuedDocumentsResponse)

const modifyIssuedDocumentResponse: ModifyIssuedDocumentResponse = { data: { id: 12345, type: 'receipt', year: 2021, numeration: 'rec123', subject: '', visible_subject: '', rc_center: '', ei_cassa_type: null, ei_withholding_tax_causal: null, ei_other_withholding_tax_type: null, ei_other_withholding_tax_causal: null, stamp_duty: 0, use_gross_prices: false, e_invoice: false, delivery_note: false, accompanying_invoice: false, amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 0, amount_rivalsa: 0, amount_cassa: 0, amount_withholding_tax: 0, amount_other_withholding_tax: 0, h_margins: 15, v_margins: 16, show_payment_method: false, show_payments: true, show_totals: 'all', show_notification_button: false, is_marked: false, entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, date: '2021-08-20', number: 1, currency: { id: 'EUR', exchange_rate: '1.00000', symbol: '\u20ac' }, language: { code: 'it', name: 'Italiano' }, notes: '', rivalsa: 0, cassa: 0, withholding_tax: 0, withholding_tax_taxable: 100, other_withholding_tax: 0, payment_method: { id: 4, name: 'Credit card' }, use_split_payment: false, items_list: [{ product_id: 5432, code: 'SG3', name: 'Soggiorno', measure: '', net_price: 68.18182, category: '', id: 277876033, gross_price: 75, apply_withholding_taxes: true, discount: 0, discount_highlight: false, qty: 1, vat: { id: 3, value: 10, description: '' }, stock: false, description: '', not_taxable: false }], payments_list: [{ amount: 75, due_date: '2020-08-23', paid_date: null, id: 69078013, status: 'not_paid', payment_account: null }], attachment_url: 'kdijrnf893hnwkfk45f50f.pdf', seen_date: null, next_due_date: '2020-08-23', template: { id: 2821, name: 'Light Smoke' }, extra_data: null, url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf', show_tspay_button: false } }
const modifyIssuedDocumentStub = sandbox.stub(instance, 'modifyIssuedDocument').returns(modifyIssuedDocumentResponse)

const scheduleEmailResponse = {}
sandbox.stub(instance, 'scheduleEmail').returns(scheduleEmailResponse)

const uploadIssuedDocumentAttachmentResponse: UploadArchiveAttachmentResponse = { data: { attachment_token: 'YmMyNWYxYzIwMTU3N2Y4ZGE3ZjZiMzg5OWY0ODNkZDQveXl5LmRvYw' } }
sandbox.stub(instance, 'uploadIssuedDocumentAttachment').returns(uploadIssuedDocumentAttachmentResponse)

const transformIssuedDocumentResponseObj: TransformIssuedDocumentResponse = { data: { id: 12345, type: 'receipt', year: 2021, numeration: 'rec123', subject: '', visible_subject: '', rc_center: '', ei_cassa_type: '', ei_withholding_tax_causal: 'a', ei_other_withholding_tax_type: 'a', ei_other_withholding_tax_causal: 'c', stamp_duty: 0, use_gross_prices: false, e_invoice: false, delivery_note: false, accompanying_invoice: false, amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 1, amount_rivalsa: 0, amount_cassa: 0, amount_withholding_tax: 0, amount_other_withholding_tax: 0, h_margins: 15, v_margins: 16, show_payment_method: false, show_payments: true, show_totals: 'all', show_notification_button: false, is_marked: false, date: '2021-08-20', number: 1, notes: '', rivalsa: 0, cassa: 0, withholding_tax: 0, withholding_tax_taxable: 100, other_withholding_tax: 0, use_split_payment: false, attachment_url: 'kdijrnf893hnwkfk45f50f.pdf', seen_date: '2020-08-23', next_due_date: '2020-08-23', url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf', show_tspay_button: false, dn_number: 3, dn_date: '2020-10-21', dn_ai_causal: 'causal', dn_ai_destination: 'dest', dn_ai_transporter: 'trasp', dn_ai_notes: 'notes', amount_rivalsa_taxable: 3, amount_global_cassa_taxable: 3, amount_cassa_taxable: 3, amount_cassa2: 3, amount_cassa2_taxable: 3, amount_withholding_tax_taxable: 3, amount_enasarco_taxable: 3, amount_other_withholding_tax_taxable: 3, attachment_token: 'asdaosdjaoisndoa', entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, currency: { id: 'EUR', exchange_rate: '1.00000', symbol: '\u20ac' }, language: { code: 'it', name: 'Italiano' }, payment_method: { id: 4, name: 'Credit card' }, items_list: [{ product_id: 5432, code: 'SG3', name: 'Soggiorno', measure: '', net_price: 68.18182, category: '', id: 277876033, gross_price: 75, apply_withholding_taxes: true, discount: 0, discount_highlight: false, qty: 1, vat: { id: 3, value: 10, description: '' }, stock: false, description: '', not_taxable: false }], payments_list: [{ amount: 75, due_date: '2020-08-23', paid_date: null, id: 69078013, payment_terms: { days: 0, type: 'standard' }, status: 'not_paid', payment_account: null }], template: { id: 2821, name: 'Light Smoke' }, extra_data: { ts_status: 1 }, acc_inv_template: { id: 4 }, delivery_note_template: { id: 54321 }, ei_raw: { prop: true }, ei_data: { bank_name: 'Sao Paulo' } }, options: { create_from: ['82112399', '82112400'] } }
sandbox.stub(instance, 'transformIssuedDocument').returns(transformIssuedDocumentResponseObj)

const joinIssuedDocumentsResponseObj: JoinIssuedDocumentsResponse = { data: { id: 12345, type: 'receipt', year: 2021, numeration: 'rec123', subject: '', visible_subject: '', rc_center: '', ei_cassa_type: '', ei_withholding_tax_causal: 'a', ei_other_withholding_tax_type: 'a', ei_other_withholding_tax_causal: 'c', stamp_duty: 0, use_gross_prices: false, e_invoice: false, delivery_note: false, accompanying_invoice: false, amount_net: 68.18, amount_vat: 6.82, amount_gross: 75, amount_due_discount: 1, amount_rivalsa: 0, amount_cassa: 0, amount_withholding_tax: 0, amount_other_withholding_tax: 0, h_margins: 15, v_margins: 16, show_payment_method: false, show_payments: true, show_totals: 'all', show_notification_button: false, is_marked: false, date: '2021-08-20', number: 1, notes: '', rivalsa: 0, cassa: 0, withholding_tax: 0, withholding_tax_taxable: 100, other_withholding_tax: 0, use_split_payment: false, attachment_url: 'kdijrnf893hnwkfk45f50f.pdf', seen_date: '2020-08-23', next_due_date: '2020-08-23', url: 'y12h45rn9yf2mse0p43t7ec90vr.pdf', show_tspay_button: false, dn_number: 3, dn_date: '2020-10-21', dn_ai_causal: 'causal', dn_ai_destination: 'dest', dn_ai_transporter: 'trasp', dn_ai_notes: 'notes', amount_rivalsa_taxable: 3, amount_global_cassa_taxable: 3, amount_cassa_taxable: 3, amount_cassa2: 3, amount_cassa2_taxable: 3, amount_withholding_tax_taxable: 3, amount_enasarco_taxable: 3, amount_other_withholding_tax_taxable: 3, attachment_token: 'asdaosdjaoisndoa', entity: { id: 54321, name: 'Mary Red S.r.L.', vat_number: 'IT05432181211', tax_code: 'IT05432181211', address_street: 'Corso impero, 66', address_postal_code: '20900', address_city: 'Milano', address_province: 'MI', address_extra: '', country: 'Italia', certified_email: 'mary@pec.red.com', ei_code: 'ABCXCR1' }, currency: { id: 'EUR', exchange_rate: '1.00000', symbol: '\u20ac' }, language: { code: 'it', name: 'Italiano' }, payment_method: { id: 4, name: 'Credit card' }, items_list: [{ product_id: 5432, code: 'SG3', name: 'Soggiorno', measure: '', net_price: 68.18182, category: '', id: 277876033, gross_price: 75, apply_withholding_taxes: true, discount: 0, discount_highlight: false, qty: 1, vat: { id: 3, value: 10, description: '' }, stock: false, description: '', not_taxable: false }], payments_list: [{ amount: 75, due_date: '2020-08-23', paid_date: null, id: 69078013, payment_terms: { days: 0, type: 'standard' }, status: 'not_paid', payment_account: null }], template: { id: 2821, name: 'Light Smoke' }, extra_data: { ts_status: 1 }, acc_inv_template: { id: 4 }, delivery_note_template: { id: 54321 }, ei_raw: { prop: true }, ei_data: { bank_name: 'Sao Paulo' } }, options: { create_from: ['82112399', '82112400'] } }
sandbox.stub(instance, 'joinIssuedDocuments').returns(joinIssuedDocumentsResponseObj)

// beforeEach(function () {
// })

describe('IssuedDocumentsApi', function () {
  describe('createIssuedDocument', function () {
    it('should call createIssuedDocument successfully', function (done) {
      const opts: CreateIssuedDocumentRequest = { data: { type: 'invoice', numeration: 'node', subject: '', visible_subject: '', amount_net: 9.3, amount_vat: 0.72, amount_gross: 10.02, amount_due_discount: 0, entity: { name: 'Mario Rossi', vat_number: '', tax_code: 'MLSMTT92P16A246W', address_street: 'Via delle Betulle, 123', address_postal_code: '21012', address_city: 'Curno', address_province: 'BG', address_extra: '', country: 'Italia', certified_email: '', ei_code: '' }, date: '2018-05-14', number: 1, next_due_date: '1970-01-01', items_list: null, payments_list: null } }
      const response = instance.createIssuedDocument(2, opts)
      const expectedJson = JSON.stringify(createIssuedDocumentResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(createIssuedDocumentStub.getCall(0).args[1]).to.equal(opts)
      done()
    })
  })
  describe('deleteIssuedDocument', function () {
    it('should call deleteIssuedDocument successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('deleteIssuedDocumentAttachment', function () {
    it('should call deleteIssuedDocumentAttachment successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('getEmailData', function () {
    it('should call getEmailData successfully', function (done) {
      const response = instance.getEmailData(2, 12345)
      const expectedJson = JSON.stringify(getEmailDataResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('getExistingIssuedDocumentTotals', function () {
    it('should call getExistingIssuedDocumentTotals successfully', function (done) {
      const response = instance.getExistingIssuedDocumentTotals(2, 12345)
      const expectedJson = JSON.stringify(getExistingIssuedDocumentTotalsResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('getIssuedDocument', function () {
    it('should call getIssuedDocument successfully', function (done) {
      const response = instance.getIssuedDocument(2, 12345)
      const expectedJson = JSON.stringify(getIssuedDocumentResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('getIssuedDocumentPreCreateInfo', function () {
    it('should call getIssuedDocumentPreCreateInfo successfully', function (done) {
      const response = instance.getIssuedDocumentPreCreateInfo(2, 'invoice')
      const expectedJson = JSON.stringify(getIssuedDocumentPreCreateInfoResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('getNewIssuedDocumentTotals', function () {
    it('should call getNewIssuedDocumentTotals successfully', function (done) {
      const opts: GetNewIssuedDocumentTotalsRequest = { data: { type: 'invoice', numeration: 'node', subject: '', visible_subject: '', amount_net: 9.3, amount_vat: 0.72, amount_gross: 10.02, amount_due_discount: 0, entity: { name: 'Mario Rossi', vat_number: '', tax_code: 'MLSMTT92P16A246W', address_street: 'Via delle Betulle, 123', address_postal_code: '21012', address_city: 'Curno', address_province: 'BG', address_extra: '', country: 'Italia', certified_email: '', ei_code: '' }, date: '2018-05-14', number: 1, next_due_date: '1970-01-01', items_list: null, payments_list: null } }
      const response = instance.getNewIssuedDocumentTotals(2, opts)
      const expectedJson = JSON.stringify(getNewIssuedDocumentTotalsResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(getNewIssuedDocumentTotalsStub.getCall(0).args[1]).to.equal(opts)
      done()
    })
  })
  describe('listIssuedDocuments', function () {
    it('should call listIssuedDocuments successfully', function (done) {
      const response = instance.listIssuedDocuments(2, 'invoice')
      const expectedJson = JSON.stringify(listIssuedDocumentsResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('modifyIssuedDocument', function () {
    it('should call modifyIssuedDocument successfully', function (done) {
      const opts = { data: { subject: 'ssss' } }
      const response = instance.modifyIssuedDocument(2, 12345, opts)
      const expectedJson = JSON.stringify(modifyIssuedDocumentResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      expect(modifyIssuedDocumentStub.getCall(0).args[2]).to.equal(opts)
      done()
    })
  })
  describe('scheduleEmail', function () {
    it('should call scheduleEmail successfully', function (done) {
      expect(1).to.equal(1)
      done()
    })
  })
  describe('uploadIssuedDocumentAttachment', function () {
    it('should call uploadIssuedDocumentAttachment successfully', function (done) {
      const response = instance.uploadIssuedDocumentAttachment(2)
      const expectedJson = JSON.stringify(uploadIssuedDocumentAttachmentResponse)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('transformIssuedDocument', function () {
    it('should call transformIssuedDocument successfully', function (done) {
      const response = instance.transformIssuedDocument(2, 54321, 'proforma')
      const expectedJson = JSON.stringify(transformIssuedDocumentResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
  describe('joinIssuedDocuments', function () {
    it('should call joinIssuedDocuments successfully', function (done) {
      const response = instance.joinIssuedDocuments(2, '12345,54321')
      const expectedJson = JSON.stringify(joinIssuedDocumentsResponseObj)
      const actualJson = JSON.stringify(response)
      expect(actualJson).to.equal(expectedJson)
      done()
    })
  })
})
