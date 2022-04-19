---
sidebar_position: 3
slug: quickstart
title: Quickstart
authors: []
tags: [insights, api, guide, quickstart]
---

This document is for technical architects and developers that need to integrate with ShipperHQ’s Insights API to build their own integration to retrieve shipment details from ShipperHQ.

Note, this does not document the standard types and fields the API provides. This information is included in the [Insights API Reference](https://dev.shipperhq.com/insights-service/) documentation or can be obtained via our [API playground](https://graphiql.shipperhq.com/).

As with all our APIs, our Insights API is implemented with GraphQL. If you're unfamiliar with GraphQL, see our [SDK Quickstart](../quickstart.md).

## Requirements
* ShipperHQ account with the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/) Advanced Feature enabled
* An eCommerce platform or custom integration supporting the [`PlaceOrder`](place-order.md) mutation of the [Labels API](../labels/overview.md), either:
  * ShipperHQ’s native [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/) app installed on the eCommerce platform
  * A custom integration implementing both our [Rates API](../rates/overview.md) and the [`PlaceOrder`](place-order.md) mutation of our [Labels API](../labels/overview.md)

## Authentication
The Insights API is accessed using a unique Access Token generated in a ShipperHQ account. Each access token is unique per [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) for multi-site ShipperHQ accounts.

Since Access Tokens are unique for each ShipperHQ account and Website, Partners or Third Party integrations should include a mechanism for merchants to input their Shipping Insights Access Token in the integration. Each ShipperHQ merchant will generate an access token on their ShipperHQ account in order to access the Insights API for their orders.

### Generating an Access Token
To generate an access token in ShipperHQ:
* Log into a ShipperHQ account
* Ensure the Shipping Insights Advanced Feature is enabled (under Advanced Features on the left-hand navbar)
* Click "Websites" in the left-hand navbar and click the edit icon to edit the website which you wish to connect to
* Go to the "Integrations" tab on the Website
* Under Shipping Insights, select Generate New Access Token

This will provide you with an Access Token which can be used for Insights API requests.

:::danger Changing Live Access Tokens

Generating a new Access Token invalidates any previously generated Access Tokens for that Website. For this reason, this should not be done while in production unless absolutely necessary. Access Tokens should be kept secure and not exposed on any client facing code or committed to public code repositories.

:::

## API Details
### Endpoint
| Protocol                      | Method | Body Encoding | Endpoint URL         |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  `https://ovs.shipperhq.com` |

### Request Headers
The following headers are required for every Insights API call.

| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Access-Token` | The Access Token retrieved from the ShipperHQ dashboard |
| `X-ShipperHQ-Scope` | The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT`, or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`. |


### `orderNumber`
The `orderNumber` argument of the `viewOrder` call is used to look up a unique order with the Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the [`PlaceOrder`](place-order.md) mutation of the [Labels API](../labels/overview.md), `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

### Useful fields by feature

#### Date & Time
The [Date & Time](https://docs.shipperhq.com/delivery-datecalendar-configuration/) Advanced Feature allows merchants to give their customers accurate delivery dates, times in transit, or even a date picker on supported eCommerce platforms. In order to determine the correct delivery date to display, ShipperHQ also generates a Dispatch Date (the date on which the package is expected to be picked up by the carrier) based on the merchant's ShipperHQ configuration. For merchants who use Date & Time, it's useful to have the Insights API return the Dispatch and Delivery dates.

**Fields for Date & Time**

You can retrieve the dispatch date as well as the delivery promise via the `timeInTransitOptions` object:

```json
query Order {
  viewOrder(orderNumber: "...") {
    # ...
    shipments {
      carriers {
        methods {
          // highlight-start
          timeInTransitOptions{
            deliveryDate
            dispatchDate
          }
          // highlight-end
        }
      }
    }
  }
}
```

#### Dimensional Packing
The [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) will determine the best package or packages to use for each shipment based on the merchant's ShipperHQ configuration. When Dimensional Packing is used, the Insights API can return the packages, details about each package, and item assignments for each.

This information will be returned as one or more `packages` objects each containing `packageDetail` and `items` objects. The `packageName` field of the `packageDetail` object will be the name defined in ShipperHQ for that package. The `items` object may contain one or more items and indicate the `sku` of each as well as the quantity of that SKU packed in this package.

**Fields for Dimensional Packing**

You can retrieve the package information via the `packageDetail` object including the item(s) in each package:

```graphql
query Order {
  viewOrder(orderNumber: "...") {
    # ...
    shipments {
      carriers {
        // highlight-start
        packages {
          packageDetail {
            height
            length
            width
            weight
            packageName
            # ...
          }
        }
        items {
          sku
          qtyPacked
          # ...
        }
        // highlight-end
      }
    }
  }
}
```

:::note
Other related fields are available and can be found in the [Insights API Reference](https://dev.shipperhq.com/insights-service/) documentation.
:::

#### Multi-Origin Shipping
With the [Multi-Origin Shipping](https://docs.shipperhq.com/setup-multiorigin-dropshipping/) Advanced Feature enabled, merchants are able to configure multiple ship-from locations ([Origins](https://docs.shipperhq.com/origin-configuration/)) in their ShipperHQ account. They can then assign specific products to specific Origins or use their ShipperHQ configuration to configure ShipperHQ to select Origins automatically.

When an order contains shipments from multiple Origins, the Insights API will return multiple `shipments` objects. Each shipment has its own unique ID and contains the details about that shipment and the carriers used for that shipment. No special Insights API request is required to return multiple shipments but there are some fields which are useful in this scenario.

**Fields for Multi-Origin**

The unique name of the origin as configured in ShipperHQ is returned as the value of the `name` field of `shipmentDetail`.

```graphql
query Order {
  viewOrder(orderNumber: "...") {
    # ...
    shipments {
      shipmentDetail {
        // highlight-start
        name
        // highlight-end
        # ...
      }
    }
  }
}
```
:::note
Other related fields are available and can be found in the [Insights API Reference](https://dev.shipperhq.com/insights-service/) documentation.
:::

### Requested Options

Requested Options indicate specific services or properties for the entire shipment such as "Liftgate Required" or "Residential Delivery". These are most commonly used for LTL Freight carriers or small package carriers that offer specific delivery methods for residential delivery.

These attributes and their values are returned in a set of name/value pairs in the [`selectedOption`](https://dev.shipperhq.com/insights-service/#definition-SelectedOption) field on a Insights API response. The most common attributes are listed below.

| Requested Options  | 	Data Type | 	Description |
|--------------------|-----------|--------------|
|`liftgate_required` |	Boolean	 | This specifies liftgate is required at the destination.  |
|`notify_required`  |	Boolean	   | This requests an appointment delivery or notice of delivery. |
| `inside_delivery` |	Boolean	   | This requests delivery inside the destination. |
|`limited_delivery` |	Boolean    | 	This specifies limited access at the destination address. |
|`destination_type` |	Enum |	Specifies if a destination is a residential (`residential`) or business (`commercial`) address. |

## Integration Requirements

Our Insights API can return a variety of useful information (see the [Insights API Reference](https://dev.shipperhq.com/insights-service/) for full details) and you can request as little or as much as needed. However, there are certain elements that are important when a ShipperHQ account is using certain functionality. Because of this, if you intend to make your integration of ShipperHQ's Insights API available to multiple clients we require support for certain elements. Meeting these requirements means your integration will support all of the most commonly used ShipperHQ features and functionality.

The following sections describe the fields that can be returned by the Insights API which integrations should support retrieving and processing.

:::info
While we have endeavored to provide a complete list of requirements for a baseline integration of ShipperHQ, individual use cases may differ. Therefore, we always recommend contacting [dev support](/contact) prior to building a new integration.
:::

:::note
We don't require single-purpose, custom integrations to meet these requirements. However, we do strongly recommend that all integrations of the ShipperHQ Insights API do so in order to support the breadth of ShipperHQ's capabilities and to future-proof the integration against shipping needs that may change in the future.
:::

### General Requirements

The integration should:
- Provide clients with a UI for entering their ShipperHQ Account-specific API credentials and use those credentials in all API calls to ShipperHQ

### Request Requirements

Each request to `viewOrder` requires that the `orderNumber` argument is included. See the [`orderNumber`](#ordernumber) section of this guide for more information.

### Response Handling

Since each ShipperHQ account may be configured with different features and functionality, it's important to support a fairly broad set of response elements in any integration. These are discussed below. See the [Insights API Reference](https://dev.shipperhq.com/insights-service/) for all available options.

#### Handling Multiples

Certain elements may contain multiple child elements. The integration should be able to handle multiples of these elements appropriately:

| Parent Element | Element | Description |
| ----- | ----- | ----- |
| [`order`](https://dev.shipperhq.com/insights-service/#definition-Order) | [`shipments`](https://dev.shipperhq.com/insights-service/#definition-Shipment) | Each order may contain one or more shipments. For example, when using [Multi-Origin Shipping](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), a single order may contain items being fulfilled from different distribution facilities. Or, if certain items in the order must ship via an LTL freight carrier but others must ship via an express service, the ShipperHQ account may be configured to split these into separate shipments from the same Origin.<br />Each shipment will have its own set of details include the carrier, method, and rates used for that shipment. |
| [`shipment`](https://dev.shipperhq.com/insights-service/#definition-Shipment) | [`groupedItems`](https://dev.shipperhq.com/insights-service/#definition-GroupedItem) | Each shipment may contain one or more items. **Note:** these may be packed into one or more `packages` (see below). |
| [`rateBreakdown`](https://dev.shipperhq.com/insights-service/#definition-RateBreakdown) | [`packages`](https://dev.shipperhq.com/insights-service/#definition-Package) | One or more packages may be used in rating a method. |
| [`package`](https://dev.shipperhq.com/insights-service/#definition-Package) | [`items`](https://dev.shipperhq.com/insights-service/#definition-Item) | Each package may contain one or more items. |

#### Specific Elements and Properties
The integration should appropriately handle at minimum the following elements and properties:

| Parent Element | Properties |
| ----- | ----- |
| [`orderDetail`](https://dev.shipperhq.com/insights-service/#definition-OrderDetail) | <table><tr><td>`carrierCode`</td><td>Unique identifier for the carrier selected by the customer at checkout. Useful for automated processing of orders.</td></tr><tr><td>`carrierTitle`</td><td>User-friendly name of the carrier selected by the customer at checkout.</td></tr><tr><td>`methodCode`</td><td>Unique identifier for the method selected by the customer at checkout. Useful for automated processing of orders.</td></tr><tr><td>`methodTitle`</td><td>The user-friendly name of the method selected by the customer at checkout.</td></tr><tr><td>`totalCharges`</td><td>The total amount charged for shipping to the customer.</td></tr><tr><td>`transactionId`</td><td>A unique identifier for the shipping quote requested that provided the shipping option selected. Useful for troubleshooting when contacting ShipperHQ support.</td></tr></table> |
| [`shipmentDetail`](https://dev.shipperhq.com/insights-service/#definition-ShipmentDetail) | <table><tr><td>`name`</td><td>In multi-shipment scenarios, this is the identifier for the specific shipment. Most frequently used in [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/) orders. For multi-origin shipments, `name` will be the unique name of the Origin configured in ShipperHQ.</td></tr></table> |
| [`carrierDetail`](https://dev.shipperhq.com/insights-service/#definition-CarrierDetail) | <table><tr><td>`carrierCode`</td><td>Unique identifier for the carrier selected by the customer at checkout. Useful for automated processing of orders.</td></tr><tr><td>`carrierTitle`</td><td>User-friendly name of the carrier selected by the customer at checkout.</td></tr><tr><td>`carrierType`</td><td>Identifies the live-rate or custom-rate carrier used. Since ShipperHQ can be configured to use custom names and codes for carriers, this provides identification for the "behind-the-scenes" carrier. E.g. "ups" or "auspost".</td></tr></table> |
| [`methodDetail`](https://dev.shipperhq.com/insights-service/#definition-MethodDetail) | <table><tr><td>`methodCode`</td><td>Unique identifier for the method selected by the customer at checkout. Useful for automated processing of orders.</td></tr><tr><td>`methodTitle`</td><td>The user-friendly name of the method selected by the customer at checkout.</td></tr><tr><td>`totalCharges`</td><td>The total amount charged for shipping to the customer.</td></tr><tr><td>`currency`</td><td>Currency of the shipping charge.</td></tr><tr><td>`negotiatedRate`</td><td>Boolean indicator for if the rates returned were negotiated (account) rates with the carrier. Only applies to certain live-rate carriers.</td></tr></table> |
| [`timeInTransitOptions`](https://dev.shipperhq.com/insights-service/#definition-TimeInTransitOptions) | <table><tr><td>`dispatchDate`</td><td>If [Date & Time](https://docs.shipperhq.com/delivery-datecalendar-configuration/) applies to this shipment, indicates the estimated date on which the shipment will be dispatched. Useful for order processing.</td></tr><tr><td>`deliveryDate`</td><td>If [Date & Time](https://docs.shipperhq.com/delivery-datecalendar-configuration/) applies to this shipment, indicates the estimated date on which the shipment will be delivered.</td></tr></table> |
| [`advancedFees`](https://dev.shipperhq.com/insights-service/#definition-AdvancedFees) | <table><tr><td>`handlingFee`</td><td>Reflects any [Handling Fees](https://docs.shipperhq.com/add-handling-fee-to-a-carrier/) defined on the carrier in ShipperHQ.</td></tr><tr><td>`shippingPrice`</td><td>The cost of shipping generated by the custom-rate carrier or returned by the live-rate carrier.</td></tr><tr><td>`totalCharges`</td><td>Resulting total of shipping charged after all fees have been applied.</td></tr><tr><td>`cost`</td><td>Base shipping rate before any rules or fees were applied.</td></tr><tr><td>`customDuties`</td><td>If using [Landed Cost Engine](https://docs.shipperhq.com/landed-cost-engine-configuration/) or a carrier which supports returning duties and taxes, indicates the duties and taxes.</td></tr></table> |
| [`packageDetail`](https://dev.shipperhq.com/insights-service/#definition-PackageDetail) | <table><tr><td>`height`<br />`length`<br />`width`</td><td>Package dimensions.</td></tr><tr><td>`packageName`</td><td>If using [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/), the name of the Box used.</td></tr><tr><td>`packingWeight`</td><td>Total weight of the package including items.</td></tr><tr><td>`weight`</td><td>Weight of the items contained in the package.</td></tr></table> |
| [`item`](https://dev.shipperhq.com/insights-service/#definition-Item) | <table><tr><td>`sku`</td><td>Item SKU.</td></tr><tr><td>`qtyPacked`</td><td>Quantity of the item packed in this package.</td></tr><tr><td>`weightPacked`</td><td>Weight of the item packed in this package.</td></tr></table> |
| [`selectedOption`](https://dev.shipperhq.com/insights-service/#definition-SelectedOption) | Indiciates accessorial options selected at checkout (e.g. liftgate, inside delivery, etc.) |
| [`pickupLocationDetail`](https://dev.shipperhq.com/insights-service/#definition-PickupLocationDetail) | <table><tr><td>`pickupName`</td><td>Unique name of the pickup location as configured in ShipperHQ.</td></tr><tr><td>`publicId`</td><td>Public ID of the location (for pickup at location services e.g. UPS Access Point, FedEx Hold at Location, PUDO).</td></tr></table> |
| [`address`](https://dev.shipperhq.com/insights-service/#definition-Address) | The following address elements must be supported: <ul><li>`company`</li><li>`street`</li><li>`street2`</li><li>`city`</li><li>`region`</li><li>`zipcode`</li><li>`country`</li></ul> |

#### Error Handling
The ShipperHQ Rates API may return errors in an [`error`](https://dev.shipperhq.com/insights-service/#definition-Error) object in several cases:
- If ShipperHQ encounters a general error processing a request (e.g. credentials issues, malformed request, etc.) an [error message](faq#what-are-possible-error-codes-and-messages) will be returned indicating the type of error encountered. In this case, your integration should appropriately display a user-friendly message. The values of the `errorCode` and `internalErrorMessage` are not intended to be displayed to end-users but are useful to log for troubleshooting.
- If a specific Carrier or service is unavailable, ShipperHQ will return an [`error`](https://dev.shipperhq.com/insights-service/#definition-Error) within the [`carrier`](https://dev.shipperhq.com/insights-service/#definition-Carrier). This type of error may indicate that ShipperHQ was unable to return options for this carrier due to a problem (e.g. carrier API timeout), that the ShipperHQ configuration was intentionally set to prevent this carrier from returning any options, or configured to intentionally prevent this carrier from returning specific options for this order. These [`error`](https://dev.shipperhq.com/insights-service/#definition-Error) objects will include an `errorCode` and `internalErrorMessage` which should not be displayed to the end user but may also include an `externalErrorMessage` which may be displayed to the end user. Your integration should support displaying these messages.

See the [Errors](#errors) section of this doc for further details and for possible error codes and messages see the [Insights API FAQ](faq#what-are-possible-error-codes-and-messages).

### Additional Guidance

While the [Insights API Reference](https://dev.shipperhq.com/insights-service/) contains all available fields, not all possible attributes are described in the current version of this guide. Some less-common attributes are not yet described. Contact [dev support](/contact) if you need assistance with any specific scenario or for additional guidance on best practices for your specific use case.

## Testing
To test the Insights API you will need to already have either:
1. ShipperHQ's native integration installed and enabled on [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/)
2. A custom integration of the ShipperHQ [Rates API](../rates/overview.md) and the [`PlaceOrder`](place-order.md) mutation of the [Labels API](../labels/overview.md).

### Enable & Retrieve Access Token
Within the ShipperHQ account you wish to use, enable the Shipping Insights Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account.

### Place an Order
Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information.

### Test with the API Playground
- Navigate to the ShipperHQ [API Playground](https://graphiql.shipperhq.com/)
- In a new playground tab, enter the Insights API Endpoint URL into the URL bar
- Click the Docs button
- Click the Reload Docs icon
- Click the Query link to view a list of available queries and the arguments and fields you can include in your request

## Examples

Since the Insights API is implemented in GraphQL, you can retrieve as much information as you want or as little as you need. You'll find examples of both simple and more advanced Insights API requests and their associated responses as well as a Postman collection with pre-configured examples on the Examples doc.

[See Examples <i class="fa fa-arrow-right"></i>](examples)

## Errors
Most errors are returned as an `errors` object. These will include a `message` property which will indicate the specific error.

#### No order found

When an order can not be found that matches the `orderNumber` provided an empty `viewOrder` object will be returned.

#### Authentication issues

If the Access Token provided is invalid or the ShipperHQ account it belongs to is disabled, the error message `Access Denied` will be returned.
