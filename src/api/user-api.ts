/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.30
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
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
import { GetUserInfoResponse } from '../../src/models';
// @ts-ignore
import { ListUserCompaniesResponse } from '../../src/models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the current user\'s info.
         * @summary Get User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/info`;
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
        /**
         * Lists the companies controlled by the current user.
         * @summary List User Companies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserCompanies: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/companies`;
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
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets the current user\'s info.
         * @summary Get User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the companies controlled by the current user.
         * @summary List User Companies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUserCompanies(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListUserCompaniesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUserCompanies(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Gets the current user\'s info.
         * @summary Get User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInfo(options?: any): AxiosPromise<GetUserInfoResponse> {
            return localVarFp.getUserInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the companies controlled by the current user.
         * @summary List User Companies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserCompanies(options?: any): AxiosPromise<ListUserCompaniesResponse> {
            return localVarFp.listUserCompanies(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * Gets the current user\'s info.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserInfo(options?: AxiosRequestConfig): AxiosPromise<GetUserInfoResponse>;

    /**
     * Lists the companies controlled by the current user.
     * @summary List User Companies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    listUserCompanies(options?: AxiosRequestConfig): AxiosPromise<ListUserCompaniesResponse>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * Gets the current user\'s info.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserInfo(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the companies controlled by the current user.
     * @summary List User Companies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public listUserCompanies(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).listUserCompanies(options).then((request) => request(this.axios, this.basePath));
    }
}

