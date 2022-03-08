---
sidebar_position: 10
title: Rate FAQ
---
import Error from '../transclusion/error.md' // This is an included file (see below the Error component)

## Does the rating API return duties (DDU/DDP) information?

When using either the ShipperHQ [Landed Cost Engine](https://docs.shipperhq.com/landed-cost-engine-configuration/) feature or a specific carrier or 3PL which returns duties & taxes, the amount of duties and taxes is returned in the Rate API via the [`advancedFee`](https://dev.shipperhq.com/rate-service/#definition-AdvancedFee) attribute and its `customDuties` field.

## What are the possible error codes and their definitions?

If ShipperHQ encounters an error processing a Rate API request or if the ShipperHQ account is configured to prevent shipping in a given scenario, the Rate API will return an `error` object with an `errorCode` and associated `internalErrorMessage`. Possible errors are described below.

These errors can be categorized into several types:
- **Auth:** Indicate that the credentials used are not successfully matching a ShipperHQ account and/or website. Ensure the credentials used are correct (and that the JWT token used has not expired), ensure the Environment Scope matches your website, and that your ShipperHQ account is active.
- **General:** Indicate that ShipperHQ was unable to successfully process the request. If you encounter this type of error, confirm that your request is valid first and if so contact [ShipperHQ support](https://dev.shipperhq.com/contact).
- **Request:** Indicate an issue with the format of an API request or the data it contains. This type of error can be corrected by ensuring the request is formatted correctly and verifying the data in your request is accurate. For example, that the correct country or state/province/region codes are being used.
- **Account:** Indicate an issue with the ShipperHQ account configuration. For example, that the Origin being used has an invalid address. This type of error can be corrected by making the required ajustments to your ShipperHQ account.
- **Carrier:** Indicate that ShipperHQ was unable to return results from a specific carrier. This may be intentional (e.g. error `304` indicates that the carrier is configured in ShipperHQ to explicitly not be allowed for a certain country) or unintentional (e.g. errors `305`, `306`, and `307` indicate that the request did not include information which is required by that carrier to return results). These errors may also mean that the carrier's API was unavailable when the request was attempted.



### Error codes & messages

[//]: # (This is an imported file - Do not modify directly this section)
[//]: # (Look for the import statement at the top of the file to have the path of the included file)
<Error components={props.components} />