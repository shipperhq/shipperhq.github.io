---
sidebar_position: 3
slug: examples
title: Examples
tags: [rates, api, guide, examples]
---

Below you'll find a number of examples covering various uses cases for the Rates API. You'll also find a Postman collection that can be downloaded.

## Postman Collection
Our Postman collection contains pre-configured examples you can use to get started with testing as quickly as possible. Postman is a tool for easily interacting with APIs. If you don't have the Postman app installed already, you can download it from [Postman.com](https://www.postman.com/downloads/).

Once you have Postman installed, download the collection below, open Postman, click File > Import, and choose the ShipperHQ Rates collection. This will import the collection and show you the examples included in it. You will need to set up your credentials within the collection by clicking on the collection, clicking Variables, and entering your API Key and Authentication Code. You'll also want to confirm your Website Scope is LIVE or, if not, change it to the appropriate scope. Now, by choosing any of the examples you'll be able to run Rates API requests.

<p><a target="_blank" href="/examples/shipperhq-rates.postman_collection.json" download="shipperhq-rates.postman_collection.json">Download the ShipperHQ Rates API Collection <i class="fa fa-arrow-right"></i></a></p>

:::tip Credentials

Since the Rates API requires a JWT Token in order to run requests, our Postman collection is set up with a Pre-request Script that automatically generates a token for you using the API Key and Authentication Code you've set up whenever you run a Rates API requests within the collection. You can see this script by clicking on the Collection and clicking Pre-request Script. Note that when you integrate the Rates API into your own system, you'll need to make this call yourself.
:::

## Example Scenarios

##  `retrieveShippingQuote`

This is an MVP example that returns the most critical information. It does not include multi-origin or any other advanced functionality but does include the `shipperhq_shipping_group` item attribute. See the Detailed Rates API Example portion of this document for a more detailed example.

### Basic Quote Example Request

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

### Rate Response Example
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

## `retrieveFullShippingQuote`
Use this API request to retrieve detailed shipping rate information including packages, detailed information on shipping rates, date information, rates for each shipment in a multi-origin request.

Some example queries are below. For each of these queries, you can submit the `ratingInfo` variable.

### Example Variables

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

## Additional Examples

In this section, let's explore typical queries that may be useful on a regular basis.

### Example: Retrieve shipping quote with scheduling option
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

### Example: Rate request for LTL carriers

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

### Example: Rate breakdown for multiple shipments or origins

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
