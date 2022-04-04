---
sidebar_position: 2
slug: how-rates-work
title: How Rates Work
tags: [rates, api, guide]
---

## High-level overview

![Rates API Overview](./rating-api-overview.png)


## Typical workflow

To generate a shipping quote that contains, usually, multiple rates, the typical workflow would be to:

1. Submit a request that includes the contents of the cart (e.g., item’s weight, value, and quantity) as well as destination address information
1. The request can include any other shipping options required like liftgate, residential address, or specific delivery dates for this order
1. Our API will return shipping rates for the cart using the carriers and rules configured in ShipperHQ

Depending on whether you choose to request simple rates or full shipping rates, we can return basic rate information or full details of carriers, shipments, dates, and shipping options available.


## What is best: a single rate request or multiple rate requests?

Depending on any given workflow, it may be best to request rates from ShipperHQ once per order or multiple times. For example, if rates are being requested from an internal-facing system like an ERP or POS where an employee is responsible for entering an order, a single rate request is often all that's needed. On the other hand, for customer-facing systems like an eCommerce website you may want to show customers shipping rates on product pages, in the shopping cart, and at checkout. Additionally, if your shipping options are more complex, you may provide customers with an initial set of shipping options but give them the ability to change shipping-related properties to meet their needs (e.g. for LTL freight shipping, selecting accessorials; for a date picker, choosing different delivery dates) and request rates for each of their scenarios.

There are no right or wrong answer to this question but what's important is that your application is responsible for sending accurate information to ShipperHQ. Some applications generate lots of rates requests while others require a single rate request for each order.

Here a some pointers that could help you better understand your needs:
* Applications with a simple workflow and little ability to customize an order tend to generate less rate requests
* Applications with lots of options and lots of ability to customize an order (split shipment, delivery date options, ability select a delivery date & time, etc.) tend to generate multiple rate request for each cart.
* Applications that display rates during the process (ex: on the product page, in the cart, at checkout) tend to generate multiple rate requests for each cart as well.

## Key queries used for rate requests

The Rates API is a read-only API. It consists of three queries:

| Query                      | Description         |
| ---------------------------|---------------------|
|`retrieveShippingQuote`     |	Retrieve basic shipping rates including carrier and method titles and total shipping charges. |
|`retrieveFullShippingQuote`	| Retrieve detailed shipping rate information for each shipment, including origin or warehouse information, carrier and method information, freight options available, available dates, in-store pickup information, and more.|
|`retrieveUserSettings`|	Retrieve merchant’s settings like locale and currency.|
