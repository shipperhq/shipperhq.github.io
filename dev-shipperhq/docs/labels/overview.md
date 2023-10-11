---
sidebar_position: 1
slug: overview
title: Overview
tags: [labels, api, guide, overview]
---

The Labels API enables you to produce shipping labels for shipments directly within your application. When used in conjunction with the ShipperHQ [Rates API](rates/overview.md) and [Insights API](insights/overview.md) it provides an end-to-end solution from checkout to fulfillment.

:::info API Access Available on ShipperHQ Enterprise

Access to the ShipperHQ APIs requires a ShipperHQ Enterprise plan. You can check your current plan in [your ShipperHQ Dashboard](https://docs.shipperhq.com/subscription/#What_plan_am_I_on). If you're not currently on an Enterprise plan, please [contact us](https://shipperhq.com/contact) to review upgrade options.

***Note:*** This requirement does not apply to ShipperHQ Partners. Contact our [Partnerships team](https://shipperhq.com/contact) for more info.

:::

## Use cases

Some scenarios in which ShipperHQ's Labels API is most useful are:
- **ERPs and WMS**: In systems responsible for managing inventory and orders, the Labels API can be leveraged to provide built-in shipping capabilities.
- **eCommerce Platforms**: For eCommerce platforms looking to support shipping from within the platform dashboard.
- **Order Management and Fulfillment Systems**: The Labels API can be used to enhance the functionality of order management systems by providing built-in shipping capabilities.
- **POS Systems**: For Point of Sale systems, integrating the Labels API can support ship from store and other fulfillment functionality.

:::caution Early Access Program

The ShipperHQ Labels API is currently in closed Beta. ShipperHQ is looking for early access partners interested in participating in this program.
Please [contact us](/contact) if interested.

:::

:::info Pricing

Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future. [Contact us](/contact) for more information.

:::

## Supported Carriers

ShipperHQ's Early Access Program supports FedEx, UPS, and USPS labels. See the [Labels Quickstart](quickstart.md) for more information.
