# IssuedEInvoicesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEInvoiceRejectionReason**](IssuedEInvoicesApi.md#getEInvoiceRejectionReason) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason | Get E-Invoice Rejection Reason
[**getEInvoiceXml**](IssuedEInvoicesApi.md#getEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml | Get E-Invoice XML
[**sendEInvoice**](IssuedEInvoicesApi.md#sendEInvoice) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send E-Invoice
[**verifyEInvoiceXml**](IssuedEInvoicesApi.md#verifyEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify E-Invoice XML



## getEInvoiceRejectionReason

> GetEInvoiceRejectionReasonResponse getEInvoiceRejectionReason(companyId, documentId)

Get E-Invoice Rejection Reason

Get e-invoice rejection reason

### Example

```javascript
import { Configuration, IssuedEInvoicesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new IssuedEInvoicesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.getEInvoiceRejectionReason(companyId, documentId).then((data) => {
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

### Return type

[**GetEInvoiceRejectionReasonResponse**](GetEInvoiceRejectionReasonResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEInvoiceXml

> String getEInvoiceXml(companyId, documentId, opts)

Get E-Invoice XML

Downloads the e-invoice in XML format.

### Example

```javascript
import { Configuration, IssuedEInvoicesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new IssuedEInvoicesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let includeAttachment = true // Boolean | Include the attachment to the XML e-invoice.

apiInstance.getEInvoiceXml(companyId, documentId, includeAttachment).then((data) => {
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
 **includeAttachment** | **Boolean**| Include the attachment to the XML e-invoice. | [optional] 

### Return type

**String**

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml


## sendEInvoice

> SendEInvoiceResponse sendEInvoice(companyId, documentId, opts)

Send E-Invoice

Sends the e-invoice to SDI.

### Example

```javascript
import { Configuration, IssuedEInvoicesApi , SendEInvoiceRequest } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new IssuedEInvoicesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.

let sendEInvoiceRequest: SendEInvoiceRequest = {"data":{"withholding_tax_causal":"causale"}} // SendEInvoiceRequest | 

apiInstance.sendEInvoice(companyId, documentId, sendEInvoiceRequest).then((data) => {
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
 **sendEInvoiceRequest** | [**SendEInvoiceRequest**](SendEInvoiceRequest.md)|  | [optional] 

### Return type

[**SendEInvoiceResponse**](SendEInvoiceResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyEInvoiceXml

> VerifyEInvoiceXmlResponse verifyEInvoiceXml(companyId, documentId)

Verify E-Invoice XML

Verifies the e-invoice XML format. Checks if all of the mandatory fields are filled and compliant to the right format.

### Example

```javascript
import { Configuration, IssuedEInvoicesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new IssuedEInvoicesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let documentId = 56; // Number | The ID of the document.
apiInstance.verifyEInvoiceXml(companyId, documentId).then((data) => {
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

### Return type

[**VerifyEInvoiceXmlResponse**](VerifyEInvoiceXmlResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

