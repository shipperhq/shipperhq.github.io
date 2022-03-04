---
sidebar_position: 1
---

# Rate API Overview

## What are rates?

Shipping rates are an essential part of commerce. They includes various delivery methods like small parcels, freight (LTL/FTL), in-store pickup, curb-site pickup and local delivery. All of these are Shipping Rate which we will call “rates” in this documentation. In general a rate is a set of properties that describe options to get an order delivered to a specific location using a specific delivery method. The minimal information it contains is usually a name, description and price (in a currency).

## How does a typical platform interact with rates?

![Rating API Overview](./rate-high-level-overview.png)

1. An application request rates via this API
2. ShipperHQ calculate rates based on the cart content and buyer destination
3. The buyer select the delivery options of his choice
4. The platform flow continue (not represented here) and the order is processed

## How does ShipperHQ produce rates?

ShipperHQ is a rule-based platform that generates shipping rates following key characteristics of the purchase (items in the cart, weight, dimensions, buyer category, cart value, etc). ShipperHQ most used functionalities are dimensional shipping (being able to compute box size based on product dimensions), live rates (being able to query one or multiple carriers like UPS, USPS, FedEX to get real-time pricing) and Delivery Dates (being able to predict when a package will be delivered). We also support freight (LTL, FTL), local-pickup, local-delivery and multi-location (for more information about ShipperHQ capabilities, please visite our [website](https://www.shipperhq.com/))

Thanks to the rating API, you don’t have to implement all this logic in your application: via our simple to use rating API, you can integrate with ShipperHQ to easily get rates. With a few lines of code, you will be able to support the most complex shipping and delivery use case with split-shipments, multiple origins, different delivery methods (per shipment) as well as provide delivery dates at checkout time for each shipment.