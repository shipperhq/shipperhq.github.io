---
sidebar_position: 4
slug: faq
title: Shipping Insights FAQ
authors: []
tags: [insight, api, faq]
---

# Shipping Insights FAQ

## Is the data for past orders available via the Insight API?

No, ShipperHQ does not store shipment data until the [Shipping Insights](https://docs.shipperhq.com/shipping-insights-configuration/) Advanced Feature enabled on a ShipperHQ account. Orders placed before this feature is enabled are not available via the Insight API. Additionally, if the Shipping Insights feature is disabled, no shipment information will be stored until it is reenabled.

## How do I know what value to populate for `orderNumber`?
The `orderNumber` field is used to look up a unique order with the Insight API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the [`PlaceOrder`](place-order) mutation of the [Label API](../label/overview/), `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

## Is it possible to reuse Order Numbers?
Each Order Number (used in the `orderNumber` field) must be unique to a specific [Website](https://docs.shipperhq.com/adding-websites-in-shipperhq/) configured in ShipperHQ. This means that it is possible to reuse an Order Number only on separate Websites (whether on the same ShipperHQ account or on separate accounts). For example, if you have a dev site connected to the same ShipperHQ account as your production site, you would need to ensure you have separate Websites configured in ShipperHQ for each to avoid duplicate entries for the same Order Number.

## Is the Origin address available?

Not currently. We return the [Origin](https://docs.shipperhq.com/origin-configuration/) name (which is a unique identifier) but do not currently return the full ship-from address for that Origin. The ship-from address used will match the address configured on the Origin at the time the shipping quote was requested.

## Is Freight Class available via Insight?

Not currently. [Freight Class](https://docs.shipperhq.com/ltl-freight-carrier-configuration/#Freight_Classes) will be added in an upcoming version of the Insight API.
