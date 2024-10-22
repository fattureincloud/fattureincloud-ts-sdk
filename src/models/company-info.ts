/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CompanyInfoAccessInfo } from './company-info-access-info';
// May contain unused imports in some cases
// @ts-ignore
import type { CompanyInfoPlanInfo } from './company-info-plan-info';
// May contain unused imports in some cases
// @ts-ignore
import type { CompanyType } from './company-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FattureInCloudPlanType } from './fatture-in-cloud-plan-type';

/**
 * 
 * @export
 * @interface CompanyInfo
 */
export interface CompanyInfo {
    /**
     * Company id
     * @type {number}
     * @memberof CompanyInfo
     */
    'id'?: number | null;
    /**
     * Company name
     * @type {string}
     * @memberof CompanyInfo
     */
    'name'?: string | null;
    /**
     * Company email
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
     * @type {string}
     * @memberof CompanyInfo
     */
    'fic_license_expire'?: string | null;
    /**
     * 
     * @type {FattureInCloudPlanType}
     * @memberof CompanyInfo
     */
    'fic_plan_name'?: FattureInCloudPlanType;
    /**
     * 
     * @type {CompanyInfoPlanInfo}
     * @memberof CompanyInfo
     */
    'plan_info'?: CompanyInfoPlanInfo | null;
    /**
     * Company accountant id
     * @type {number}
     * @memberof CompanyInfo
     */
    'accountant_id'?: number | null;
    /**
     * Is the logged account an accountant.
     * @type {boolean}
     * @memberof CompanyInfo
     */
    'is_accountant'?: boolean | null;
}



