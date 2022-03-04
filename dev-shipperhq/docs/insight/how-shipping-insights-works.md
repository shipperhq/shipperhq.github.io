---
sidebar_position: 2
---

# How Shipping Insights Works

ShipperHQ generates a significant amount of detail about each shipment for which it generates shipping rates and options whenever the ShipperHQ Rating API is called. If the ShipperHQ account associated with the rating call has the Shipping Insights Advanced Feature enabled, ShipperHQ can store these shipment details for later retrieval with the Shipping Insights API.

When using the ShipperHQ native integrations with Magento 2, BigCommerce, or Shopify, enabling the Shipping Insights Advanced Feature on a ShipperHQ account will automatically store shipment information when a customer completes checkout. For other platforms or custom integrations, the Place Order API can be used when an order is placed to tell ShipperHQ to store shipment information. In either case, the eCommerce-platform Order ID is attached to the shipment information when it is stored and can be used to look up shipment information using the Shipping Insights API.

## Workflow
![Insights workflow](/img/insight/insight-workflow.png)

## Available information
Information stored by ShipperHQ that can be retrieved with the Shipping Insights API includes:
* **Carrier and Method Information**: The carrier and shipping method name, code, and type selected by the customer at checkout
* **Shipping rate information**: Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and more
* **Origin information**: The ship-from location or locations used in rating as well as the item assignment per Origin
* **Packing details**: The packages used by ShipperHQ in rating and the item assignments per package
* **Customer-selected checkout options**: Including LTL Freight Accessorials, In-Store Pickup locations, and more

Specific fields and attributes can be found in the Shipping Insights API guide.
