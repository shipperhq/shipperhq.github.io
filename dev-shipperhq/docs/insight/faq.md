---
sidebar_position: 4
---

# Shipping Insights FAQ

## Is the data for past orders available via the Insight API?

No, ShipperHQ does not store shipment data until the Shipping Insights Advanced Feature enabled on a ShipperhQ account. Orders placed before this feature is enabled are not available via the Shipping Insights API.

## How do I know what value to populate for `orderNumber`?
The `orderNumber` field is used to look up a unique order with the Shipping Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the PlaceOrder mutation of the Label API, `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

## Is the Origin address available?

Not currently. We return the Origin name (which is a unique identifier) but do not currently return the full ship-from address for that Origin. The ship-from address used will match the address

## Is Freight Class available via Insight?

Not currently. Freight Class will be added in an upcoming version of the API.
