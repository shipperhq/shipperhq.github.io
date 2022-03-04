---
sidebar_position: 3
---

# Shipping Insights Quickstart

## Requirements
* ShipperHQ account with the Shipping Insights Advanced Feature enabled
* An ecommerce platform or custom integration supporting the Place Order API, either:
  * ShipperHQ’s native Magento 2, BigCommerce, or Shopify app installed on the eCommerce platform
  * A custom integration implementing both the ShipperHQ Rating API and the ShipperHQ Place Order API

## Authentication
The Shipping Insights API is accessed using a unique access token generated in a ShipperHQ account. Each access token is unique per website for multi-site ShipperHQ accounts.

Since Access Tokens are unique for each ShipperHQ account and website, Partners or Third Party integrations should include a mechanism for merchants to input their ShipperHQ Insights access token in the integration. Each ShipperHQ merchant will generate an access token on their ShipperHQ account in order to access the Shipping Insights API for their orders.

### Generating an Access Token
To generate an access token in ShipperHQ:
* Log into a ShipperHQ account
* Ensure the Shipping Insights Advanced Feature is enabled (under Advanced Features on the left-hand navbar)
* Click “Websites” in the left-hand navbar and click the edit icon to edit the website which you wish to connect to
* Go to the “Integrations” tab on the Website
* Under Shipping Insights, select Generate New Access Token

**Note**: Generating a new Access Token invalidates any previously generated Access Tokens for that website. Access Tokens should be kept secure and not exposed on any client facing code or committed to public code repositories.

## Testing
To test the Shipping Insights API you will need to already have either:
1. ShipperHQ's native integration installed and enabled on Magento 2, BigCommerce, or Shopify
2. A custom integration of the ShipperHQ Rating API and Place Order API

### Enable Shipping Insights & Retrieve Access Token
Within the ShipperHQ you wish to use enable the Shipping Insights Advanced Feature from the Advanced Features section of the dashboard. Then, retrieve the Shipping Insights Access Token from the Website on that account.

### Place an Order
Place an order on your eCommerce or custom platform. Note the Order Number since this will be used to retrieve Shipping Insights information.

### Make a Shipping Insights API call
Call the Shipping Insights API with:
* The Access Token retrieved above
* The Order Number of the order placed above

You should receive a successful Shipping Insights API response.
