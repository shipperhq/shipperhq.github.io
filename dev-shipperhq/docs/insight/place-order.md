---
slug: place-order
title: PlaceOrder Mutation
authors: []
tags: [rating, insight, api, introduction]
---

# Overview

How Rating + Shipping Insights Works with `PlaceOrder`
Users integrate with ShipperHQ’s rating API to provide shipping rate estimates based on contents of a `virtual cart`. ShipperHQ’s Shipping Insights API is a read-only API that provides all the data relevant to a particular `virtual cart` based on the buyer preferences. The Insight API only works for orders and the `PlaceOrder` mutation is used to transform a specific rating quote into a full-fledge order so that the Insight API can be used.

# Why should I use the `PlaceOrder` mutation?

You need to use the PlaceOrder mutation because:
* you do not relay on a supported ShipperHQ platform (like BigCommerce, Shopify, etc.)
* you want to capture orders outside of the platform for instance going headless, building a mobile app, etc.
* you want to implement a different order capture mechanism than a supported platform 
  
Before using PlaceOrder, you need to use generate rates via the [rating API](/docs/rate/overview). 

# Quickstart guide

## Enpoint
Submit POST requests to  https://postapi.shipperhq.com/v3/graphql/label

## Request Headers
You need:
* `X-ShipperHQ-Secret-Token` that you have generated to use the [rating API](/docs/rate/overview)
* `X-ShipperHQ-Scope`: This is the SCOPE from your SHQ account, if unsure use “LIVE” (SCOPE is only available for Magento for now)
* `X-ShipperHQ-Session`: This identifies the cart that you want to convert as an order. You have to use the exact same value as the Rating API request used to generate this quote.
  

## Example Request
```type=json
query placeOrder {
  placeOrder( placeOrderInfo: {
    orderNumber: "1234",      
     totalCharges: 9.85,  # totalCharges in rating API response
     carrierCode: "shqusps",   # carrierCode in rating API response   
     methodCode: "Priority Mail",  # methodCode in rating API response
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
```type=json
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
```type=json
{
    “placeOrder: {
       “transactionId” : “SHQ_20220212_12345678_BAQ_639273”,
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

