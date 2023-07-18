# ArchiveApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArchiveDocument**](ArchiveApi.md#createArchiveDocument) | **POST** /c/{company_id}/archive | Create Archive Document
[**deleteArchiveDocument**](ArchiveApi.md#deleteArchiveDocument) | **DELETE** /c/{company_id}/archive/{document_id} | Delete Archive Document
[**getArchiveDocument**](ArchiveApi.md#getArchiveDocument) | **GET** /c/{company_id}/archive/{document_id} | Get Archive Document
[**listArchiveDocuments**](ArchiveApi.md#listArchiveDocuments) | **GET** /c/{company_id}/archive | List Archive Documents
[**modifyArchiveDocument**](ArchiveApi.md#modifyArchiveDocument) | **PUT** /c/{company_id}/archive/{document_id} | Modify Archive Document
[**uploadArchiveDocumentAttachment**](ArchiveApi.md#uploadArchiveDocumentAttachment) | **POST** /c/{company_id}/archive/attachment | Upload Archive Document Attachment



## createArchiveDocument

> CreateArchiveDocumentResponse createArchiveDocument(companyId, opts)

Create Archive Document

Creates a new archive document.

### Example

```javascript
import { Configuration, ArchiveApi , CreateArchiveDocumentRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let createArchiveDocumentRequest: CreateArchiveDocumentRequest = {"data":{"date":"2021-08-20","category":"Altri documenti","description":"spesa 1","attachment_token":"ibfjdbf94ey9w94g3w894qbasrga"}} // CreateArchiveDocumentRequest | The Archive Document.

apiInstance.createArchiveDocument(companyId, createArchiveDocumentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **createArchiveDocumentRequest** | [**CreateArchiveDocumentRequest**](CreateArchiveDocumentRequest.md)| The Archive Document. | [optional] 

### Return type

[**CreateArchiveDocumentResponse**](CreateArchiveDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteArchiveDocument

> deleteArchiveDocument(companyId, documentId)

Delete Archive Document

Deletes the specified archive document.

### Example

```javascript
import { Configuration, ArchiveApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.deleteArchiveDocument(companyId, documentId).then(() => {
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


## getArchiveDocument

> GetArchiveDocumentResponse getArchiveDocument(companyId, documentId, opts)

Get Archive Document

Gets the specified archive document.

### Example

```javascript
import { Configuration, ArchiveApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example" // String | Name of the fieldset.

apiInstance.getArchiveDocument(companyId, documentId, fieldset).then((data) => {
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

[**GetArchiveDocumentResponse**](GetArchiveDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listArchiveDocuments

> ListArchiveDocumentsResponse listArchiveDocuments(companyId, opts)

List Archive Documents

Lists the archive documents.

### Example

```javascript
import { Configuration, ArchiveApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example", // String | Name of the fieldset.
let sort = "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
let page = 1, // Number | The page to retrieve.
let perPage = 5, // Number | The size of the page.
let q = "q_example" // String | Query for filtering the results.

apiInstance.listArchiveDocuments(companyId, q).then((data) => {
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

[**ListArchiveDocumentsResponse**](ListArchiveDocumentsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyArchiveDocument

> ModifyArchiveDocumentResponse modifyArchiveDocument(companyId, documentId, opts)

Modify Archive Document

Modifies the specified archive document.

### Example

```javascript
import { Configuration, ArchiveApi , ModifyArchiveDocumentRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let modifyArchiveDocumentRequest: ModifyArchiveDocumentRequest = {"data":{"date":"2021-08-20","category":"Altri documenti","description":"spesa 2"}} // ModifyArchiveDocumentRequest | Modified Archive Document

apiInstance.modifyArchiveDocument(companyId, documentId, modifyArchiveDocumentRequest).then((data) => {
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
 **modifyArchiveDocumentRequest** | [**ModifyArchiveDocumentRequest**](ModifyArchiveDocumentRequest.md)| Modified Archive Document | [optional] 

### Return type

[**ModifyArchiveDocumentResponse**](ModifyArchiveDocumentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadArchiveDocumentAttachment

> UploadArchiveAttachmentResponse uploadArchiveDocumentAttachment(companyId, opts)

Upload Archive Document Attachment

Uploads an attachment destined to an archive document. The actual association between the document and the attachment must be implemented separately, using the returned token.

### Example

```javascript
import { Configuration, ArchiveApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new ArchiveApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let filename = "filename_example", // String | Attachment file name
let attachment = "/path/to/file" // File | Attachment file [.png, .jpg, .gif, .pdf, .zip, .xls, .xlsx, .doc, .docx]

apiInstance.uploadArchiveDocumentAttachment(companyId, attachment).then((data) => {
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

[**UploadArchiveAttachmentResponse**](UploadArchiveAttachmentResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

