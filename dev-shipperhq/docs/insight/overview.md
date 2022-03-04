---
sidebar_position: 1
---

# Shipping Insights Overview

There are many elements that impact both the shipping rates and options offered to eCommerce customers at checkout as well as how orders are fulfilled. For example, what carrier and service to use, what package or packages to use, what warehouse to ship from, etc. When ShipperHQ is used to produce shipping rates and options, it will determine many of these elements as part of its rating calculations. The Insights API gives you access to all of those details that can be used in a variety of scenarios.

## Use Cases
* **Time-Sensitive Delivery**: ShipperHQ is able to produce accurate dispatch and delivery dates for a number of carriers. Delivery dates can be shown to customers at checkout while dispatch dates can help guide fulfillment operations. The Shipping Insights API can be used to retrieve both.
* **Cost-Effective Packing**: ShipperHQ’s Dimensional Packing functionality can produce estimates of what package or packages should be used for each shipment. This information is used to produce accurate shipping rates but can also be accessed via the Shipping Insights API to automate or guide fulfillment operations.
* **Multi-Origin Fulfillment**: When shipping from multiple  warehouses, distribution centers, or even third party fulfillment or dropship providers ShipperHQ is able to rate multiple shipments within a single order. The item assignment per shipment and the details of each shipment can be retrieved with the Shipping Insights API.
* **Pickup Orders**: ShipperHQ can be used to offer In Store Pickup options to customers at checkout. The Shipping Insights API can then return the pickup location along with the order to ensure the order is correctly routed.

## Available information
Information stored by ShipperHQ that can be retrieved with the Shipping Insights API includes:
* **Carrier and Method Information**: The carrier and shipping method name, code, and type selected by the customer at checkout
* **Shipping rate information**: Shipping rates retrieved from the carrier, rate charged to the customer (e.g. free shipping), delivery and dispatch dates, and more
* **Origin information**: The ship-from location or locations used in rating as well as the item assignment per Origin
* **Packing details**: The packages used by ShipperHQ in rating and the item assignments per package
* **Customer-selected checkout options**: Including LTL Freight Accessorials, In-Store Pickup locations, and more

Specific fields and attributes can be found in the Shipping Insights API guide.
