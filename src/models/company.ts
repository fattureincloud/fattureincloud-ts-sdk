/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.31
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CompanyType } from './company-type';
// May contain unused imports in some cases
// @ts-ignore
import { ControlledCompany } from './controlled-company';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * Company id
     * @type {number}
     * @memberof Company
     */
    'id'?: number | null;
    /**
     * Company name
     * @type {string}
     * @memberof Company
     */
    'name'?: string | null;
    /**
     * 
     * @type {CompanyType}
     * @memberof Company
     */
    'type'?: CompanyType;
    /**
     * Company authentication token for this company. [Only if type=company]
     * @type {string}
     * @memberof Company
     */
    'access_token'?: string | null;
    /**
     * Company list of controlled companies [Only if type=accountant]
     * @type {Array<ControlledCompany>}
     * @memberof Company
     */
    'controlled_companies'?: Array<ControlledCompany> | null;
    /**
     * Company connection id
     * @type {number}
     * @memberof Company
     */
    'connection_id'?: number | null;
    /**
     * Company tax code
     * @type {string}
     * @memberof Company
     */
    'tax_code'?: string | null;
}



