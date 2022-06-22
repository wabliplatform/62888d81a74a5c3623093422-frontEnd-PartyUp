# TempApi.PartyApi

All URIs are relative to *http://83.212.100.226:3004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createparty**](PartyApi.md#createparty) | **POST** /party | Creates the data
[**deleteparty**](PartyApi.md#deleteparty) | **DELETE** /party/{partyId} | Delete the element
[**getAllparty**](PartyApi.md#getAllparty) | **GET** /party/getAll | Get all the data
[**getparty**](PartyApi.md#getparty) | **GET** /party/{partyId} | Get the element
[**updateparty**](PartyApi.md#updateparty) | **PUT** /party/{partyId} | Updates the element



## createparty

> Party createparty(party)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PartyApi();
let party = new TempApi.Party(); // Party | data to be created
apiInstance.createparty(party, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party** | [**Party**](Party.md)| data to be created | 

### Return type

[**Party**](Party.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteparty

> deleteparty(partyId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PartyApi();
let partyId = "partyId_example"; // String | the Id parameter
apiInstance.deleteparty(partyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllparty

> [Party] getAllparty()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PartyApi();
apiInstance.getAllparty((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Party]**](Party.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getparty

> Party getparty(partyId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PartyApi();
let partyId = "partyId_example"; // String | the Id parameter
apiInstance.getparty(partyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | **String**| the Id parameter | 

### Return type

[**Party**](Party.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateparty

> Party updateparty(partyId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PartyApi();
let partyId = "partyId_example"; // String | the Id parameter
let opts = {
  'party': new TempApi.Party() // Party | data to be updated
};
apiInstance.updateparty(partyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | **String**| the Id parameter | 
 **party** | [**Party**](Party.md)| data to be updated | [optional] 

### Return type

[**Party**](Party.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

