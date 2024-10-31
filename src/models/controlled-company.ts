/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CompanyType } from './company-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FattureInCloudPlanType } from './fatture-in-cloud-plan-type';

/**
 * 
 * @export
 * @interface ControlledCompany
 */
export interface ControlledCompany {
    /**
     * Controlled company id
     * @type {number}
     * @memberof ControlledCompany
     */
    'id'?: number | null;
    /**
     * Controlled company id
     * @type {string}
     * @memberof ControlledCompany
     */
    'name'?: string | null;
    /**
     * 
     * @type {CompanyType}
     * @memberof ControlledCompany
     */
    'type'?: CompanyType;
    /**
     * Controlled company access token Only if type=company]
     * @type {string}
     * @memberof ControlledCompany
     */
    'access_token'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ControlledCompany
     */
    'fic_license_expire'?: string | null;
    /**
     * 
     * @type {FattureInCloudPlanType}
     * @memberof ControlledCompany
     */
    'fic_plan'?: FattureInCloudPlanType;
    /**
     * Controlled company connection id
     * @type {number}
     * @memberof ControlledCompany
     */
    'connection_id'?: number | null;
    /**
     * Controlled company tax code
     * @type {string}
     * @memberof ControlledCompany
     */
    'tax_code'?: string | null;
}



