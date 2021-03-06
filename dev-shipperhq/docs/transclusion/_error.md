[//]: # (This is a file included in other files: all the FAQ of all APIs contain this file)
[//]: # (IMPORTANT: Headers in Docusaurus transclusions are not added to the right-hand navbar. When included in a doc, this file should be preceded by a relevant header )

If ShipperHQ encounters an error processing a Rate API request or if the ShipperHQ account is configured to prevent shipping in a given scenario, the Rate API will return an `error` object with an `errorCode` and associated `internalErrorMessage`. Possible errors are described below.

These errors can be categorized into several types:
- **Auth:** Indicate issues with the credentials used. Ensure your credentials are accurate and not expired, that your ShipperHQ account is active, and that the Environment Scope in use is correct.
- **General:** Indicate that ShipperHQ was unable to successfully process the request. If you encounter this type of error, confirm that your request is valid first and if so contact [Dev Support](/contact).
- **Request:** Indicate an issue with the format of an API request or the data it contains. Corrected by ensuring the request is formatted correctly and verifying the data in your request is accurate. For example, that the correct country or state/province/region codes are being used.
- **Account:** Indicate an issue with the ShipperHQ account configuration. For example, that the Origin being used has an invalid address. Corrected by making the required adjustments to your ShipperHQ account.
- **Carrier:** Indicate that ShipperHQ was unable to return results from a specific carrier. This may be intentional (e.g. error `304` indicates that the carrier is configured in ShipperHQ to explicitly not be allowed for a certain country) or unintentional (e.g. errors `305`, `306`, and `307` indicate that the request did not include information which is required by that carrier to return results). These errors may also mean that the carrier's API was unavailable when the request was attempted.

### Error codes & messages

| Error Code | Type | Error Message |
|------|-----|-----|
|1|General| Request Error. There was an error processing your request.|
|3|Auth| Invalid Credentials. The credentials you supplied are invalid.|
|4|General| Internal server error.  We have been notified of this issue.|
|5|General| Service Unavailable. The service is currently unavailable.  Please try again later.|
|6|General| Access Not Allowed. This host is not permitted to access this service.|
|7|Request| Malformed Request. The request was not formed correctly.|
|8|Auth| Access to the webservice has been disabled for this account.|
|300|Account| Invalid Origin Country. The origin country is invalid|
|301|Account| Invalid Origin State. The origin state cannot be found.|
|302|Request| Invalid Destination Country. The destination country cannot be found.|
|303|Request| Invalid Destination State. The destination state cannot be found.|
|304|Carrier| Disallowed Destination Country. The destination country is not allowed by this carrier.|
|305|Carrier| Carrier requires Country and/or State one of which is missing.|
|306|Carrier| Carrier requires City which is missing.|
|307|Carrier| Carrier requires zipcode which is missing.|
|308|Request| Dimensions on products are required.|
|309|Request| Weight is required on all products for this carrier.|
|400|Auth| Invalid Environment Scope. The environmentScope is not found for this user.|
|401|Auth| Website not in Environment Scope. The web site does not exists in this environment scope|
|500|Carrier| No shipping methods found for carrier. The system could not find a shipping method for the carrier.|
|402|Account| No origins have been set up for this website.|
|403|Account| No carriers have been setup for this origin.|
|404|Account| No merged rates. Please review your carrier mappings.|
|501|Carrier| Carrier Connection Error. Could not connect to carrier service for rates.  Their system is possibly down.|
|502|Carrier| Max Weight Exceeded for Carrier. The maximum configured weight for this carrier has been exceeded. Change in carrier dashboard if wanting to increase.|
|503|Carrier| No Pickup Locations Found. Could not find any pickup locations for this carrier.|
|504|Account| Google API Key not present. Please set Google API Key in Global Settings on ShipperHQ Dashboard|
|505|Carrier| Unknown Carrier Error. No rates available|
|506|Carrier| Carrier returned error|
|507|Carrier| No Valid Dates found for Carrier|
|508|Carrier| No Valid Rates found for Carrier|
|509|Carrier| Max Packages Exceeded for Carrier. The maximum number of packages for this carrier has been exceeded.|
|510|Account| Could not find carrier you requested|
|512|Carrier| Missing credentials for carrier.|
|600|Account| Shipping is prevented by a user defined rule. The merchant has used Carrier Rule to prevent shipping.|
|601|Carrier| Shipping rates removed due to priority carrier returning rates.|
|700|Account| Missing rates for carrier groups. Unable to find rates for all of the carrier groups.|
|800|Account| This account does not permit address validation|
|801|Account| Address validation is not enabled.|
