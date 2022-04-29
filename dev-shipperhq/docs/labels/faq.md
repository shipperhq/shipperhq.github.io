---
sidebar_position: 50
slug: faq
title: FAQ
tags: [labels, api, guide, faq]
---
import Error from '@site/docs/transclusion/_error.md' // This is an included file (see below the Error component)

## Is the Labels API available?

The ShipperHQ Labels API is currently in closed Beta. Therefore, ShipperHQ is looking for early access partners interested in participating in this program.
Please [contact us](/contact) if interested.

:::info Pricing

Usage of the Labels API will not be free and its use is not covered by a base ShipperHQ subscription. A cost per label will be incurred when creating labels via this API. Exact pricing will be announced in future. [Contact us](/contact) for more information.

:::

## How do I know what value to populate for `orderNumber`?
The `orderNumber` field is used to look up a unique order with the Insights API. If you are using the native ShipperHQ apps/plugins/extensions for supported eCommerce platforms ([complete list here](https://shipperhq.com/pricing)), the `orderNumber` will be the Order Number set by your eCommerce platform. If you are instead using the [`PlaceOrder`](../labels/place-order.md) mutation of the [Labels API](../labels/overview.md), `orderNumber` will be the value you set as the Order Number in your `PlaceOrder` call.

## What are possible `shippingMethodCode` values?

Wherever possible, ShipperHQ uses carrier-standard alphanumeric shipping method codes.

#### UPS `shippingMethodCode` Values

The same method codes are used for UPS small package and UPS Access Point services.

| Code | Service | Notes |
| ---------------------------|---------------------|---------------------|
| `GND` | Ground |  |
| `1DA` | Next Day Air | Called "Express" in some countries. |
| `1DM` | Next Day Air Early |  |
| `1DP` | Next Day Air Saver | Called "Express Saver" in some countries. |
| `2DA` | 2nd Day Air | Called "Expedited" in some countries. |
| `2DM` | 2nd Day Air A.M. |  |
| `3DS` | 3 Day Select |  |
| `STD` | Standard |  |
| `WXS` | Worldwide Express Saver |  |
| `XDM` | Worldwide Express Plus |  |
| `XPD` | Worldwide Expedited |  |
| `XPR` | Worldwide Express |  |

#### FedEx `shippingMethodCode` Values

The same method codes are used for FedEx small package and FedEx Hold at Location services.

| Code | Service | Notes |
| ---------------------------|---------------------|---------------------|
| `FEDEX_GROUND` | Ground | In most cases, only applies to commercial deliveries. |
| `GROUND_HOME_DELIVERY` | Home Delivery | In most cases, only applies to residential deliveries. |
| `FEDEX_NEXT_DAY_EARLY_MORNING` | Next Day Early Morning |  |
| `FEDEX_NEXT_DAY_MID_MORNING` | Next Day Mid Morning |  |
| `FEDEX_NEXT_DAY_AFTERNOON` | Next Day Afternoon |  |
| `FEDEX_NEXT_DAY_END_OF_DAY` | Next Day End of Day |  |
| `FEDEX_2_DAY` | 2nd Day |  |
| `FEDEX_2_DAY_AM` | 2 Day AM |  |
| `FIRST_OVERNIGHT` | First Overnight | Not available for Saturday delivery. See `FIRST_OVERNIGHT_SAT`. |
| `FIRST_OVERNIGHT_SAT` | First Overnight Saturday |  |
| `PRIORITY_OVERNIGHT` | Priority Overnight | Not available for Saturday delivery. See `PRIORITY_OVERNIGHT_SATURDAY`. |
| `PRIORITY_OVERNIGHT_SATURDAY` | Priority Overnight Saturday |  |
| `STANDARD_OVERNIGHT` | Standard Overnight |  |
| `FEDEX_EXPRESS_SAVER` | Express Saver |  |
| `INTERNATIONAL_ECONOMY` | International Economy |  |
| `INTERNATIONAL_FIRST` | International First |  |
| `INTERNATIONAL_GROUND` | International Ground |  |
| `INTERNATIONAL_PRIORITY` | International Priority | Not available for Saturday delivery. See `INTERNATIONAL_PRIORITY_SAT`. |
| `INTERNATIONAL_PRIORITY_SAT` | International Priority Saturday |  |

#### USPS `shippingMethodCode` Values

**Domestic**

| Code | Service | Notes |
| ---------------------------|---------------------|---------------------|
| `0_FCL` | First-Class Mail Letter |  |
| `0_FCPC` | First-Class Mail Postcards |  |
| `15` | First-Class Mail Large Postcards |  |
| `0_FCLE` | First-Class Mail Large Envelope |  |
| `0_FCP` | First-Class Mail Package Service |  |
| `61` | First-Class Package Service |  |
| `53` | First-Class Package Service Hold for Pickup |  |
| `1` | Priority Mail |  |
| `33` | Priority Mail Hold for Pickup |  |
| `42` | Priority Mail Small Flat Rate Envelope |  |
| `43` | Priority Mail Small Flat Rate Envelope Hold for Pickup |  |
| `16` | Priority Mail Flat Rate Envelope |  |
| `37` | Priority Mail Flat Rate Envelope Hold for Pickup |  |
| `38` | Priority Mail Gift Card Flat Rate Envelope |  |
| `39` | Priority Mail Gift Card Flat Rate Envelope Hold for Pickup |  |
| `40` | Priority Mail Window Flat Rate Envelope |  |
| `41` | Priority Mail Window Flat Rate Envelope Hold for Pickup |  |
| `44` | Priority Mail Legal Flat Rate Envelope |  |
| `45` | Priority Mail Legal Flat Rate Envelope Hold for Pickup |  |
| `29` | Priority Mail Padded Flat Rate Envelope |  |
| `46` | Priority Mail Padded Flat Rate Envelope Hold for Pickup |  |
| `28` | Priority Mail Small Flat Rate Box |  |
| `36` | Priority Mail Small Flat Rate Box Hold for Pickup |  |
| `17` | Priority Mail Medium Flat Rate Box |  |
| `35` | Priority Mail Medium Flat Rate Box Hold for Pickup |  |
| `22` | Priority Mail Large Flat Rate Box |  |
| `34` | Priority Mail Large Flat Rate Box Hold for Pickup |  |
| `47` | Priority Mail Regional Rate Box A |  |
| `48` | Priority Mail Regional Rate Box A Hold for Pickup |  |
| `49` | Priority Mail Regional Rate Box B |  |
| `50` | Priority Mail Regional Rate Box B Hold for Pickup |  |
| `58` | Priority Mail Regional Rate Box C |  |
| `59` | Priority Mail Regional Rate Box C Hold for Pickup |  |
| `3` | Priority Mail Express |  |
| `2` | Priority Mail Express Hold for Pickup |  |
| `23` | Priority Mail Express Sunday/Holiday Delivery |  |
| `13` | Priority Mail Express Flat Rate Envelope |  |
| `27` | Priority Mail Express Flat Rate Envelope Hold for Pickup |  |
| `25` | Priority Mail Express Sunday/Holiday Delivery Flat Rate Envelope |  |
| `30` | Priority Mail Express Legal Flat Rate Envelope |  |
| `31` | Priority Mail Express Legal Flat Rate Envelope Hold for Pickup |  |
| `32` | Priority Mail Express Sunday/Holiday Delivery Legal Flat Rate Envelopes |  |
| `62` | Priority Mail Express Padded Flat Rate Envelope |  |
| `63` | Priority Mail Express Padded Flat Rate Envelope Hold for Pickup |  |
| `64` | Priority Mail Express Sunday/Holiday Delivery Padded Flat Rate Envelope |  |
| `55` | Priority Mail Express Flat Rate Boxes |  |
| `56` | Priority Mail Express Flat Rate Boxes Hold for Pickup |  |
| `57` | Priority Mail Express Sunday/Holiday Delivery Flat Rate Boxes |  |
| `4` | Retail Ground |  |
| `77` | Parcel Select Ground |  |
| `6` | Media Mail |  |
| `7` | Library Mail |  |

**International**

| Code | Service | Notes |
| ---------------------------|---------------------|---------------------|
| `INT_13` | First-Class Mail International Letter |  |
| `INT_14` | First-Class Mail International Large Envelope |  |
| `INT_21` | First-Class Mail International Postcard |  |
| `INT_15` | First-Class Package International Service |  |
| `INT_2` | Priority Mail International |  |
| `INT_8` | Priority Mail International Flat Rate Envelope |  |
| `INT_20` | Priority Mail International Small Flat Rate Envelope |  |
| `INT_22` | Priority Mail International Legal Flat Rate Envelope |  |
| `INT_19` | Priority Mail International Window Flat Rate Envelope |  |
| `INT_18` | Priority Mail International Gift Card Flat Rate Envelope |  |
| `INT_23` | Priority Mail International Padded Flat Rate Envelope |  |
| `INT_16` | Priority Mail International Small Flat Rate Box |  |
| `INT_9` | Priority Mail International Medium Flat Rate Box |  |
| `INT_11` | Priority Mail International Large Flat Rate Box |  |
| `INT_24` | Priority Mail International DVD Flat Rate priced box |  |
| `INT_25` | Priority Mail International Large Video Flat Rate priced box |  |
| `INT_1` | Priority Mail Express International |  |
| `INT_10` | Priority Mail Express International Flat Rate Envelope |  |
| `INT_17` | Priority Mail Express International Legal Flat Rate Envelope |  |
| `INT_27` | Priority Mail Express International Padded Flat Rate Envelope |  |
| `INT_26` | Priority Mail Express International Flat Rate Boxes |  |
| `INT_4` | Global Express Guaranteed (GXG) |  |
| `INT_5` | Global Express Guaranteed Document |  |
| `INT_6` | Global Express Guaranteed Non-Document Rectangular |  |
| `INT_7` | Global Express Guaranteed Non-Document Non-Rectangular |  |
| `INT_12` | USPS GXG Envelopes |  |

## What are possible error codes and messages?
[//]: # (ERROR CODES LIST)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<Error components={props.components} />
