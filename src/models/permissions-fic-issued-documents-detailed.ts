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


import { PermissionLevel } from './permission-level';

/**
 * 
 * @export
 * @interface PermissionsFicIssuedDocumentsDetailed
 */
export interface PermissionsFicIssuedDocumentsDetailed {
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'quotes'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'proformas'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'invoices'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'receipts'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'delivery_notes'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'credit_notes'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'orders'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'work_reports'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'supplier_orders'?: PermissionLevel;
    /**
     * 
     * @type {PermissionLevel}
     * @memberof PermissionsFicIssuedDocumentsDetailed
     */
    'self_invoices'?: PermissionLevel;
}
