---
sidebar_position: 20
slug: place-order
title: PlaceOrder Mutation
tags: [labels, insights, api, guide]
---

## How Rating + Shipping Insights Work with `PlaceOrder`

Merchants integrate with ShipperHQ's Rates API to provide shipping rate estimates based on contents of a `virtual cart`. This is done leveraging the [Rates API](../rate/overview.md).  

Once a customer has finalized their choices at checkout and completes the order, the rating (a quote) needs to be converted into an order so it can stored for use with the [Insights API](overview.md). Usually, multiple quotes are sent by ShipperHQ (for example in the cart, when the customer changes their address, when they changes delivery options, etc.).

The role of `PlaceOrder` is to convert one of these quotes into a full fledge order so that the complete quote information can be stored on ShipperHQ order database and later on retrieved via the [Insights API](overview.md).

:::tip Most users don't need to use the `PlaceOrder` mutation

If you are using an eCommerce platform supported by ShipperHQ ([Magento/Adobe Commerce](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/), [SalesForce B2C Commerce Cloud](https://docs.shipperhq.com/installing-salesforce/), [WooCommerce](https://docs.shipperhq.com/install-woocommerce-plugin/), [Zoey](https://docs.shipperhq.com/install-shipperhq-zoey/) - [complete list here](https://shipperhq.com/pricing)): you do not need to use `PlaceOrder`. In these scenarios, the order creation is done automatically by the platform using ShipperHQ rates and ShipperHQ captures this information automatically so that you can directly use the [Insights API](overview.md).

The specific scenarios where you would need to use `PlaceOrder` are detailed below.

:::

## Do I need to use the `PlaceOrder` mutation?

You need to use the `PlaceOrder` mutation if:
* you use a platform that does not have a native ShipperHQ integration ([supported platform list here](https://shipperhq.com/pricing))
* you want to capture orders outside of the platform (e.g. going headless, building a mobile app, etc.)
* you want to implement a different order capture mechanism on a supported platform (from your CRM, an ERP) leveraging the [Rates API](../rate/overview.md)

To successfully call `PlaceOrder`, you need to generate rates via the [Rates API](../rate/overview.md) first.

## Endpoint
| Protocol                      | Method | Body Encoding | Endpoint URL        |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  https://postapi.shipperhq.com/v3/graphql/label |

## Request Headers
| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Secret-Token` | The secret token that you have generated to use the [Rates API](/docs/rate/overview) |
| `X-ShipperHQ-Scope` | The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT`, or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`. |
| `X-ShipperHQ-Session` |  This identifies the quote that you want to convert to an order. You have to use the exact same value as the [Rates API](/docs/rate/overview) request used to generate this quote. |

## Examples

### Example Request
```json title="Example Request"
query placeOrder {
  placeOrder( placeOrderInfo: {
    orderNumber: "1234",      
     totalCharges: 9.85,                    # totalCharges in Rates API response
     carrierCode: "shqusps",                # carrierCode in Rates API response   
     methodCode: "Priority Mail",           # methodCode in Rates API response
     transId: "SHQ_20220201_1625_5144966"   # transactionID from Rates API response
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

### Example Response
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

### Example Error Response
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
