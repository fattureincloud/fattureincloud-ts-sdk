# UserApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserInfo**](UserApi.md#getUserInfo) | **GET** /user/info | Get User Info
[**listUserCompanies**](UserApi.md#listUserCompanies) | **GET** /user/companies | List User Companies



## getUserInfo

> GetUserInfoResponse getUserInfo()

Get User Info

Gets the current user&#39;s info.

### Example

```javascript
import { Configuration, UserApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new UserApi(apiConfig);
apiInstance.getUserInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserInfoResponse**](GetUserInfoResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserCompanies

> ListUserCompaniesResponse listUserCompanies()

List User Companies

Lists the companies controlled by the current user.

### Example

```javascript
import { Configuration, UserApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new UserApi(apiConfig);
apiInstance.listUserCompanies().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListUserCompaniesResponse**](ListUserCompaniesResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

