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
import { GetCompanyInfoResponse } from '../../src/models';
/**
 * CompaniesApi - axios parameter creator
 * @export
 */
export const CompaniesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the company detailed info.
         * @summary Get Company Info
         * @param {number} companyId The ID of the company.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyInfo: async (companyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCompanyInfo', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/company/info`
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
 * CompaniesApi - functional programming interface
 * @export
 */
export const CompaniesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompaniesApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets the company detailed info.
         * @summary Get Company Info
         * @param {number} companyId The ID of the company.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompanyInfo(companyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCompanyInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyInfo(companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CompaniesApi - factory interface
 * @export
 */
export const CompaniesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompaniesApiFp(configuration)
    return {
        /**
         * Gets the company detailed info.
         * @summary Get Company Info
         * @param {number} companyId The ID of the company.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompanyInfo(companyId: number, options?: any): AxiosPromise<GetCompanyInfoResponse> {
            return localVarFp.getCompanyInfo(companyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompaniesApi - interface
 * @export
 * @interface CompaniesApi
 */
export interface CompaniesApiInterface {
    /**
     * Gets the company detailed info.
     * @summary Get Company Info
     * @param {number} companyId The ID of the company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    getCompanyInfo(companyId: number, options?: AxiosRequestConfig): AxiosPromise<GetCompanyInfoResponse>;

}

/**
 * CompaniesApi - object-oriented interface
 * @export
 * @class CompaniesApi
 * @extends {BaseAPI}
 */
export class CompaniesApi extends BaseAPI implements CompaniesApiInterface {
    /**
     * Gets the company detailed info.
     * @summary Get Company Info
     * @param {number} companyId The ID of the company.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApi
     */
    public getCompanyInfo(companyId: number, options?: AxiosRequestConfig) {
        return CompaniesApiFp(this.configuration).getCompanyInfo(companyId, options).then((request) => request(this.axios, this.basePath));
    }
}