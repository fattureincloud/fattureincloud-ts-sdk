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
import { GetEInvoiceRejectionReasonResponse } from '../../src/models';
// @ts-ignore
import { SendEInvoiceRequest } from '../../src/models';
// @ts-ignore
import { SendEInvoiceResponse } from '../../src/models';
// @ts-ignore
import { VerifyEInvoiceXmlErrorResponse } from '../../src/models';
// @ts-ignore
import { VerifyEInvoiceXmlResponse } from '../../src/models';
/**
 * IssuedEInvoicesApi - axios parameter creator
 * @export
 */
export const IssuedEInvoicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get e-invoice rejection reason
         * @summary Get E-Invoice Rejection Reason
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEInvoiceRejectionReason: async (companyId: number, documentId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getEInvoiceRejectionReason', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('getEInvoiceRejectionReason', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason`
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
         * Downloads the e-invoice in XML format.
         * @summary Get E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {boolean} [includeAttachment] Include the attachment to the XML e-invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEInvoiceXml: async (companyId: number, documentId: number, includeAttachment?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getEInvoiceXml', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('getEInvoiceXml', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/issued_documents/{document_id}/e_invoice/xml`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", [], configuration)

            if (includeAttachment !== undefined) {
                localVarQueryParameter['include_attachment'] = includeAttachment;
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
         * Sends the e-invoice to SDI.
         * @summary Send E-Invoice
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {SendEInvoiceRequest} [sendEInvoiceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendEInvoice: async (companyId: number, documentId: number, sendEInvoiceRequest?: SendEInvoiceRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('sendEInvoice', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('sendEInvoice', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/issued_documents/{document_id}/e_invoice/send`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"document_id"}}`, encodeURIComponent(String(documentId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'FattureInCloud/2.0.14/TypeScript-SDK';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sendEInvoiceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.
         * @summary Verify E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyEInvoiceXml: async (companyId: number, documentId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('verifyEInvoiceXml', 'companyId', companyId)
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('verifyEInvoiceXml', 'documentId', documentId)
            const localVarPath = `/c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify`
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
 * IssuedEInvoicesApi - functional programming interface
 * @export
 */
export const IssuedEInvoicesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IssuedEInvoicesApiAxiosParamCreator(configuration)
    return {
        /**
         * Get e-invoice rejection reason
         * @summary Get E-Invoice Rejection Reason
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEInvoiceRejectionReason(companyId: number, documentId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEInvoiceRejectionReasonResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEInvoiceRejectionReason(companyId, documentId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuedEInvoicesApi.getEInvoiceRejectionReason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Downloads the e-invoice in XML format.
         * @summary Get E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {boolean} [includeAttachment] Include the attachment to the XML e-invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEInvoiceXml(companyId: number, documentId: number, includeAttachment?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEInvoiceXml(companyId, documentId, includeAttachment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuedEInvoicesApi.getEInvoiceXml']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the e-invoice to SDI.
         * @summary Send E-Invoice
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {SendEInvoiceRequest} [sendEInvoiceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendEInvoice(companyId: number, documentId: number, sendEInvoiceRequest?: SendEInvoiceRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendEInvoiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEInvoice(companyId, documentId, sendEInvoiceRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuedEInvoicesApi.sendEInvoice']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.
         * @summary Verify E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyEInvoiceXml(companyId: number, documentId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VerifyEInvoiceXmlResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyEInvoiceXml(companyId, documentId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IssuedEInvoicesApi.verifyEInvoiceXml']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * IssuedEInvoicesApi - factory interface
 * @export
 */
export const IssuedEInvoicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IssuedEInvoicesApiFp(configuration)
    return {
        /**
         * Get e-invoice rejection reason
         * @summary Get E-Invoice Rejection Reason
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEInvoiceRejectionReason(companyId: number, documentId: number, options?: any): AxiosPromise<GetEInvoiceRejectionReasonResponse> {
            return localVarFp.getEInvoiceRejectionReason(companyId, documentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the e-invoice in XML format.
         * @summary Get E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {boolean} [includeAttachment] Include the attachment to the XML e-invoice.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEInvoiceXml(companyId: number, documentId: number, includeAttachment?: boolean, options?: any): AxiosPromise<string> {
            return localVarFp.getEInvoiceXml(companyId, documentId, includeAttachment, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the e-invoice to SDI.
         * @summary Send E-Invoice
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {SendEInvoiceRequest} [sendEInvoiceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendEInvoice(companyId: number, documentId: number, sendEInvoiceRequest?: SendEInvoiceRequest, options?: any): AxiosPromise<SendEInvoiceResponse> {
            return localVarFp.sendEInvoice(companyId, documentId, sendEInvoiceRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.
         * @summary Verify E-Invoice XML
         * @param {number} companyId The ID of the company.
         * @param {number} documentId The ID of the document.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyEInvoiceXml(companyId: number, documentId: number, options?: any): AxiosPromise<VerifyEInvoiceXmlResponse> {
            return localVarFp.verifyEInvoiceXml(companyId, documentId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IssuedEInvoicesApi - interface
 * @export
 * @interface IssuedEInvoicesApi
 */
export interface IssuedEInvoicesApiInterface {
    /**
     * Get e-invoice rejection reason
     * @summary Get E-Invoice Rejection Reason
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApiInterface
     */
    getEInvoiceRejectionReason(companyId: number, documentId: number, options?: RawAxiosRequestConfig): AxiosPromise<GetEInvoiceRejectionReasonResponse>;

    /**
     * Downloads the e-invoice in XML format.
     * @summary Get E-Invoice XML
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {boolean} [includeAttachment] Include the attachment to the XML e-invoice.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApiInterface
     */
    getEInvoiceXml(companyId: number, documentId: number, includeAttachment?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<string>;

    /**
     * Sends the e-invoice to SDI.
     * @summary Send E-Invoice
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {SendEInvoiceRequest} [sendEInvoiceRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApiInterface
     */
    sendEInvoice(companyId: number, documentId: number, sendEInvoiceRequest?: SendEInvoiceRequest, options?: RawAxiosRequestConfig): AxiosPromise<SendEInvoiceResponse>;

    /**
     * Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.
     * @summary Verify E-Invoice XML
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApiInterface
     */
    verifyEInvoiceXml(companyId: number, documentId: number, options?: RawAxiosRequestConfig): AxiosPromise<VerifyEInvoiceXmlResponse>;

}

/**
 * IssuedEInvoicesApi - object-oriented interface
 * @export
 * @class IssuedEInvoicesApi
 * @extends {BaseAPI}
 */
export class IssuedEInvoicesApi extends BaseAPI implements IssuedEInvoicesApiInterface {
    /**
     * Get e-invoice rejection reason
     * @summary Get E-Invoice Rejection Reason
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApi
     */
    public getEInvoiceRejectionReason(companyId: number, documentId: number, options?: RawAxiosRequestConfig) {
        return IssuedEInvoicesApiFp(this.configuration).getEInvoiceRejectionReason(companyId, documentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the e-invoice in XML format.
     * @summary Get E-Invoice XML
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {boolean} [includeAttachment] Include the attachment to the XML e-invoice.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApi
     */
    public getEInvoiceXml(companyId: number, documentId: number, includeAttachment?: boolean, options?: RawAxiosRequestConfig) {
        return IssuedEInvoicesApiFp(this.configuration).getEInvoiceXml(companyId, documentId, includeAttachment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the e-invoice to SDI.
     * @summary Send E-Invoice
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {SendEInvoiceRequest} [sendEInvoiceRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApi
     */
    public sendEInvoice(companyId: number, documentId: number, sendEInvoiceRequest?: SendEInvoiceRequest, options?: RawAxiosRequestConfig) {
        return IssuedEInvoicesApiFp(this.configuration).sendEInvoice(companyId, documentId, sendEInvoiceRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.
     * @summary Verify E-Invoice XML
     * @param {number} companyId The ID of the company.
     * @param {number} documentId The ID of the document.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IssuedEInvoicesApi
     */
    public verifyEInvoiceXml(companyId: number, documentId: number, options?: RawAxiosRequestConfig) {
        return IssuedEInvoicesApiFp(this.configuration).verifyEInvoiceXml(companyId, documentId, options).then((request) => request(this.axios, this.basePath));
    }
}

