# ProductsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /c/{company_id}/products | Create Product
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /c/{company_id}/products/{product_id} | Delete Product
[**getProduct**](ProductsApi.md#getProduct) | **GET** /c/{company_id}/products/{product_id} | Get Product
[**listProducts**](ProductsApi.md#listProducts) | **GET** /c/{company_id}/products | List Products
[**modifyProduct**](ProductsApi.md#modifyProduct) | **PUT** /c/{company_id}/products/{product_id} | Modify Product



## createProduct

> CreateProductResponse createProduct(companyId, opts)

Create Product

Creates a new product.

### Example

```javascript
import { Configuration, ProductsApi , CreateProductRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ProductsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let createProductRequest: CreateProductRequest = {"data":{"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","is_disabled":false}}} // CreateProductRequest | 

apiInstance.createProduct(companyId, createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)|  | [optional] 

### Return type

[**CreateProductResponse**](CreateProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> deleteProduct(companyId, productId)

Delete Product

Deletes the specified product.

### Example

```javascript
import { Configuration, ProductsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ProductsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let productId = 56; // Number | The ID of the product.
apiInstance.deleteProduct(companyId, productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **productId** | **Number**| The ID of the product. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProduct

> GetProductResponse getProduct(companyId, productId, opts)

Get Product

Gets the specified product.

### Example

```javascript
import { Configuration, ProductsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ProductsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let productId = 56; // Number | The ID of the product.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example" // String | Name of the fieldset.

apiInstance.getProduct(companyId, productId, fieldset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **productId** | **Number**| The ID of the product. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetProductResponse**](GetProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProducts

> ListProductsResponse listProducts(companyId, opts)

List Products

Lists the products.

### Example

```javascript
import { Configuration, ProductsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ProductsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example", // String | Name of the fieldset.
let sort = "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
let page = 1, // Number | The page to retrieve.
let perPage = 5, // Number | The size of the page.
let q = "q_example" // String | Query for filtering the results.

apiInstance.listProducts(companyId, q).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 
 **sort** | **String**| List of comma-separated fields for result sorting (minus for desc sorting). | [optional] 
 **page** | **Number**| The page to retrieve. | [optional] [default to 1]
 **perPage** | **Number**| The size of the page. | [optional] [default to 5]
 **q** | **String**| Query for filtering the results. | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyProduct

> ModifyProductResponse modifyProduct(companyId, productId, opts)

Modify Product

Modifies the specified product.

### Example

```javascript
import { Configuration, ProductsApi , ModifyProductRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ProductsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let productId = 56; // Number | The ID of the product.

let modifyProductRequest: ModifyProductRequest = {"data":{"name":"Tavolo di marmo","code":"TAVOLO003","net_price":240,"net_cost":0,"measure":"","description":"Tavolo in marmo pregiato","category":"arredamento","in_stock":true,"default_vat":{"id":3,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","is_disabled":false}}} // ModifyProductRequest | Modified product details.

apiInstance.modifyProduct(companyId, productId, modifyProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **productId** | **Number**| The ID of the product. | 
 **modifyProductRequest** | [**ModifyProductRequest**](ModifyProductRequest.md)| Modified product details. | [optional] 

### Return type

[**ModifyProductResponse**](ModifyProductResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

