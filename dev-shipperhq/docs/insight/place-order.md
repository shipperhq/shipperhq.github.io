---
slug: place-order
title: PlaceOrder Mutation
authors: []
tags: [rating, insight, api, introduction]
---

# Overview

## How Rating + Shipping Insights Works with the `PlaceOrder` mutation

Users integrate with ShipperHQ’s rating API to provide shipping rate estimates based on contents of a `virtual cart`. This is done leveraging the [rating API](/docs/rate/overview).  

Once a user has finalized his choices, the rating (a quote) need to be converted into an order. Usually, multiple quotes are send by ShipperHQ (for example in the cart, when the user changes her/his adress, when the user select delivery options, etc.). 

`PlaceOrder`'s role is to convert one of these quotes into a full fledge order so that the complete quote information can be stored on ShipperHQ order database and later on retrieved via the [Insight API](/docs/insight/overview).

:::tip Most users don't need to use the `PlaceOrder` mutation.

If you are using an eCommerce platform Supported by ShipperHQ (Magento/Adobe Commerce, BigCommerce, Shopify, SalesForce Commerce Cloud, WooCommerce, Zoey - [complete list here](https://shipperhq.com/pricing)): you do not need to use `PlaceOrder`. In these scenario, the order creation is done automatically by the platform using ShipperHQ rates and ShipperHQ capture this information automatically so that you can use directly the [Insight API](/docs/insight/overview).

You only need to use `PlaceOrder` in very specific scenarios detailed below.

:::

## Do I need to use the `PlaceOrder` mutation?

You need to use the PlaceOrder mutation because:
* you want to support an unsupported platform ([supported platform list here](https://shipperhq.com/pricing))
* you want to capture orders outside of the platform for instance going headless, building a mobile app, etc.
* you want to implement a different order capture mechanism on a supported platform (from your CRM, an ERP) leveraging the [rating API](/docs/rate/overview)
  
Before using PlaceOrder, you need to use generate rates via the [rating API](/docs/rate/overview). 

## Endpoint
Submit `POST` requests to  https://postapi.shipperhq.com/v3/graphql/label

## Request Headers
| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Secret-Token` | The secret token that you have generated to use the [rating API](/docs/rate/overview) |
| `X-ShipperHQ-Scope` | The Scope for this ShipperHQ account. If unsure use “LIVE” (note: the Scope functionality is only available for Magento for now |
| `X-ShipperHQ-Session` |  This identifies the quote that you want to convert as an order. You have to use the exact same value as the Rating API request used to generate this quote.|
  

## Example Request
```json title="Example Request"
query placeOrder {
  placeOrder( placeOrderInfo: {
    orderNumber: "1234",      
     totalCharges: 9.85,                    # totalCharges in rating API response
     carrierCode: "shqusps",                # carrierCode in rating API response   
     methodCode: "Priority Mail",           # methodCode in rating API response
     transId: "SHQ_20220201_1625_5144966"   # transactionID from rating API response
  }) {
     transactionId
     responseSummary{
        status
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
    }
  }
}
```

## Example Response
```json title="Example response"
{
    “placeOrder: {
      “transactionId” : “SHQ_20220212_12345678_BAQ_639272”,
      “responseSummary”: {
        “status”: 1
      },
      “errors”: null
    }
}
```

## Example Error Response
```json title="Error response"
{
    “placeOrder: {
       “transactionId": “SHQ_20220212_12345678_BAQ_639273”,
      “responseSummary”: {
        “status”: 0
      },
      “errors”: [
        {
          "errorCode": 0,
          "internalErrorMessage": "Order not found when looking up",
          "externalErrorMessage": null
        }
      ]
    }
}
```

## Requests
Endpoint
Submit POST requests to  https://postapi.shipperhq.com/v3/graphql/label
Request Headers
Any query or request must include the following headers, and should match the header values used in your Rating API requests.
X-ShipperHQ-Secret-Token – This is the Secret token you have generated for your ShipperHQ account and are using your Rating API requests
X-ShipperHQ-Scope – This is the SCOPE from your SHQ account, if unsure use “LIVE”
X-ShipperHQ-Session – This identifies your cart/order, use the same unique value as your Rating API request

