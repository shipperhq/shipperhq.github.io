---
sidebar_position: 1
slug: overview
title: Overview
authors: []
tags: [insights, api, guide, overview]
---

Many elements impact both the shipping rates and shipping options offered to customers. Once selected, these options determine how to fulfill these orders. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, when to dispatch the shipment, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details so that you can integrate them into your application.

[Learn more about the ShipperHQ Shipping Insights Advanced Feature <i class="fa fa-arrow-right"></i>](https://docs.shipperhq.com/shipping-insights-configuration/)

:::tip Ready-to-Use Integrations

ShipperHQ and our partners provide a number of out of the box integrations with eCommerce platforms and other software that can be used with no coding required. If you use one of these platforms or products, we recommend evaluating the existing integration to see if it meets your needs. Existing integrations include:
- [Magento (Adobe Commerce)](https://docs.shipperhq.com/shipping-insights-configuration/)
- [Shopify](https://docs.shipperhq.com/shipping-insights-configuration/)
- [ShipStation](https://docs.shipperhq.com/how-to-connect-shipperhq-to-shipstation/)
- [agnoStack](https://docs.shipperhq.com/how-to-connect-shipperhq-to-agnostack/)

:::

## Use Cases
* **Time-Sensitive Delivery**: ShipperHQ produces accurate [dispatch and delivery dates](https://docs.shipperhq.com/delivery-datecalendar-configuration/) for lots of carriers. Delivery dates can be shown to customers at checkout, while dispatch dates can help guide fulfillment operations. The Insights API can retrieve both.
* **Cost-Effective Packing**: ShipperHQ’s [Dimensional Packing](https://docs.shipperhq.com/setting-up-and-using-dimensional-shipping/) recommends what package to use for each shipment. This information is used required to produce accurate shipping rates. You can retrieve this information via the Insights API to automate, execute or inform your fulfillment operations.
* **Multi-Origin Fulfillment**: When shipping from [multiple warehouses](https://docs.shipperhq.com/setup-multiorigin-dropshipping/), distribution centers, or even third party fulfillment or dropship providers ShipperHQ produces split-shipments orders. Most eCommerce platforms are not able to represent these orders. You can retrieve the fulfillment information, for each shipment, via the Insights API to automate, execute or inform your fulfillment operations.
* **Pickup Orders**: ShipperHQ offers  [In Store Pickup](https://docs.shipperhq.com/store-pick-up-configuration/). Not all platforms support In Store Pickup or orders with mixed delivery methods.  You can retrieve this information via the Insights API to automate, execute or inform your fulfillment operations.

## Available information
Via the Insights API, you can query the following information:
* **Carrier and Method Information**: The carrier and shipping method name, code, and type selected by the customer at checkout
* **Shipping rate information**: Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and much more meta-data associated with each order
* **Origin information**: The ship-from location or locations used in rating as well as the item assignment per Origin
* **Packing details**: The packages used by ShipperHQ in rating and the item assignments per package
* **Customer-selected checkout options**: Including LTL Freight accessorials, In-Store Pickup locations, and more

Specific fields and attributes can be found in the [Insights API Reference](https://dev.shipperhq.com/insights-service/).

## Availability

The Insights API requires to activate the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/) Advanced Feature.

 The Shipping Insights feature is available on the **Standard**, **Advanced**, and **Enterprise** ShipperHQ plans (see our [pricing page](https://shipperhq.com/pricing) for more information).
