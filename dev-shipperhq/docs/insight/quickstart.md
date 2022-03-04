---
sidebar_position: 3
---

# Shipping Insights Quickstart
This document is intended for technical architects and developers that need to integrate with ShipperHQ’s Shipping Insights API to build their own integration to retrieve shipment details from ShipperHQ.

Use the information outlined in this document to view how custom fields and attributes are queried and modified.

Note, this does not document the standard types and fields the API provides. This information is included in the [Shipping Insights](https://dev.shipperhq.com/order-view-service/) API documentation or can be obtained via our GraphQL playground. Please refer to the [Introduction to GraphQL](https://graphql.org/learn/) article from [GraphQL.org](https://graphql.org) for more information about GraphQL.

## GraphQL Shipping Insights API Benefits
- Flexibility: The GraphQL Shipping Insights API gives users the ability to access the details used to obtain the shipping rate and query what is most important to you and your business. As such, you can query 5 pieces of information or every possible field as you see fit.
- Customization: The GraphQL Shipping Insights API gives users the ability to build their own integration into ShipperHQ to retrieve shipment details. For example, you can use it to get shipment information into your order processing system.

## Requirements
* ShipperHQ account with the Shipping Insights Advanced Feature enabled
* An ecommerce platform or custom integration supporting the Place Order API, either:
  * ShipperHQ’s native Magento 2, BigCommerce, or Shopify app installed on the eCommerce platform
  * A custom integration implementing both the ShipperHQ Rating API and the ShipperHQ Place Order API

## Authentication
The Shipping Insights API is accessed using a unique access token generated in a ShipperHQ account. Each access token is unique per website for multi-site ShipperHQ accounts.

Since Access Tokens are unique for each ShipperHQ account and website, Partners or Third Party integrations should include a mechanism for merchants to input their ShipperHQ Insights access token in the integration. Each ShipperHQ merchant will generate an access token on their ShipperHQ account in order to access the Shipping Insights API for their orders.

### Generating an Access Token
To generate an access token in ShipperHQ:
* Log into a ShipperHQ account
* Ensure the Shipping Insights Advanced Feature is enabled (under Advanced Features on the left-hand navbar)
* Click “Websites” in the left-hand navbar and click the edit icon to edit the website which you wish to connect to
* Go to the “Integrations” tab on the Website
* Under Shipping Insights, select Generate New Access Token

:::danger Changing Live Access Tokens

Generating a new Access Token invalidates any previously generated Access Tokens for that website. For this reason, this should not be done while in production unless absolutely necessary. Access Tokens should be kept secure and not exposed on any client facing code or committed to public code repositories.

:::

## API Details
### Endpoint
| Protocol                      | Endpoint         |
| ---------------------------|---------------------|
| `POST` |  https://ovs.shipperhq.com |

### Request Headers
The following headers are required for every Shipping Insights API call.

| Header                      | Description         |
| ---------------------------|---------------------|
| `X-ShipperHQ-Access-Token` | The secret token retrieved from the ShipperHQ dashboard |
| `X-ShipperHQ-Scope` | The Scope for this ShipperHQ account (accepts `LIVE`,`TEST`,`DEV` or `INT`). If unsure or if the ShipperHQ account does not have multiple scopes, use `LIVE`. |

###

### Errors
TODO

## Testing
To test the Shipping Insights API you will need to already have either:
1. ShipperHQ's native integration installed and enabled on Magento 2, BigCommerce, or Shopify
2. A custom integration of the ShipperHQ Rating API and Place Order API

### Enable Shipping Insights & Retrieve Access Token
Within the ShipperHQ you wish to use enable the Shipping Insights Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account.

### Place an Order
Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information.

### Test with the Shipping Insights API Playground
- Navigate to the ShipperHQ GraphQL playground.
- In a new GraphQL playground window, enter the Shipping Insights API Endpoint URL into the URL bar.
- Click the Docs button.
- Click the Reload Docs icon.
- Click the Query link to view a list of available queries and the arguments and fields you can include in your request.

## Examples

Since the Shipping Insights API is implemented in GraphQL, you can retrieve as much information as you want or as little as you need. Below you'll find examples of both simple and more advanced Shipping Insights requests.

### Basic Example
```json title="Basic Example Request"
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

```json title="Basic Example Response"
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

```json title="Extended Example Request"
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

```json title="Extended Example Response"
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
