---
sidebar_position: 2
slug: quickstart
title: Rating Quickstart
authors: []
tags: [rating, api, introduction, quickstart]
---


# Quickstart
This document is intended for technical architects and developers that need to integrate with ShipperHQ’s Shipping Insights API to build their own integration to retrieve shipment details from ShipperHQ.

Note, this does not document the standard types and fields the API provides. This information is included in the [Shipping Insights API](https://dev.shipperhq.com/order-view-service/) documentation or can be obtained via our API playground.

Our Rate API is implemented in GraphQL. See the [SDK Quickstart](../quickstart/) for more information.

## Requirements
In order to use the ShipperHQ Rate API you'll need a ShipperHQ account configured with at least one Website, one Origin, and one Carrier. Once you have an account, you'll need to retrieve authentication credentials as described below that will allow you to access the Rate API.

## Authentication Process
To use the ShipperHQ Rate API you need to generate a JWT authentication token. This is a three step process:
1. Get your ShipperHQ API Key
2. Get your Authentication Code
3. Generate a JWT access token (valid for 30 days)

### Access Scope

Before we dig into the specifics, it is important to define the access scope for the API Key, the Authentication Code and the JWT Access Token. Each of these elements are specific to a single ShipperHQ Website.

You can think of a Website as a sale channel. For instance an online store in the US (production), an online store in Canada (production), a development store, or a CRM sales channel (offline sales).

Because ShipperHQ supports multiple Websites, each Website can have its own Shipping rules. Each Website will, as a consequence, generate different type of rates for the same virtual cart and customer choices.

To reflect this level of functionality, authorization and access to the Rate API is specific to a Website: you need a different set of credentials for each ShipperHQ Website.

[More information about Websites in ShipperHQ](https://docs.shipperhq.com/adding-websites-in-shipperhq/)

### How to get your API Key

The API key is accessible on all platforms via the ShipperHQ dashboard.

To get the API key:
1. Log into ShipperHQ and go to the [Websites](https://shipperhq.com/ratesmgr/websites) section of the dashboard.
2. Select the Website you want to get the key from
3. Select the `API key` and copy it to your application

### How to get your Authentication Code

#### For new ShipperHQ deployment on manually connected platforms (Magento/Adobe Commerce, Zoey, WooCommerce, etc.)
On these platforms, you can generate a new Authentication Code within the ShipperHQ dashboard.

1. Visit the Websites section of the dashboard
2. Click on the relevant Website
3. Click on "Generate new Authentication Code"
4. Copy the code: It will not be shown again for this Website.

:::caution Generating a new Authentication Code will break existing integrations with that Website!

Generating a new Authentication Code invalidates the previous Authentication Codes for that Website. This will break any integrations using that Authentication Code. Our recommendation is to create a new Website when creating a new integration so that you can retrieve a new API Key and Authentication Code without impacting your existing Website integration. Please [contact support](https://dev.shipperhq.com/contact) to double-check and avoid any service disruption for existing Websites.

:::

#### For Single Sign On platforms: BigCommerce and Shopify

For these platforms, the Authentication Code is automatically generated and exchanged between the eCommerce platform and ShipperHQ.

Please [contact support](https://dev.shipperhq.com/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.

#### For existing (in production or in development) ShipperHQ Websites

Please [contact support](https://dev.shipperhq.com/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.

### Generating your JWT Authentication Token

Once you have your ShipperHQ API Key and Authentication Code, you can generate the JWT token used to access the ShipperHQ Rate API. These tokens expire after 30 days.

The ShipperHQ GraphQL Playground can be used to create an Authentication Token for testing. You will need to use this same query in your integration to create secret tokens when required.

1. Navigate to the ShipperHQ GraphQL Playground.
2. Click Add New in the top left corner.
3. Set the URL to https://rms.shipperhq.com.
4. Click the Reload Docs button.
5. Send a createSecretToken mutation with your API Key and Authentication Code.

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

The response contains the token you use to make requests to the ShipperHQ Rate API. This token expires every 30 days. You can request a new token up to an hour before your current token expiration date and time. The token is a [JWT token](https://jwt.io/) and they have an expiration timestamp encoded inside: no need to remember the expiration date. We recommend using your favorite [JWT](https://jwt.io/) parsing library to extract the expiration date from the token, so you will know the exact second the token expires.

:::

## API Details

### Endpoint

| Protocol                    | Method | Body Encoding         | Endpoint URL         |
| ---------------------------|---------------------|---------------------|---------------------|
| `HTTPS` | `POST` | `application/JSON` |  https://api.shipperhq.com/v2/graphql |


### API Rate Limits
- **Request Limits:**  Rate API queries are subject to the request limits of your ShipperHQ account. Please view your request limits on ShipperHQ’s pricing page.
- **Monitoring Request limits:** You can view your usage within the Analytics tab of your ShipperHQ dashboard.

### Request Headers
Any query or request must include the following headers:

| Header Name  |Header description |
| ---- | ------------------ |
| `X-ShipperHQ-Secret-Token` |  This is the JWT Secret token you have generated for your ShipperHQ account.|
| `X-ShipperHQ-Scope` |   The configuration [Scope](https://docs.shipperhq.com/using-scopes-shipperhq/) for this ShipperHQ [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) (accepts `LIVE`, `TEST`, `DEVELOPMENT` or `INTEGRATION`). If unsure or if the ShipperHQ account does not support multiple scopes, use `LIVE`.|
| `X-ShipperHQ-Session` | This is a unique identifier for a cart/order. Use any unique alphanumeric string. |

### Request Definitions
The ShipperHQ rating API includes the following three queries.

| Query                      | Description         |
| ---------------------------|---------------------|
|`retrieveShippingQuote`     |	Retrieve basic shipping rates including carrier and method titles and total shipping charges. |
|`retrieveFullShippingQuote`	| Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.|
|`retrieveUserSettings`|	Retrieve ShipperHQ account settings like locale and currency.|


### Item Attributes
Item attributes in the request allow you to include item-specific values like a shipping group or an origin. They may be required if you are using any type of features such as [Shipping Groups](https://docs.shipperhq.com/shipping-group-configuration/), [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/), [Multi-Origin](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), etc.

These attributes and their values are sent in a set of name/value pairs in the `attributes` field of an `item` on a Rate API request. The most common attributes are listed below.

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

```json title="Attribute example"
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

These attributes and their values are sent in a set of name/value pairs in the `requestedOptions` field on a Rate API request. The most common attributes are listed below.

| Requested Options  | 	Data Type| 	Description |
|--------------------|-----------|--------------|
|`liftgate_required` |	Boolean	 | This specifies liftgate is required at the destination.  |
|`notify_required`  |	Boolean	   | This requests an appointment delivery or notice of delivery. |
| `inside_delivery` |	Boolean	   | This requests delivery inside the destination. |
|`limited_delivery` |	Boolean    | 	This specifies limited access at the destination address. |
|`destination_type` |	Enum |	This specifies if a destination is a residential (`residential`) or business (`commercial`) address. |

:::info Values are case sensitive
All Requested Option attribute values are case sensitive.

:::

```json title="Available options"
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

## Examples

###  Basic `retrieveShippingQuote` Example

This is an MVP example that returns the most critical information. It does not include multi-origin or any other advanced functionality but does include the `shipperhq_shipping_group` item attribute. See the Detailed Rate API Example portion of this document for a more detailed example.

#### Rate Request

```json title="Example to fetch a basic quote"
#
# Fetches a basic quote
#
# If there are multiple shipments/warehouses they will be simplified
# into a single "merged" carrier. This makes this call suitable for use in
# platforms that expect a single shipping method per order
#

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

#### Rate Response
```json title="Example of a rate response"
Example: Rate Response
{
  "data": {
    "retrieveShippingQuote": {
     "transactionId": "SHQ_20210916_1239_MacBook_Pro_2_21508121",
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

### Detailed `retrieveFullShippingQuote` Example
Use this API request to retrieve detailed shipping rate information including packages, detailed information on shipping rates, date information, rates for each shipment in a multi-origin request.

Some example queries are below. For each of these queries, you can submit the `ratingInfo` variable.

#### Example Variables
```json title="Example for variables"
#
# These must be included in the variables section of your GraphQL client. This example is # a basic ratingInfo object showing item attributes
#

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

### Additional Example Queries

In this section, let's explore typical queries that may be useful on a regular basis.

#### Example: Retrieve shipping quote with scheduling option

```json title="Query example: Retrieve shipping quote with scheduling"
#
# Fetches a detailed quote with calendar details included
#
# This query fetches a more detailed copy of the shipping rates
# it will show the full rate breakdown. Not all fields are included in this
# example, use the docs to see all available fields.
#
# This example uses calendar functionality. You will need to have that enabled on # your account in order to see results with date information

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
        calendarDate {
          availableDeliveryDates
        }
        dateFormat
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

```json title="Query example: rate request for LTL carriers"
#
# Typical request you might use if using LTL carriers - notice the availableOptions
#
#
# This example uses Freight LTL functionality. You will need to have the Freight # LTL feature enabled on your account and freight carriers set up in order to see # results with availableOptions information

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
#### Example: Rate breakdown for multiple shipment or multiple origins

```json title="Query example: Rates breakdown for multiple shipment or multiple origins"
#
# Fetches shipping rates and breakdown of rates for multiple shipments/warehouses
#
# This query will fetch the merged shipping rate as well as a detailed  
# breakdown of the shipping rates and packing information.
#
# This example uses multi origin functionality. You will need the Multi Origin # # advanced feature enabled, and your request should include multiple items
# shipping from separate origins or warehouses

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

```json title="Example query: Errors"
"errors": [
               {
                   "errorCode": 403,
                   "internalErrorMessage": "No applicable carriers have been found for this origin.",
                   "externalErrorMessage": "This shipping method is currently unavailable. If you would like to ship using this shipping method, please contact_us.",
                   "priority": 999
               }
           ]
```

### Possible `errorCode` and `internalErrorMessages` Values

Please visit our [FAQ section](http://localhost:3000/docs/rate/faq#what-are-the-error-codes-and-their-definition) for a detailed list of all our error codes.
