/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.33
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
import type { CreateClientRequest } from '../../src/models';
// @ts-ignore
import type { CreateClientResponse } from '../../src/models';
// @ts-ignore
import type { GetClientResponse } from '../../src/models';
// @ts-ignore
import type { ListClientsResponse } from '../../src/models';
// @ts-ignore
import type { ModifyClientRequest } from '../../src/models';
// @ts-ignore
import type { ModifyClientResponse } from '../../src/models';
/**
 * ClientsApi - axios parameter creator
 * @export
 */
export const ClientsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new client.
         * @summary Create Client
         * @param {number} companyId The ID of the company.
         * @param {CreateClientRequest} [createClientRequest] The client to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClient: async (companyId: number, createClientRequest?: CreateClientRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createClient', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/entities/clients`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.clients:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.15/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createClientRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified client.
         * @summary Delete Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClient: async (companyId: number, clientId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteClient', 'companyId', companyId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('deleteClient', 'clientId', clientId)
            const localVarPath = `/c/{company_id}/entities/clients/{client_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"client_id"}}`, encodeURIComponent(String(clientId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.clients:a"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the specified client.
         * @summary Get Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetClientFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClient: async (companyId: number, clientId: number, fields?: string, fieldset?: GetClientFieldsetEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getClient', 'companyId', companyId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('getClient', 'clientId', clientId)
            const localVarPath = `/c/{company_id}/entities/clients/{client_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"client_id"}}`, encodeURIComponent(String(clientId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.clients:r"], configuration)

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
         * Lists the clients.
         * @summary List Clients
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListClientsFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listClients: async (companyId: number, fields?: string, fieldset?: ListClientsFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listClients', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/entities/clients`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.clients:r"], configuration)

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
         * Modifies the specified client.
         * @summary Modify Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {ModifyClientRequest} [modifyClientRequest] The modified Client. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyClient: async (companyId: number, clientId: number, modifyClientRequest?: ModifyClientRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('modifyClient', 'companyId', companyId)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('modifyClient', 'clientId', clientId)
            const localVarPath = `/c/{company_id}/entities/clients/{client_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"client_id"}}`, encodeURIComponent(String(clientId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["entity.clients:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.15/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyClientRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClientsApi - functional programming interface
 * @export
 */
export const ClientsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new client.
         * @summary Create Client
         * @param {number} companyId The ID of the company.
         * @param {CreateClientRequest} [createClientRequest] The client to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createClient(companyId: number, createClientRequest?: CreateClientRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createClient(companyId, createClientRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientsApi.createClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the specified client.
         * @summary Delete Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteClient(companyId: number, clientId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClient(companyId, clientId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientsApi.deleteClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets the specified client.
         * @summary Get Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetClientFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClient(companyId: number, clientId: number, fields?: string, fieldset?: GetClientFieldsetEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClient(companyId, clientId, fields, fieldset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientsApi.getClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the clients.
         * @summary List Clients
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListClientsFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listClients(companyId: number, fields?: string, fieldset?: ListClientsFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListClientsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listClients(companyId, fields, fieldset, sort, page, perPage, q, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientsApi.listClients']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Modifies the specified client.
         * @summary Modify Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {ModifyClientRequest} [modifyClientRequest] The modified Client. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyClient(companyId: number, clientId: number, modifyClientRequest?: ModifyClientRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModifyClientResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyClient(companyId, clientId, modifyClientRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientsApi.modifyClient']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ClientsApi - factory interface
 * @export
 */
export const ClientsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientsApiFp(configuration)
    return {
        /**
         * Creates a new client.
         * @summary Create Client
         * @param {number} companyId The ID of the company.
         * @param {CreateClientRequest} [createClientRequest] The client to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClient(companyId: number, createClientRequest?: CreateClientRequest, options?: any): AxiosPromise<CreateClientResponse> {
            return localVarFp.createClient(companyId, createClientRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified client.
         * @summary Delete Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClient(companyId: number, clientId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteClient(companyId, clientId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the specified client.
         * @summary Get Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {string} [fields] List of comma-separated fields.
         * @param {GetClientFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClient(companyId: number, clientId: number, fields?: string, fieldset?: GetClientFieldsetEnum, options?: any): AxiosPromise<GetClientResponse> {
            return localVarFp.getClient(companyId, clientId, fields, fieldset, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the clients.
         * @summary List Clients
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {ListClientsFieldsetEnum} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listClients(companyId: number, fields?: string, fieldset?: ListClientsFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: any): AxiosPromise<ListClientsResponse> {
            return localVarFp.listClients(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies the specified client.
         * @summary Modify Client
         * @param {number} companyId The ID of the company.
         * @param {number} clientId The ID of the client.
         * @param {ModifyClientRequest} [modifyClientRequest] The modified Client. First level parameters are managed in delta mode.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyClient(companyId: number, clientId: number, modifyClientRequest?: ModifyClientRequest, options?: any): AxiosPromise<ModifyClientResponse> {
            return localVarFp.modifyClient(companyId, clientId, modifyClientRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientsApi - interface
 * @export
 * @interface ClientsApi
 */
export interface ClientsApiInterface {
    /**
     * Creates a new client.
     * @summary Create Client
     * @param {number} companyId The ID of the company.
     * @param {CreateClientRequest} [createClientRequest] The client to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApiInterface
     */
    createClient(companyId: number, createClientRequest?: CreateClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateClientResponse>;

    /**
     * Deletes the specified client.
     * @summary Delete Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApiInterface
     */
    deleteClient(companyId: number, clientId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Gets the specified client.
     * @summary Get Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetClientFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApiInterface
     */
    getClient(companyId: number, clientId: number, fields?: string, fieldset?: GetClientFieldsetEnum, options?: RawAxiosRequestConfig): AxiosPromise<GetClientResponse>;

    /**
     * Lists the clients.
     * @summary List Clients
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {ListClientsFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApiInterface
     */
    listClients(companyId: number, fields?: string, fieldset?: ListClientsFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig): AxiosPromise<ListClientsResponse>;

    /**
     * Modifies the specified client.
     * @summary Modify Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {ModifyClientRequest} [modifyClientRequest] The modified Client. First level parameters are managed in delta mode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApiInterface
     */
    modifyClient(companyId: number, clientId: number, modifyClientRequest?: ModifyClientRequest, options?: RawAxiosRequestConfig): AxiosPromise<ModifyClientResponse>;

}

/**
 * ClientsApi - object-oriented interface
 * @export
 * @class ClientsApi
 * @extends {BaseAPI}
 */
export class ClientsApi extends BaseAPI implements ClientsApiInterface {
    /**
     * Creates a new client.
     * @summary Create Client
     * @param {number} companyId The ID of the company.
     * @param {CreateClientRequest} [createClientRequest] The client to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApi
     */
    public createClient(companyId: number, createClientRequest?: CreateClientRequest, options?: RawAxiosRequestConfig) {
        return ClientsApiFp(this.configuration).createClient(companyId, createClientRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified client.
     * @summary Delete Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApi
     */
    public deleteClient(companyId: number, clientId: number, options?: RawAxiosRequestConfig) {
        return ClientsApiFp(this.configuration).deleteClient(companyId, clientId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the specified client.
     * @summary Get Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {string} [fields] List of comma-separated fields.
     * @param {GetClientFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApi
     */
    public getClient(companyId: number, clientId: number, fields?: string, fieldset?: GetClientFieldsetEnum, options?: RawAxiosRequestConfig) {
        return ClientsApiFp(this.configuration).getClient(companyId, clientId, fields, fieldset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the clients.
     * @summary List Clients
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {ListClientsFieldsetEnum} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApi
     */
    public listClients(companyId: number, fields?: string, fieldset?: ListClientsFieldsetEnum, sort?: string, page?: number, perPage?: number, q?: string, options?: RawAxiosRequestConfig) {
        return ClientsApiFp(this.configuration).listClients(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies the specified client.
     * @summary Modify Client
     * @param {number} companyId The ID of the company.
     * @param {number} clientId The ID of the client.
     * @param {ModifyClientRequest} [modifyClientRequest] The modified Client. First level parameters are managed in delta mode.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientsApi
     */
    public modifyClient(companyId: number, clientId: number, modifyClientRequest?: ModifyClientRequest, options?: RawAxiosRequestConfig) {
        return ClientsApiFp(this.configuration).modifyClient(companyId, clientId, modifyClientRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetClientFieldsetEnum = {
    Basic: 'basic',
    Detailed: 'detailed'
} as const;
export type GetClientFieldsetEnum = typeof GetClientFieldsetEnum[keyof typeof GetClientFieldsetEnum];
/**
 * @export
 */
export const ListClientsFieldsetEnum = {
    Basic: 'basic',
    Detailed: 'detailed'
} as const;
export type ListClientsFieldsetEnum = typeof ListClientsFieldsetEnum[keyof typeof ListClientsFieldsetEnum];
