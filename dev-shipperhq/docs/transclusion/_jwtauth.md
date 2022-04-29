[//]: # (This is a file included in other files: Rates, Insights, and Labels Quickstart docs contain this file)
[//]: # (IMPORTANT: Headers in Docusaurus transclusions are not added to the right-hand navbar. When included in a doc, this file should be preceded by a relevant header )
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p>The ShipperHQ {props.doc} API uses a <a href="https://jwt.io/" target="_blank">JWT</a> authentication token generated using credentials specific to each ShipperHQ Account.</p>

Generating a new JWT token is a three step process:
1. Get your ShipperHQ API Key
2. Get your Authentication Code
3. Generate a JWT access token (valid for 30 days)

Only step 3 will need to be repeated every 30 days unless connecting to a different Website in ShipperHQ or re-generating your Authentication Code.

:::info Keep Credentials Private

Your API Key, Authentication Code, and JWT Access Token should be kept secure and not exposed on any client facing code or committed to public code repositories.

:::

#### Access Scope

Before we dig into the specifics, it is important to define the access scope for the API Key, the Authentication Code and the JWT Access Token. Each of these elements are specific to a single ShipperHQ Website.

You can think of a Website as a sale channel. For instance an online store in the US (production), an online store in Canada (production), a development store, or a CRM sales channel (offline sales). Because ShipperHQ supports multiple Websites, each Website can have its own Shipping rules. Each Website will, as a consequence, generate different type of rates for the same virtual cart and customer choices.

<p>To reflect this level of functionality, authorization and access to the {props.doc} API is specific to a Website: you need a different set of credentials for each ShipperHQ Website.</p>

[More information about Websites in ShipperHQ <i class="fa fa-arrow-right"></i>](https://docs.shipperhq.com/adding-websites-in-shipperhq/)

### Retrieving an API Key

API Keys are accessible via the ShipperHQ dashboard. To get the API key:
1. Log into ShipperHQ and go to the [Websites](https://shipperhq.com/ratesmgr/websites) section of the dashboard.
2. Select the Website you want to get the key from
3. Select the `API key` and copy it to your application

### Retrieving an Authentication Code

The method for retrieving your Authentication Code varies depending on your eCommerce platform and whether or not this is a new or existing ShipperHQ Account.

<Tabs
  defaultValue="manual"
  values={[
    {label: 'New Manually Connected Accounts', value: 'manual'},
    {label: 'New Single Sign On Accounts', value: 'sso'},
    {label: 'Existing Accounts', value: 'existing'},
  ]}>
  <TabItem value="manual">

*Platforms*: Magento (Adobe Commerce), WooCommerce, Zoey, Salesforce B2C Commerce Cloud

On these platforms, you can generate a new Authentication Code within the ShipperHQ dashboard.

1. Visit the Websites section of the dashboard
2. Click on the relevant Website
3. Click on "Generate new Authentication Code"
4. Copy the code: It will not be shown again for this Website.

:::danger Changing Live Authentication Codes

Generating a new Authentication Code invalidates the previous Authentication Codes for that Website.  This should not be done while in production unless absolutely necessary. We recommend creating a new Website for new integrations to avoid impacting existing integrations. Contact [Dev Support](/contact) to double-check and avoid any service disruption for existing Websites.

:::
  </TabItem>
  <TabItem value="sso">

*Platforms*: BigCommerce, Shopify

For these platforms, the Authentication Code is automatically generated and exchanged between the eCommerce platform and ShipperHQ. It is not available within the ShipperHQ dashboard but can be provided by our developer support team.

Contact [Dev Support](/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.
  </TabItem>
  <TabItem value="existing">

*Platforms*: All

Please contact [Dev Support](/contact) and make sure to specify the URL of the Website for which you would like to get the Authentication Code.
  </TabItem>
</Tabs>

---

### Generating your JWT Authentication Token

<p>Once you have your ShipperHQ API Key and Authentication Code, you can generate the JWT token used to access the ShipperHQ {props.doc} API.</p>

The ShipperHQ API Playground can be used to create an Authentication Token for testing. You will need to use this same query in your integration to create secret tokens when required.

1. Navigate to the ShipperHQ [API Playground](https://graphiql.shipperhq.com/)
2. Click Add New in the top left corner
3. Set the URL to `https://rms.shipperhq.com`
4. Click the Reload Docs button
5. Send a createSecretToken mutation with your API Key and Authentication Code

<p>The response contains the token you use to make requests to the ShipperHQ {props.doc} API. This token expires every 30 days.</p>

#### Example Secret Token Request
```json title="Create a secret token"
mutation CreateSecretToken {
   createSecretToken(
      api_key: "your_api_key",
      auth_code: "your_auth_code"
      )
      {
        token
      }
}
```

:::tip JWT Token Expiration

The JWT tokens used by ShipperHQ have a 30 day expiration timestamp encoded inside: no need to remember the expiration date. We recommend using your favorite JWT parsing library to extract the expiration date, so you will know the exact second the token expires. New tokens can be requested up to an hour before the current token expires.

:::
