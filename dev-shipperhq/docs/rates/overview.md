---
sidebar_position: 1
slug: overview
title: Overview
tags: [rates, api, guide, overview]
---

## What are rates?

Shipping rates are an essential part of commerce and represent what options are given to customers to receive their order (e.g. delivery, pickup, etc.) and how much the customer is charged. Rates may include a variety of fulfillment methods like small parcel, freight (LTL/FTL), in-store pickup, curb-side pickup, or local delivery. Along with each of these is an associated price, the shipping rate which might be zero, that the customer pays for that service.

These shipping options, the amounts charged for them, and a set of properties that describe them are called "rates" in ShipperHQ. At a minimum, information used to request rates will include a ship-to location (shipping address) and at least one item (a product) that's being shipped. The information returned includes, at a minimum, the shipping option name, and a price.

Depending on the use case and how you implement the Rates API, you may provide additional information like ship-from address, LTL freight accessorials, selected delivery date, product Shipping Groups, dimensions, etc. and receive additional details like expected packacking, per-fulfillment-location rates and items, dispatch dates, and more.


:::info API Access Available on ShipperHQ Enterprise

Access to the ShipperHQ APIs requires a ShipperHQ Enterprise plan. You can check your current plan in [your ShipperHQ Dashboard](https://docs.shipperhq.com/subscription/#What_plan_am_I_on). If you're not currently on an Enterprise plan, please [contact us](https://shipperhq.com/contact) to review upgrade options.

***Note:*** This requirement does not apply to ShipperHQ Partners. Contact our [Partnerships team](https://shipperhq.com/contact) for more info.

:::

## Use cases
Some scenarios in which ShipperHQ's Rates API is frequently used are:
* **eCommerce Sites:** As a critical aspect of eCommerce, shipping and delivery rates retrieved using the Rates API can be displayed to customers on product pages, shopping carts, and checkouts to give them accurate and relevant options.
* **ERPs and Customer Service systems:** When an employee is responsible for placing or revising an order on behalf of a customer it's important to be able to get updated shipping rates and options that can be applied to the order.
* **Order Management and Fulfillment systems:** Once an order's been placed, it may be necessary to make adjustments to the order (e.g. if an item is back-ordered or being shipped separately) and having updated shipping rates within the order management system makes this much easier.

## How does a typical platform interact with rates?

![Rates API Overview](./rate-high-level-overview.png)

1. An application request rates via the Rates API
2. ShipperHQ calculates rates based on the cart contents, ship-to address, and ShipperHQ configuration
3. The buyer select the delivery option of their choice
4. The order is placed (not represented here) and then processed

## How does ShipperHQ produce rates?

ShipperHQ is a rule-based platform that generates shipping rates following key characteristics of the purchase (items in the cart, weight, dimensions, buyer category, cart value, etc). ShipperHQ's most used functionalities are dimensional shipping (being able to compute box size based on product dimensions), live rates (being able to query one or multiple carriers like UPS, USPS, FedEx to get real-time pricing) and delivery dates (being able to predict when a package will be delivered). We also support LTL freight, in-store pickup, local delivery and multi-location fulfillment. You can learn more about ShipperHQ's functionality at [ShipperHQ.com](https://shipperhq.com/).

With the ShipperHQ Rates API you don't have to implement all of this logic within your application. Instead, you can integrate with our Rates API to easily get shipping options and rates. This means you can support the most complex shipping and delivery use cases without writing custom code from scratch.
