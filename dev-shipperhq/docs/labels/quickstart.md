---
sidebar_position: 3
slug: quickstart
title: Quickstart
tags: [labels, api, guide, quickstart]
---

This document is for technical architects and developers that need to integrate with ShipperHQ’s Labels API to build their own integration to generate and print shipping labels.

Note, this does not document the standard types and fields the API provides. This information is included in the [Labels API Reference](https://dev.shipperhq.com/labels-service/) documentation or can be obtained via our [API playground](https://graphiql.shipperhq.com/).

As with all our APIs, our Labels API is implemented with GraphQL. If you're unfamiliar with GraphQL, see our [SDK Quickstart](../quickstart.md#graphql).

:::caution Early Access Program

The ShipperHQ Labels API is currently in closed Beta. ShipperHQ is looking for early access partners interested in participating in this program.
Please [contact us](/contact) if interested.

:::

## Requirements
* ShipperHQ account with the [Generate Shipping Labels](https://docs.shipperhq.com/generate-shipping-labels/) Advanced Feature enabled
* An eCommerce platform or custom integration supporting the [`PlaceOrder`](../labels/place-order.md) mutation of the [Labels API](../labels/overview.md), either:
  * ShipperHQ’s native [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/) app installed on the eCommerce platform
  * A custom integration implementing both our [Rates API](../rates/overview.md) and the [`PlaceOrder`](../labels/place-order.md) mutation of our [Labels API](../labels/overview.md)
* An account with at least one of the carriers supported by the ShipperHQ Labels API

## Supported Carriers

The ShipperHQ Labels API current supports UPS, FedEx, and USPS.

### UPS

#### Supported UPS Services

| Services | Notes |
| --------------------------- | --------------------------- |
| Domestic Ground & Express Small Package |  |
| International Ground & Express Small Package |  |
| UPS Access Point |  |

:::info
ShipperHQ does not currently supporting producing labels for UPS SurePost.
:::

### FedEx

### USPS

## Authentication

### Generating an Access Token

## API Details

### Endpoint
| Protocol                      | Method | Body Encoding | Endpoint URL        |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  `https://postapi.shipperhq.com/v3/graphql/label` |

### Request Headers
| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Secret-Token` | The secret token that you have generated to use the [Rates API](/docs/rates/overview) |
| `X-ShipperHQ-Scope` | The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT`, or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`. |
| `X-ShipperHQ-Session` |  This identifies the quote that you want to convert to an order. You have to use the exact same value as the [Rates API](/docs/rates/overview) request used to generate this quote. |

## Testing
To test the Labels API you will need to already have either:
1. ShipperHQ's native integration installed and enabled on [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/)
2. A custom integration of the ShipperHQ [Rates API](../rates/overview.md) and the [`PlaceOrder`](../labels/place-order.md) mutation of the [Labels API](../labels/overview.md).

### Enable & Retrieve Access Token
Within the ShipperHQ account you wish to use, enable the Labels Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account.

### Place an Order
Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information.

### Test with the API Playground
- Navigate to the ShipperHQ [API Playground](https://graphiql.shipperhq.com/)
- In a new playground tab, enter the Labels API Endpoint URL into the URL bar
- Click the Docs button
- Click the Reload Docs icon
- Click the Query link to view a list of available queries and the arguments and fields you can include in your request

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

## Errors
