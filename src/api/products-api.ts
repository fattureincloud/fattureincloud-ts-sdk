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
import { CreateProductRequest } from '../../src/models';
// @ts-ignore
import { CreateProductResponse } from '../../src/models';
// @ts-ignore
import { GetProductResponse } from '../../src/models';
// @ts-ignore
import { ListProductsResponse } from '../../src/models';
// @ts-ignore
import { ModifyProductRequest } from '../../src/models';
// @ts-ignore
import { ModifyProductResponse } from '../../src/models';
/**
 * ProductsApi - axios parameter creator
 * @export
 */
export const ProductsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new product.
         * @summary Create Product
         * @param {number} companyId The ID of the company.
         * @param {CreateProductRequest} [createProductRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct: async (companyId: number, createProductRequest?: CreateProductRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createProduct', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/products`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["products:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createProductRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified product.
         * @summary Delete Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct: async (companyId: number, productId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteProduct', 'companyId', companyId)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('deleteProduct', 'productId', productId)
            const localVarPath = `/c/{company_id}/products/{product_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"product_id"}}`, encodeURIComponent(String(productId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["products:a"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the specified product.
         * @summary Get Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct: async (companyId: number, productId: number, fields?: string, fieldset?: 'basic' | 'detailed', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getProduct', 'companyId', companyId)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('getProduct', 'productId', productId)
            const localVarPath = `/c/{company_id}/products/{product_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"product_id"}}`, encodeURIComponent(String(productId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["products:r"], configuration)

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
         * Lists the products.
         * @summary List Products
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
        listProducts: async (companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listProducts', 'companyId', companyId)
            const localVarPath = `/c/{company_id}/products`
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["products:r"], configuration)

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
         * Modifies the specified product.
         * @summary Modify Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {ModifyProductRequest} [modifyProductRequest] Modified product details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyProduct: async (companyId: number, productId: number, modifyProductRequest?: ModifyProductRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('modifyProduct', 'companyId', companyId)
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('modifyProduct', 'productId', productId)
            const localVarPath = `/c/{company_id}/products/{product_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"product_id"}}`, encodeURIComponent(String(productId)));
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
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthenticationCodeFlow", ["products:a"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modifyProductRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductsApi - functional programming interface
 * @export
 */
export const ProductsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new product.
         * @summary Create Product
         * @param {number} companyId The ID of the company.
         * @param {CreateProductRequest} [createProductRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProduct(companyId: number, createProductRequest?: CreateProductRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProduct(companyId, createProductRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the specified product.
         * @summary Delete Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProduct(companyId: number, productId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProduct(companyId, productId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the specified product.
         * @summary Get Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProduct(companyId: number, productId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProduct(companyId, productId, fields, fieldset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists the products.
         * @summary List Products
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
        async listProducts(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListProductsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProducts(companyId, fields, fieldset, sort, page, perPage, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modifies the specified product.
         * @summary Modify Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {ModifyProductRequest} [modifyProductRequest] Modified product details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyProduct(companyId: number, productId: number, modifyProductRequest?: ModifyProductRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModifyProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyProduct(companyId, productId, modifyProductRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductsApi - factory interface
 * @export
 */
export const ProductsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductsApiFp(configuration)
    return {
        /**
         * Creates a new product.
         * @summary Create Product
         * @param {number} companyId The ID of the company.
         * @param {CreateProductRequest} [createProductRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(companyId: number, createProductRequest?: CreateProductRequest, options?: any): AxiosPromise<CreateProductResponse> {
            return localVarFp.createProduct(companyId, createProductRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified product.
         * @summary Delete Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct(companyId: number, productId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProduct(companyId, productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the specified product.
         * @summary Get Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {string} [fields] List of comma-separated fields.
         * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct(companyId: number, productId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: any): AxiosPromise<GetProductResponse> {
            return localVarFp.getProduct(companyId, productId, fields, fieldset, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the products.
         * @summary List Products
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
        listProducts(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: any): AxiosPromise<ListProductsResponse> {
            return localVarFp.listProducts(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Modifies the specified product.
         * @summary Modify Product
         * @param {number} companyId The ID of the company.
         * @param {number} productId The ID of the product.
         * @param {ModifyProductRequest} [modifyProductRequest] Modified product details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyProduct(companyId: number, productId: number, modifyProductRequest?: ModifyProductRequest, options?: any): AxiosPromise<ModifyProductResponse> {
            return localVarFp.modifyProduct(companyId, productId, modifyProductRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductsApi - interface
 * @export
 * @interface ProductsApi
 */
export interface ProductsApiInterface {
    /**
     * Creates a new product.
     * @summary Create Product
     * @param {number} companyId The ID of the company.
     * @param {CreateProductRequest} [createProductRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    createProduct(companyId: number, createProductRequest?: CreateProductRequest, options?: AxiosRequestConfig): AxiosPromise<CreateProductResponse>;

    /**
     * Deletes the specified product.
     * @summary Delete Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    deleteProduct(companyId: number, productId: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Gets the specified product.
     * @summary Get Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    getProduct(companyId: number, productId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig): AxiosPromise<GetProductResponse>;

    /**
     * Lists the products.
     * @summary List Products
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    listProducts(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig): AxiosPromise<ListProductsResponse>;

    /**
     * Modifies the specified product.
     * @summary Modify Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {ModifyProductRequest} [modifyProductRequest] Modified product details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApiInterface
     */
    modifyProduct(companyId: number, productId: number, modifyProductRequest?: ModifyProductRequest, options?: AxiosRequestConfig): AxiosPromise<ModifyProductResponse>;

}

/**
 * ProductsApi - object-oriented interface
 * @export
 * @class ProductsApi
 * @extends {BaseAPI}
 */
export class ProductsApi extends BaseAPI implements ProductsApiInterface {
    /**
     * Creates a new product.
     * @summary Create Product
     * @param {number} companyId The ID of the company.
     * @param {CreateProductRequest} [createProductRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public createProduct(companyId: number, createProductRequest?: CreateProductRequest, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).createProduct(companyId, createProductRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified product.
     * @summary Delete Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public deleteProduct(companyId: number, productId: number, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).deleteProduct(companyId, productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the specified product.
     * @summary Get Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProduct(companyId: number, productId: number, fields?: string, fieldset?: 'basic' | 'detailed', options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProduct(companyId, productId, fields, fieldset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the products.
     * @summary List Products
     * @param {number} companyId The ID of the company.
     * @param {string} [fields] List of comma-separated fields.
     * @param {'basic' | 'detailed'} [fieldset] Name of the fieldset.
     * @param {string} [sort] List of comma-separated fields for result sorting (minus for desc sorting).
     * @param {number} [page] The page to retrieve.
     * @param {number} [perPage] The size of the page.
     * @param {string} [q] Query for filtering the results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public listProducts(companyId: number, fields?: string, fieldset?: 'basic' | 'detailed', sort?: string, page?: number, perPage?: number, q?: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).listProducts(companyId, fields, fieldset, sort, page, perPage, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modifies the specified product.
     * @summary Modify Product
     * @param {number} companyId The ID of the company.
     * @param {number} productId The ID of the product.
     * @param {ModifyProductRequest} [modifyProductRequest] Modified product details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public modifyProduct(companyId: number, productId: number, modifyProductRequest?: ModifyProductRequest, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).modifyProduct(companyId, productId, modifyProductRequest, options).then((request) => request(this.axios, this.basePath));
    }
}