# EmailsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEmails**](EmailsApi.md#listEmails) | **GET** /c/{company_id}/emails | List Emails



## listEmails

> ListEmailsResponse listEmails(companyId)

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
apiInstance.listEmails(companyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 

### Return type

[**ListEmailsResponse**](ListEmailsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

