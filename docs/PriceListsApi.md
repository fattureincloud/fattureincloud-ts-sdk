# PriceListsApi

All URIs are relative to *https://api-v2.fattureincloud.it*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPriceListItems**](PriceListsApi.md#getPriceListItems) | **GET** /c/{company_id}/price_lists/{price_list_id}/items | Get PriceList Items List
[**getPriceLists**](PriceListsApi.md#getPriceLists) | **GET** /c/{company_id}/price_lists | Get PriceLists



## getPriceListItems

> GetPriceListItemsResponse getPriceListItems(companyId, priceListId)

Get PriceList Items List

Retrieves all the Items of a PriceList

### Example

```javascript
import { Configuration, PriceListsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new PriceListsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
let priceListId = "priceListId_example"; // String | 
apiInstance.getPriceListItems(companyId, priceListId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| The ID of the company. | 
 **priceListId** | **String**|  | 

### Return type

[**GetPriceListItemsResponse**](GetPriceListItemsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPriceLists

> ListPriceListsResponse getPriceLists(companyId)

Get PriceLists

Retrieves all price lists of the company

### Example

```javascript
import { Configuration, PriceListsApi  } from '@fattureincloud/fattureincloud-ts-sdk';

// Configure OAuth2 access token for authorization: 
const apiConfig = new Configuration({
  accessToken: "YOUR ACCESS TOKEN"
});

let apiInstance = new PriceListsApi(apiConfig);
let companyId = 12345; // Number | The ID of the company.
apiInstance.getPriceLists(companyId).then((data) => {
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

[**ListPriceListsResponse**](ListPriceListsResponse.md)

### Authorization

[OAuth2AuthenticationCodeFlow](../README.md#OAuth2AuthenticationCodeFlow)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

