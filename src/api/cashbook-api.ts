/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.32
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
import FormData from 'form-data'
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import { CreateCashbookEntryRequest } from '../../src/models';
// @ts-ignore
import { CreateCashbookEntryResponse } from '../../src/models';
// @ts-ignore
import { GetCashbookEntryResponse } from '../../src/models';
// @ts-ignore
import { ListCashbookEntriesResponse } from '../../src/models';
// @ts-ignore
import { ModifyCashbookEntryRequest } from '../../src/models';
// @ts-ignore
import { ModifyCashbookEntryResponse } from '../../src/models';
/**
 * CashbookApi - axios parameter creator
 * @export
 */
export const CashbookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new cashbook entry.
         * @summary Create Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {CreateCashbookEntryRequest} [createCashbookEntryRequest] Cashbook entry. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCashbookEntry: async (companyId: number, createCashbookEntryRequest?: CreateCashbookEntryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createCashbookEntry', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/cashbook`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthenticationCodeFlow required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["cashbook:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.14/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCashbookEntryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified cashbook entry.
         * @summary Delete Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCashbookEntry: async (companyId: number, documentId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteCashbookEntry', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('deleteCashbookEntry', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/cashbook/{document_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"document_id"}}`, encodeURIComponent(String(documentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthenticationCodeFlow required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["cashbook:a"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the specified cashbook entry.
         * @summary Get Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetCashbookEntryFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCashbookEntry: async (companyId: number, documentId: string, fields?: string, fieldset?: GetCashbookEntryFieldsetEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCashbookEntry', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('getCashbookEntry', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/cashbook/{document_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"document_id"}}`, encodeURIComponent(String(documentId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["cashbook:r"], configuration)

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (fieldset !== undefined) {
                localVarQueryParameter['fieldset'] = fieldset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the cashbook entries.
         * @summary List Cashbook Entries
         * @param {number} companyId The ID of the company.
         * @param {string} dateFrom Start date.
         * @param {string} dateTo End date.
         * @param {number} [year] Filter cashbook by year.
         * @param {ListCashbookEntriesTypeEnum} [type] Filter cashbook by type.
         * @param {number} [paymentAccountId] Filter by payment account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashbookEntries: async (companyId: number, dateFrom: string, dateTo: string, year?: number, type?: ListCashbookEntriesTypeEnum, paymentAccountId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listCashbookEntries', 'companyId', companyId)
            // verify required parameter 'dateFrom' is not null or undefined
            assertParamExists('listCashbookEntries', 'dateFrom', dateFrom)
            // verify required parameter 'dateTo' is not null or undefined
            assertParamExists('listCashbookEntries', 'dateTo', dateTo)
            const localVarPath = `/c/{company_id}/cashbook`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["cashbook:r"], configuration)

            if (dateFrom !== undefined) {
                localVarQueryParameter['date_from'] = dateFrom;
            }

            if (dateTo !== undefined) {
                localVarQueryParameter['date_to'] = dateTo;
            }

            if (year !== undefined) {
                localVarQueryParameter['year'] = year;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (paymentAccountId !== undefined) {
                localVarQueryParameter['payment_account_id'] = paymentAccountId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Modifies the specified cashbook entry.
         * @summary Modify Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {ModifyCashbookEntryRequest} [modifyCashbookEntryRequest] Cashbook Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyCashbookEntry: async (companyId: number, documentId: string, modifyCashbookEntryRequest?: ModifyCashbookEntryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('modifyCashbookEntry', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('modifyCashbookEntry', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/cashbook/{document_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"document_id"}}`, encodeURIComponent(String(documentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthenticationCodeFlow required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["cashbook:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.14/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyCashbookEntryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CashbookApi - functional programming interface
 * @export
 */
export const CashbookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CashbookApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new cashbook entry.
         * @summary Create Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {CreateCashbookEntryRequest} [createCashbookEntryRequest] Cashbook entry. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCashbookEntry(companyId: number, createCashbookEntryRequest?: CreateCashbookEntryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCashbookEntryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCashbookEntry(companyId, createCashbookEntryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashbookApi.createCashbookEntry']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerIndex || basePath);
        },
        /**
         * Deletes the specified cashbook entry.
         * @summary Delete Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCashbookEntry(companyId: number, documentId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCashbookEntry(companyId, documentId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashbookApi.deleteCashbookEntry']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerIndex || basePath);
        },
        /**
         * Gets the specified cashbook entry.
         * @summary Get Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetCashbookEntryFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCashbookEntry(companyId: number, documentId: string, fields?: string, fieldset?: GetCashbookEntryFieldsetEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCashbookEntryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCashbookEntry(companyId, documentId, fields, fieldset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashbookApi.getCashbookEntry']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerIndex || basePath);
        },
        /**
         * Lists the cashbook entries.
         * @summary List Cashbook Entries
         * @param {number} companyId The ID of the company.
         * @param {string} dateFrom Start date.
         * @param {string} dateTo End date.
         * @param {number} [year] Filter cashbook by year.
         * @param {ListCashbookEntriesTypeEnum} [type] Filter cashbook by type.
         * @param {number} [paymentAccountId] Filter by payment account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCashbookEntries(companyId: number, dateFrom: string, dateTo: string, year?: number, type?: ListCashbookEntriesTypeEnum, paymentAccountId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCashbookEntriesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashbookApi.listCashbookEntries']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerIndex || basePath);
        },
        /**
         * Modifies the specified cashbook entry.
         * @summary Modify Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {ModifyCashbookEntryRequest} [modifyCashbookEntryRequest] Cashbook Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyCashbookEntry(companyId: number, documentId: string, modifyCashbookEntryRequest?: ModifyCashbookEntryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModifyCashbookEntryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CashbookApi.modifyCashbookEntry']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerIndex || basePath);
        },
    }
};

/**
 * CashbookApi - factory interface
 * @export
 */
export const CashbookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CashbookApiFp(configuration)
    return {
        /**
         * Creates a new cashbook entry.
         * @summary Create Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {CreateCashbookEntryRequest} [createCashbookEntryRequest] Cashbook entry. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCashbookEntry(companyId: number, createCashbookEntryRequest?: CreateCashbookEntryRequest, options?: any): AxiosPromise<CreateCashbookEntryResponse> {
            return localVarFp.createCashbookEntry(companyId, createCashbookEntryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified cashbook entry.
         * @summary Delete Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCashbookEntry(companyId: number, documentId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteCashbookEntry(companyId, documentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the specified cashbook entry.
         * @summary Get Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetCashbookEntryFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCashbookEntry(companyId: number, documentId: string, fields?: string, fieldset?: GetCashbookEntryFieldsetEnum, options?: any): AxiosPromise<GetCashbookEntryResponse> {
            return localVarFp.getCashbookEntry(companyId, documentId, fields, fieldset, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the cashbook entries.
         * @summary List Cashbook Entries
         * @param {number} companyId The ID of the company.
         * @param {string} dateFrom Start date.
         * @param {string} dateTo End date.
         * @param {number} [year] Filter cashbook by year.
         * @param {ListCashbookEntriesTypeEnum} [type] Filter cashbook by type.
         * @param {number} [paymentAccountId] Filter by payment account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashbookEntries(companyId: number, dateFrom: string, dateTo: string, year?: number, type?: ListCashbookEntriesTypeEnum, paymentAccountId?: number, options?: any): AxiosPromise<ListCashbookEntriesResponse> {
            return localVarFp.listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies the specified cashbook entry.
         * @summary Modify Cashbook Entry
         * @param {number} companyId The ID of the company.
         * @param {string} documentId The ID of the document.
         * @param {ModifyCashbookEntryRequest} [modifyCashbookEntryRequest] Cashbook Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyCashbookEntry(companyId: number, documentId: string, modifyCashbookEntryRequest?: ModifyCashbookEntryRequest, options?: any): AxiosPromise<ModifyCashbookEntryResponse> {
            return localVarFp.modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CashbookApi - interface
 * @export
 * @interface CashbookApi
 */
export interface CashbookApiInterface {
    /**
     * Creates a new cashbook entry.
     * @summary Create Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {CreateCashbookEntryRequest} [createCashbookEntryRequest] Cashbook entry. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApiInterface
     */
    createCashbookEntry(companyId: number, createCashbookEntryRequest?: CreateCashbookEntryRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateCashbookEntryResponse>;

    /**
     * Deletes the specified cashbook entry.
     * @summary Delete Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApiInterface
     */
    deleteCashbookEntry(companyId: number, documentId: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Gets the specified cashbook entry.
     * @summary Get Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetCashbookEntryFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApiInterface
     */
    getCashbookEntry(companyId: number, documentId: string, fields?: string, fieldset?: GetCashbookEntryFieldsetEnum, options?: RawAxiosRequestConfig): AxiosPromise<GetCashbookEntryResponse>;

    /**
     * Lists the cashbook entries.
     * @summary List Cashbook Entries
     * @param {number} companyId The ID of the company.
     * @param {string} dateFrom Start date.
     * @param {string} dateTo End date.
     * @param {number} [year] Filter cashbook by year.
     * @param {ListCashbookEntriesTypeEnum} [type] Filter cashbook by type.
     * @param {number} [paymentAccountId] Filter by payment account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApiInterface
     */
    listCashbookEntries(companyId: number, dateFrom: string, dateTo: string, year?: number, type?: ListCashbookEntriesTypeEnum, paymentAccountId?: number, options?: RawAxiosRequestConfig): AxiosPromise<ListCashbookEntriesResponse>;

    /**
     * Modifies the specified cashbook entry.
     * @summary Modify Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {ModifyCashbookEntryRequest} [modifyCashbookEntryRequest] Cashbook Entry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApiInterface
     */
    modifyCashbookEntry(companyId: number, documentId: string, modifyCashbookEntryRequest?: ModifyCashbookEntryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ModifyCashbookEntryResponse>;

}

/**
 * CashbookApi - object-oriented interface
 * @export
 * @class CashbookApi
 * @extends {BaseAPI}
 */
export class CashbookApi extends BaseAPI implements CashbookApiInterface {
    /**
     * Creates a new cashbook entry.
     * @summary Create Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {CreateCashbookEntryRequest} [createCashbookEntryRequest] Cashbook entry. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApi
     */
    public createCashbookEntry(companyId: number, createCashbookEntryRequest?: CreateCashbookEntryRequest, options?: RawAxiosRequestConfig) {
        return CashbookApiFp(this.configuration).createCashbookEntry(companyId, createCashbookEntryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified cashbook entry.
     * @summary Delete Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApi
     */
    public deleteCashbookEntry(companyId: number, documentId: string, options?: RawAxiosRequestConfig) {
        return CashbookApiFp(this.configuration).deleteCashbookEntry(companyId, documentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the specified cashbook entry.
     * @summary Get Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetCashbookEntryFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApi
     */
    public getCashbookEntry(companyId: number, documentId: string, fields?: string, fieldset?: GetCashbookEntryFieldsetEnum, options?: RawAxiosRequestConfig) {
        return CashbookApiFp(this.configuration).getCashbookEntry(companyId, documentId, fields, fieldset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the cashbook entries.
     * @summary List Cashbook Entries
     * @param {number} companyId The ID of the company.
     * @param {string} dateFrom Start date.
     * @param {string} dateTo End date.
     * @param {number} [year] Filter cashbook by year.
     * @param {ListCashbookEntriesTypeEnum} [type] Filter cashbook by type.
     * @param {number} [paymentAccountId] Filter by payment account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApi
     */
    public listCashbookEntries(companyId: number, dateFrom: string, dateTo: string, year?: number, type?: ListCashbookEntriesTypeEnum, paymentAccountId?: number, options?: RawAxiosRequestConfig) {
        return CashbookApiFp(this.configuration).listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies the specified cashbook entry.
     * @summary Modify Cashbook Entry
     * @param {number} companyId The ID of the company.
     * @param {string} documentId The ID of the document.
     * @param {ModifyCashbookEntryRequest} [modifyCashbookEntryRequest] Cashbook Entry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashbookApi
     */
    public modifyCashbookEntry(companyId: number, documentId: string, modifyCashbookEntryRequest?: ModifyCashbookEntryRequest, options?: RawAxiosRequestConfig) {
        return CashbookApiFp(this.configuration).modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetCashbookEntryFieldsetEnum = {
    Basic: 'basic',
    Detailed: 'detailed'
} as const;
export type GetCashbookEntryFieldsetEnum = typeof GetCashbookEntryFieldsetEnum[keyof typeof GetCashbookEntryFieldsetEnum];
/**
 * @export
 */
export const ListCashbookEntriesTypeEnum = {
    All: 'all',
    In: 'in',
    Out: 'out'
} as const;
export type ListCashbookEntriesTypeEnum = typeof ListCashbookEntriesTypeEnum[keyof typeof ListCashbookEntriesTypeEnum];
