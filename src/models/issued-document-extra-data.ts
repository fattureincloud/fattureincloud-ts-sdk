/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.24
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Extra data. TS fields follow the technical specifications provided by \"Sistema Tessera Sanitaria\".
 * @export
 * @interface IssuedDocumentExtraData
 */
export interface IssuedDocumentExtraData {
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'show_sofort_button'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof IssuedDocumentExtraData
     */
    'multifatture_sent'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'ts_communication'?: boolean | null;
    /**
     * 1 => TK (Ticket di pronto soccorso); 2 => SR (Visita in intramoenia)
     * @type {number}
     * @memberof IssuedDocumentExtraData
     */
    'ts_flag_tipo_spesa'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'ts_pagamento_tracciato'?: boolean | null;
    /**
     * Can be [ \'TK\', \'FC\', \'FV\', \'SV\', \'SP\', \'AD\', \'AS\', \'SR\', \'CT\', \'PI\', \'IC\', \'AA\' ]. Refer to the technical specifications to learn more.
     * @type {string}
     * @memberof IssuedDocumentExtraData
     */
    'ts_tipo_spesa'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'ts_opposizione'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof IssuedDocumentExtraData
     */
    'ts_status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof IssuedDocumentExtraData
     */
    'ts_file_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IssuedDocumentExtraData
     */
    'ts_sent_date'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'ts_full_amount'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof IssuedDocumentExtraData
     */
    'imported_by'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IssuedDocumentExtraData
     */
    'ts_single_sending'?: boolean | null;
}

