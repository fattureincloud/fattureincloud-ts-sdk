/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.19
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CompanyInfoAccessInfo } from './company-info-access-info';
import { CompanyInfoPlanInfo } from './company-info-plan-info';
import { CompanyType } from './company-type';

/**
 * 
 * @export
 * @interface CompanyInfo
 */
export interface CompanyInfo {
    /**
     * Company unique identifier.
     * @type {number}
     * @memberof CompanyInfo
     */
    'id'?: number | null;
    /**
     * Company name.
     * @type {string}
     * @memberof CompanyInfo
     */
    'name'?: string | null;
    /**
     * Company email.
     * @type {string}
     * @memberof CompanyInfo
     */
    'email'?: string | null;
    /**
     * 
     * @type {CompanyType}
     * @memberof CompanyInfo
     */
    'type'?: CompanyType;
    /**
     * 
     * @type {CompanyInfoAccessInfo}
     * @memberof CompanyInfo
     */
    'access_info'?: CompanyInfoAccessInfo | null;
    /**
     * 
     * @type {CompanyInfoPlanInfo}
     * @memberof CompanyInfo
     */
    'plan_info'?: CompanyInfoPlanInfo | null;
    /**
     * Accountant unique identifier.
     * @type {number}
     * @memberof CompanyInfo
     */
    'accountant_id'?: number | null;
    /**
     * Determine if the logged account is an accountant.
     * @type {boolean}
     * @memberof CompanyInfo
     */
    'is_accountant'?: boolean | null;
}

