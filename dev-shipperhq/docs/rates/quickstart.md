---
sidebar_position: 2
slug: quickstart
title: Quickstart
tags: [rates, api, guide, quickstart]
---
import JWTAuth from '@site/docs/transclusion/_jwtauth.md' // This is an included file (see below the Error component)
import APIPlayground from '@site/docs/transclusion/_apiplayground.md' // This is an included file (see below the Error component)

This document is for technical architects and developers that need to integrate with ShipperHQ’s Rates API to build their own integration to retrieve shipment details from ShipperHQ.

Note, this does not document the standard types and fields the API provides. This information is included in the [Rates API Reference](https://dev.shipperhq.com/rates-service/) documentation or can be obtained via our [API playground](https://graphiql.shipperhq.com/).

Our Rates API is implemented in GraphQL. See the [SDK Quickstart](/quickstart.md#graphql) for more information.

## Requirements
In order to use the ShipperHQ Rates API you'll need a ShipperHQ account configured with at least one Website, one Origin, and one Carrier. Once you have an account, you'll need to retrieve authentication credentials as described below that will allow you to access the Rates API.

## Authentication
[//]: # (JWT Authentication)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<JWTAuth doc="Rates" />

## Definitions

### Endpoint

| Protocol                    | Method | Body Encoding         | Endpoint URL         |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  `https://api.shipperhq.com/v2/graphql` |

### Headers
Any query or request must include the following headers:

| Header Name  |Header description |
| ---- | ------------------ |
| `X-ShipperHQ-Secret-Token` |  This is the JWT Secret token you have generated for your ShipperHQ account.|
| `X-ShipperHQ-Scope` |   The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT` or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`.|
| `X-ShipperHQ-Session` | This is a unique identifier for a cart/order. Use any unique alphanumeric string. |

### Operations
The ShipperHQ Rates API includes the following operations.

| Query                      | Description         |
| ---------------------------|---------------------|
| [`retrieveShippingQuote`](https://dev.shipperhq.com/rates-service/#operation-retrieveshippingquote-Queries)     |	Retrieve basic shipping rates including carrier and method titles and total shipping charges. |
| [`retrieveFullShippingQuote`](https://dev.shipperhq.com/rates-service/#operation-retrievefullshippingquote-Queries)	| Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.|

## Details

### API Rate Limits
- **Request Limits:**  Rates API queries are subject to the request limits of your ShipperHQ account. Please view your request limits on ShipperHQ’s pricing page.
- **Monitoring Request limits:** You can view your usage within the Analytics tab of your ShipperHQ dashboard.

### Ship-To Address

The address to which the order will be shipped is defined in the [`destinationInput`](https://dev.shipperhq.com/rates-service/#definition-DestinationInput) type. While `destinationInput` should always be included, the specific fields required depend on several factors. A limited set of fields (e.g. `region`, `zipcode`, `country`) can be used in cases where a low-accuracy shipping estimate is required (e.g. on shopping cart or product pages).

| Option Name | Data Type  | 	Description |
| -------------- | ------------ | ------------ |
| `selectedOptions` | Name/Value | Optional. Name/value pair used to set specific attributes of the destination. [See below](#selected-options) for available options. |
| `street` |String | Optional but recommended for accuracy particularly in a checkout scenario. Can be excluded when requesting an informational estimate (e.g. cart or product pages). |
| `street2` | String | Optional but recommended for accuracy particularly in a checkout scenario if provided by the end user. |
| `city` | String | Optional for most scenarios. Required for certain carriers including [DHL Express](https://docs.shipperhq.com/dhl-carrier-setup/) and most [LTL Freight](https://docs.shipperhq.com/ltl-freight-carrier-configuration/) carriers (e.g. [YRC Freight](https://docs.shipperhq.com/set-yrc-freight-credentials/), [FedEx Freight](https://docs.shipperhq.com/fedex-freight-carrier-setup/)). |
| `region` | String | Optional but recommended for certain countries (e.g. US, Canada, Australia, etc.). Required by certain carriers to return live rates. Expected values vary by country but most are standard 2-character region codes. |
| `zipcode` | String | Optional but recommended for many countries (e.g. US, Canada, Australia, UK, etc.). Required by most carriers to return live rates for these countries. |
| `country` | String | Required for nearly all scenarios. Expected value is an ISO alpha-2 country code. |

#### Selected Options
Possible values of the `selectedOptions` field are:

| Option Name | Data Type  | 	Description |
| -------------- | ------------ | ------------ |
| `destination_type` | Enum | The type of address given. Values can be `residential` or `commercial`. Address type may be set explicitly here or can be determined automatically by ShipperHQ's [Address Validation](https://docs.shipperhq.com/address-validation/#Dynamic_Address_Type_Lookup) functionality. |

#### `destination` Example

```json
"destination": {
    "street": "4801 Southwest Pkwy",
    "street2": "Bldg 2, Ste 240",
    "city": "Austin",
    "region": "TX",
    "zipcode": "78738",
    "country": "US",
    "selectedOptions": [ {
        "name" : "destination_type",
        "value" : "commercial"
      } ]
}
```

### Item Attributes
Item attributes in the request allow you to include item-specific values like a shipping group or an origin. They may be required if you are using any type of features such as [Shipping Groups](https://docs.shipperhq.com/shipping-group-configuration/), [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/), [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), etc.

These attributes and their values are sent in a set of name/value pairs in the `attributes` field of an `item` on a Rates API request. The most common attributes are listed below.

:::info Values are case sensitive
All item attribute values are case sensitive and must match the corresponding item configured in the ShipperHQ dashboard including any spaces.

For example, if the name of an Origin in ShipperHQ is "New York", none of "NEW YORK", "new york", or "NewYork" would match.

:::
| Attribute Name | Data Type  | 	Description |
| -------------- | ------------ | ------------ |
| `shipperhq_shipping_group` | String | Assigns an item to one or more [Shipping Groups](https://docs.shipperhq.com/shipping-group-configuration/). |
| `shipperhq_warehouse` |	String |	Used with ShipperHQ's [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/) functionality to specify the [Origin](https://docs.shipperhq.com/origin-configuration/) or Origins which can fulfill the item. |
| `shipperhq_dim_group` |	String |	Assigns an item to a [Packing Rule](https://docs.shipperhq.com/dimensional-rules-setup/) used in [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/). Only required when Dimensional Rules are used to pack specific items differently than general packing rules. |
| `ship_length` <br /> `ship_width` <br /> `ship_height` |	Float |	Used with [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) to specify the product's dimensions for packing. If used, all 3 fields are required. |
| `freight_class` |	Float | Sets the [freight class](https://docs.shipperhq.com/ltl-freight-carrier-configuration/#Freight_Classes) of the item. Freight classes can also be [set on Shipping Groups](https://docs.shipperhq.com/define-freight-class-using-shipping-groups/) if this attribute is not used. |
| `shipperhq_hs_code` | String | Used with ShipperHQ's [Landed Cost Engine](https://docs.shipperhq.com/landed-cost-engine-configuration/) functionality and shipping providers which return cross-border duties & taxes to set the HS Code of the item. |
| `shipperhq_location` | String | Used with ShipperHQ's [In-Store Pickup](https://docs.shipperhq.com/store-pick-up-configuration/) functionality to specific the [Location](https://docs.shipperhq.com/store-pick-up-configuration/#Set_Up_Pickup_Locations) or Locations where the item is available for pickup. Not necessary if all items are available from all locations. |
| `ship_separately` |	Boolean |	Used with [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) to identify items which are [packed separately](https://docs.shipperhq.com/pack-separately/) to other items. |
| `shipperhq_master_boxes` | String | Used with [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) to assign products to [Master Packing Boxes](https://docs.shipperhq.com/using-master-packing-boxes/). |
| `shipperhq_availability_date`| Date | Used with ShipperHQ's [Date & Time](https://docs.shipperhq.com/delivery-datecalendar-configuration/) functionality to tell ShipperHQ the date on which this product [will be available](https://docs.shipperhq.com/next-available-date-products-magento/) (e.g. backorder, preorder). |
| `shipperhq_declared_value` |	Float | Sets the [declared value](https://docs.shipperhq.com/set-declared-value/) of the item for use in insurance or duties & tax calculation. |
| `must_ship_freight` |	Boolean | Tells ShipperHQ this item [must ship](https://docs.shipperhq.com/set-items-must-ship-freight/) via a freight carrier. |
| `shipperhq_poss_boxes` | String | Used with ShipperHQ's [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) functionality to [set the boxes](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/#Packing_Boxes) which this item may pack into. Not necessary if using [Dimensional Rules](https://docs.shipperhq.com/dimensional-rules-setup/) to set item box assigments. |

:::tip Delimiting multiple values
A delimiter is required between multiple values for item attributes. The default delimiter is a comma (`,`) followed by an optional space (`, `). A hash sign (`#`) is also accepted but requires that the `appVersion` in the `siteDetails` of your request is set to `2.0.0`.

:::

#### Attributes Example

```json title=
"attributes" : [ {
    "name" : "shipperhq_shipping_group",
    "value" : "FLAT59,FREE"
  }, {
    "name" : "ship_width",
    "value" : "2.0000"
  }, {
    "name" : "ship_length",
    "value" : "2.0000"
  }, {
    "name" : "ship_height",
    "value" : "36.0000"
  }, {
    "name" : "shipperhq_dim_group",
    "value" : "RULE1,RULE2"
  }, {
    "name" : "shipperhq_hs_code",
    "value" : "123456"
  }, {
    "name" : "shipperhq_warehouse",
    "value" : "ORIGIN1,ORIGIN2"
  } ],
```

### Requested Options

Requested Options allow you to indicate specific services or properties for the entire shipment such as "Liftgate Required" or "Residential Delivery". These are most commonly used for LTL Freight carriers or small package carriers that offer specific delivery methods for residential delivery.

These attributes and their values are sent in a set of name/value pairs in the `requestedOptions` field on a Rates API request. The most common attributes are listed below.

| Requested Options  | 	Data Type | 	Description |
|--------------------|-----------|--------------|
|`liftgate_required` |	Boolean	 | This specifies liftgate is required at the destination.  |
|`notify_required`  |	Boolean	   | This requests an appointment delivery or notice of delivery. |
| `inside_delivery` |	Boolean	   | This requests delivery inside the destination. |
|`limited_delivery` |	Boolean    | 	This specifies limited access at the destination address. |
|`destination_type` |	Enum |	Specifies if a destination is a residential (`residential`) or business (`commercial`) address. |

#### Available Options Example

```json title=
requestedOptions: {
   options: [
   {
       code: "liftgate_required",
       value:  "true"
   },
   {
       code: "destination_type",
       value: "residential"
   }]}   
```

### Product Types

ShipperHQ accepts multiple product types which are handled differently. These are indicated in the [`type`](https://dev.shipperhq.com/rates-service/#definition-ItemType) property of [`item`](https://dev.shipperhq.com/rates-service/#definition-ItemInput) objects. See below for available product types and how they're handled.

The most common product type is `SIMPLE`. This applies to the majority of individual, shippable products.

The `DOWNLOADABLE`, `GIFTCARD`, and `VIRTUAL` types represent products that are not shipped. They may impact the shipping rate returned depending on the configuration of the ShipperHQ account (e.g. if Gift Cards contribute to an order's eligibility for free shipping) so should be included in rate requests. Weights are not required for these items.

Other types represent groups of items purchased together. These are the `BUNDLE`, `GROUPED`, and `CONFIGURABLE` types. For these items, we expect the `item` to contain additional items in its `items` property. These are the "Child" items of this "Parent" item. Depending on the configuration of the ShipperHQ account, shipping rates may be calculated based solely on the Parent products or on the Child products.

[//]: # (TODO: Add example of BUNDLE item with children)

## Integration Requirements

While very few elements are required for a successful API call to the Rates API (see the [Rates API Reference](https://dev.shipperhq.com/rates-service/)), there are certain elements that are required in order to support certain features and functionality of ShipperHQ. Because of this, if you intend to make your integration of ShipperHQ's Rates API available to multiple clients we require support for certain elements. Meeting these requirements means your integration will support all of the most commonly used ShipperHQ features and functionality.

Some requirements are dependent on the capabilities of the platform into which ShipperHQ is being integrated. For example, if the platform doesn't support [Customer Groups](https://docs.shipperhq.com/set-up-customer-groups-shipperhq/), that field is not required. These exceptions are noted below.

:::info
While we have endeavored to provide a complete list of requirements for a baseline integration of ShipperHQ, individual use cases may differ. Therefore, we always recommend contacting [Dev Support](/contact) prior to building a new integration.
:::

:::note
We don't require single-purpose, custom integrations to meet these requirements. However, we do strongly recommend that all integrations of the ShipperHQ Rates API do so in order to support the breadth of ShipperHQ's capabilities and to future-proof the integration against shipping needs that may change in the future.
:::

### General Requirements

The integration should:
- Use the `retrieveFullShippingQuote` query in any checkout/transactional workflows (`retrieveShippingQuote` may be used for informational shipping quotes e.g. shipping estimates presented on a Cart or Product page)
- Provide clients with a UI for entering their ShipperHQ Account-specific API credentials and use those credentials in all API calls to ShipperHQ
- Send a unique value in the `X-ShipperHQ-Session` request header for each shipping quote request

### Request Requirements

In addition to the general integration requirements, there are specific elements that should be included in an integration:

| Element | Notes |
| ----- | ----- |
| [`cartType`](https://dev.shipperhq.com/rates-service/#definition-CartType) | The appropriate Cart Type for each rate quote should be set. E.g. `CART` for shipping estimate in a shopping cart, `STD` for checkout, etc. |
| [`siteDetailsInput`](https://dev.shipperhq.com/rates-service/#definition-SiteDetailsInput) | <table><tr><td>`ecommerceCart`</td><td>The name of the integrated platform (e.g. "Magento" or "XYZ CRM"). Contact [Dev Support](/contact) if unsure.</td></tr><tr><td>`appVersion`</td><td>The version of your integration with ShipperHQ (e.g. your first release may be "1.0.0" but updated to "1.0.1" at a later date)</td></tr><tr><td>`ecommerceVersion`</td><td>The version number of the platform on which the integration sits (e.g. for a Magento extension, this would indicate the version of Magento on which the extension is installed)</td></tr></table> |
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
The ShipperHQ Rates API may return errors in an [`error`](https://dev.shipperhq.com/rates-service/#definition-Error) object in several cases:
- If ShipperHQ encounters a general error processing a request (e.g. credentials issues, malformed request, etc.) an [error message](faq#what-are-possible-error-codes-and-messages) will be returned indicating the type of error encountered. In this case, your integration should appropriately display a user-friendly message. The values of the `errorCode` and `internalErrorMessage` are not intended to be displayed to end-users but are useful to log for troubleshooting.
- If a specific Carrier or service is unavailable, ShipperHQ will return an [`error`](https://dev.shipperhq.com/rates-service/#definition-Error) within the [`carrier`](https://dev.shipperhq.com/rates-service/#definition-Carrier). This type of error may indicate that ShipperHQ was unable to return options for this carrier due to a problem (e.g. carrier API timeout), that the ShipperHQ configuration was intentionally set to prevent this carrier from returning any options, or configured to intentionally prevent this carrier from returning specific options for this order. These [`error`](https://dev.shipperhq.com/rates-service/#definition-Error) objects will include an `errorCode` and `internalErrorMessage` which should not be displayed to the end user but may also include an `externalErrorMessage` which may be displayed to the end user. Your integration should support displaying these messages.

See the [Errors](#errors) section of this doc for further details and for possible error codes and messages see the [Rates API FAQ](faq#what-are-possible-error-codes-and-messages).

### Additional Guidance

While the [Rates API Reference](https://dev.shipperhq.com/rates-service/) contains all available fields, not all possible attributes are described in the current version of this guide. Some less-common attributes are not yet described. Contact [Dev Support](/contact) if you need assistance with any specific scenario or for additional guidance on best practices for your specific use case.

## Testing

### Test with the API Playground
[//]: # (API Playground)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<APIPlayground doc="Rates" />

## Examples

You'll find examples of both simple and more advanced Rates API requests and their associated responses for a number of common scenarios as well as a Postman collection with pre-configured examples on the Examples doc.

[See Examples <i class="fa fa-arrow-right"></i>](examples)

## Errors

When ShipperHQ encounters an error processing your request, an `error` object will be returned. This will include:
1. An `errorCode`: A unique identifier for the specific error encountered which can be used to look up additional information during troubleshooting or provided to ShipperHQ when seeking assistance.
2. `internalErrorMessage`: Describes the specific error encountered, intended to be used in troubleshooting and not displayed to the end user.
3. `externalErrorMessage`: A message that can be shown to the end user when an error is encountered. Most commonly used when shipping is intentionally prevented in a specific scenario (e.g. "We are unable to ship to your location."). These messages can be configured within the ShipperHQ dashboard.

### Error Example

```json title=
"errors": [
    {
      "errorCode": 403,
      "internalErrorMessage": "No applicable carriers have been found for this origin.",
      "externalErrorMessage": "This shipping method is currently unavailable. If you would like to ship using this shipping method, please contact_us.",
      "priority": 999
    }
  ]
```

:::tip Possible `errorCode` Values

A detailed list of `errorCode` values and associated `internalMessage` values can be found on the [ Rates API FAQ](faq.md#what-are-possible-error-codes-and-messages).
:::
