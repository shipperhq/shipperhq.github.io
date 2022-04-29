---
sidebar_position: 10
title: 'Blueprint: CRM'
slug: blueprint-crm
---

## Introduction

### Prerequisites
- An active ShipperHQ account on the ShipperHQ Enterprise plan
- Developers comfortable with using GraphQL (API standard used by ShipperHQ) and Json (results are provided with this format)
- Developers need to understand the CRM into which they will be integrating and have the ability to extend the CRM’s functionality via external API calls to ShipperHQ

### Use Cases:

#### Primary use case:

>As a sales representative using a CRM to create quotes and sales orders, I want to obtain shipping rates and options via ShipperHQ so that the available shipping options and their cost can be accurately calculated for inclusion in my quote.

When creating an order, make an API call to ShipperHQ's Rates API to retrieve shipping rates and options for that specific order. ShipperHQ can also return additional information like delivery dates, packaging, and split shipments as appropriate.

:::note Relevant APIs

* [Rates API](rates/overview.md) to get shipping options and rates

:::

#### Advanced use case:

>As a sales representative using a CRM,  I want to consult which shipping method was used for an order based on a quote captured in the CRM

ShipperHQ can store detailed shipment information about an order including: Origin Location for each shipment, weight & dimensions of each shipment, support for multiple delivery methods (Small Parcels, LTL, Pickup in Store, Local Delivery, etc.), Delivery Date & Time, etc. This can then be retrieved using the Insights API for display or automated use within the CRM.

:::note Relevant APIs

* [PlaceOrder Mutation](labels/place-order.md) to capture successful orders placed or updated via the CRM
* [Insights API](insights/overview.md) to display full shipping details

:::

## Blueprint for CRM integration

**Main use case: getting rates from ShipperHQ**

These instructions are high-level and quite technical: a good knowledge of APIs, integrations, GraphQL is required to follow this blueprint. It is not a step / step guide to integrate any CRM but provides clear milestones from the most simple integration to the more complex (and complete).

:::caution
It is technically possible to use your live site to get rates because the rate-API is a read-only API. This being said, a preferred solution is to use a scope that is not `LIVE` (e.g. `TEST`, `DEVELOPMENT` or `INTEGRATION`). If you don't use a different scope or ShipperHQ account and instead use the LIVE ShipperHQ account and scope of your production website, be extremely careful when making any changes to your ShipperHQ account so as to not impact live rates.
:::

### Getting Started

Please take some time to familiarize yourself with the ShipperHQ Rates API:
- Read the [Rates API Guide](https://dev.shipperhq.com/docs/rates/overview)
- Review the [Rates API Reference](https://dev.shipperhq.com/rates-service)
- Download and try out our [Rates API Postman collection](https://dev.shipperhq.com/docs/rates/examples#postman-collection)

We recommend starting with a focus on the simpler [`retrieveShippingQuote`](https://dev.shipperhq.com/docs/rates/examples#retrieveshippingquote) query. Once you have this working, you can decide whether `retrieveShippingQuote` is enough for your needs. If not, please zoom-in and use the more complete (and complex) query: [`retrieveFullShippingQuote`](https://dev.shipperhq.com/docs/rates/examples#example-retrieve-shipping-quote-with-scheduling-option).

:::tip
Re-use the token produced by our Postman collection to start coding with the language of your choice. This means you can get an understanding of the meat of the Rates API without having to first implement authentication yourself. We recommend that you use the language that will be used to integrate with the CRM so that you have a working prototype uncoupled from the CRM extension framework.
:::

### What ShipperHQ functionality should I support?
Because this is a custom integration, you do not need to support all of ShipperHQ's functionality. However, it is highly recommended that you support all the functionality for your LIVE site. Pay close attention to the [`ItemAttributes`](https://dev.shipperhq.com/docs/rates/quickstart#item-attributes) used in production. If you do not support the same attributes, the rates displayed in the CRM will be different from the rates displayed on the Websites and this can lead to a negative sales experience for the buyers or for extra cost at fulfillment.

You'll find more guidance on what elements we recommend supporting on the [Rates API Quickstart Guide](https://dev.shipperhq.com/docs/rates/quickstart#integration-requirements).

## Advanced Use Cases

### Set up PlaceOrder from your CRM

In order to leverage the Insight API that contains all the order information, you need to notify ShipperHQ that a quote is now an order. To do this, you need to use the [`PlaceOrder`](labels/place-order.md) mutation. A call to PlaceOrder should be made each time an order is confirmed in your CRM. It can be done immediately or on a scheduled basis.

### Retrieve the information with the Insights API and display it in your CRM

Once your orders are properly captured in ShipperHQ, you can use the [Insights API](https://dev.shipperhq.com/docs/insights/overview) to retrieve all the fulfillment information.

## How can I get support for my integration?
Developers should use the dedicated [contact form](https://dev.shipperhq.com/contact) on our developer portal.
