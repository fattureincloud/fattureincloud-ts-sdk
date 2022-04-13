# CashbookApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCashbookEntry**](CashbookApi.md#createCashbookEntry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
[**deleteCashbookEntry**](CashbookApi.md#deleteCashbookEntry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
[**getCashbookEntry**](CashbookApi.md#getCashbookEntry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
[**listCashbookEntries**](CashbookApi.md#listCashbookEntries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
[**modifyCashbookEntry**](CashbookApi.md#modifyCashbookEntry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry



## createCashbookEntry

> CreateCashbookEntryResponse createCashbookEntry(companyId, opts)

Create Cashbook Entry

Creates a new cashbook entry.

### Example

```javascript
import { Configuration, CashbookApi , CreateCashbookEntryRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CashbookApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let createCashbookEntryRequest: CreateCashbookEntryRequest = {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"}} // CreateCashbookEntryRequest | Cashbook entry. 

apiInstance.createCashbookEntry(companyId, createCashbookEntryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createCashbookEntryRequest** | [**CreateCashbookEntryRequest**](CreateCashbookEntryRequest.md)| Cashbook entry.  | [optional] 

### Return type

[**CreateCashbookEntryResponse**](CreateCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCashbookEntry

> deleteCashbookEntry(companyId, documentId)

Delete Cashbook Entry

Deletes the specified cashbook entry.

### Example

```javascript
import { Configuration, CashbookApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CashbookApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteCashbookEntry(companyId, documentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 

### Return type

null (empty response body)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCashbookEntry

> GetCashbookEntryResponse getCashbookEntry(companyId, documentId, opts)

Get Cashbook Entry

Gets the specified cashbook entry.

### Example

```javascript
import { Configuration, CashbookApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CashbookApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example" // String | Name of the fieldset.

apiInstance.getCashbookEntry(companyId, documentId, fieldset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 
 **fields** | **String**| List of comma-separated fields. | [optional] 
 **fieldset** | **String**| Name of the fieldset. | [optional] 

### Return type

[**GetCashbookEntryResponse**](GetCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCashbookEntries

> ListCashbookEntriesResponse listCashbookEntries(companyId, dateFrom, dateTo, opts)

List Cashbook Entries

Lists the cashbook entries.

### Example

```javascript
import { Configuration, CashbookApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CashbookApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let dateFrom = "dateFrom_example"; // String | Start date.
let dateTo = "dateTo_example"; // String | End date.

let year = 56, // Number | Filter cashbook by year.
let type = "type_example", // String | Filter cashbook by type.
let paymentAccountId = 56 // Number | Filter by payment account.

apiInstance.listCashbookEntries(companyId, dateFrom, dateTo, paymentAccountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **dateFrom** | **String**| Start date. | 
 **dateTo** | **String**| End date. | 
 **year** | **Number**| Filter cashbook by year. | [optional] 
 **type** | **String**| Filter cashbook by type. | [optional] 
 **paymentAccountId** | **Number**| Filter by payment account. | [optional] 

### Return type

[**ListCashbookEntriesResponse**](ListCashbookEntriesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyCashbookEntry

> ModifyCashbookEntryResponse modifyCashbookEntry(companyId, documentId, opts)

Modify Cashbook Entry

Modifies the specified cashbook entry.

### Example

```javascript
import { Configuration, CashbookApi , ModifyCashbookEntryRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CashbookApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let modifyCashbookEntryRequest: ModifyCashbookEntryRequest = {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l."}} // ModifyCashbookEntryRequest | Cashbook Entry

apiInstance.modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **documentId** | **Number**| The ID of the document. | 
 **modifyCashbookEntryRequest** | [**ModifyCashbookEntryRequest**](ModifyCashbookEntryRequest.md)| Cashbook Entry | [optional] 

### Return type

[**ModifyCashbookEntryResponse**](ModifyCashbookEntryResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

