# CompaniesApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanyInfo**](CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info



## getCompanyInfo

> GetCompanyInfoResponse getCompanyInfo(companyId)

Get Company Info

Gets the company detailed info.

### Example

```javascript
import { Configuration, CompaniesApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new CompaniesApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
apiInstance.getCompanyInfo(companyId).then((data) => {
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

[**GetCompanyInfoResponse**](GetCompanyInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

