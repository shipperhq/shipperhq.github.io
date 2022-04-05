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

Our Rates API is implemented in GraphQL. See the [SDK Quickstart](../quickstart.md) for more information.

## Requirements
In order to use the ShipperHQ Rates API you'll need a ShipperHQ account configured with at least one Website, one Origin, and one Carrier. Once you have an account, you'll need to retrieve authentication credentials as described below that will allow you to access the Rates API.

## Authentication
[//]: # (JWT Authentication)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<JWTAuth doc="Rates" />

## API Details

### Endpoint

| Protocol                    | Method | Body Encoding         | Endpoint URL         |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  `https://api.shipperhq.com/v2/graphql` |


### API Rate Limits
- **Request Limits:**  Rates API queries are subject to the request limits of your ShipperHQ account. Please view your request limits on ShipperHQ’s pricing page.
- **Monitoring Request limits:** You can view your usage within the Analytics tab of your ShipperHQ dashboard.

### Request Headers
Any query or request must include the following headers:

| Header Name  |Header description |
| ---- | ------------------ |
| `X-ShipperHQ-Secret-Token` |  This is the JWT Secret token you have generated for your ShipperHQ account.|
| `X-ShipperHQ-Scope` |   The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT` or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`.|
| `X-ShipperHQ-Session` | This is a unique identifier for a cart/order. Use any unique alphanumeric string. |

### Request Definitions
The ShipperHQ Rates API includes the following three queries.

| Query                      | Description         |
| ---------------------------|---------------------|
|`retrieveShippingQuote`     |	Retrieve basic shipping rates including carrier and method titles and total shipping charges. |
|`retrieveFullShippingQuote`	| Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.|


### Item Attributes
Item attributes in the request allow you to include item-specific values like a shipping group or an origin. They may be required if you are using any type of features such as [Shipping Groups](https://docs.shipperhq.com/shipping-group-configuration/), [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/), [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), etc.

These attributes and their values are sent in a set of name/value pairs in the `attributes` field of an `item` on a Rates API request. The most common attributes are listed below.

:::info Values are case sensitive
All item attribute values are case sensitive and must match the corresponding item configured in the ShipperHQ dashboard including any spaces.

For example, if the name of an Origin in ShipperHQ is "New York", none of "NEW YORK", "new york", or "NewYork" would match.

:::
| Attribute Name | 	Description |
| -------------- | ------------ |
|`shipperhq_shipping_group` | 	Assigns an item to one or more [Shipping Groups](https://docs.shipperhq.com/shipping-group-configuration/). |
|`shipperhq_warehouse`|	Used with ShipperHQ's [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/) functionality to specify the [Origin](https://docs.shipperhq.com/origin-configuration/) or Origins which can fulfill the item. |
|`shipperhq_dim_group` |	Assigns an item to a [Packing Rule](https://docs.shipperhq.com/dimensional-rules-setup/) used in [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/). Only required when Dimensional Rules are used to pack specific items differently than general packing rules. |
|`ship_length`, `ship_width`, `ship_height`|	Used with [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) to specify the product's dimensions for packing. If used, all 3 fields are required. |
|`ship_separately`|	Used with [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) to identify items which are [packed separately](https://docs.shipperhq.com/pack-separately/) to other items. |

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

| Requested Options  | 	Data Type| 	Description |
|--------------------|-----------|--------------|
|`liftgate_required` |	Boolean	 | This specifies liftgate is required at the destination.  |
|`notify_required`  |	Boolean	   | This requests an appointment delivery or notice of delivery. |
| `inside_delivery` |	Boolean	   | This requests delivery inside the destination. |
|`limited_delivery` |	Boolean    | 	This specifies limited access at the destination address. |
|`destination_type` |	Enum |	Specifies if a destination is a residential (`residential`) or business (`commercial`) address. |

:::info Values are case sensitive
All Requested Option attribute values are case sensitive.

:::

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

## Testing

### Test with the API Playground
[//]: # (API Playground)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<APIPlayground doc="Rates" />

## Examples

###  `retrieveShippingQuote`

This is an MVP example that returns the most critical information. It does not include multi-origin or any other advanced functionality but does include the `shipperhq_shipping_group` item attribute. See the Detailed Rates API Example portion of this document for a more detailed example.

#### Basic Quote Example Request

If there are multiple shipments/warehouses they will be simplified into a single "merged" carrier. This makes this call suitable for use in platforms that expect a single shipping method per order.

```json title=
query retrieveShippingQuote {
   retrieveShippingQuote(ratingInfo: {
    cart: {
      items: [
        {
          itemId: "12"
          sku: "tables"
          storePrice: 12.00
          weight: 1.00
          qty:1
          type: SIMPLE
          attributes:[
              {
                name:"shipperhq_shipping_group",
                value:"bulky"
              }
            ],
        }
      ]
    },
    destination: {
      country: "US"
      region: "TX"
      city: "Austin"
      zipcode: "78735"

    },
      siteDetails: {
          appVersion: "1.0.0",
          ecommerceCart: "Your Integrated Platform",
          ecommerceVersion: "1.0.0",
          websiteUrl: "www.yoursite.com",
          ipAddress: "0.0.0.0"
      }
  }) {
    transactionId
    carriers {
      carrierCode
      carrierTitle
      carrierType
      error {
        errorCode
        internalErrorMessage
        externalErrorMessage
        priority
      }
      shippingRates {
        code
        title
        totalCharges
      }
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
      priority
    }
  }
}
```

#### Rate Response Example
```json title=
{
  "data": {
    "retrieveShippingQuote": {
     "transactionId": "SHQ_20210916_1239_21508121",
            "carriers": [
                {
                    "carrierCode": "shqcustom1",
                    "carrierTitle": "Home Delivery",
                    "shippingRates": [
                        {
                            "code": "Standard",
                            "title": "Standard",
                            "totalCharges": 55.00
                        }
                    ],
                    "error": null
                },
                {
                    "carrierCode": "shqfedex3",
                    "carrierTitle": "FedEx®",
                    "shippingRates": [
                        {
                            "code": "FEDEX_GROUND",
                            "title": "Ground",
                            "totalCharges": 12.09
                        },
                        {
                            "code": "STANDARD_OVERNIGHT",
                            "title": "Standard Overnight",
                            "totalCharges": 37.81
                        }
                    ],
                    "error": null
                },
                {
                    "carrierCode": "shqfedex2",
                    "carrierTitle": "FedEx",
                    "shippingRates": [],
                    "error": {
                        "errorCode": 508,
                        "internalErrorMessage": "No Valid Rates found for Carrier",
                        "externalErrorMessage": null,
                        "priority": 999
                    }
                }
            ],
            "errors": null
        }
  }
}
```

### `retrieveFullShippingQuote`
Use this API request to retrieve detailed shipping rate information including packages, detailed information on shipping rates, date information, rates for each shipment in a multi-origin request.

Some example queries are below. For each of these queries, you can submit the `ratingInfo` variable.

#### Example Variables

These must be included in the variables section of your GraphQL client. This example is a basic `ratingInfo` object showing item attributes

```json title=
{
  "ratingInfo": {
    "cart": {
      "items": [{
        "itemId": "57",
        "sku": "25-MB01",
        "storePrice": 34,
        "weight": 1,
        "qty": 1,
        "type": "SIMPLE",
        "basePrice": 34,
        "taxInclBasePrice": null,
        "taxInclStorePrice": 34,
        "discountPercent": null,
        "discountedBasePrice": null,
        "discountedStorePrice": null,
        "discountedTaxInclBasePrice": null,
        "discountedTaxInclStorePrice": null,
        "attributes": [{
          "name": "shipperhq_warehouse",
          "value": "CA Origin,NY Origin"
        }],
        "items": null
      }],
      "declaredValue": 34
    },
    "destination": {
      "country": "US",
      "region": "TX",
      "city": "Austin",
      "street": "5701 S MoPac Expy",
      "street2": "#1821",
      "zipcode": "78749"
    },
    "customer": {
      "customerGroup": "NOT LOGGED IN"
    },
    "cartType": "STD",
    "requestedOptions": null,
    "siteDetails": {
      "appVersion": "1.0.0",
      "ecommerceCart": "Magento 2 Community",
      "ecommerceVersion": "2.3.1",
      "websiteUrl": "http://www.example.com",
      "ipAddress": "12.34.567"
    }
  }
}
```

### Additional Examples

In this section, let's explore typical queries that may be useful on a regular basis.

#### Example: Retrieve shipping quote with scheduling option
This query fetches a more detailed copy of the shipping rates. It will show the full rate breakdown. Not all fields are included in this example, use the docs to see all available fields.

This example uses calendar functionality. You will need to have that enabled on your ShipperHQ account in order to see results with date information

```json title=
query RetrieveFullShippingQuote($ratingInfo: RatingInfoInput!) {
  retrieveFullShippingQuote(ratingInfo: $ratingInfo) {
    transactionId
    validationStatus
    shipments {
      shipmentDetail {
        name
        shipmentId
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
          }
        }
        // highlight-start
        calendarDate {
          availableDeliveryDates
        }
        dateFormat
        // highlight-end
        error {
          errorCode
          internalErrorMessage
          externalErrorMessage
          priority
        }
      }
      groupedItems {
        itemId
      }
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
      priority
    }
  }
}
```
#### Example: Rate request for LTL carriers

Typical request you might use if using LTL carriers - notice the `availableOptions`. This example uses Freight LTL functionality. You will need to have the Freight LTL feature enabled on your ShipperHQ account and freight carriers set up in order to see results with `availableOptions` information

```json title=
query RetrieveFullShippingQuote($ratingInfo: RatingInfoInput!) {
  retrieveFullShippingQuote(ratingInfo: $ratingInfo) {
    transactionId
    validationStatus
    shipments {
      shipmentDetail {
        name
        shipmentId
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
          }
        }
        // highlight-start
        availableOptions {
          destinationType
          insideDelivery
          liftGateRequired
          limitedDelivery
          notifyRequired
        }
        //highlight-end
        error {
          errorCode
          internalErrorMessage
          externalErrorMessage
          priority
        }
      }
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
      priority
    }
  }
}
```
#### Example: Rate breakdown for multiple shipments or origins

Fetches shipping rates and breakdown of rates for multiple shipments/warehouses. This query will fetch the merged shipping rate as well as a detailed breakdown of the shipping rates and packing information.

This example uses multi origin functionality. You will need the Multi Origin advanced feature enabled on your ShipperHQ account, and your request should include multiple items shipping from separate origins or warehouses.

```json title=
query RetrieveFullShippingQuote($ratingInfo: RatingInfoInput!) {
  retrieveFullShippingQuote(ratingInfo: $ratingInfo) {
    transactionId
    validationStatus
    shipments {
      shipmentDetail {
        name
        shipmentId
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
          }
          rateBreakdownList {
            methodCode
            carrierDetail {
              carrierCode
              carrierTitle
            }
            methodDetails {
              totalCharges
              methodTitle
              methodCode
            }
            packages {
              items {
                qtyPacked
                sku
                weightPacked
              }
              packageDetail {
                packageName
                width
                height
                length
                weight
                declaredValue
              }
            }
          }
        }
        packages {
          items {
            qtyPacked
            sku
            weightPacked
          }
          packageDetail {
            packageName
            width
            height
            length
            weight
            declaredValue
          }
        }
        availableOptions {
          destinationType
          insideDelivery
          liftGateRequired
          limitedDelivery
          notifyRequired
        }
        error {
          errorCode
          internalErrorMessage
          externalErrorMessage
          priority
        }
      }
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
      priority
    }
  }
}
```

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
