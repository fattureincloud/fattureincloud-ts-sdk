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



/**
 * User company role
 * @export
 * @enum {string}
 */

export const UserCompanyRole = {
    Master: 'master',
    Subaccount: 'subaccount',
    Employee: 'employee'
} as const;

export type UserCompanyRole = typeof UserCompanyRole[keyof typeof UserCompanyRole];



