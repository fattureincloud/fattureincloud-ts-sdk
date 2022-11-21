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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../../configuration';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
import FormData from 'form-data'
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../base';
// @ts-ignore
import { ListEmailsResponse } from '../../src/models';
/**
 * EmailsApi - axios parameter creator
 * @export
 */
export const EmailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List Emails.
         * @summary List emails
         * @param {string} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEmails: async (companyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listEmails', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/emails`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthenticationCodeFlow required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmailsApi - functional programming interface
 * @export
 */
export const EmailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmailsApiAxiosParamCreator(configuration)
    return {
        /**
         * List Emails.
         * @summary List emails
         * @param {number} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEmails(companyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListEmailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEmails(companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmailsApi - factory interface
 * @export
 */
export const EmailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmailsApiFp(configuration)
    return {
        /**
         * List Emails.
         * @summary List emails
         * @param {string} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEmails(companyId: number, options?: any): AxiosPromise<ListEmailsResponse> {
            return localVarFp.listEmails(companyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailsApi - interface
 * @export
 * @interface EmailsApi
 */
export interface EmailsApiInterface {
    /**
     * List Emails.
     * @summary List emails
     * @param {string} companyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailsApiInterface
     */
    listEmails(companyId: number, options?: AxiosRequestConfig): AxiosPromise<ListEmailsResponse>;

}

/**
 * EmailsApi - object-oriented interface
 * @export
 * @class EmailsApi
 * @extends {BaseAPI}
 */
export class EmailsApi extends BaseAPI implements EmailsApiInterface {
    /**
     * List Emails.
     * @summary List emails
     * @param {number} companyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailsApi
     */
    public listEmails(companyId: number, options?: AxiosRequestConfig) {
        return EmailsApiFp(this.configuration).listEmails(companyId, options).then((request) => request(this.axios, this.basePath));
    }
}
