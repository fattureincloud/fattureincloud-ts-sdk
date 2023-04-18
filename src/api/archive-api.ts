/* tslint:disable */
/* eslint-disable */
/**
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 500.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.27
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
import { CreateArchiveDocumentRequest } from '../../src/models';
// @ts-ignore
import { CreateArchiveDocumentResponse } from '../../src/models';
// @ts-ignore
import { GetArchiveDocumentResponse } from '../../src/models';
// @ts-ignore
import { ListArchiveDocumentsResponse } from '../../src/models';
// @ts-ignore
import { ModifyArchiveDocumentRequest } from '../../src/models';
// @ts-ignore
import { ModifyArchiveDocumentResponse } from '../../src/models';
// @ts-ignore
import { UploadArchiveAttachmentResponse } from '../../src/models';
/**
 * ArchiveApi - axios parameter creator
 * @export
 */
export const ArchiveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new archive document.
         * @summary Create Archive Document
         * @param {number} companyId The ID of the company.
         * @param {CreateArchiveDocumentRequest} [createArchiveDocumentRequest] The Archive Document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArchiveDocument: async (companyId: number, createArchiveDocumentRequest?: CreateArchiveDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createArchiveDocument', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/archive`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.9/TypeScript-SDK';


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createArchiveDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified archive document.
         * @summary Delete Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArchiveDocument: async (companyId: number, documentId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteArchiveDocument', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('deleteArchiveDocument', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/archive/{document_id}`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:a"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the specified archive document.
         * @summary Get Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArchiveDocument: async (companyId: number, documentId: number, fields?: string, fieldset?: 'basic' | 'detailed', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getArchiveDocument', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('getArchiveDocument', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/archive/{document_id}`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:r"], configuration)

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
         * Lists the archive documents.
         * @summary List Archive Documents
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArchiveDocuments: async (companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listArchiveDocuments', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/archive`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:r"], configuration)

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
         * Modifies the specified archive document.
         * @summary Modify Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {ModifyArchiveDocumentRequest} [modifyArchiveDocumentRequest] Modified Archive Document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyArchiveDocument: async (companyId: number, documentId: number, modifyArchiveDocumentRequest?: ModifyArchiveDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('modifyArchiveDocument', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('modifyArchiveDocument', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/archive/{document_id}`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.9/TypeScript-SDK';


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyArchiveDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
         * @summary Upload Archive Document Attachment
         * @param {number} companyId The ID of the company.
         * @param {string} [filename] Name of the file.
         * @param {File} [attachment] Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadArchiveDocumentAttachment: async (companyId: number, filename?: string, attachment?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('uploadArchiveDocumentAttachment', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/archive/attachment`
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
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2AuthenticationCodeFlow required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["archive:a"], configuration)


            if (filename !== undefined) { 
                localVarFormParams.append('filename', filename as any);
            }
    
            if (attachment !== undefined) { 
                localVarFormParams.append('attachment', attachment as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...(localVarFormParams as any).getHeaders?.(), ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ArchiveApi - functional programming interface
 * @export
 */
export const ArchiveApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ArchiveApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new archive document.
         * @summary Create Archive Document
         * @param {number} companyId The ID of the company.
         * @param {CreateArchiveDocumentRequest} [createArchiveDocumentRequest] The Archive Document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createArchiveDocument(companyId: number, createArchiveDocumentRequest?: CreateArchiveDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateArchiveDocumentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createArchiveDocument(companyId, createArchiveDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the specified archive document.
         * @summary Delete Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteArchiveDocument(companyId: number, documentId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteArchiveDocument(companyId, documentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the specified archive document.
         * @summary Get Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getArchiveDocument(companyId: number, documentId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetArchiveDocumentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getArchiveDocument(companyId, documentId, fields, fieldset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the archive documents.
         * @summary List Archive Documents
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listArchiveDocuments(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListArchiveDocumentsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listArchiveDocuments(companyId, fields, fieldset, sort, page, perPage, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies the specified archive document.
         * @summary Modify Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {ModifyArchiveDocumentRequest} [modifyArchiveDocumentRequest] Modified Archive Document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyArchiveDocument(companyId: number, documentId: number, modifyArchiveDocumentRequest?: ModifyArchiveDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModifyArchiveDocumentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
         * @summary Upload Archive Document Attachment
         * @param {number} companyId The ID of the company.
         * @param {string} [filename] Name of the file.
         * @param {File} [attachment] Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadArchiveDocumentAttachment(companyId: number, filename?: string, attachment?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadArchiveAttachmentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadArchiveDocumentAttachment(companyId, filename, attachment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ArchiveApi - factory interface
 * @export
 */
export const ArchiveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ArchiveApiFp(configuration)
    return {
        /**
         * Creates a new archive document.
         * @summary Create Archive Document
         * @param {number} companyId The ID of the company.
         * @param {CreateArchiveDocumentRequest} [createArchiveDocumentRequest] The Archive Document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArchiveDocument(companyId: number, createArchiveDocumentRequest?: CreateArchiveDocumentRequest, options?: any): AxiosPromise<CreateArchiveDocumentResponse> {
            return localVarFp.createArchiveDocument(companyId, createArchiveDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified archive document.
         * @summary Delete Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArchiveDocument(companyId: number, documentId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteArchiveDocument(companyId, documentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the specified archive document.
         * @summary Get Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArchiveDocument(companyId: number, documentId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: any): AxiosPromise<GetArchiveDocumentResponse> {
            return localVarFp.getArchiveDocument(companyId, documentId, fields, fieldset, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the archive documents.
         * @summary List Archive Documents
         * @param {number} companyId The ID of the company.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
         * @param {number} [page] The page to retrieve.
         * @param {number} [perPage] The size of the page.
         * @param {string} [q] Query for filtering the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listArchiveDocuments(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: any): AxiosPromise<ListArchiveDocumentsResponse> {
            return localVarFp.listArchiveDocuments(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies the specified archive document.
         * @summary Modify Archive Document
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {ModifyArchiveDocumentRequest} [modifyArchiveDocumentRequest] Modified Archive Document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyArchiveDocument(companyId: number, documentId: number, modifyArchiveDocumentRequest?: ModifyArchiveDocumentRequest, options?: any): AxiosPromise<ModifyArchiveDocumentResponse> {
            return localVarFp.modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
         * @summary Upload Archive Document Attachment
         * @param {number} companyId The ID of the company.
         * @param {string} [filename] Name of the file.
         * @param {File} [attachment] Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadArchiveDocumentAttachment(companyId: number, filename?: string, attachment?: File, options?: any): AxiosPromise<UploadArchiveAttachmentResponse> {
            return localVarFp.uploadArchiveDocumentAttachment(companyId, filename, attachment, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArchiveApi - interface
 * @export
 * @interface ArchiveApi
 */
export interface ArchiveApiInterface {
    /**
     * Creates a new archive document.
     * @summary Create Archive Document
     * @param {number} companyId The ID of the company.
     * @param {CreateArchiveDocumentRequest} [createArchiveDocumentRequest] The Archive Document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    createArchiveDocument(companyId: number, createArchiveDocumentRequest?: CreateArchiveDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<CreateArchiveDocumentResponse>;

    /**
     * Deletes the specified archive document.
     * @summary Delete Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    deleteArchiveDocument(companyId: number, documentId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Gets the specified archive document.
     * @summary Get Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    getArchiveDocument(companyId: number, documentId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig): AxiosPromise<GetArchiveDocumentResponse>;

    /**
     * Lists the archive documents.
     * @summary List Archive Documents
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    listArchiveDocuments(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig): AxiosPromise<ListArchiveDocumentsResponse>;

    /**
     * Modifies the specified archive document.
     * @summary Modify Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {ModifyArchiveDocumentRequest} [modifyArchiveDocumentRequest] Modified Archive Document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    modifyArchiveDocument(companyId: number, documentId: number, modifyArchiveDocumentRequest?: ModifyArchiveDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<ModifyArchiveDocumentResponse>;

    /**
     * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @summary Upload Archive Document Attachment
     * @param {number} companyId The ID of the company.
     * @param {string} [filename] Name of the file.
     * @param {File} [attachment] Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApiInterface
     */
    uploadArchiveDocumentAttachment(companyId: number, filename?: string, attachment?: File, options?: AxiosRequestConfig): AxiosPromise<UploadArchiveAttachmentResponse>;

}

/**
 * ArchiveApi - object-oriented interface
 * @export
 * @class ArchiveApi
 * @extends {BaseAPI}
 */
export class ArchiveApi extends BaseAPI implements ArchiveApiInterface {
    /**
     * Creates a new archive document.
     * @summary Create Archive Document
     * @param {number} companyId The ID of the company.
     * @param {CreateArchiveDocumentRequest} [createArchiveDocumentRequest] The Archive Document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public createArchiveDocument(companyId: number, createArchiveDocumentRequest?: CreateArchiveDocumentRequest, options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).createArchiveDocument(companyId, createArchiveDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified archive document.
     * @summary Delete Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public deleteArchiveDocument(companyId: number, documentId: number, options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).deleteArchiveDocument(companyId, documentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the specified archive document.
     * @summary Get Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public getArchiveDocument(companyId: number, documentId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).getArchiveDocument(companyId, documentId, fields, fieldset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the archive documents.
     * @summary List Archive Documents
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public listArchiveDocuments(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).listArchiveDocuments(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies the specified archive document.
     * @summary Modify Archive Document
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {ModifyArchiveDocumentRequest} [modifyArchiveDocumentRequest] Modified Archive Document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public modifyArchiveDocument(companyId: number, documentId: number, modifyArchiveDocumentRequest?: ModifyArchiveDocumentRequest, options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.
     * @summary Upload Archive Document Attachment
     * @param {number} companyId The ID of the company.
     * @param {string} [filename] Name of the file.
     * @param {File} [attachment] Valid format: .png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchiveApi
     */
    public uploadArchiveDocumentAttachment(companyId: number, filename?: string, attachment?: File, options?: AxiosRequestConfig) {
        return ArchiveApiFp(this.configuration).uploadArchiveDocumentAttachment(companyId, filename, attachment, options).then((request) => request(this.axios, this.basePath));
    }
}
