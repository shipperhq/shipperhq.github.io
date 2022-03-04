---
sidebar_position: 2
---

# How Shipping Insights Works

ShipperHQ generates a significant amount of detail about each shipment for which it generates shipping rates and options whenever the ShipperHQ Rating API is called. If the ShipperHQ account associated with the rating call has the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/#Requirements) Advanced Feature enabled, ShipperHQ can store these shipment details for later retrieval with the Insight API.

When using the ShipperHQ native integrations with [Magento 2](https://docs.shipperhq.com/installing-magento-2-shipperhq-extension/), [BigCommerce](https://docs.shipperhq.com/setup-shipperhq-bigcommerce-store/), or [Shopify](https://docs.shipperhq.com/connect-shopify-shipperhq/), enabling the Shipping Insights Advanced Feature on a ShipperHQ account will automatically store shipment information when a customer completes checkout. For other platforms or custom integrations, the [PlaceOrder](place-order) mutation of the [Label API](../label/overview/) can be used when an order is placed to tell ShipperHQ to store shipment information. In either case, the eCommerce-platform Order Number is attached to the shipment information when it is stored and can be used to look up shipment information using the Insight API.

## Workflow
![Insights workflow](insight-workflow.png)
1. A shipping rate request is sent via the [Rate API](../rate/overview/)
2. ShipperHQ generates rates and options and returns them
3. When the customer completes checkout, a call to [PlaceOrder](place-order) causes ShipperHQ to store the details
4. Shipment details are available via the Insight API

## Key queries
The Insight API is a read-only API but can return either shipment details or labels for a given order.

| Query                      | Description         |
| ---------------------------|---------------------|
| `viewOrder`    |	Given an order number, retrieves shipment information for that order. |
| `retrieveLabels`	| If a label has been produced for a given order using the [Label API](../label/overview), returns details of those labels. |

:::tip `PlaceOrder` mutation

Implementation of the related [`PlaceOrder`](place-order) mutation of the [Label API](../label/overview/) may be required to use Shipping Insights. However, this is only the case if you are **not** using the native ShipperHQ apps/plugins/extensions on Magento/Adobe Commerce, BigCommerce, Shopify, SalesForce B2C Commerce Cloud, WooCommerce, Zoey - [complete list here](https://shipperhq.com/pricing)). When using the native ShipperHQ integration with any of these platforms, the PlaceOrder function occurs automatically so you are able to use the Insight API without implementing PlaceOrder yourself.

:::
