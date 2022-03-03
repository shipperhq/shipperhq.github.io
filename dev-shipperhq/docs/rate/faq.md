---
sidebar_position: 10
---

# Rate FAQ

## Does the rating API return duties (DDU/DDP) information?

Not at this time. 

## What are the error codes and their definition?

|error number| error_message|
|------|-----|
|1| Request Error. There was an error processing your request.|
|3| Invalid Credentials. The credentials you supplied are invalid.|
|4| Internal server error.  We have been notified of this issue.|
|5| Service Unavailable. The service is currently unavailable.  Please try again later.|
|6| Access Not Allowed. This host is not permitted to access this service.|
|7| Malformed Request. The request was not formed correctly.|
|8| Access to the webservice has been disabled for this account.|
|300| Invalid Origin Country. The origin country is invalid|
|301| Invalid Origin State. The origin state cannot be found.|
|302| Invalid Destination Country. The destination country cannot be found.|
|303| Invalid Destination State. The destination state cannot be found.|
|304| Disallowed Destination Country. The destination country is not allowed by this carrier.|
|305| Carrier requires Country and/or State one of which is missing.|
|306| Carrier requires City which is missing.|
|307| Carrier requires zipcode which is missing.|
|308| Dimensions on products are required.|
|309| Weight is required on all products for this carrier.|
|400| Invalid Environment Scope. The environmentScope is not found for this user.|
|401| Website not in Environment Scope. The web site does not exists in this environment scope|
|500| No shipping methods found for carrier. The system could not find a shipping method for the carrier.|
|402| No origins have been set up for this website.|
|403| No carriers have been setup for this origin.|
|404| No merged rates. Please review your carrier mappings.|
|501| Carrier Connection Error. Could not connect to carrier service for rates.  Their system is possibly down.|
|502| Max Weight Exceeded for Carrier. The maximum configured weight for this carrier has been exceeded. Change in carrier dashboard if wanting to increase.|
|503| No Pickup Locations Found. Could not find any pickup locations for this carrier.|
|504| Google API Key not present. Please set Google API Key in Global Settings on ShipperHQ Dashboard|
|505| Unknown Carrier Error. No rates available|
|506| Carrier returned error|
|507| No Valid Dates found for Carrier|
|508| No Valid Rates found for Carrier|
|509| Max Packages Exceeded for Carrier. The maximum number of packages for this carrier has been exceeded.|
|510| Could not find carrier you requested|
|512| Missing credentials for carrier.|
|600| Shipping is prevented by a user defined rule. The merchant has used Carrier Rule to prevent shipping.|
|601| Shipping .|
|700| Missing rates for carrier groups. Unable to find rates for all of the carrier groups.|
|800| This account does not permit address validation|
|801| Address validation is not enabled.|


~                       