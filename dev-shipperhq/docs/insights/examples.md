---
sidebar_position: 4
slug: examples
title: Examples
authors: []
tags: [insights, api, guide, examples]
---

Since the Insights API is implemented in GraphQL, you can retrieve as much information as you want or as little as you need. Below you'll find examples of both simple and more advanced Insights API requests and their associated responses.

## Postman Collection
Download our [Postman](https://www.postman.com/downloads/) collection with pre-configured examples you can use to get started with testing as quickly as possible. Once you've downloaded the collection, go to File > Import in Postman and choose the downloaded file to import it. Review the Collection Variables and fill in the required credentials. You can then run any of the examples provided.

<a target="_blank" href="/examples/shipperhq-insights.postman_collection.json" download="shipperhq-insights.postman_collection.json">Download Collection <i class="fa fa-arrow-right"></i></a>

## Basic Example

We've put together a basic example of an Insights API request below showing a minimal amount of information that can be retrieved.

### Basic Example Request
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

### Basic Example Response
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

## Extended Example

The extended example below shows a much more extensive set of information that can be retrieved and how it is returned.

### Extended Example Request
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
### Extended Example Response
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
