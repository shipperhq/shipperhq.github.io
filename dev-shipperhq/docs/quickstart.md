---
sidebar_position: 2
title: Quickstart
---
import APIPlayground from '@site/docs/transclusion/_apiplayground.md' // This is an included file (see below the Error component)

## Introduction
The goal of the ShipperHQ SDK is to give you the information you need to use the ShipperHQ APIs. Each API has its own overview, usage guide, quickstart guide, FAQ, and API reference. On these, you'll find detailed information related to each specific API. Below you'll find general information that applies to the ShipperHQ Developer Platform as a whole.

## ShipperHQ Test Accounts

In order to use ShipperHQ, you'll need to have a ShipperHQ account. Some functionality may also require that your account is on a certain ShipperHQ plan. You can create a ShipperHQ account at [ShipperHQ.com](https://shipperhq.com) which will start with a 15-day free trial.


## Developer Support

To support your integration with ShipperHQ, please use our [Dev Support](/contact) contact form. Our dev support team aims to help you integrate with ShipperHQ as fast as possible with minimal hiccups. Keep in mind that we are ShipperHQ experts, not necessarily experts into your own area of expertise: please share context with us including what you want to achieve and why.

## GraphQL
Our APIs are implemented in GraphQL, an API query language. Compared to other API approaches like SOAP or standard REST, GraphQL makes it easier to request exactly the information you need from our API. This avoids the clutter and extra weight of unnecessary fields in requests and responses.

If you're unfamiliar with GraphQL, Please refer to the [Introduction to GraphQL](https://graphql.org/learn/) article from [GraphQL.org](https://graphql.org) for more information.

### GraphQL Benefits
- **Flexibility:** GraphQL gives users the ability to access the details used to obtain the shipping rate and query what is most important to you and your business. As such, you can query 5 pieces of information or every possible field as you see fit.
- **Customization:** GraphQL gives users the ability to build their own integration into ShipperHQ to rate shipments, retrieve shipment details, produce labels, and more.

## API Playground
[//]: # (API Playground)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<APIPlayground doc="SDK" />

## Authentication

ShipperHQ's APIs use two types of authentication:
- **Rates API** and **Labels API** use a [JWT Token](https://jwt.io/) generated using an API Key and Authentication Code pair. See [Rates API Quickstart Guide](rates/quickstart.md#Authentication) and [Labels API Quickstart Guide](labels/quickstart.md#Authentication) for details.
- **Insights API** uses a function-specific and account-specific Access Token retrieved from a ShipperHQ account. See [Insights API Quickstart Guide](insights/quickstart.md/Authentication) for details.

## Integration Requirements
Each ShipperHQ API is highly flexible and can support a variety of use cases. Due to our implementation of GraphQL, each API call can request only relevant elements be returned. However, for each API, there are certain elements which are important when a ShipperHQ account is using certain functionality. Because of this, if you intend to make your integration of ShipperHQ's APIs available to multiple clients, we require support for certain elements. Meeting these requirements means your integration will support all of the most commonly used ShipperHQ features and functionality.

See specific requirements by API:
- [Rates API Integration Requirements](rates/quickstart#integration-requirements)
- [Insights API Integration Requirements](insights/quickstart#integration-requirements)
- [Labels API Integration Requirements](labels/quickstart#integration-requirements)

:::info
While we have endeavored to provide a complete list of requirements for a baseline integration of ShipperHQ, individual use cases may differ. Therefore, we always recommend contacting [dev support](/contact) prior to building a new integration.
:::

:::note
We don't require single-purpose, custom integrations to meet these requirements. However, we do strongly recommend that all integrations of the ShipperHQ APIs do so in order to support the breadth of ShipperHQ's capabilities and to future-proof the integration against shipping needs that may change in the future.
:::
