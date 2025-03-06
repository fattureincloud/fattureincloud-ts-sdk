# EmailsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEmails**](EmailsApi.md#listEmails) | **GET** /c/{company_id}/emails | List Emails



## listEmails

> ListEmailsResponse listEmails(companyId, opts)

List Emails

List Emails.

### Example

```javascript
import { Configuration, EmailsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new EmailsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.

let fields = "fields_example", // String | List of comma-separated fields.
let fieldset = "fieldset_example", // String | Name of the fieldset.
let sort = "sort_example", // String | List of comma-separated fields for result sorting (minus for desc sorting).
let page = 1, // Number | The page to retrieve.
let perPage = 5, // Number | The size of the page.
let q = "q_example" // String | Query for filtering the results.

apiInstance.listEmails(companyId, q).then((data) => {
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

[**ListEmailsResponse**](ListEmailsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

