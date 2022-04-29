---
sidebar_position: 3
slug: quickstart
title: Quickstart
tags: [labels, api, guide, quickstart]
---
import JWTAuth from '@site/docs/transclusion/_jwtauth.md' // This is an included file (see below the Error component)
import APIPlayground from '@site/docs/transclusion/_apiplayground.md' // This is an included file (see below the Error component)

This document is for technical architects and developers that need to integrate with ShipperHQ’s Labels API to build their own integration to generate and print shipping labels.

Note, this does not document the standard types and fields the API provides. This information is included in the [Labels API Reference](https://dev.shipperhq.com/labels-service/) documentation or can be obtained via our [API playground](https://graphiql.shipperhq.com/).

As with all our APIs, our Labels API is implemented with GraphQL. If you're unfamiliar with GraphQL, see our [SDK Quickstart](quickstart.md#graphql).

:::caution Early Access Program

The ShipperHQ Labels API is currently in closed Beta. ShipperHQ is looking for early access partners interested in participating in this program.
Please [contact us](/contact) if interested.

:::

## Requirements
* ShipperHQ account with the [Generate Shipping Labels](https://docs.shipperhq.com/generate-shipping-labels/) Advanced Feature enabled
* An eCommerce platform or custom integration supporting the [`PlaceOrder`](labels/place-order.md) mutation of the [Labels API](labels/overview.md), either:
  * ShipperHQ’s native [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/) app installed on the eCommerce platform
  * A custom integration implementing both our [Rates API](rates/overview.md) and the [`PlaceOrder`](labels/place-order.md) mutation of our [Labels API](labels/overview.md)
* An account with at least one of the [carriers supported](#supported-carriers) by the ShipperHQ Labels API connected to your ShipperHQ account

## Authentication
[//]: # (JWT Authentication)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<JWTAuth doc="Labels" />

## API Details

### Endpoint
| Protocol                      | Method | Body Encoding | Endpoint URL        |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  `https://rms.shipperhq.com/` |

### Request Headers
| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Secret-Token` | The secret token that you have generated to use the [Rates API](rates/overview.md) |

### Core Elements

There are several elements which are key to accurately creating Labels with ShipperHQ.

| Parent Element | Element(s)                   | Notes         |
| ---------------------------| ---------------------------|---------------------|
| `data` | `orderNumber` | The order number for the shipment as returned by the [Insights API](insights/overview.md). |
| `data` | `carrierCode` | The unique code for the carrier to print a label with.  |
| `recipient` | `street`<br />`street2`<br />`city`<br />`region`<br />`zipcode`<br />`country` | The recipient (ship-to) address.  |
| `sender` | `originName` | The unique identifier (name) of the Origin configured in ShipperHQ. |
| `pieces` | `referenceId` | The unique identifier for the package. |
| `pieces` | `length`<br />`width`<br />`height`<br />`weight` | Package dimensions and weight are required for most shipments. |
| `shipmentDetail` | `shipmentId` | The unique identifier for the shipment as returned by the [Insights API](insights/overview.md). |
| `shipmentDetail` | `shippingMethodCode` | The unique code for the shipping method to print a label with. |

### Ship-to Addresses

The ship-to address for the package is defined in the `recipient` element of the `labelInput`.

| Element                      | Notes         |
| ---------------------------|---------------------|
| `givenName`<br />`familyName`<br />`companyName` | Indentifies the recipient name(s) you wish to include on the label. |
| `street`<br />`street2`<br />`city`<br />`region`<br />`zipcode`<br />`country` | Address information for the ship-to location.  |
| `accessorials` | LTL Freight accessorials applying to this ship-to location. |
| `selectedOptions` | A name-value set of address options. |

### Packages

Each shipment may contain one or more packages. These are defined in the `pieces` element.

| Element                      | Notes         |
| ---------------------------|---------------------|
| `referenceId` | Unique identifier for the package as returned by ShipperHQ. |
| `declaredValue` | Optional. Declared value of the items in the package. Used for insurance and duties & tax calculations.  |
| `length`<br />`width`<br />`height` | Package dimensions.  |
| `requestedServices` | A name-value set of additional services to be applied to this package. |

#### `requestedServices`

| Name                      | Values         |
| ---------------------------|---------------------|
| `SIGNATURE_OPTION` | <table><tr><th>FedEx Desc.</th><th>FedEx Value</th><th>UPS Desc.</th><th>UPS Value</th></tr><tr><td>Service Default</td><td>`SERVICE_DEFAULT`</td><td></td><td></td></tr><tr><td>No Signature Required</td><td>`NO_SIGNATURE_REQUIRED`</td><td>None</td><td>`null`</td></tr><tr><td>Indirect Signature Required</td><td>`INDIRECT`</td><td>Delivery Confirmation</td><td>`1`</td></tr><tr><td>Direct Signature Required</td><td>`DIRECT`</td><td>Signature Required</td><td>`2`</td></tr><tr><td>Adult Signature Required</td><td>`ADULT`</td><td>Adult Signature Required</td><td>`3`</td></tr></table> <br />**Note**: Default signature required options can be set on the carrier in the ShipperHQ dashboard. Use the `SIGNATURE_OPTION` option in `requestedServices` to override the default. |

### Carriers and Methods

The Labels API references `carrierId` and `methodCode` as identifiers for the specific carrier and method, respectively, you're generated a label for.

A `carrierId` is a unique identifier for a specific instance of a [carrier](https://docs.shipperhq.com/carrier-configuration/) in ShipperHQ. On the "Advanced" tab for each carrier you'll find its ID. Note that it is possible to have multiple instances of the same carrier configured on a ShipperHQ account therefore it's important to ensure you're using the corrected `carrierID`.

A `methodCode` is a unique identifier for a specific service offered by a carrier. See the [Labels FAQ](faq#what-are-possible-shippingmethodcode-values) for a list of possible method codes.

:::tip Choosing a carrier and method
While you can use any valid `carrierId` and `methodCode` when requesting a label, not all carriers or methods are available for all shipments. Therefore, it's generally best practice to use the `carrierId` and `methodCode` returned by ShipperHQ. You can use the [Insights API](insights/overview.md) to retrieve this information.
:::

### Label Formats, Types, and Stock

| Type                      | Carriers | Description         |
| ---------------------------|---------------------|---------------------|
| `IMAGE` |  | Base 64-encoded PNG image file |
| `ZPL` | UPS, FedEx | Zebra printer format file |
| `PNG` | UPS, FedEx | PNG image file |
| `EPL` | FedEx | Epson printer format file |
| `EPL2` | UPS | Epson printer format file |
| `GIF` | UPS | GIF image file |
| `SPL` | UPS | Standard printer spool file |
| `PDF` | FedEx | GIF image file |

| Format                    | Carriers | Description         |
| ------------------------|---|---------------------|
| `COMMON2D` | FedEx | Common 2D |
| `ERROR` | FedEx  | Error |
| `LABEL_DATA_ONLY` | FedEx  | Label Data Only |
| `MAILROOM` | FedEx  | Mailroom |
| `NO_LABEL` | FedEx  | No Label |
| `PRE_COMMON_2_D` | FedEx  | Pre Common 2D |

| Stock                      | Carriers | Printer Type         | Description         |
| ---------------------------|---------------------------|---------------------|---------------------|
| `PAPER_4X6` | FedEx, UPS | Laser | Standard 4x6 inch paper. |
| `PAPER_4X6.75` | FedEx | Laser | Standard 4x6.75 inch paper. |
| `PAPER_4X8` | FedEx, UPS | Laser | Standard 4x8 inch paper. |
| `PAPER_4X9` | FedEx | Laser | Standard 4x9 inch paper. |
| `PAPER_7X4.75` | FedEx | Laser | Standard 7x4.75 inch paper. |
| `PAPER_8.5X11_BOTTOM_HALF_LABEL` | FedEx | Laser | 8.5x11 inch paper with included label on bottom half |
| `PAPER_8.5X11_TOP_HALF_LABEL` | FedEx | Laser | 8.5x11 inch paper with included label on top half |
| `PAPER_LETTER` | FedEx | Laser | Standard letter sized paper |
| `STOCK_4X6` | FedEx | Thermal | 4x6 inch thermal label stock |
| `STOCK_4X6.75` | FedEx | Thermal | 4x6.75 inch thermal label stock |
| `STOCK_4X6.75_LEADING_DOC_TAB` | FedEx | Thermal | 4x6.75 inch thermal label stock with doc tab on leading edge |
| `STOCK_4X6.75_TRAILING_DOC_TAB` | FedEx | Thermal | 4x6.75 inch thermal label stock with doc tab on trailing edge |
| `STOCK_4X8` | FedEx | Thermal | 4x8 inch thermal label stock |
| `STOCK_4X9` | FedEx | Thermal | 4x9 inch thermal label stock |
| `STOCK_4X9_LEADING_DOC_TAB` | FedEx | Thermal | 4x9 inch thermal label stock with doc tab on leading edge |
| `STOCK_4X9_TRAILING_DOC_TAB` | FedEx | Thermal | 4x9 inch thermal label stock with doc tab on trailing edge |

## API Usage

### Creating Labels

#### Recommended `data` Elements
| Element                      | Notes         |
| ---------------------------|---------------------|
| `orderNumber` | References the order number for which you want to produce a label. |
| `carrierCode` | The carrier code of the carrier for which you want to produce a label. |
| `recipient` | The recipient address and additional information. |
| `sender` | The Origin from which the shipment will be shipped. |
| `pieces` | The Packages in the order. |
| `shipmentDetail` | Specific details about the shipment. |

#### Recommended Response Elements

| Element                      | Notes         |
| ---------------------------|---------------------|
| `trackingId` | The tracking number for the package. |
| `labelImage` | Optional. Returns the label image if not printing directly. |
| `labelUrl` | Optional. Returns a URL from which the label can be downloaded if not printing directly. |

### Printing Labels

#### Working with Printers

ShipperHQ uses PrintNode to support direct printing to both laser and thermal label printers. Printers must be configured and PrintNode connected to your ShipperHQ account in order to print labels directly. See our [Printer Setup](https://docs.shipperhq.com/generate-shipping-labels/#Printer_Setup) doc for instructions.

:::info
If you do not wish to use ShipperHQ's PrintNode integration, the `createLabel` call can return label images which you can print yourself.
:::

**`listPrinters`**

Making a `listPrinters` call will return your configured printers and can return the following information:

| Element                      | Notes         |
| ---------------------------|---------------------|
| `id` | The unique ID of each printer. |
| `name` | The assigned name of each printer. |

The `id` of the printer is used in `printLabel` calls.

#### Recommended Request Elements

| Element                      | Notes         |
| ---------------------------|---------------------|
| `orderNumber` | References the order number for the package the label of which you wish to print. |
| `packageId` | The unique identifier of the package for the label you want to print. |
| `printer` | The unique ID of the printer you wish to use. |

#### Response

Will return a success message if successfully printed or an error message if not.

### Cancelling Labels


### Other Uses


#### Returns Labels


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
2. A custom integration of the ShipperHQ [Rates API](rates/overview.md) and the [`PlaceOrder`](labels/place-order.md) mutation of the [Labels API](labels/overview.md).

### Enable & Retrieve Access Token
Within the ShipperHQ account you wish to use, enable the Labels Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account.

### Place an Order
Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information.

### Test with the API Playground
[//]: # (API Playground)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<APIPlayground doc="Labels" />

## Examples
Since the Labels API is implemented in GraphQL, you can retrieve as much information as you want or as little as you need. You'll find examples of both simple and more advanced Labels API requests and their associated responses as well as a Postman collection with pre-configured examples on the Examples doc.

[See Examples <i class="fa fa-arrow-right"></i>](examples.md)

## Errors
Most errors are returned as an `errors` object. These will include a `message` property which will indicate the specific error.

#### No order found

When an order can not be found that matches the `orderNumber` provided an empty `viewOrder` object will be returned.

#### Authentication issues

If the Access Token provided is invalid or the ShipperHQ account it belongs to is disabled, the error message `Access Denied` will be returned.
