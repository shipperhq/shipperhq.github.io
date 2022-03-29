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

### Required `order` Values
The request should include the following elements of the [`order`](https://dev.shipperhq.com/insights-service/#definition-Order) type
- `orderNumber`:
- `orderNumberText`:

#### Required `orderDetail` Values

The request should include the following elements of the [`orderDetail`](https://dev.shipperhq.com/insights-service/#definition-OrderDetail) type:
  - `carrierCode`:
  - `carrierTitle`:
  - `methodCode`:
  - `methodTitle`:
  - `totalCharges`:
  - `transactionId`:

#### Required `shipments` Values

The integration should support the following elements of the [`shipments`](https://dev.shipperhq.com/insights-service/#definition-Shipment) type:

**Required `shipmentDetail` Values**
The integration should support the following elements of the [`shipmentDetail`](https://dev.shipperhq.com/insights-service/#definition-ShipmentDetail) type:
- `name`:

**Required `carriers` Values**
The integration should support the following elements of the [`carrier`](https://dev.shipperhq.com/insights-service/#definition-Carrier) type:
- `dateFormat`:

*Required `carrierDetail` Values*

The integration should support the following elements of the [`carrierDetail`](https://dev.shipperhq.com/insights-service/#definition-CarrierDetail) type:
- `carrierCode`:
- `carrierTitle`:
- `carrierType`:

*Required `methods` Values*
The integration should support the following elements of the [`method`](https://dev.shipperhq.com/insights-service/#definition-Method) type.

Required `methodDetails` Values

The integration should support the following elements of the [`methodDetail`](https://dev.shipperhq.com/insights-service/#definition-MethodDetail) type.
- `methodCode`:
- `methodTitle`:
- `totalCharges`:
- `currency`:
- `negotiatedRate`:

Required `timeInTransitOptions` Values

The integration should support the following elements of the [`timeInTransitOptions`](https://dev.shipperhq.com/insights-service/#definition-TimeInTransitOptions) type.
- `dispatchDate`:
- `deliveryDate`:

Required `rateBreakdownList` Values

The integration should support the [`rateBreakdown`](https://dev.shipperhq.com/insights-service/#definition-RateBreakdown) type.

Required `advancedFees` Values

The integration should support the following elements of the [`advancedFees`](https://dev.shipperhq.com/insights-service/#definition-AdvancedFees) type.
- `handlingFee`:
- `shippingPrice`:
- `totalCharges`:
- `cost`:
- `customDuties`:
- `deliveryDate`:
- `deliveryDate`:

Required `packages` Values

The integration should support the [`package`](https://dev.shipperhq.com/insights-service/#definition-Package) type including:
- These attributes of the [`packageDetail`](https://dev.shipperhq.com/insights-service/#definition-PackageDetail) type:
  - `declaredValue`:
  - `height`:
  - `length`:
  - `width`:
  - `packageName`:
  - `packingWeight`:
  - `weight`:
- These attributes of the [`item`](https://dev.shipperhq.com/insights-service/#definition-Item) type:
  - `sku`:
  - `qtyPacked`:
  - `weightPacked`:

Required `selectedOptions` Values

The integration should support all possible values of the [`selectedOption`](https://dev.shipperhq.com/insights-service/#definition-SelectedOption) type.

*Required `calendarDate` Values*
- `availableDeliveryDates`:
- `timeSlots`:

*Required `packages` Values*
See above

*Required `pickupDetail` Values*

The integration should support the [`pickupDetail`](https://dev.shipperhq.com/insights-service/#definition-PickupDetail) type including:
- These attributes of the [`pickupLocationDetail`](https://dev.shipperhq.com/insights-service/#definition-PickupLocationDetail) type:
  - `pickupName`:
  - `publicId`:

**Required `groupedItems` Values**

The integration should support the following elements of the [`groupedItem`](https://dev.shipperhq.com/insights-service/#definition-GroupedItem) type:
- `sku`:
- `qty`:
- `name`:

#### Required `recipient` Values
The integration should support the [`address`](https://dev.shipperhq.com/rates-service/#definition-Address)type including:
- `country`:
- `region`:
- `city`:
- `street`:
- `street2`:
- `zipcode`:
- `company`:

### Additional Guidance

While the [Rates API Reference](https://dev.shipperhq.com/rates-service/) contains all available fields, not all possible attributes are described in the current version of this guide. Some less-common attributes are not yet described. Contact [dev support](/contact) if you need assistance with any specific scenario or for additional guidance on best practices for your specific use case.

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

Since the Insights API is implemented in GraphQL, you can retrieve as much information as you want or as little as you need. Below you'll find examples of both simple and more advanced Insights API requests and their associated responses.

### Basic Example

#### Basic Example Request
```json title=
query Order {
  viewOrder(orderNumber: "000000008") {
    shipments {
      id
      shipmentDetail {
        shipmentId
        name
      }
      carriers {
          carrierDetail {
              carrierCode
              carrierTitle
              carrierType
          }
        methods {
          methodDetails {
            methodCode
            methodTitle
            totalCharges
            currency
            negotiatedRate
          }
        }
        packages {
          packageDetail {
            height
            length
            width
            weight
            packingWeight
            packageName
            surchargePrice
          }
          items {
            sku
            qtyPacked
            weightPacked
          }
        }
      }
    }
  }
}
```

#### Basic Example Response
```json title=
{
    "data": {
        "viewOrder": [
            {
                "shipments": [
                    {
                        "id": "ckzyb31g7n82f0i94w7lizy6q",
                        "shipmentDetail": {
                            "shipmentId": "83529",
                            "name": "Austin Warehouse"
                        },
                        "carriers": [
                            {
                                "carrierDetail": {
                                    "carrierCode": "shqups",
                                    "carrierTitle": "UPS®",
                                    "carrierType": "ups"
                                },
                                "methods": [
                                    {
                                        "methodDetails": {
                                            "methodCode": "GND",
                                            "methodTitle": "UPS Ground®",
                                            "totalCharges": 41.93,
                                            "currency": "USD",
                                            "negotiatedRate": true
                                        }
                                    }
                                ],
                                "packages": [
                                    {
                                        "packageDetail": {
                                            "height": 5,
                                            "length": 4,
                                            "width": 2,
                                            "weight": 1.2,
                                            "packingWeight": null,
                                            "packageName": "Standard Box",
                                            "surchargePrice": 0
                                        },
                                        "items": [
                                            {
                                                "sku": "Graphic T-Shirt",
                                                "qtyPacked": 2,
                                                "weightPacked": 1.2
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

### Extended Example

#### Extended Example Request
```json title=
query Order {
  viewOrder(orderNumber: "000000009") {
    orderNumber
    createdAt
    shipments {
      id
      shipmentDetail {
        shipmentId
        name
        description
      }
      carriers {
        carrierDetail {
            carrierCode
            carrierTitle
            carrierType
        }
        methods {
          id
          methodDetails {
            methodCode
            methodTitle
            totalCharges
            currency
            negotiatedRate
          }
          timeInTransitOptions {
            dispatchDate
            deliveryDate
          }
          selectedOptions {
              name
              value
          }
        }
        packages {
          packageDetail {
            declaredValue
            height
            length
            width
            weight
            packingWeight
            packageName
            surchargePrice
          }
          items {
            sku
            qtyPacked
            weightPacked
          }
        }
      }
    }
  }
}
```
#### Extended Example Response
```json title=
{
    "data": {
        "viewOrder": [
            {
                "orderNumber": "000000009",
                "createdAt": "2022-02-22T15:52:11.285Z",
                "shipments": [
                    {
                        "id": "ckzyb31g7nl5k8i94w7lizy6q",
                        "shipmentDetail": {
                            "shipmentId": "83729",
                            "name": "Boston Warehouse",
                            "description": null
                        },
                        "carriers": [
                            {
                                "carrierDetail": {
                                    "carrierCode": "shqyrc",
                                    "carrierTitle": "YRC Freight",
                                    "carrierType": "yrcFreight"
                                },
                                "methods": [
                                    {
                                        "id": "ckzyb31g9nl5o0x67ecdcm2dr",
                                        "methodDetails": {
                                            "methodCode": "LTL",
                                            "methodTitle": "YRC LTL Freight",
                                            "totalCharges": 217,
                                            "currency": "USD",
                                            "negotiatedRate": false
                                        },
                                        "timeInTransitOptions": {
                                            "dispatchDate": "",
                                            "deliveryDate": ""
                                        },
                                        "selectedOptions": []
                                    }
                                ],
                                "packages": [
                                    {
                                        "packageDetail": {
                                            "declaredValue": 0,
                                            "height": 40,
                                            "length": 48,
                                            "width": 24,
                                            "weight": 250,
                                            "packingWeight": null,
                                            "packageName": "Standard Pallet - 2 foot",
                                            "surchargePrice": 0
                                        },
                                        "items": [
                                            {
                                                "sku": "Heavy Duty Wok Range",
                                                "qtyPacked": 2,
                                                "weightPacked": 250
                                            }
                                        ]
                                    },
                                    {
                                        "packageDetail": {
                                            "declaredValue": 0,
                                            "height": 48,
                                            "length": 60,
                                            "width": 40,
                                            "weight": 300,
                                            "packingWeight": null,
                                            "packageName": "Standard Pallet - 5 foot",
                                            "surchargePrice": 0
                                        },
                                        "items": [
                                            {
                                                "sku": "Piano",
                                                "qtyPacked": 1,
                                                "weightPacked": 300
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

## Errors
Most errors are returned as an `errors` object. These will include a `message` property which will indicate the specific error.

#### No order found

When an order can not be found that matches the `orderNumber` provided an empty `viewOrder` object will be returned.

#### Authentication issues

If the Access Token provided is invalid or the ShipperHQ account it belongs to is disabled, the error message `Access Denied` will be returned.
