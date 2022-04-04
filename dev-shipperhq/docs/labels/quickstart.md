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
* An account with at least one of the [carriers supported](#supported-carriers) by the ShipperHQ Labels API connected to your ShipperHQ account

## Recommended Workflow

While the ShipperHQ APIs can be used in various ways, our recommended workflow for label printing is described below.

### 1. Rate Order


### 2. View Order


### 3. List Printers


### 4. Create Label


### 5. Print Label


### Optionally


#### Cancel Label


#### Create Return Label


## Authentication Process
To use the ShipperHQ Labels API you need to generate a JWT authentication token. This is a three step process:
1. Get your ShipperHQ API Key
2. Get your Authentication Code
3. Generate a JWT access token (valid for 30 days)

### Access Scope

Before we dig into the specifics, it is important to define the access scope for the API Key, the Authentication Code and the JWT Access Token. Each of these elements are specific to a single ShipperHQ Website.

You can think of a Website as a sale channel. For instance an online store in the US (production), an online store in Canada (production), a development store, or a CRM sales channel (offline sales).

Because ShipperHQ supports multiple Websites, each Website can have its own Shipping rules. Each Website will, as a consequence, generate different type of rates for the same virtual cart and customer choices.

To reflect this level of functionality, authorization and access to the Rates API is specific to a Website: you need a different set of credentials for each ShipperHQ Website.

[More information about Websites in ShipperHQ](https://docs.shipperhq.com/adding-websites-in-shipperhq/)

### How to get your API Key

The API key is accessible on all platforms via the ShipperHQ dashboard.

To get the API key:
1. Log into ShipperHQ and go to the [Websites](https://shipperhq.com/ratesmgr/websites) section of the dashboard.
2. Select the Website you want to get the key from
3. Select the `API key` and copy it to your application

### How to get your Authentication Code

#### For new ShipperHQ deployments on manually connected platforms (Magento/Adobe Commerce, Zoey, WooCommerce, etc.)
On these platforms, you can generate a new Authentication Code within the ShipperHQ dashboard.

1. Visit the Websites section of the dashboard
2. Click on the relevant Website
3. Click on "Generate new Authentication Code"
4. Copy the code: It will not be shown again for this Website.

:::caution Generating a new Authentication Code will break existing integrations with that Website!

Generating a new Authentication Code invalidates the previous Authentication Codes for that Website. This will break any integrations using that Authentication Code. Our recommendation is to create a new Website when creating a new integration so that you can retrieve a new API Key and Authentication Code without impacting your existing Website integration. Please [contact support](/contact) to double-check and avoid any service disruption for existing Websites.

:::

#### For Single Sign On platforms: BigCommerce and Shopify

For these platforms, the Authentication Code is automatically generated and exchanged between the eCommerce platform and ShipperHQ.

Please [contact support](/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.

#### For existing (in production or in development) ShipperHQ Websites

Please [contact support](/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.

### Generating your JWT Authentication Token

Once you have your ShipperHQ API Key and Authentication Code, you can generate the JWT token used to access the ShipperHQ Rates API. These tokens expire after 30 days.

The ShipperHQ API Playground can be used to create an Authentication Token for testing. You will need to use this same query in your integration to create secret tokens when required.

1. Navigate to the ShipperHQ [API Playground](https://graphiql.shipperhq.com/)
2. Click Add New in the top left corner
3. Set the URL to `https://rms.shipperhq.com`
4. Click the Reload Docs button
5. Send a createSecretToken mutation with your API Key and Authentication Code

```json title="Create a secret token"
mutation CreateSecretToken {
   createSecretToken(
      api_key: "your_api_key",
      auth_code: "your_auth_code"
      )
      {
        token
      }
}
```

:::tip ShipperHQ uses JWT tokens with a 30 days expiration date

The response contains the token you use to make requests to the ShipperHQ Rates API. This token expires every 30 days. You can request a new token up to an hour before your current token expiration date and time. The token is a [JWT token](https://jwt.io/) and they have an expiration timestamp encoded inside: no need to remember the expiration date. We recommend using your favorite [JWT](https://jwt.io/) parsing library to extract the expiration date from the token, so you will know the exact second the token expires.

:::

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

## Supported Carriers

The ShipperHQ Labels API current supports UPS, FedEx, and USPS.

### UPS

#### Supported UPS Services

| Services | Notes |
| --------------------------- | --------------------------- |
| [UPS Domestic Ground & Express Small Package](https://docs.shipperhq.com/ups-carrier-setup/) |  |
| [UPS International Ground & Express Small Package](https://docs.shipperhq.com/ups-carrier-setup/) |  |
| [UPS Access Point](https://docs.shipperhq.com/ups-access-point-setup/) |  |
| [UPS Ground with Freight Pricing](https://docs.shipperhq.com/ups-access-point-setup/) |  |

:::info
ShipperHQ does not currently support producing labels for [UPS SurePost](https://docs.shipperhq.com/ups-carrier-setup/) or [UPS Ground with Freight Pricing](https://docs.shipperhq.com/ups-ground-with-freight-pricing/).
:::

### FedEx

#### Supported FedEx Services

| Services | Notes |
| --------------------------- | --------------------------- |
| [FedEx Ground Small Package](https://docs.shipperhq.com/setup-fedex-carrier/) |  |
| [FedEx Express Small Package](https://docs.shipperhq.com/setup-fedex-carrier/) |  |
| [FedEx Hold at Location](https://docs.shipperhq.com/how-to-set-up-fedex-hold-at-location-as-a-carrier/) |  |

:::info
ShipperHQ does not currently support producing labels for [FedEx Ground Economy](https://docs.shipperhq.com/setup-fedex-carrier/) or [FedEx Freight](https://docs.shipperhq.com/fedex-freight-carrier-setup/).
:::

### USPS

## Integration Requirements

While very few elements are required for a successful API call to the Labels API (see the [Labels API Reference](https://dev.shipperhq.com/labels-service/)), there are certain elements that are required in order to support certain features and functionality of ShipperHQ. Because of this, if you intend to make your integration of ShipperHQ's Labels API available to multiple clients we require support for certain elements. Meeting these requirements means your integration will support all of the most commonly used ShipperHQ features and functionality.

:::info
While we have endeavored to provide a complete list of requirements for a baseline integration of ShipperHQ, individual use cases may differ. Therefore, we always recommend contacting [dev support](/contact) prior to building a new integration.
:::

:::note
We don't require single-purpose, custom integrations to meet these requirements. However, we do strongly recommend that all integrations of the ShipperHQ Rates API do so in order to support the breadth of ShipperHQ's capabilities and to future-proof the integration against shipping needs that may change in the future.
:::

### General Requirements

The integration should:
- Provide clients with a UI for entering their ShipperHQ Account-specific API credentials and use those credentials in all API calls to ShipperHQ
- Send a unique value in the `X-ShipperHQ-Session` request header for each shipping quote request

### Request Requirements

In addition to the general integration requirements, there are specific elements that should be included in an integration:

| Element | Notes |
| ----- | ----- |
| [`cartType`](https://dev.shipperhq.com/rates-service/#definition-CartType) | The appropriate Cart Type for each rate quote should be set. E.g. `CART` for shipping estimate in a shopping cart, `STD` for checkout, etc. |
| [`siteDetailsInput`](https://dev.shipperhq.com/rates-service/#definition-SiteDetailsInput) | <table><tr><td>`ecommerceCart`</td><td>The name of the integrated platform (e.g. "Magento" or "XYZ CRM"). Contact [dev support](/contact) if unsure.</td></tr><tr><td>`appVersion`</td><td>The version of your integration with ShipperHQ (e.g. your first release may be "1.0.0" but updated to "1.0.1" at a later date)</td></tr><tr><td>`ecommerceVersion`</td><td>The version number of the platform on which the integration sits (e.g. for a Magento extension, this would indicate the version of Magento on which the extension is installed)</td></tr></table> |
| [`cartInput`](https://dev.shipperhq.com/rates-service/#definition-CartInput) | The `freeShipping` elements indicates that free shipping applies to the entire cart. Should be used if the integrated platform supports order-level free shipping and set to `true` when the cart is eligible for free shipping. |
| [`items`](https://dev.shipperhq.com/rates-service/#definition-ItemInput) | <table><tr><td>`type`</td><td>Generally set to `SIMPLE` but if the integrated platform supports item bundles, the `BUNDLE` type should be used and child `items` included under those products. If the integrated platform supports `VIRTUAL` or `GIFTCARD` products, the appropriate `type` should be used.</td></tr><tr><td>`items`</td><td>If the integrated platform supports item bundles, the `BUNDLE` `type` should be used and the child items should be included in the `items` property. For `SIMPLE` products this element is not required.</td></tr><tr><td>`attributes`</td><td>The following minimum product attributes should be supported: <ul><li>`shipperhq_shipping_group`</li><li>`shipperhq_warehouse`</li><li>`shipperhq_dim_group`</li><li>`ship_length`, `ship_width`, `ship_height`</li><li>`freight_class`</li><li>`shipperhq_hs_code`</li></ul> See the [Item Attributes](#item-attributes) section of this doc for details on these attributes and for other attributes that may be supported if useful for your integration.</td></tr></table> |
| [`customerInput`](https://dev.shipperhq.com/rates-service/#definition-CustomerInput) | If the integrated platform supports assigning [Customer Groups](https://docs.shipperhq.com/set-up-customer-groups-shipperhq/), the group name should be included in the `customerGroup` element. |

### Response Requirements

When ShipperHQ returns a response, the following provides the minimum information that should be displayed to the end user:

| Parent Element | Required |
| ----- | ----- |
| [`methodDetail`](https://dev.shipperhq.com/rates-service/#definition-MethodDetail) | `methodTitle` and `totalCharges` |
| [`carrierDetail`](https://dev.shipperhq.com/rates-service/#definition-CarrierDetail) | `carrierTitle` |
| [`timeInTransitOption`](https://dev.shipperhq.com/rates-service/#definition-TimeInTransitOption) | `deliveryDate` (if included in response) |
| [`shipments`](https://dev.shipperhq.com/rates-service/#definition-Shipment) | Appropriately handle multiple `shipment` elements |
| [`units`](https://dev.shipperhq.com/rates-service/#definition-Units) | Appropriately handle responses according to the `units` returned by ShipperHQ |

### Order Completion

When an end user has selected a shipping method and completed the order, the `methodTitle`, `carrierTitle`, and (if applicable) `deliveryDate` chosen by the customer should be stored along with the order. Additionally, the following should be stored within the integrated system along with the order:

| Parent Element | Required |
| ----- | ----- |
| [`carrierDetail`](https://dev.shipperhq.com/rates-service/#definition-CarrierDetail) | `carrierCode` for the carrier of the method selected by the customer |
| [`methodDetail`](https://dev.shipperhq.com/rates-service/#definition-MethodDetail) | `methodCode` for the method selected by the customer |
| [`fullShippingQuote`](https://dev.shipperhq.com/rates-service/#definition-FullShippingQuote)<br />or<br />[`basicShippingQuote`](https://dev.shipperhq.com/rates-service/#definition-BasicShippingQuote) | The `transactionId` uniquely identifies the response and is useful in troubleshooting, it should be stored. Optionally, the entirety of the rate request and response may be stored. |

#### Error Handling
The ShipperHQ Labels API may return errors in an [`error`](https://dev.shipperhq.com/labels-service/#definition-Error) object in several cases:
- If ShipperHQ encounters a general error processing a request (e.g. credentials issues, malformed request, etc.) an [error message](faq#what-are-possible-error-codes-and-messages) will be returned indicating the type of error encountered. In this case, your integration should appropriately display a user-friendly message. The values of the `errorCode` and `internalErrorMessage` are not intended to be displayed to end-users but are useful to log for troubleshooting.
- If a specific Carrier or service is unavailable, ShipperHQ will return an [`error`](https://dev.shipperhq.com/rates-service/#definition-Error) within the [`carrier`](https://dev.shipperhq.com/rates-service/#definition-Carrier). This type of error may indicate that ShipperHQ was unable to return options for this carrier due to a problem (e.g. carrier API timeout), that the ShipperHQ configuration was intentionally set to prevent this carrier from returning any options, or configured to intentionally prevent this carrier from returning specific options for this order. These [`error`](https://dev.shipperhq.com/rates-service/#definition-Error) objects will include an `errorCode` and `internalErrorMessage` which should not be displayed to the end user but may also include an `externalErrorMessage` which may be displayed to the end user. Your integration should support displaying these messages.

See the [Errors](#errors) section of this doc for further details and for possible error codes and messages see the [Labels API FAQ](faq#what-are-possible-error-codes-and-messages).

### Additional Guidance

While the [Labels API Reference](https://dev.shipperhq.com/labels-service/) contains all available fields, not all possible attributes are described in the current version of this guide. Some less-common attributes are not yet described. Contact [dev support](/contact) if you need assistance with any specific scenario or for additional guidance on best practices for your specific use case.

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
