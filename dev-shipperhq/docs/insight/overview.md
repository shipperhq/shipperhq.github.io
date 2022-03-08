---
sidebar_position: 1
slug: overview
title: Insight Overview
authors: []
tags: [insight, api, introduction]
---

# Insight Overview

There are many elements that impact both the shipping rates and options offered to eCommerce customers at checkout as well as how orders are fulfilled. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insight API gives you access to all of those details that can be used in a variety of scenarios including automating fulfillment.

## Use Cases
* **Time-Sensitive Delivery**: ShipperHQ is able to produce accurate [dispatch and delivery dates](https://docs.shipperhq.com/delivery-datecalendar-configuration/) for a number of carriers. Delivery dates can be shown to customers at checkout while dispatch dates can help guide fulfillment operations. The Insight API can be used to retrieve both.
* **Cost-Effective Packing**: ShipperHQ’s [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) functionality can produce estimates of what package or packages should be used for each shipment. This information is used to produce accurate shipping rates but can also be accessed via the Insight API to automate or guide fulfillment operations.
* **Multi-Origin Fulfillment**: When shipping from [multiple warehouses](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), distribution centers, or even third party fulfillment or dropship providers ShipperHQ is able to rate multiple shipments within a single order. The item assignment per shipment and the details of each shipment can be retrieved with the Insight API.
* **Pickup Orders**: ShipperHQ can be used to offer [In Store Pickup](https://docs.shipperhq.com/store-pick-up-configuration/) options to customers at checkout. The Insight API can then return the pickup location along with the order to ensure the order is correctly routed.

## Available information
Information stored by ShipperHQ that can be retrieved with the Insight API includes:
* **Carrier and Method Information**: The carrier and shipping method name, code, and type selected by the customer at checkout
* **Shipping rate information**: Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and more
* **Origin information**: The ship-from location or locations used in rating as well as the item assignment per Origin
* **Packing details**: The packages used by ShipperHQ in rating and the item assignments per package
* **Customer-selected checkout options**: Including LTL Freight acessorials, In-Store Pickup locations, and more

Specific fields and attributes can be found in the Insight API guide.

## Availability

The Insight API relies on having the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/) Advanced Feature enabled in ShipperHQ. The Shipping Insights feature is available on the **Basic**, **Standard**, **Advanced**, and **Enterprise** ShipperHQ plans.
