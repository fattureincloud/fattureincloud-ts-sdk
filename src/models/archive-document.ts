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
 * 
 * @export
 * @interface ArchiveDocument
 */
export interface ArchiveDocument {
    /**
     * Archive document unique identifier.
     * @type {number}
     * @memberof ArchiveDocument
     */
    'id'?: number | null;
    /**
     * Archive document date.
     * @type {string}
     * @memberof ArchiveDocument
     */
    'date'?: string | null;
    /**
     * Archive Document description.
     * @type {string}
     * @memberof ArchiveDocument
     */
    'description'?: string | null;
    /**
     * [Temporary] [Read Only] Absolute url of the attached file. Authomatically set if a valid attachment token is passed via POST /archive or PUT /archive/{documentId}.
     * @type {string}
     * @memberof ArchiveDocument
     */
    'attachment_url'?: string | null;
    /**
     * Archive document category.
     * @type {string}
     * @memberof ArchiveDocument
     */
    'category'?: string | null;
    /**
     * [Write Only]  [Required] Attachment token returned by POST /archive/attachment. Used to attach the file already uploaded.
     * @type {string}
     * @memberof ArchiveDocument
     */
    'attachment_token'?: string | null;
}

