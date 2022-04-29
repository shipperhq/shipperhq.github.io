---
sidebar_position: 10
slug: faq
title: FAQ
tags: [rates, api, guide, faq]
---
import Error from '@site/docs/transclusion/_error.md' // This is an included file (see below the Error component)

## Does the rating API return duties (DDU/DDP) information?

When using either the ShipperHQ [Landed Cost Engine](https://docs.shipperhq.com/landed-cost-engine-configuration/) feature or a specific carrier or 3PL which returns duties & taxes, the amount of duties and taxes is returned in the Rates API via the [`advancedFee`](https://dev.shipperhq.com/rates-service/#definition-AdvancedFee) attribute and its `customDuties` field.

## What are possible error codes and messages?
[//]: # (ERROR CODES LIST)
[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<Error components={props.components} />
