---
sidebar_position: 10
slug: faq
title: FAQ
tags: [insights, api, guide, faq]
---
import Error from '@site/docs/transclusion/_error.md' // This is an included file (see below the Error component)

## Is the data for past orders available via the Insights API?

No, ShipperHQ does not store shipment data until the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/) Advanced Feature is enabled. To enable it you will have to accept the term of services related to the storage of the Insights information by ShipperHQ.

Orders placed before this feature is active will not be available via Insights API. Additionally, if the Shipping Insights feature is disabled, no shipment information will be stored until it is reenabled.

## How do I know what value to populate for `orderNumber`?
The `orderNumber` field is used to look up a unique order with the Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the [`PlaceOrder`](../labels/place-order.md) mutation of the [Labels API](../labels/overview.md), `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

## Is it possible to reuse Order Numbers?
Each Order Number (used in the `orderNumber` field) must be unique to a specific [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) configured in ShipperHQ. This means that it is possible to reuse an Order Number only on separate Websites (whether on the same ShipperHQ account or on separate accounts). For example, if you have a dev site connected to the same ShipperHQ account as your production site, you would need to ensure you have separate Websites configured in ShipperHQ for each to avoid duplicate entries for the same Order Number.

## Is the Origin address available?

Not currently. We return the [Origin](https://docs.shipperhq.com/origin-configuration/) name (which is a unique identifier) but do not return the full ship-from address for that Origin. The ship-from address used will match the address configured on the Origin at the time the shipping quote was requested.

## Is Freight Class available via the Insights API?

Not currently. [Freight Class](https://docs.shipperhq.com/ltl-freight-carrier-configuration/#Freight_Classes) will be added in an upcoming version of the Insights API.

## What are possible error codes and messages?
[//]: # (ERROR CODES LIST)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<Error components={props.components} />
