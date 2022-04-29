---
sidebar_position: 1
title: Overview
slug: overview
---

The ShipperHQ SDK provides an end to end solution to help merchants, developers, and partners integrate with ShipperHQ for purposes and in places not currently available through the native ShipperHQ and eCommerce platform experience. This means being able to take advantage of ShipperHQ's advanced shipping functionality wherever it's needed without having to build a fully custom solution.

:::info Existing Integrations
Our APIs are primarily intended for developers looking to integrate ShipperHQ with a platform where no integration yet exists. ShipperHQ has integrations with a number of major eCommerce platforms that don't require any custom integration or code. We recommend using our existing integrations whenever possible since these are maintained directly by our team.

[Supported eCommerce platforms <i class="fa fa-arrow-right"></i>](https://shipperhq.com/marketplace#platforms)
:::

### High-level Workflow
![High Level ShipperHQ processes and API](./sdk-main-processes-and-api.jpg)

While developers can use each API independently, the goal of the ShipperHQ SDK is to make it easy to integrate with the full ShipperHQ workflow following this sequence:
  1. [Rates API](rates/overview.md)
  2. [PlaceOrder Mutation](labels/place-order.md) (not required for most major integrations)
  3. [Insights API](insights/overview.md)
  4. [Labels API](labels/overview.md) (in beta)

## Use cases

To illustrate what can be achieved with ShipperHQ SDK, here are some examples of use cases that have been implemented using ShipperHQ's APIs.

### CRM

Give customer service teams full visibility of the delivery option selected by a customer when they place an order. And, give the team shipping rates and options that respect complex business logic configured in ShipperHQ when placing or adjusting orders on behalf of customers. Shipping quotes can be live and accurate instead of estimated plus the sales person can see additional information like expected delivery date (if configured in ShipperHQ).

[CRM Integration Blueprint <i class="fa fa-arrow-right"></i>](use-cases/use-case-crm.md)


<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Rates API](rates/overview.md) to get shipping options and rates
* [PlaceOrder Mutation](insights/place-order.md) to capture successful orders placed or updated via the CRM
* [Insights API](insights/overview.md) to display full shipping details

</details>

### ERP

When creating draft-orders or manual orders, rates can be retrieved from ShipperHQ so that the order shipping costs can be accurately set. It enables multi-channel orders (online, offline, direct sale, etc.) to use the exact same logic, or variations of it, for shipping & delivery rates. The shipping rates returned by ShipperHQ can be overridden in your ERP following your own business rules and authorization system. Usually the ERP inform the rate engine of the various `shipping-groups` for the products, present origin-locations with inventory and more to leverage key ShipperHQ functionalities like multi-origin or multi-shipment fulfillment as well as differentiate small-packages vs freight orders.

[ERP Integration Blueprint <i class="fa fa-arrow-right"></i>](use-cases/use-case-erp.md)

<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Rates API](rates/overview.md) to get rates
* [PlaceOrder Mutation](insights/place-order.md) to capture successful orders

*Optionally*

* [Insights API](insights/overview.md) to fulfill efficiently based on the recommended shipment details from ShipperHQ
* [Labels API](labels/overview.md) (in beta) to print shipping labels

</details>

### Order Management System

ShipperHQ customers uses various order management systems and the Insights API is a key to leverage the detailed shipment information produced by ShipperHQ during rating at time of fulfillment.

The [Insights API](insights/overview.md) enables order management systems to access information like ship-from locations (Origins), package sizes and types, label providers, service classes, and delivery and dispatch dates.

<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Insights API](insights/overview.md) to retrieve shipment information from ShipperHQ

</details>

### Point of Sale

Integrating ShipperHQ into a POS system means being able to generate the specific delivery options available for a given product or order providing a cohesive customer experience between online and offline sales.

<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Rates API](rates/overview.md) to get shipping options and rates

</details>

### eCommerce Platform

While ShipperHQ supports many [major eCommerce platforms](https://shipperhq.com/marketplace#platforms), the [Rates API](rates/overview.md) means developers can integrate ShipperHQ to provide rates at checkout in any eCommerce platform. This means being able to leverage the rich functionality of ShipperHQ's rules engine and advanced functions. For this use case, the [Rates API](rates/overview.md) can be called at any point where shipping rates are needed such as product pages, carts, and checkout.

<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Rates API](rates/overview.md) to get shipping options and rates

*Optionally*
* [PlaceOrder Mutation](insights/place-order.md) to store ShipperHQ shipment information against orders
* [Insights API](insights/overview.md) to retrieve rich shipment information for display within the eCommerce platform admin

</details>

### Headless Commerce

No need for an eCommerce platform. With the ShipperHQ SDK you can build your own experience using whichever tools and technologies that you select. The [Rates API](rates/overview.md) will enable you to focus on the user experience while all the business logic is configured in ShipperHQ. The [Insights API](insights/overview.md) will allow you to place orders and retrieve all the fulfillment information required to complete this order.

<details>
  <summary><strong>Relevant APIs</strong></summary>

* [Rates API](rates/overview.md) to get shipping options and rates
* [PlaceOrder Mutation](insights/place-order.md) to store ShipperHQ shipment information against orders
* [Insights API](insights/overview.md) to retrieve shipment information

</details>
