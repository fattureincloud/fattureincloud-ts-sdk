/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.1.0
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
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { CreateSupplierRequest } from '../../src/models';
// @ts-ignore
import type { CreateSupplierResponse } from '../../src/models';
// @ts-ignore
import type { GetSupplierResponse } from '../../src/models';
// @ts-ignore
import type { ListSuppliersResponse } from '../../src/models';
// @ts-ignore
import type { ModifySupplierRequest } from '../../src/models';
// @ts-ignore
import type { ModifySupplierResponse } from '../../src/models';
/**
 * SuppliersApi - axios parameter creator
 * @export
 */
export const SuppliersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new supplier.
         * @summary Create Supplier
         * @param {number} companyId The ID of the company.
         * @param {CreateSupplierRequest} [createSupplierRequest] The supplier to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSupplier: async (companyId: number, createSupplierRequest?: CreateSupplierRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createSupplier', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/entities/suppliers`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.suppliers:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.1.0/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createSupplierRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified supplier.
         * @summary Delete Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSupplier: async (companyId: number, supplierId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteSupplier', 'companyId', companyId)
            // verify required parameter 'supplierId' is not null or undefined
            assertParamExists('deleteSupplier', 'supplierId', supplierId)
            const localVarPath = `/c/{company_id}/entities/suppliers/{supplier_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"supplier_id"}}`, encodeURIComponent(String(supplierId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.suppliers:a"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the specified supplier.
         * @summary Get Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetSupplierFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplier: async (companyId: number, supplierId: number, fields?: string, fieldset?: GetSupplierFieldsetEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getSupplier', 'companyId', companyId)
            // verify required parameter 'supplierId' is not null or undefined
            assertParamExists('getSupplier', 'supplierId', supplierId)
            const localVarPath = `/c/{company_id}/entities/suppliers/{supplier_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"supplier_id"}}`, encodeURIComponent(String(supplierId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.suppliers:r"], configuration)

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
         * Lists the suppliers.
         * @summary List Suppliers
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListSuppliersFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSuppliers: async (companyId: number, fields?: string, fieldset?: ListSuppliersFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listSuppliers', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/entities/suppliers`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.suppliers:r"], configuration)

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (fieldset !== undefined) {
                localVarQueryParameter['fieldset'] = fieldset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
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
         * Modifies the specified supplier.
         * @summary Modify Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {ModifySupplierRequest} [modifySupplierRequest] The modified Supplier. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifySupplier: async (companyId: number, supplierId: number, modifySupplierRequest?: ModifySupplierRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('modifySupplier', 'companyId', companyId)
            // verify required parameter 'supplierId' is not null or undefined
            assertParamExists('modifySupplier', 'supplierId', supplierId)
            const localVarPath = `/c/{company_id}/entities/suppliers/{supplier_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"supplier_id"}}`, encodeURIComponent(String(supplierId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.suppliers:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.1.0/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifySupplierRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SuppliersApi - functional programming interface
 * @export
 */
export const SuppliersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SuppliersApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new supplier.
         * @summary Create Supplier
         * @param {number} companyId The ID of the company.
         * @param {CreateSupplierRequest} [createSupplierRequest] The supplier to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSupplier(companyId: number, createSupplierRequest?: CreateSupplierRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateSupplierResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSupplier(companyId, createSupplierRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SuppliersApi.createSupplier']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the specified supplier.
         * @summary Delete Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSupplier(companyId: number, supplierId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSupplier(companyId, supplierId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SuppliersApi.deleteSupplier']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets the specified supplier.
         * @summary Get Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetSupplierFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupplier(companyId: number, supplierId: number, fields?: string, fieldset?: GetSupplierFieldsetEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSupplierResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupplier(companyId, supplierId, fields, fieldset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SuppliersApi.getSupplier']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the suppliers.
         * @summary List Suppliers
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListSuppliersFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSuppliers(companyId: number, fields?: string, fieldset?: ListSuppliersFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListSuppliersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSuppliers(companyId, fields, fieldset, sort, page, perPage, q, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SuppliersApi.listSuppliers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Modifies the specified supplier.
         * @summary Modify Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {ModifySupplierRequest} [modifySupplierRequest] The modified Supplier. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifySupplier(companyId: number, supplierId: number, modifySupplierRequest?: ModifySupplierRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModifySupplierResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifySupplier(companyId, supplierId, modifySupplierRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SuppliersApi.modifySupplier']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SuppliersApi - factory interface
 * @export
 */
export const SuppliersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SuppliersApiFp(configuration)
    return {
        /**
         * Creates a new supplier.
         * @summary Create Supplier
         * @param {number} companyId The ID of the company.
         * @param {CreateSupplierRequest} [createSupplierRequest] The supplier to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSupplier(companyId: number, createSupplierRequest?: CreateSupplierRequest, options?: any): AxiosPromise<CreateSupplierResponse> {
            return localVarFp.createSupplier(companyId, createSupplierRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified supplier.
         * @summary Delete Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSupplier(companyId: number, supplierId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSupplier(companyId, supplierId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the specified supplier.
         * @summary Get Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetSupplierFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplier(companyId: number, supplierId: number, fields?: string, fieldset?: GetSupplierFieldsetEnum, options?: any): AxiosPromise<GetSupplierResponse> {
            return localVarFp.getSupplier(companyId, supplierId, fields, fieldset, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the suppliers.
         * @summary List Suppliers
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListSuppliersFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSuppliers(companyId: number, fields?: string, fieldset?: ListSuppliersFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: any): AxiosPromise<ListSuppliersResponse> {
            return localVarFp.listSuppliers(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies the specified supplier.
         * @summary Modify Supplier
         * @param {number} companyId The ID of the company.
         * @param {number} supplierId The ID of the supplier.
         * @param {ModifySupplierRequest} [modifySupplierRequest] The modified Supplier. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifySupplier(companyId: number, supplierId: number, modifySupplierRequest?: ModifySupplierRequest, options?: any): AxiosPromise<ModifySupplierResponse> {
            return localVarFp.modifySupplier(companyId, supplierId, modifySupplierRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SuppliersApi - interface
 * @export
 * @interface SuppliersApi
 */
export interface SuppliersApiInterface {
    /**
     * Creates a new supplier.
     * @summary Create Supplier
     * @param {number} companyId The ID of the company.
     * @param {CreateSupplierRequest} [createSupplierRequest] The supplier to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApiInterface
     */
    createSupplier(companyId: number, createSupplierRequest?: CreateSupplierRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateSupplierResponse>;

    /**
     * Deletes the specified supplier.
     * @summary Delete Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApiInterface
     */
    deleteSupplier(companyId: number, supplierId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Gets the specified supplier.
     * @summary Get Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetSupplierFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApiInterface
     */
    getSupplier(companyId: number, supplierId: number, fields?: string, fieldset?: GetSupplierFieldsetEnum, options?: RawAxiosRequestConfig): AxiosPromise<GetSupplierResponse>;

    /**
     * Lists the suppliers.
     * @summary List Suppliers
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {ListSuppliersFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApiInterface
     */
    listSuppliers(companyId: number, fields?: string, fieldset?: ListSuppliersFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig): AxiosPromise<ListSuppliersResponse>;

    /**
     * Modifies the specified supplier.
     * @summary Modify Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {ModifySupplierRequest} [modifySupplierRequest] The modified Supplier. First level parameters are managed in delta mode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApiInterface
     */
    modifySupplier(companyId: number, supplierId: number, modifySupplierRequest?: ModifySupplierRequest, options?: RawAxiosRequestConfig): AxiosPromise<ModifySupplierResponse>;

}

/**
 * SuppliersApi - object-oriented interface
 * @export
 * @class SuppliersApi
 * @extends {BaseAPI}
 */
export class SuppliersApi extends BaseAPI implements SuppliersApiInterface {
    /**
     * Creates a new supplier.
     * @summary Create Supplier
     * @param {number} companyId The ID of the company.
     * @param {CreateSupplierRequest} [createSupplierRequest] The supplier to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApi
     */
    public createSupplier(companyId: number, createSupplierRequest?: CreateSupplierRequest, options?: RawAxiosRequestConfig) {
        return SuppliersApiFp(this.configuration).createSupplier(companyId, createSupplierRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified supplier.
     * @summary Delete Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApi
     */
    public deleteSupplier(companyId: number, supplierId: number, options?: RawAxiosRequestConfig) {
        return SuppliersApiFp(this.configuration).deleteSupplier(companyId, supplierId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the specified supplier.
     * @summary Get Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetSupplierFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApi
     */
    public getSupplier(companyId: number, supplierId: number, fields?: string, fieldset?: GetSupplierFieldsetEnum, options?: RawAxiosRequestConfig) {
        return SuppliersApiFp(this.configuration).getSupplier(companyId, supplierId, fields, fieldset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the suppliers.
     * @summary List Suppliers
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {ListSuppliersFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApi
     */
    public listSuppliers(companyId: number, fields?: string, fieldset?: ListSuppliersFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig) {
        return SuppliersApiFp(this.configuration).listSuppliers(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies the specified supplier.
     * @summary Modify Supplier
     * @param {number} companyId The ID of the company.
     * @param {number} supplierId The ID of the supplier.
     * @param {ModifySupplierRequest} [modifySupplierRequest] The modified Supplier. First level parameters are managed in delta mode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuppliersApi
     */
    public modifySupplier(companyId: number, supplierId: number, modifySupplierRequest?: ModifySupplierRequest, options?: RawAxiosRequestConfig) {
        return SuppliersApiFp(this.configuration).modifySupplier(companyId, supplierId, modifySupplierRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetSupplierFieldsetEnum = {
    Basic: 'basic',
    Detailed: 'detailed'
} as const;
export type GetSupplierFieldsetEnum = typeof GetSupplierFieldsetEnum[keyof typeof GetSupplierFieldsetEnum];
/**
 * @export
 */
export const ListSuppliersFieldsetEnum = {
    Basic: 'basic',
    Detailed: 'detailed'
} as const;
export type ListSuppliersFieldsetEnum = typeof ListSuppliersFieldsetEnum[keyof typeof ListSuppliersFieldsetEnum];
