# FattureInCloud TypeScript SDK

[![NPM](https://img.shields.io/npm/v/@fattureincloud/fattureincloud-ts-sdk?color=g)](https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk) ![unit tests](https://github.com/fattureincloud/fattureincloud-ts-sdk/actions/workflows/validate.yml/badge.svg)

@fattureincloud/fattureincloud-ts-sdk - TypeScript/JavaScript client for Fatture in Cloud API.

## @fattureincloud/fattureincloud-ts-sdk@2.0.14

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.32
- Package version: 2.0.14

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))


For more information, please visit [https://www.fattureincloud.it](https://www.fattureincloud.it)

## Installation

### For [Node.js](https://nodejs.org/)

Using npm:

```shell
npm install @fattureincloud/fattureincloud-ts-sdk
```

Using yarn:

```shell
yarn add @fattureincloud/fattureincloud-ts-sdk
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following TS code:

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

## Documentation for API Endpoints

All URIs are relative to *https://api-v2.fattureincloud.it*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ArchiveApi* | [**createArchiveDocument**](docs/ArchiveApi.md#createArchiveDocument) | **POST** /c/{company_id}/archive | Create Archive Document
*ArchiveApi* | [**deleteArchiveDocument**](docs/ArchiveApi.md#deleteArchiveDocument) | **DELETE** /c/{company_id}/archive/{document_id} | Delete Archive Document
*ArchiveApi* | [**getArchiveDocument**](docs/ArchiveApi.md#getArchiveDocument) | **GET** /c/{company_id}/archive/{document_id} | Get Archive Document
*ArchiveApi* | [**listArchiveDocuments**](docs/ArchiveApi.md#listArchiveDocuments) | **GET** /c/{company_id}/archive | List Archive Documents
*ArchiveApi* | [**modifyArchiveDocument**](docs/ArchiveApi.md#modifyArchiveDocument) | **PUT** /c/{company_id}/archive/{document_id} | Modify Archive Document
*ArchiveApi* | [**uploadArchiveDocumentAttachment**](docs/ArchiveApi.md#uploadArchiveDocumentAttachment) | **POST** /c/{company_id}/archive/attachment | Upload Archive Document Attachment
*CashbookApi* | [**createCashbookEntry**](docs/CashbookApi.md#createCashbookEntry) | **POST** /c/{company_id}/cashbook | Create Cashbook Entry
*CashbookApi* | [**deleteCashbookEntry**](docs/CashbookApi.md#deleteCashbookEntry) | **DELETE** /c/{company_id}/cashbook/{document_id} | Delete Cashbook Entry
*CashbookApi* | [**getCashbookEntry**](docs/CashbookApi.md#getCashbookEntry) | **GET** /c/{company_id}/cashbook/{document_id} | Get Cashbook Entry
*CashbookApi* | [**listCashbookEntries**](docs/CashbookApi.md#listCashbookEntries) | **GET** /c/{company_id}/cashbook | List Cashbook Entries
*CashbookApi* | [**modifyCashbookEntry**](docs/CashbookApi.md#modifyCashbookEntry) | **PUT** /c/{company_id}/cashbook/{document_id} | Modify Cashbook Entry
*ClientsApi* | [**createClient**](docs/ClientsApi.md#createClient) | **POST** /c/{company_id}/entities/clients | Create Client
*ClientsApi* | [**deleteClient**](docs/ClientsApi.md#deleteClient) | **DELETE** /c/{company_id}/entities/clients/{client_id} | Delete Client
*ClientsApi* | [**getClient**](docs/ClientsApi.md#getClient) | **GET** /c/{company_id}/entities/clients/{client_id} | Get Client
*ClientsApi* | [**listClients**](docs/ClientsApi.md#listClients) | **GET** /c/{company_id}/entities/clients | List Clients
*ClientsApi* | [**modifyClient**](docs/ClientsApi.md#modifyClient) | **PUT** /c/{company_id}/entities/clients/{client_id} | Modify Client
*CompaniesApi* | [**getCompanyInfo**](docs/CompaniesApi.md#getCompanyInfo) | **GET** /c/{company_id}/company/info | Get Company Info
*CompaniesApi* | [**getCompanyPlanUsage**](docs/CompaniesApi.md#getCompanyPlanUsage) | **GET** /c/{company_id}/company/plan_usage | Get Company Plan Usage
*EmailsApi* | [**listEmails**](docs/EmailsApi.md#listEmails) | **GET** /c/{company_id}/emails | List Emails
*InfoApi* | [**listArchiveCategories**](docs/InfoApi.md#listArchiveCategories) | **GET** /c/{company_id}/info/archive_categories | List Archive Categories
*InfoApi* | [**listCities**](docs/InfoApi.md#listCities) | **GET** /info/cities | List Cities
*InfoApi* | [**listCostCenters**](docs/InfoApi.md#listCostCenters) | **GET** /c/{company_id}/info/cost_centers | List Cost Centers
*InfoApi* | [**listCountries**](docs/InfoApi.md#listCountries) | **GET** /info/countries | List Countries
*InfoApi* | [**listCurrencies**](docs/InfoApi.md#listCurrencies) | **GET** /info/currencies | List Currencies
*InfoApi* | [**listDeliveryNotesDefaultCausals**](docs/InfoApi.md#listDeliveryNotesDefaultCausals) | **GET** /info/dn_causals | List Delivery Notes Default Causals
*InfoApi* | [**listDetailedCountries**](docs/InfoApi.md#listDetailedCountries) | **GET** /info/detailed_countries | List Detailed Countries
*InfoApi* | [**listLanguages**](docs/InfoApi.md#listLanguages) | **GET** /info/languages | List Languages
*InfoApi* | [**listPaymentAccounts**](docs/InfoApi.md#listPaymentAccounts) | **GET** /c/{company_id}/info/payment_accounts | List Payment Accounts
*InfoApi* | [**listPaymentMethods**](docs/InfoApi.md#listPaymentMethods) | **GET** /c/{company_id}/info/payment_methods | List Payment Methods
*InfoApi* | [**listProductCategories**](docs/InfoApi.md#listProductCategories) | **GET** /c/{company_id}/info/product_categories | List Product Categories
*InfoApi* | [**listReceivedDocumentCategories**](docs/InfoApi.md#listReceivedDocumentCategories) | **GET** /c/{company_id}/info/received_document_categories | List Received Document Categories
*InfoApi* | [**listRevenueCenters**](docs/InfoApi.md#listRevenueCenters) | **GET** /c/{company_id}/info/revenue_centers | List Revenue Centers
*InfoApi* | [**listTemplates**](docs/InfoApi.md#listTemplates) | **GET** /info/templates | List Templates
*InfoApi* | [**listUnitsOfMeasure**](docs/InfoApi.md#listUnitsOfMeasure) | **GET** /info/measures | List Units of Measure
*InfoApi* | [**listVatTypes**](docs/InfoApi.md#listVatTypes) | **GET** /c/{company_id}/info/vat_types | List Vat Types
*IssuedDocumentsApi* | [**createIssuedDocument**](docs/IssuedDocumentsApi.md#createIssuedDocument) | **POST** /c/{company_id}/issued_documents | Create Issued Document
*IssuedDocumentsApi* | [**deleteIssuedDocument**](docs/IssuedDocumentsApi.md#deleteIssuedDocument) | **DELETE** /c/{company_id}/issued_documents/{document_id} | Delete Issued Document
*IssuedDocumentsApi* | [**deleteIssuedDocumentAttachment**](docs/IssuedDocumentsApi.md#deleteIssuedDocumentAttachment) | **DELETE** /c/{company_id}/issued_documents/{document_id}/attachment | Delete Issued Document Attachment
*IssuedDocumentsApi* | [**getEmailData**](docs/IssuedDocumentsApi.md#getEmailData) | **GET** /c/{company_id}/issued_documents/{document_id}/email | Get Email Data
*IssuedDocumentsApi* | [**getExistingIssuedDocumentTotals**](docs/IssuedDocumentsApi.md#getExistingIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/{document_id}/totals | Get Existing Issued Document Totals
*IssuedDocumentsApi* | [**getIssuedDocument**](docs/IssuedDocumentsApi.md#getIssuedDocument) | **GET** /c/{company_id}/issued_documents/{document_id} | Get Issued Document
*IssuedDocumentsApi* | [**getIssuedDocumentPreCreateInfo**](docs/IssuedDocumentsApi.md#getIssuedDocumentPreCreateInfo) | **GET** /c/{company_id}/issued_documents/info | Get Issued Document Pre-Create Info
*IssuedDocumentsApi* | [**getNewIssuedDocumentTotals**](docs/IssuedDocumentsApi.md#getNewIssuedDocumentTotals) | **POST** /c/{company_id}/issued_documents/totals | Get New Issued Document Totals
*IssuedDocumentsApi* | [**joinIssuedDocuments**](docs/IssuedDocumentsApi.md#joinIssuedDocuments) | **GET** /c/{company_id}/issued_documents/join | Join Issued Documents
*IssuedDocumentsApi* | [**listIssuedDocuments**](docs/IssuedDocumentsApi.md#listIssuedDocuments) | **GET** /c/{company_id}/issued_documents | List Issued Documents
*IssuedDocumentsApi* | [**modifyIssuedDocument**](docs/IssuedDocumentsApi.md#modifyIssuedDocument) | **PUT** /c/{company_id}/issued_documents/{document_id} | Modify Issued Document
*IssuedDocumentsApi* | [**scheduleEmail**](docs/IssuedDocumentsApi.md#scheduleEmail) | **POST** /c/{company_id}/issued_documents/{document_id}/email | Schedule Email
*IssuedDocumentsApi* | [**transformIssuedDocument**](docs/IssuedDocumentsApi.md#transformIssuedDocument) | **GET** /c/{company_id}/issued_documents/transform | Transform Issued Document
*IssuedDocumentsApi* | [**uploadIssuedDocumentAttachment**](docs/IssuedDocumentsApi.md#uploadIssuedDocumentAttachment) | **POST** /c/{company_id}/issued_documents/attachment | Upload Issued Document Attachment
*IssuedEInvoicesApi* | [**getEInvoiceRejectionReason**](docs/IssuedEInvoicesApi.md#getEInvoiceRejectionReason) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/error_reason | Get E-Invoice Rejection Reason
*IssuedEInvoicesApi* | [**getEInvoiceXml**](docs/IssuedEInvoicesApi.md#getEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml | Get E-Invoice XML
*IssuedEInvoicesApi* | [**sendEInvoice**](docs/IssuedEInvoicesApi.md#sendEInvoice) | **POST** /c/{company_id}/issued_documents/{document_id}/e_invoice/send | Send E-Invoice
*IssuedEInvoicesApi* | [**verifyEInvoiceXml**](docs/IssuedEInvoicesApi.md#verifyEInvoiceXml) | **GET** /c/{company_id}/issued_documents/{document_id}/e_invoice/xml_verify | Verify E-Invoice XML
*ProductsApi* | [**createProduct**](docs/ProductsApi.md#createProduct) | **POST** /c/{company_id}/products | Create Product
*ProductsApi* | [**deleteProduct**](docs/ProductsApi.md#deleteProduct) | **DELETE** /c/{company_id}/products/{product_id} | Delete Product
*ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /c/{company_id}/products/{product_id} | Get Product
*ProductsApi* | [**listProducts**](docs/ProductsApi.md#listProducts) | **GET** /c/{company_id}/products | List Products
*ProductsApi* | [**modifyProduct**](docs/ProductsApi.md#modifyProduct) | **PUT** /c/{company_id}/products/{product_id} | Modify Product
*ReceiptsApi* | [**createReceipt**](docs/ReceiptsApi.md#createReceipt) | **POST** /c/{company_id}/receipts | Create Receipt
*ReceiptsApi* | [**deleteReceipt**](docs/ReceiptsApi.md#deleteReceipt) | **DELETE** /c/{company_id}/receipts/{document_id} | Delete Receipt
*ReceiptsApi* | [**getReceipt**](docs/ReceiptsApi.md#getReceipt) | **GET** /c/{company_id}/receipts/{document_id} | Get Receipt
*ReceiptsApi* | [**getReceiptPreCreateInfo**](docs/ReceiptsApi.md#getReceiptPreCreateInfo) | **GET** /c/{company_id}/receipts/info | Get Receipt Pre-Create Info
*ReceiptsApi* | [**getReceiptsMonthlyTotals**](docs/ReceiptsApi.md#getReceiptsMonthlyTotals) | **GET** /c/{company_id}/receipts/monthly_totals | Get Receipts Monthly Totals
*ReceiptsApi* | [**listReceipts**](docs/ReceiptsApi.md#listReceipts) | **GET** /c/{company_id}/receipts | List Receipts
*ReceiptsApi* | [**modifyReceipt**](docs/ReceiptsApi.md#modifyReceipt) | **PUT** /c/{company_id}/receipts/{document_id} | Modify Receipt
*ReceivedDocumentsApi* | [**createReceivedDocument**](docs/ReceivedDocumentsApi.md#createReceivedDocument) | **POST** /c/{company_id}/received_documents | Create Received Document
*ReceivedDocumentsApi* | [**deleteReceivedDocument**](docs/ReceivedDocumentsApi.md#deleteReceivedDocument) | **DELETE** /c/{company_id}/received_documents/{document_id} | Delete Received Document
*ReceivedDocumentsApi* | [**deleteReceivedDocumentAttachment**](docs/ReceivedDocumentsApi.md#deleteReceivedDocumentAttachment) | **DELETE** /c/{company_id}/received_documents/{document_id}/attachment | Delete Received Document Attachment
*ReceivedDocumentsApi* | [**getExistingReceivedDocumentTotals**](docs/ReceivedDocumentsApi.md#getExistingReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/{document_id}/totals | Get Existing Received Document Totals
*ReceivedDocumentsApi* | [**getNewReceivedDocumentTotals**](docs/ReceivedDocumentsApi.md#getNewReceivedDocumentTotals) | **POST** /c/{company_id}/received_documents/totals | Get New Received Document Totals
*ReceivedDocumentsApi* | [**getReceivedDocument**](docs/ReceivedDocumentsApi.md#getReceivedDocument) | **GET** /c/{company_id}/received_documents/{document_id} | Get Received Document
*ReceivedDocumentsApi* | [**getReceivedDocumentPreCreateInfo**](docs/ReceivedDocumentsApi.md#getReceivedDocumentPreCreateInfo) | **GET** /c/{company_id}/received_documents/info | Get Received Document Pre-Create Info
*ReceivedDocumentsApi* | [**listReceivedDocuments**](docs/ReceivedDocumentsApi.md#listReceivedDocuments) | **GET** /c/{company_id}/received_documents | List Received Documents
*ReceivedDocumentsApi* | [**modifyReceivedDocument**](docs/ReceivedDocumentsApi.md#modifyReceivedDocument) | **PUT** /c/{company_id}/received_documents/{document_id} | Modify Received Document
*ReceivedDocumentsApi* | [**uploadReceivedDocumentAttachment**](docs/ReceivedDocumentsApi.md#uploadReceivedDocumentAttachment) | **POST** /c/{company_id}/received_documents/attachment | Upload Received Document Attachment
*SettingsApi* | [**createPaymentAccount**](docs/SettingsApi.md#createPaymentAccount) | **POST** /c/{company_id}/settings/payment_accounts | Create Payment Account
*SettingsApi* | [**createPaymentMethod**](docs/SettingsApi.md#createPaymentMethod) | **POST** /c/{company_id}/settings/payment_methods | Create Payment Method
*SettingsApi* | [**createVatType**](docs/SettingsApi.md#createVatType) | **POST** /c/{company_id}/settings/vat_types | Create Vat Type
*SettingsApi* | [**deletePaymentAccount**](docs/SettingsApi.md#deletePaymentAccount) | **DELETE** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Delete Payment Account
*SettingsApi* | [**deletePaymentMethod**](docs/SettingsApi.md#deletePaymentMethod) | **DELETE** /c/{company_id}/settings/payment_methods/{payment_method_id} | Delete Payment Method
*SettingsApi* | [**deleteVatType**](docs/SettingsApi.md#deleteVatType) | **DELETE** /c/{company_id}/settings/vat_types/{vat_type_id} | Delete Vat Type
*SettingsApi* | [**getPaymentAccount**](docs/SettingsApi.md#getPaymentAccount) | **GET** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Get Payment Account
*SettingsApi* | [**getPaymentMethod**](docs/SettingsApi.md#getPaymentMethod) | **GET** /c/{company_id}/settings/payment_methods/{payment_method_id} | Get Payment Method
*SettingsApi* | [**getVatType**](docs/SettingsApi.md#getVatType) | **GET** /c/{company_id}/settings/vat_types/{vat_type_id} | Get Vat Type
*SettingsApi* | [**modifyPaymentAccount**](docs/SettingsApi.md#modifyPaymentAccount) | **PUT** /c/{company_id}/settings/payment_accounts/{payment_account_id} | Modify Payment Account
*SettingsApi* | [**modifyPaymentMethod**](docs/SettingsApi.md#modifyPaymentMethod) | **PUT** /c/{company_id}/settings/payment_methods/{payment_method_id} | Modify Payment Method
*SettingsApi* | [**modifyVatType**](docs/SettingsApi.md#modifyVatType) | **PUT** /c/{company_id}/settings/vat_types/{vat_type_id} | Modify Vat Type
*SuppliersApi* | [**createSupplier**](docs/SuppliersApi.md#createSupplier) | **POST** /c/{company_id}/entities/suppliers | Create Supplier
*SuppliersApi* | [**deleteSupplier**](docs/SuppliersApi.md#deleteSupplier) | **DELETE** /c/{company_id}/entities/suppliers/{supplier_id} | Delete Supplier
*SuppliersApi* | [**getSupplier**](docs/SuppliersApi.md#getSupplier) | **GET** /c/{company_id}/entities/suppliers/{supplier_id} | Get Supplier
*SuppliersApi* | [**listSuppliers**](docs/SuppliersApi.md#listSuppliers) | **GET** /c/{company_id}/entities/suppliers | List Suppliers
*SuppliersApi* | [**modifySupplier**](docs/SuppliersApi.md#modifySupplier) | **PUT** /c/{company_id}/entities/suppliers/{supplier_id} | Modify Supplier
*TaxesApi* | [**createF24**](docs/TaxesApi.md#createF24) | **POST** /c/{company_id}/taxes | Create F24
*TaxesApi* | [**deleteF24**](docs/TaxesApi.md#deleteF24) | **DELETE** /c/{company_id}/taxes/{document_id} | Delete F24
*TaxesApi* | [**deleteF24Attachment**](docs/TaxesApi.md#deleteF24Attachment) | **DELETE** /c/{company_id}/taxes/{document_id}/attachment | Delete F24 Attachment
*TaxesApi* | [**getF24**](docs/TaxesApi.md#getF24) | **GET** /c/{company_id}/taxes/{document_id} | Get F24
*TaxesApi* | [**listF24**](docs/TaxesApi.md#listF24) | **GET** /c/{company_id}/taxes | List F24
*TaxesApi* | [**modifyF24**](docs/TaxesApi.md#modifyF24) | **PUT** /c/{company_id}/taxes/{document_id} | Modify F24
*TaxesApi* | [**uploadF24Attachment**](docs/TaxesApi.md#uploadF24Attachment) | **POST** /c/{company_id}/taxes/attachment | Upload F24 Attachment
*UserApi* | [**getUserInfo**](docs/UserApi.md#getUserInfo) | **GET** /user/info | Get User Info
*UserApi* | [**listUserCompanies**](docs/UserApi.md#listUserCompanies) | **GET** /user/companies | List User Companies
*WebhooksApi* | [**createWebhooksSubscription**](docs/WebhooksApi.md#createWebhooksSubscription) | **POST** /c/{company_id}/subscriptions | Create a Webhook Subscription
*WebhooksApi* | [**deleteWebhooksSubscription**](docs/WebhooksApi.md#deleteWebhooksSubscription) | **DELETE** /c/{company_id}/subscriptions/{subscription_id} | Delete Webhooks Subscription
*WebhooksApi* | [**getWebhooksSubscription**](docs/WebhooksApi.md#getWebhooksSubscription) | **GET** /c/{company_id}/subscriptions/{subscription_id} | Get Webhooks Subscription
*WebhooksApi* | [**listWebhooksSubscriptions**](docs/WebhooksApi.md#listWebhooksSubscriptions) | **GET** /c/{company_id}/subscriptions | List Webhooks Subscriptions
*WebhooksApi* | [**modifyWebhooksSubscription**](docs/WebhooksApi.md#modifyWebhooksSubscription) | **PUT** /c/{company_id}/subscriptions/{subscription_id} | Modify Webhooks Subscription


## Documentation for Models

 - [ArchiveDocument](docs/ArchiveDocument.md)
 - [AttachmentData](docs/AttachmentData.md)
 - [CashbookEntry](docs/CashbookEntry.md)
 - [CashbookEntryDocument](docs/CashbookEntryDocument.md)
 - [CashbookEntryKind](docs/CashbookEntryKind.md)
 - [CashbookEntryType](docs/CashbookEntryType.md)
 - [City](docs/City.md)
 - [Client](docs/Client.md)
 - [ClientType](docs/ClientType.md)
 - [Company](docs/Company.md)
 - [CompanyInfo](docs/CompanyInfo.md)
 - [CompanyInfoAccessInfo](docs/CompanyInfoAccessInfo.md)
 - [CompanyInfoPlanInfo](docs/CompanyInfoPlanInfo.md)
 - [CompanyInfoPlanInfoFunctions](docs/CompanyInfoPlanInfoFunctions.md)
 - [CompanyInfoPlanInfoFunctionsStatus](docs/CompanyInfoPlanInfoFunctionsStatus.md)
 - [CompanyInfoPlanInfoLimits](docs/CompanyInfoPlanInfoLimits.md)
 - [CompanyPlanUsage](docs/CompanyPlanUsage.md)
 - [CompanyType](docs/CompanyType.md)
 - [ControlledCompany](docs/ControlledCompany.md)
 - [CreateArchiveDocumentRequest](docs/CreateArchiveDocumentRequest.md)
 - [CreateArchiveDocumentResponse](docs/CreateArchiveDocumentResponse.md)
 - [CreateCashbookEntryRequest](docs/CreateCashbookEntryRequest.md)
 - [CreateCashbookEntryResponse](docs/CreateCashbookEntryResponse.md)
 - [CreateClientRequest](docs/CreateClientRequest.md)
 - [CreateClientResponse](docs/CreateClientResponse.md)
 - [CreateF24Request](docs/CreateF24Request.md)
 - [CreateF24Response](docs/CreateF24Response.md)
 - [CreateIssuedDocumentRequest](docs/CreateIssuedDocumentRequest.md)
 - [CreateIssuedDocumentResponse](docs/CreateIssuedDocumentResponse.md)
 - [CreatePaymentAccountRequest](docs/CreatePaymentAccountRequest.md)
 - [CreatePaymentAccountResponse](docs/CreatePaymentAccountResponse.md)
 - [CreatePaymentMethodRequest](docs/CreatePaymentMethodRequest.md)
 - [CreatePaymentMethodResponse](docs/CreatePaymentMethodResponse.md)
 - [CreateProductRequest](docs/CreateProductRequest.md)
 - [CreateProductResponse](docs/CreateProductResponse.md)
 - [CreateReceiptRequest](docs/CreateReceiptRequest.md)
 - [CreateReceiptResponse](docs/CreateReceiptResponse.md)
 - [CreateReceivedDocumentRequest](docs/CreateReceivedDocumentRequest.md)
 - [CreateReceivedDocumentResponse](docs/CreateReceivedDocumentResponse.md)
 - [CreateSupplierRequest](docs/CreateSupplierRequest.md)
 - [CreateSupplierResponse](docs/CreateSupplierResponse.md)
 - [CreateVatTypeRequest](docs/CreateVatTypeRequest.md)
 - [CreateVatTypeResponse](docs/CreateVatTypeResponse.md)
 - [CreateWebhooksSubscriptionRequest](docs/CreateWebhooksSubscriptionRequest.md)
 - [CreateWebhooksSubscriptionResponse](docs/CreateWebhooksSubscriptionResponse.md)
 - [Currency](docs/Currency.md)
 - [DetailedCountry](docs/DetailedCountry.md)
 - [DocumentTemplate](docs/DocumentTemplate.md)
 - [EInvoiceRejectionReason](docs/EInvoiceRejectionReason.md)
 - [Email](docs/Email.md)
 - [EmailAttachment](docs/EmailAttachment.md)
 - [EmailData](docs/EmailData.md)
 - [EmailDataDefaultSenderEmail](docs/EmailDataDefaultSenderEmail.md)
 - [EmailRecipientStatus](docs/EmailRecipientStatus.md)
 - [EmailSchedule](docs/EmailSchedule.md)
 - [EmailScheduleInclude](docs/EmailScheduleInclude.md)
 - [EmailStatus](docs/EmailStatus.md)
 - [Entity](docs/Entity.md)
 - [EntityType](docs/EntityType.md)
 - [EventType](docs/EventType.md)
 - [F24](docs/F24.md)
 - [F24Status](docs/F24Status.md)
 - [FattureInCloudPlanType](docs/FattureInCloudPlanType.md)
 - [FunctionStatus](docs/FunctionStatus.md)
 - [GetArchiveDocumentResponse](docs/GetArchiveDocumentResponse.md)
 - [GetCashbookEntryResponse](docs/GetCashbookEntryResponse.md)
 - [GetClientResponse](docs/GetClientResponse.md)
 - [GetCompanyInfoResponse](docs/GetCompanyInfoResponse.md)
 - [GetCompanyPlanUsageResponse](docs/GetCompanyPlanUsageResponse.md)
 - [GetEInvoiceRejectionReasonResponse](docs/GetEInvoiceRejectionReasonResponse.md)
 - [GetEmailDataResponse](docs/GetEmailDataResponse.md)
 - [GetExistingIssuedDocumentTotalsRequest](docs/GetExistingIssuedDocumentTotalsRequest.md)
 - [GetExistingIssuedDocumentTotalsResponse](docs/GetExistingIssuedDocumentTotalsResponse.md)
 - [GetExistingReceivedDocumentTotalsRequest](docs/GetExistingReceivedDocumentTotalsRequest.md)
 - [GetExistingReceivedDocumentTotalsResponse](docs/GetExistingReceivedDocumentTotalsResponse.md)
 - [GetF24Response](docs/GetF24Response.md)
 - [GetIssuedDocumentPreCreateInfoResponse](docs/GetIssuedDocumentPreCreateInfoResponse.md)
 - [GetIssuedDocumentResponse](docs/GetIssuedDocumentResponse.md)
 - [GetNewIssuedDocumentTotalsRequest](docs/GetNewIssuedDocumentTotalsRequest.md)
 - [GetNewIssuedDocumentTotalsResponse](docs/GetNewIssuedDocumentTotalsResponse.md)
 - [GetNewReceivedDocumentTotalsRequest](docs/GetNewReceivedDocumentTotalsRequest.md)
 - [GetNewReceivedDocumentTotalsResponse](docs/GetNewReceivedDocumentTotalsResponse.md)
 - [GetPaymentAccountResponse](docs/GetPaymentAccountResponse.md)
 - [GetPaymentMethodResponse](docs/GetPaymentMethodResponse.md)
 - [GetProductResponse](docs/GetProductResponse.md)
 - [GetReceiptPreCreateInfoResponse](docs/GetReceiptPreCreateInfoResponse.md)
 - [GetReceiptResponse](docs/GetReceiptResponse.md)
 - [GetReceiptsMonthlyTotalsResponse](docs/GetReceiptsMonthlyTotalsResponse.md)
 - [GetReceivedDocumentPreCreateInfoResponse](docs/GetReceivedDocumentPreCreateInfoResponse.md)
 - [GetReceivedDocumentResponse](docs/GetReceivedDocumentResponse.md)
 - [GetSupplierResponse](docs/GetSupplierResponse.md)
 - [GetUserInfoResponse](docs/GetUserInfoResponse.md)
 - [GetUserInfoResponseEmailConfirmationState](docs/GetUserInfoResponseEmailConfirmationState.md)
 - [GetUserInfoResponseInfo](docs/GetUserInfoResponseInfo.md)
 - [GetVatTypeResponse](docs/GetVatTypeResponse.md)
 - [GetWebhooksSubscriptionResponse](docs/GetWebhooksSubscriptionResponse.md)
 - [IssuedDocument](docs/IssuedDocument.md)
 - [IssuedDocumentEiData](docs/IssuedDocumentEiData.md)
 - [IssuedDocumentExtraData](docs/IssuedDocumentExtraData.md)
 - [IssuedDocumentItemsListItem](docs/IssuedDocumentItemsListItem.md)
 - [IssuedDocumentOptions](docs/IssuedDocumentOptions.md)
 - [IssuedDocumentPaymentsListItem](docs/IssuedDocumentPaymentsListItem.md)
 - [IssuedDocumentPaymentsListItemPaymentTerms](docs/IssuedDocumentPaymentsListItemPaymentTerms.md)
 - [IssuedDocumentPreCreateInfo](docs/IssuedDocumentPreCreateInfo.md)
 - [IssuedDocumentPreCreateInfoDefaultValues](docs/IssuedDocumentPreCreateInfoDefaultValues.md)
 - [IssuedDocumentPreCreateInfoExtraDataDefaultValues](docs/IssuedDocumentPreCreateInfoExtraDataDefaultValues.md)
 - [IssuedDocumentPreCreateInfoItemsDefaultValues](docs/IssuedDocumentPreCreateInfoItemsDefaultValues.md)
 - [IssuedDocumentStatus](docs/IssuedDocumentStatus.md)
 - [IssuedDocumentTotals](docs/IssuedDocumentTotals.md)
 - [IssuedDocumentType](docs/IssuedDocumentType.md)
 - [JoinIssuedDocumentsResponse](docs/JoinIssuedDocumentsResponse.md)
 - [Language](docs/Language.md)
 - [ListArchiveCategoriesResponse](docs/ListArchiveCategoriesResponse.md)
 - [ListArchiveDocumentsResponse](docs/ListArchiveDocumentsResponse.md)
 - [ListArchiveDocumentsResponsePage](docs/ListArchiveDocumentsResponsePage.md)
 - [ListCashbookEntriesResponse](docs/ListCashbookEntriesResponse.md)
 - [ListCitiesResponse](docs/ListCitiesResponse.md)
 - [ListClientsResponse](docs/ListClientsResponse.md)
 - [ListClientsResponsePage](docs/ListClientsResponsePage.md)
 - [ListCostCentersResponse](docs/ListCostCentersResponse.md)
 - [ListCountriesResponse](docs/ListCountriesResponse.md)
 - [ListCurrenciesResponse](docs/ListCurrenciesResponse.md)
 - [ListDeliveryNotesDefaultCausalsResponse](docs/ListDeliveryNotesDefaultCausalsResponse.md)
 - [ListDetailedCountriesResponse](docs/ListDetailedCountriesResponse.md)
 - [ListEmailsResponse](docs/ListEmailsResponse.md)
 - [ListEmailsResponsePage](docs/ListEmailsResponsePage.md)
 - [ListF24Response](docs/ListF24Response.md)
 - [ListF24ResponseAggregatedData](docs/ListF24ResponseAggregatedData.md)
 - [ListF24ResponseAggregation](docs/ListF24ResponseAggregation.md)
 - [ListF24ResponsePage](docs/ListF24ResponsePage.md)
 - [ListIssuedDocumentsResponse](docs/ListIssuedDocumentsResponse.md)
 - [ListIssuedDocumentsResponsePage](docs/ListIssuedDocumentsResponsePage.md)
 - [ListLanguagesResponse](docs/ListLanguagesResponse.md)
 - [ListPaymentAccountsResponse](docs/ListPaymentAccountsResponse.md)
 - [ListPaymentMethodsResponse](docs/ListPaymentMethodsResponse.md)
 - [ListProductCategoriesResponse](docs/ListProductCategoriesResponse.md)
 - [ListProductsResponse](docs/ListProductsResponse.md)
 - [ListProductsResponsePage](docs/ListProductsResponsePage.md)
 - [ListReceiptsResponse](docs/ListReceiptsResponse.md)
 - [ListReceiptsResponsePage](docs/ListReceiptsResponsePage.md)
 - [ListReceivedDocumentCategoriesResponse](docs/ListReceivedDocumentCategoriesResponse.md)
 - [ListReceivedDocumentsResponse](docs/ListReceivedDocumentsResponse.md)
 - [ListReceivedDocumentsResponsePage](docs/ListReceivedDocumentsResponsePage.md)
 - [ListRevenueCentersResponse](docs/ListRevenueCentersResponse.md)
 - [ListSuppliersResponse](docs/ListSuppliersResponse.md)
 - [ListSuppliersResponsePage](docs/ListSuppliersResponsePage.md)
 - [ListTemplatesResponse](docs/ListTemplatesResponse.md)
 - [ListUnitsOfMeasureResponse](docs/ListUnitsOfMeasureResponse.md)
 - [ListUserCompaniesResponse](docs/ListUserCompaniesResponse.md)
 - [ListUserCompaniesResponseData](docs/ListUserCompaniesResponseData.md)
 - [ListVatTypesResponse](docs/ListVatTypesResponse.md)
 - [ListWebhooksSubscriptionsResponse](docs/ListWebhooksSubscriptionsResponse.md)
 - [ModifyArchiveDocumentRequest](docs/ModifyArchiveDocumentRequest.md)
 - [ModifyArchiveDocumentResponse](docs/ModifyArchiveDocumentResponse.md)
 - [ModifyCashbookEntryRequest](docs/ModifyCashbookEntryRequest.md)
 - [ModifyCashbookEntryResponse](docs/ModifyCashbookEntryResponse.md)
 - [ModifyClientRequest](docs/ModifyClientRequest.md)
 - [ModifyClientResponse](docs/ModifyClientResponse.md)
 - [ModifyF24Request](docs/ModifyF24Request.md)
 - [ModifyF24Response](docs/ModifyF24Response.md)
 - [ModifyIssuedDocumentRequest](docs/ModifyIssuedDocumentRequest.md)
 - [ModifyIssuedDocumentResponse](docs/ModifyIssuedDocumentResponse.md)
 - [ModifyPaymentAccountRequest](docs/ModifyPaymentAccountRequest.md)
 - [ModifyPaymentAccountResponse](docs/ModifyPaymentAccountResponse.md)
 - [ModifyPaymentMethodRequest](docs/ModifyPaymentMethodRequest.md)
 - [ModifyPaymentMethodResponse](docs/ModifyPaymentMethodResponse.md)
 - [ModifyProductRequest](docs/ModifyProductRequest.md)
 - [ModifyProductResponse](docs/ModifyProductResponse.md)
 - [ModifyReceiptRequest](docs/ModifyReceiptRequest.md)
 - [ModifyReceiptResponse](docs/ModifyReceiptResponse.md)
 - [ModifyReceivedDocumentRequest](docs/ModifyReceivedDocumentRequest.md)
 - [ModifyReceivedDocumentResponse](docs/ModifyReceivedDocumentResponse.md)
 - [ModifySupplierRequest](docs/ModifySupplierRequest.md)
 - [ModifySupplierResponse](docs/ModifySupplierResponse.md)
 - [ModifyVatTypeRequest](docs/ModifyVatTypeRequest.md)
 - [ModifyVatTypeResponse](docs/ModifyVatTypeResponse.md)
 - [ModifyWebhooksSubscriptionRequest](docs/ModifyWebhooksSubscriptionRequest.md)
 - [ModifyWebhooksSubscriptionResponse](docs/ModifyWebhooksSubscriptionResponse.md)
 - [MonthlyTotal](docs/MonthlyTotal.md)
 - [OriginalDocumentType](docs/OriginalDocumentType.md)
 - [Pagination](docs/Pagination.md)
 - [PaymentAccount](docs/PaymentAccount.md)
 - [PaymentAccountType](docs/PaymentAccountType.md)
 - [PaymentMethod](docs/PaymentMethod.md)
 - [PaymentMethodDetails](docs/PaymentMethodDetails.md)
 - [PaymentMethodType](docs/PaymentMethodType.md)
 - [PaymentTermsType](docs/PaymentTermsType.md)
 - [PermissionLevel](docs/PermissionLevel.md)
 - [Permissions](docs/Permissions.md)
 - [PermissionsFicIssuedDocumentsDetailed](docs/PermissionsFicIssuedDocumentsDetailed.md)
 - [Product](docs/Product.md)
 - [Receipt](docs/Receipt.md)
 - [ReceiptItemsListItem](docs/ReceiptItemsListItem.md)
 - [ReceiptPreCreateInfo](docs/ReceiptPreCreateInfo.md)
 - [ReceiptType](docs/ReceiptType.md)
 - [ReceivedDocument](docs/ReceivedDocument.md)
 - [ReceivedDocumentInfo](docs/ReceivedDocumentInfo.md)
 - [ReceivedDocumentInfoDefaultValues](docs/ReceivedDocumentInfoDefaultValues.md)
 - [ReceivedDocumentInfoItemsDefaultValues](docs/ReceivedDocumentInfoItemsDefaultValues.md)
 - [ReceivedDocumentItemsListItem](docs/ReceivedDocumentItemsListItem.md)
 - [ReceivedDocumentPaymentsListItem](docs/ReceivedDocumentPaymentsListItem.md)
 - [ReceivedDocumentPaymentsListItemPaymentTerms](docs/ReceivedDocumentPaymentsListItemPaymentTerms.md)
 - [ReceivedDocumentTotals](docs/ReceivedDocumentTotals.md)
 - [ReceivedDocumentType](docs/ReceivedDocumentType.md)
 - [ScheduleEmailRequest](docs/ScheduleEmailRequest.md)
 - [SendEInvoiceRequest](docs/SendEInvoiceRequest.md)
 - [SendEInvoiceRequestData](docs/SendEInvoiceRequestData.md)
 - [SendEInvoiceRequestOptions](docs/SendEInvoiceRequestOptions.md)
 - [SendEInvoiceResponse](docs/SendEInvoiceResponse.md)
 - [SendEInvoiceResponseData](docs/SendEInvoiceResponseData.md)
 - [SenderEmail](docs/SenderEmail.md)
 - [ShowTotalsMode](docs/ShowTotalsMode.md)
 - [Supplier](docs/Supplier.md)
 - [SupplierType](docs/SupplierType.md)
 - [TransformIssuedDocumentResponse](docs/TransformIssuedDocumentResponse.md)
 - [UploadArchiveAttachmentResponse](docs/UploadArchiveAttachmentResponse.md)
 - [UploadF24AttachmentResponse](docs/UploadF24AttachmentResponse.md)
 - [UploadIssuedDocumentAttachmentResponse](docs/UploadIssuedDocumentAttachmentResponse.md)
 - [UploadReceivedDocumentAttachmentResponse](docs/UploadReceivedDocumentAttachmentResponse.md)
 - [User](docs/User.md)
 - [UserCompanyRole](docs/UserCompanyRole.md)
 - [VatItem](docs/VatItem.md)
 - [VatKind](docs/VatKind.md)
 - [VatType](docs/VatType.md)
 - [VerifyEInvoiceXmlErrorResponse](docs/VerifyEInvoiceXmlErrorResponse.md)
 - [VerifyEInvoiceXmlErrorResponseError](docs/VerifyEInvoiceXmlErrorResponseError.md)
 - [VerifyEInvoiceXmlErrorResponseErrorValidationResult](docs/VerifyEInvoiceXmlErrorResponseErrorValidationResult.md)
 - [VerifyEInvoiceXmlErrorResponseExtra](docs/VerifyEInvoiceXmlErrorResponseExtra.md)
 - [VerifyEInvoiceXmlResponse](docs/VerifyEInvoiceXmlResponse.md)
 - [VerifyEInvoiceXmlResponseData](docs/VerifyEInvoiceXmlResponseData.md)
 - [WebhooksSubscription](docs/WebhooksSubscription.md)
 - [WebhooksSubscriptionConfig](docs/WebhooksSubscriptionConfig.md)
 - [WebhooksSubscriptionMapping](docs/WebhooksSubscriptionMapping.md)


## Documentation for Authorization



### OAuth2AuthenticationCodeFlow


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api-v2.fattureincloud.it/oauth/authorize
- **Scopes**: 
  - _entity.clients:r_: Read permission to the Clients registry
  - _entity.clients:a_: Write permission to the Clients registry
  - _entity.suppliers:r_: Read permission to the Suppliers registry
  - _entity.suppliers:a_: Write permission to the Suppliers registry
  - _products:r_: Read permission to the Products
  - _products:a_: Write permission to the Products
  - _issued_documents.invoices:r_: Read permission to the issued Invoices
  - _issued_documents.credit_notes:r_: Read permission to the issued Credit Notes
  - _issued_documents.receipts:r_: Read permission to the issued Receipts
  - _issued_documents.orders:r_: Read permission to the issued Orders
  - _issued_documents.quotes:r_: Read permission to the issued Quotes
  - _issued_documents.proformas:r_: Read permission to the issued Proformas
  - _issued_documents.delivery_notes:r_: Read permission to the issued Delivery Notes
  - _issued_documents.work_reports:r_: Read permission to the issued Work Reports
  - _issued_documents.supplier_orders:r_: Read permission to the issued Supplier Orders
  - _issued_documents.self_invoices:r_: Read permission to the issued Self Invoices
  - _issued_documents.invoices:a_: Write permission to the issued Invoices
  - _issued_documents.credit_notes:a_: Write permission to the issued Credit Notes
  - _issued_documents.receipts:a_: Write permission to the issued issued Receipts
  - _issued_documents.orders:a_: Write permission to the issued Orders
  - _issued_documents.quotes:a_: Write permission to the issued Quotes
  - _issued_documents.proformas:a_: Write permission to the issued Proformas
  - _issued_documents.delivery_notes:a_: Write permission to the issued Delivery Notes
  - _issued_documents.work_reports:a_: Write permission to the issued Work Reports
  - _issued_documents.supplier_orders:a_: Write permission to the issued Supplier Orders
  - _issued_documents.self_invoices:a_: Write permission to the issued Self Invoices
  - _received_documents:r_: Read permission to the Received Documents
  - _received_documents:a_: Write permission to the Received Documents
  - _stock:r_: Read permission to the Stock movements
  - _stock:a_: Write permission to the Stock movements
  - _receipts:r_: Read permission to the Receipts
  - _receipts:a_: Write permission to the Receipts
  - _taxes:r_: Read permission to the Taxes
  - _taxes:a_: Write permission to the Taxes
  - _archive:r_: Read permission to the Archive Documents
  - _archive:a_: Read permission to the Archive Documents
  - _cashbook:r_: Read permission to the Cashbook
  - _cashbook:a_: Write permission to the Cashbook
  - _settings:r_: Read permission to the Settings
  - _settings:a_: Write permission to the Settings
  - _situation:r_: Read permission to the company Situation

