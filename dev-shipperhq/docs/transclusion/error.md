[//]: # (This is a file included in other files: all the FAQ of all APIs contain this file)

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
