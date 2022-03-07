# SDK Use Cases

## Overview

ShipperHQ SDK provides and end to end solution to help merchants and technological partners integrate with ShipperHQ or offer a different experience than the default ShipperHQ and eCommerce platform experience without the risk of coding and supporting its own solution.

![High Level ShipperHQ processes and API](./sdk-main-processes-and-api.jpg)


While developers can use the APIs independently, ShipperHQ SDK goal is to make it easy for any third-party developer to integrate with ShipperHQ following this sequence or API calls and mutations:
  1. [Rate API](/docs/rate/overview)
  2. [PlaceOrder Mutation](/docs/insight/place-order) (if necessary: on unsupported eCommerce platform or to change the platform behaviour)
  3. [Insight API](/docs/insight/overview)
  4. [Label API (in beta)](/docs/label/overview)


## Use cases and existing integrations

To illustrate what can be achieved with ShipperHQ SDK, here are some example of integrations that have been successfully build using the SDK.

### CRM integration

It enables sales team with the ability to display live rates while respecting a complex business logic (configured in ShipperHQ). Quotes can be live and accurate instead of estimated (both the price and delivery date can be retrieved). The shipping rates returned by ShipperHQ can be overriden in your CRM following your own business rules and authorization system. 

This would require minimally:
1. [Rate API](/docs/rate/overview) to get rates


To capture successfull orders:
2. [PlaceOrder Mutation](/docs/insight/place-order)


### ERP integration

When creating draft-orders or manual orders, rates can be retrieved from ShipperHQ so that the order shipping costs can be accurately retrieved. It enable multi-channel orders (online, offline, direct sale, etc.) to use the exact same logic for shipping & delivery rates. The shipping rates returned by ShipperHQ can be overriden in your ERP following your own business rules and authorization system. Usually the ERP inform the rate engine of the various `shipping-groups` for the products, present origin-locations with inventory and more generally  leverage key ShipperHQ functionalities like multi-origin order, multi-shipments as well as differentiate small-packages vs LTL/Freight orders.

This would require minimally:
1. [Rate API](/docs/rate/overview)
2. [PlaceOrder Mutation](/docs/insight/place-order) to capture successfull orders

To visualize (or sync) the exact orders (order management):
* [Insight API](/docs/insight/overview) to fulfill efficiently based on ShipperHQ rate at checkout recommendation
  
To fulfill efficiently and print the corresponding labels:
*  [Label API (in beta)](/docs/label/overview)



### Order Management System integration

ShipperHQ customers uses various order management system and the Insight API is a key to leverage ShipperHQ rate-engine at fulfillment time. This API enable order management system to access:
- origin location of each shipment
- box/package size and type for each shipment
- label provider for each shipment
- service class for each shipment
- delivery date & time promised to the buyer for each shipment

Relying mainly on the [Insight API](/docs/insight/overview)


### Unsupported eCommerce platform integration

While ShipperHQ support the major eCommerce platforms, with the rating API, developers can integrate ShipperHQ to provide rates at checkout leveraging the rich functionality of ShipperHQ rules engine and advanced functions. For this use case, the rating API is called either in the cart or when the user enter her/his address. Each time the cart changes, a new query has to be triggered in order to get a new quote. Then the buyer select one option and complete the checkout.


### Headless commerce

No need for an ecommerfce platform. With ShipperHQ SDK you can build your own experience using tools and technologies that you selected. The rating API will enable you to focus on the user experience while all the business logic is configured in ShipperHQ. The Insight API will allow you to place orders and retrieve all the fulfillment information required to complete this order.