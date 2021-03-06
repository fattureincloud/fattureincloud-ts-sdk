# SuppliersApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplier**](SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
[**deleteSupplier**](SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
[**getSupplier**](SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
[**listSuppliers**](SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
[**modifySupplier**](SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier



## createSupplier

> CreateSupplierResponse createSupplier(companyId, opts)

Create Supplier

Creates a new supplier.

### Example

```javascript
import { Configuration, SuppliersApi , CreateSupplierRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new SuppliersApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let createSupplierRequest: CreateSupplierRequest = {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // CreateSupplierRequest | The supplier to create

apiInstance.createSupplier(companyId, createSupplierRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createSupplierRequest** | [**CreateSupplierRequest**](CreateSupplierRequest.md)| The supplier to create | [optional] 

### Return type

[**CreateSupplierResponse**](CreateSupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSupplier

> deleteSupplier(companyId, supplierId)

Delete Supplier

Deletes the specified supplier.

### Example

```javascript
import { Configuration, SuppliersApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new SuppliersApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.
apiInstance.deleteSupplier(companyId, supplierId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **supplierId** | **Number**| The ID of the supplier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSupplier

> GetSupplierResponse getSupplier(companyId, supplierId, opts)

Get Supplier

Gets the specified supplier.

### Example

```javascript
import { Configuration, SuppliersApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new SuppliersApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example" // String | Name of the fieldset.

apiInstance.getSupplier(companyId, supplierId, fieldset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **supplierId** | **Number**| The ID of the supplier. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetSupplierResponse**](GetSupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSuppliers

> ListSuppliersResponse listSuppliers(companyId, opts)

List Suppliers

Lists the suppliers.

### Example

```javascript
import { Configuration, SuppliersApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new SuppliersApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example", // String | Name of the fieldset.
let sort = "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
let page = 1, // Number | The page to retrieve.
let perPage = 5, // Number | The size of the page.
let q = "q_example" // String | Query for filtering the results.

apiInstance.listSuppliers(companyId, q).then((data) => {
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

[**ListSuppliersResponse**](ListSuppliersResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifySupplier

> ModifySupplierResponse modifySupplier(companyId, supplierId, opts)

Modify Supplier

Modifies the specified supplier.

### Example

```javascript
import { Configuration, SuppliersApi , ModifySupplierRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new SuppliersApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let supplierId = 56; // Number | The ID of the supplier.

let modifySupplierRequest: ModifySupplierRequest = {"data":{"id":12345,"code":"AE86","name":"Mario Rossi S.R.L.","type":"company","first_name":"Mario","last_name":"Rossi","contact_person":"","vat_number":"111222333","tax_code":"111122233","address_street":"Corso Magellano, 46","address_postal_code":"20146","address_city":"Milano","address_province":"MI","address_extra":"","country":"Italia","email":"mario.rossi@example.com","certified_email":"mario.rossi@pec.example.com","phone":"1234567890","fax":"123456789","notes":""}} // ModifySupplierRequest | The modified Supplier. First level parameters are managed in delta mode.

apiInstance.modifySupplier(companyId, supplierId, modifySupplierRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **supplierId** | **Number**| The ID of the supplier. | 
 **modifySupplierRequest** | [**ModifySupplierRequest**](ModifySupplierRequest.md)| The modified Supplier. First level parameters are managed in delta mode. | [optional] 

### Return type

[**ModifySupplierResponse**](ModifySupplierResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

