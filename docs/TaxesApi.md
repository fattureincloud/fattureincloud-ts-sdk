# TaxesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createF24**](TaxesApi.md#createF24) | **POST** /c/{company_id}/taxes | Create F24
[**deleteF24**](TaxesApi.md#deleteF24) | **DELETE** /c/{company_id}/taxes/{document_id} | Delete F24
[**deleteF24Attachment**](TaxesApi.md#deleteF24Attachment) | **DELETE** /c/{company_id}/taxes/{document_id}/attachment | Delete F24 Attachment
[**getF24**](TaxesApi.md#getF24) | **GET** /c/{company_id}/taxes/{document_id} | Get F24
[**listF24**](TaxesApi.md#listF24) | **GET** /c/{company_id}/taxes | List F24
[**modifyF24**](TaxesApi.md#modifyF24) | **PUT** /c/{company_id}/taxes/{document_id} | Modify F24
[**uploadF24Attachment**](TaxesApi.md#uploadF24Attachment) | **POST** /c/{company_id}/taxes/attachment | Upload F24 Attachment



## createF24

> CreateF24Response createF24(companyId, opts)

Create F24

Creates a new F24.

### Example

```javascript
import { Configuration, TaxesApi , CreateF24Request } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let createF24Request: CreateF24Request = {"data":{"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111},"attachment_token":"b19c01da9b1688fb73d0d9e8ad"}} // CreateF24Request | The F24 to create

apiInstance.createF24(companyId, createF24Request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createF24Request** | [**CreateF24Request**](CreateF24Request.md)| The F24 to create | [optional] 

### Return type

[**CreateF24Response**](CreateF24Response.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteF24

> deleteF24(companyId, documentId)

Delete F24

Removes the specified F24.

### Example

```javascript
import { Configuration, TaxesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteF24(companyId, documentId).then(() => {
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


## deleteF24Attachment

> deleteF24Attachment(companyId, documentId)

Delete F24 Attachment

Removes the attachment of the specified F24.

### Example

```javascript
import { Configuration, TaxesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteF24Attachment(companyId, documentId).then(() => {
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


## getF24

> GetF24Response getF24(companyId, documentId, opts)

Get F24

Gets the specified F24.

### Example

```javascript
import { Configuration, TaxesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example" // String | Name of the fieldset.

apiInstance.getF24(companyId, documentId, fieldset).then((data) => {
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

[**GetF24Response**](GetF24Response.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listF24

> ListF24Response listF24(companyId, opts)

List F24

Lists the F24s.

### Example

```javascript
import { Configuration, TaxesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example", // String | Name of the fieldset.
let sort = "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
let page = 1, // Number | The page to retrieve.
let perPage = 5, // Number | The size of the page.
let q = "q_example" // String | Query for filtering the results.

apiInstance.listF24(companyId, q).then((data) => {
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

[**ListF24Response**](ListF24Response.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyF24

> ModifyF24Response modifyF24(companyId, documentId, opts)

Modify F24

Modifies the specified F24.

### Example

```javascript
import { Configuration, TaxesApi , ModifyF24Request } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let modifyF24Request: ModifyF24Request = {"data":{"amount":840.36,"description":"PAGAMENTO IVA 2021","due_date":"2021-12-31","status":"paid","payment_account":{"id":111}}} // ModifyF24Request | The F24

apiInstance.modifyF24(companyId, documentId, modifyF24Request).then((data) => {
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
 **modifyF24Request** | [**ModifyF24Request**](ModifyF24Request.md)| The F24 | [optional] 

### Return type

[**ModifyF24Response**](ModifyF24Response.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadF24Attachment

> UploadF24AttachmentResponse uploadF24Attachment(companyId, opts)

Upload F24 Attachment

Uploads an attachment destined to a F24. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```javascript
import { Configuration, TaxesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new TaxesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let filename = "filename_example", // String | Attachment file name
let attachment = "/path/to/file" // File | Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]

apiInstance.uploadF24Attachment(companyId, attachment).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **filename** | **String**| Attachment file name | [optional] 
 **attachment** | **File**| Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx] | [optional] 

### Return type

[**UploadF24AttachmentResponse**](UploadF24AttachmentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

