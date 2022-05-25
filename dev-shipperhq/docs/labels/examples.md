---
sidebar_position: 40
slug: examples
title: Examples
tags: [labels, api, guide, examples]
---

Below you'll find a number of examples covering various uses cases for the Labels API. You'll also find a Postman collection that can be downloaded.

## Postman Collection
Our Postman collection contains pre-configured examples you can use to get started with testing as quickly as possible. Postman is a tool for easily interacting with APIs. If you don't have the Postman app installed already, you can [download it](https://www.postman.com/downloads/) from Postman.

<p><a target="_blank" href="/examples/shipperhq-labels.postman_collection.json" download="shipperhq-labels.postman_collection.json">Download the ShipperHQ Rates API Collection <i class="fa fa-arrow-right"></i></a></p>

### Usage

Once you have Postman installed and have downloaded the ShipperHQ Labels API Collection, open Postman, click File > Import, and choose the ShipperHQ Labels collection. This will import the collection and the examples included in it.

You will need to set up your credentials within the collection by clicking on the Collection in the Postman Collections list, clicking Variables, entering your API Key and Authentication Code, and clicking the "Save" icon. You'll also want to confirm your Website Scope is LIVE or, if not, change it to the appropriate scope. Now, by choosing any of the examples you'll be able to run Rates API requests.

:::tip Credentials

Since the Labels API requires a JWT Token in order to run requests, our Postman collection is set up with a Pre-request Script that automatically generates a token for you using the API Key and Authentication Code you've set up whenever you run a Labels API requests within the collection. You can see this script by clicking on the Collection and clicking Pre-request Script. Note that when you integrate the Labels API into your own system, you'll need to make this call yourself.
:::

## Examples

### Example Domestic Request

The following requests a domestic FedEx Ground shipping label for a single package.

```json
query createLabel {
  createLabel(labelInfo: {
    carrier: {
      carrierCode: "shqfedex1"
      carrierType: "fedEx"
    },
    sender: {
       originName: "Austin"
    },
    recipient: {
        country: "US"
        region: "TX"
        city: "Austin"
      	street: "1234 Texas Road"
        zipcode: "78738"
    },
    shipments: [
        {
            pieces: [
                {
                    referenceId: "12agdsjds"
                    weight: "15"
                    length: "5"
                    width: "5"
                  height: "5"
                }
            ],
            shipmentDetail: {
                shipmentId: "KB1234"
                shippingMethodCode: "FEDEX_GROUND"
              selectedDate: "02/04/2022"
            }
        }
    ]
  }) {
    labels {
      trackingId
      labelImage
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
    }
  }
}
```

### Example International Request

The following requests an international label. Note the inclusion of customs-related information highlighted below.

```json
query createLabel {
  createLabel(labelInfo: {
    carrier: {
      carrierCode: "shqfedex1"
      carrierType: "fedEx"
    },
    sender: {
       originName: "Austin"
    },
    recipient: {
        country: "AU"
        region: ""
        city: "Perth"
      	street: "1234 Texas Road"
        zipcode: "6003"
    },
    shipments: [
        {
            pieces: [
                {
                    referenceId: "12agdsjds"
                    weight: 15.0
                    length: 5.0
                    width: 5.0
                  height: 5.0
                  // highlight-start
                  declaredValue: 10.0
                  customsDetails:{
                    countryOfOrigin: "US"
                    itemDescription: "generic"
                    sku: "JACKET1"
                    weight: 15.0
                    qty: 1
                  }
                  // highlight-end
                }
            ],
            shipmentDetail: {
                shipmentId: "KB1234"
                shippingMethodCode: "INTERNATIONAL_PRIORITY"
              selectedDate: "02/15/2022"
            }
        }
    ]
  }) {
    labels {
      trackingId
      labelImage
      shipmentId
      labelUrl
      labelImage
      labelType
      copies
    }
    errors {
      errorCode
      internalErrorMessage
      externalErrorMessage
    }
  }
}
```

### Example Cancellation Request

The following requests the cancellation of a specific shipment (highlighted).

```json
query cancelLabel {
  cancelLabel(cancelLabelInfo: {
    carrier: {
      carrierCode: "shqfedex1"
      carrierType: "fedEx"
    },
    // highlight-start
    trackingId: "794606985160"  
    // highlight-end
  }) {
    responseSummary {
      status
    }
  }
}
```
