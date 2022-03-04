# SDK Use Cases

Here are some typical examples of integrations with ShipperHQ.

## CRM integration

It enables sales team with the ability to display live rates while respecting a complex business logic (configured in ShipperHQ). Quotes can be live and accurate instead of estimated (both the price and delivery date can be retrieved). The shipping rates returned by ShipperHQ can be overriden in your ERP following your own business rules and authorization system.

## ERP integration

When creating draft-orders or manual orders, rates can be retrieved from ShipperHQ so that the order shipping costs can be accurately retrieved. It enable multi-channel orders (online, offline, direct sale, etc.) to use the exact same logic for shipping & delivery rates. The shipping rates returned by ShipperHQ can be overriden in your ERP following your own business rules and authorization system.

## Unsupported eCommerce platform integration

While ShipperHQ support the major eCommerce platforms, with the rating API, developers can integrate ShipperHQ to provide rates at checkout leveraging the rich functionality of ShipperHQ rules engine and advanced functions. For this use case, the rating API is called either in the cart or when the user enter her/his address. Each time the cart changes, a new query has to be triggered in order to get a new quote. Then the buyer select one option and complete the checkout.


## Headless commerce

No need for an ecommerfce platform. With ShipperHQ SDK you can build your own experience using tools and technologies that you selected. The rating API will enable you to focus on the user experience while all the business logic is configured in ShipperHQ. The Insight API will allow you to place orders and retrieve all the fulfillment information required to complete this order.