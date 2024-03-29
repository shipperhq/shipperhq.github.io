---
sidebar_position: 5
tags: [rating, api, quickstart]
---

# Authentication and access

## Authentication Process
To use the ShipperHQ rating API you need to generate a JWT authentication token. This is a three step process:
1. Get ShipperHQ API Key
2. Get Authentication Code
3. Generate a JWT access token (valid 30 days)

## Access Scope of the rating API

Before we dig into the specifics, it is important to define the access scope for the API Key, the Authentication Code and the JWT Access Token. Each of these elements are specific to a single ShipperHQ Website.

You can think of a Website as a sale channel for instance an online store in the US (production), an online store in Canada (production) a development store, a CRM sales channel (offline sales).

Because ShipperHQ supports multiple Websites, each Website can have its own Shipping rules. Each Website will, as a consequence, generate different type of rates for the same virtual cart and customer choices.

To reflect this level of functionality, authorization and access to the rating API is specific to a Website: you need a different set of credentials for each ShipperHQ Website. 

For more information about ShipperHQ Website, please visit our [customer documentation](https://docs.shipperhq.com/adding-websites-in-shipperhq/).

## How to get your API Key (for a single Website)

The API key is accessible on all platforms at all time via ShipperHQ dashboard.

To get the API key:
1. Visite the [Websites](https://shipperhq.com/ratesmgr/websites) section of the dashboard.
2. Select the Website you want to get the key from
3. Select the `API key` and copy it to your application

## How to get your Authentication Code (for a single Website)

### For new ShipperHQ deployment on manually connected platforms (Magento/Adobe Commerce, Zoey, WooCommerce, etc.)
On these platforms, you can generate yourself a new Authentication Code yourself.



### For Single Sign On platforms: BigCommerce and Shopify

### For existing (in production or in development) ShipperHQ Websites

### If unsure: please contact support!


## How to generate your JWT Authentication Token (for a single Website)

Once you have your ShipperHQ API Key and ShipperHQ Authentication code, you have to generate a JWT token to access ShipperHQ rating API.

Use the following steps to create an Authentication token for testing. You will need to use this same query in your integration to create secret tokens when required, as they expire after 30 days. 

- Navigate to the ShipperHQ GraphQL playground.
- Click Add New in the top left corner. 
- Set the URL to https://rms.shipperhq.com.
- Click the Reload Docs button. 
- Send a createSecretToken mutation with your API Key and Authentication Code. 

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

:::tip We use JWT and the token has a 30 days expiration date

The response contains the token you use to make requests to the ShipperHQ API. This token expires every 30 days. You can request a new token up to an hour before your current token expiration date and time. The token is a [JWT token](https://jwt.io/) and they have an expiration timestamp encoded inside: no need to remember the expiration date. We recommend using your favorite [JWT](https://jwt.io/) parsing library to extract the expiration from the token, so you will know the exact second the token expires.

:::

# Requests
## Request Headers
Any query or request must include the following headers

- `X-ShipperHQ-Secret-Token` – This is the Secret token you have generated for your ShipperHQ account (see Authentication section)
- `X-ShipperHQ-Scope` – This is the SCOPE from your SHQ account
- `X-ShipperHQ-Session` – This identifies a cart/order, use any unique value

# Quickstart 
This document is intended for technical architects and developers that need to integrate with ShipperHQ’s Rating API to build their own integration to retrieve shipping rates from ShipperHQ.

Use the information outlined in this document to view how custom fields and attributes are queried and modified.

Note, this does not document the standard types and fields the API provides. This information is found in the GraphQL schema and obtained via our GraphQL playground. Please refer to the Introduction to GraphQL article from Graphql.org for more information about GraphQL. 

## GraphQL Ratings API Benefits
- Flexibility: The GraphQL Ratings API gives users the ability to access the details used to obtain the shipping rate and query what is most important to you and your business. As such, you can query 5 pieces of information or every possible field as you see fit.
- Customization: The GraphQL Ratings API  givesusers the ability to build their own integration into ShipperHQ to retrieve shipping rates. For example, you can use it to get shipping rates into your order processing system or build a custom integration from you eCommerce cart.
- Split Shipments: The GraphQL Ratings API enables users to leverage multi-origin fulfillment and split shipping and product groups at checkout. Retrieve tailored shipping rates and methods for each item in the order based on their shipping origin and/or product group! This way, your customer’s order does not have to be limited by the item with the longest shipping time. 

## Getting Started
ShipperHQ’s classic rating service provides rating to BigCommerce, Shopify, and Magento eCommerce platforms. The Ratings API uses GraphQL to allow for faster and more efficient API calls and PWA-compatibility.

Please refer to the Introduction to GraphQL article from Graphql.org for more information about GraphQL. 

## Ratings Workflow
ShipperHQ can calculate shipping rates based on your shipping strategy. 

Submit a request that includes the contents of the cart, like item’s weight, value and quantity and include destination address information 
Can include any other shipping options required like liftgate,  residential address or specific dates for delivery
Our API will return shipping rates for the cart using your ShipperHQ configured rules and carriers
Depending on whether you choose to request simple rates or full shipping rates, we can return basic rate information or full details of carriers, shipments, dates and shipping options available.

## Retrieving Rating Information
You can retrieve shipping rates by querying the Rating GraphQL API. 

## GraphQL API URL and Limits
- Endpoint URL: The current GraphQL API endpoint is at https://api.shipperhq.com/v2/graphql and all requests must be `HTTP POST` requests with `application/JSON` encoded bodies.
- Request Limits:  These queries are subject to your request limits. Please view your request limits on ShipperHQ’s pricing page.
- Monitoring Request limits: Review your requests within your ShipperHQ analytics dashboard.

## Request Definitions
The ShipperHQ rating API includes the following three queries. 

| Query                      | Description         |
| ---------------------------|---------------------|
|`retrieveShippingQuote`     |	Retrieve basic shipping rates including carrier and method titles and total shipping charges. |
|`retrieveFullShippingQuote`	| Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.|
|`retrieveUserSettings`|	Retrieve merchant’s settings like locale and currency.|

You can view the details of queries/mutations, and their descriptions within the ShipperHQ GraphQL playground. 

Use your own tool or navigate to ShipperHQ’s playground to view any GraphQL queries. Follow the procedure outlined below to use GraphQL.

Navigate to the ShipperHQ GraphQL playground.
In a new GraphQL playground window, enter https://api.shipperhq.com/v2/graphql into the URL.
- Click the Docs button.
- Click the Reload Docs icon.
- Click the Query link to view a list of available queries and the arguments and fields you can include in your request.
You can also view the structure of the ratingInfo required as a parameter in your request.

![GraphiQL example](./graphiql-example-2021-08-11_10-20-25.jpeg)



## Item Attributes
Item attributes in the request allow you to include item-specific values like a shipping group or an origin. They are required if you are using any type of features such as carrier rules, dimensional shipping, multi-origin, etc. The most common attributes are listed below. 


:::tip Values are case sensitive and require delimiter
All values are case sensitive and require a delimiter between multiple values. The default delimiter is a comma, but if your data is already separated by hashes (#), it is required for you to set the appVersion to 2.0.0 within the siteDetails.

:::
| Attribute Name | 	Description |
| -------------- | ------------ |
|`shipperhq_shipping_group` | 	This is used to place the shipping group on an item to match carrier rules.|
|`shipperhq_warehouse`|	This is used if you are using multi-origin functionality in order to specify which origin(s) are applicable for an item. These values are separated by the “#’ character and must match origin names configured in ShipperHQ.|
|`shipperhq_dim_group` |	This is used if you have created any dimensional rules for your items to be packed in a specific way.|
|`ship_length`, `ship_width`, `ship_height`|	These are used if you are placing dimensions on items; Note, you must include all 3 attributes when using this query.
|`ship_separately`|	This allows for the item to be packed separately into its own box when used for rating.|


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

## Requested Options

Requested Options in the requestedOptions field in the request allow you to include services for the entire shipment such as Liftgate or Residential delivery. These are useful if you are using Freight carriers or small package carriers that offer specific delivery methods for residential delivery. The most common attributes are listed below. 

| Requested Options  | 	Data Type| 	Description |
|--------------------|-----------|--------------|
|`liftgate_required` |	Boolean	 | This specifies liftgate is required at the destination.  |
|`notify_required`  |	Boolean	   | This requests an appointment delivery or notice of delivery. |
| `inside_delivery` |	Boolean	   | This requests delivery inside the destination. |
|`limited_delivery` |	Boolean    | 	This specifies limited access at the destination address. |
|`destination_type` |	Boolean |	This specifies if a destination is a Residential or Business address and is used for freight and small package shipments.|

:::tip All values are case-sensitive
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

## Preparing Queries in GraphQL Playground
Use the following process to use the GraphQL Playground. Include the required Headers before writing a query within GraphQL Playground.

- Go to https://graphiql.shipperhq.com/ to access our GraphQL Playground.
- Set the URL to https://api.shipperhq.com/v2/graphql. 
- Click the star shaped icon on the left. This is the headers button.
- Use the following Headers:
```
X-ShipperHQ-Secret-Token – This is the Secret token you have generated for your ShipperHQ account (see Authentication section)
X-ShipperHQ-Scope – This is the SCOPE from your SHQ account
X-ShipperHQ-Session – This identifies a cart/order, use any value
```

After the headers are entered, you can input the query you want to test into the field box provided and before clicking the Send Request button. The results are displayed in the pane on the right.


:::tip How to add variables?
You can add variables by clicking the Variables button (icon of stacked boxes) on the left toolbar. These variables are entered in JSON format.
:::

#  Examples
## Basic Rating GraphQL API
### Example: Rate Request

This example does not flush out the multi-origin logic. Please view the Detailed Shipping Rate GraphQL API portion of this document for more information. The following example is an MVP setup. 

Attach the shipping_group attribute at a product-level if you wish to use carrier rules.
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
          appVersion: "x.x.x",
          ecommerceCart: "Your Integrated Platform",
          ecommerceVersion: "x.x.x",
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

### Example: Rate response
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

## Detailed Shipping Rates GraphQL API
Use this API request to retrieve detailed shipping rate information including packages, detailed information on shipping rates, date information, rates for each shipment in a multi-origin request.

Some example queries are below. For each of these queries, you can submit the `ratingInfo` variable. If you wish to use multi-origin functionality, your request should include the `shipperhq_warehouse` item attribute value.

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

### Example Queries

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

### Errors
The internal error message describes the issue and is intended to help with your integration. The external error message is taken from your ShipperHQ configuration default error messages and is designed to show for the end-user. Refer to the ShipperHQ Rating API Error Messages documentation for a full list of error messages.
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

# Additional resources
- [List of ShipperHQ standard error messages](https://docs.shipperhq.com/rating-error-messages)