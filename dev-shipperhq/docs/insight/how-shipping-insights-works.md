---
sidebar_position: 2
slug: how-shipping-insights-works
title: How Shipping Insights Works
authors: []
tags: [insight, api, introduction]
---

# How Shipping Insights Works

ShipperHQ generates a significant amount of detail about each shipment for which it creates shipping rates and options each time an application calls the Rating API. Once the ShipperHQ account associated with the rating call has the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/#Requirements) Advanced Feature enabled, ShipperHQ stores these shipment details for later retrieval with the Shipping Insights API.

When using the ShipperHQ native integrations with [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/), enabling the Shipping Insights Advanced Feature on a ShipperHQ account will automatically store shipment information when a customer completes a checkout. For other platforms or custom integrations, you can use the [PlaceOrder](place-order) mutation of the [Label API](../label/overview/) to capture a successfull checkout and store shipment information. In either case, the eCommerce-platform Order Number is attached to the shipment information when stored and can be used to look up shipment information using the Shipping Insights API.

## Workflow
![Shipping Insights workflow](./insight-workflow.png)

1. A shipping rate request is sent via the [Rate API](../rate/overview/)
2. ShipperHQ generates rates and options and returns them
3. When the customer completes checkout, a call to [PlaceOrder](place-order) causes ShipperHQ to capture this quote as an order
4. Order and shipment details are then available via the Shipping Insights API

## Key queries
The Shipping Insights API is a read-only API that can return shipment details for shipments rated with the [Rate API](../rate/overview/).

| Query                      | Description         |
| ---------------------------|---------------------|
| `viewOrder`    |	Given an order number, retrieves shipment information for that order. |

:::tip `PlaceOrder` mutation

Implementation of the related [`PlaceOrder`](place-order) mutation of the [Label API](../label/overview/) may be required to use Shipping Insights. However, this is only the case if you are **not** using the native ShipperHQ apps/plugins/extensions on Magento/Adobe Commerce, BigCommerce, Shopify, SalesForce B2C Commerce Cloud, WooCommerce, Zoey - [complete list here](https://shipperhq.com/pricing)). When using the native ShipperHQ integration with any of these platforms, the PlaceOrder function occurs automatically, so you can use the Shipping Insights API without implementing PlaceOrder yourself.

:::
