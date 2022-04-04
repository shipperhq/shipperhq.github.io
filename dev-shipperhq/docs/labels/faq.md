---
sidebar_position: 10
slug: faq
title: FAQ
tags: [labels, api, guide, faq]
---
import Error from '../transclusion/error.md' // This is an included file (see below the Error component)

## Is the Labels API available?

The ShipperHQ Labels API is currently in closed Beta. Therefore, ShipperHQ is looking for early access partners interested in participating in this program.
Please [contact us](/contact) if interested.

:::info Pricing

Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future. [Contact us](/contact) for more information.

:::

## How do I know what value to populate for `orderNumber`?
The `orderNumber` field is used to look up a unique order with the Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the [`PlaceOrder`](../labels/place-order.md) mutation of the [Labels API](../labels/overview.md), `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

## What are possible error codes and messages?
[//]: # (ERROR CODES LIST)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<Error components={props.components} />
