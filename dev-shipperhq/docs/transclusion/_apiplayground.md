[//]: # (This is a file included in other files: All Quickstart docs contain this file)
[//]: # (IMPORTANT: Headers in Docusaurus transclusions are not added to the right-hand navbar. When included in a doc, this file should be preceded by a relevant header )

<>{props.APIText = () => (props.doc) == "Rates" ? "the ShipperHQ Rates API without having to write any code." : (props.doc) == "Labels" ? "the ShipperHQ Labels API without having to write any code." : (props.doc) == "Insights" ? "the ShipperHQ Insights API without having to write any code." : "different ShipperHQ APIs without having to write any code. You'll need the Endpoint URL for the API you're looking to experiment with as well as the authorization credentials for that API."}</>
<>{props.APIEndpoint = () => (props.doc) == "Rates" ? "https://api.shipperhq.com/v2/graphql" : (props.doc) == "Labels" ? "https://rms.shipperhq.com/" : (props.doc) == "Insights" ? "https://ovs.shipperhq.com" : "found in the Quickstart doc for each API"}</>
<>{props.APIHeaders = () => (props.doc) == "Rates" ? "the Request Headers section of this doc" : (props.doc) == "Labels" ? "the Request Headers section of this doc" : (props.doc) == "Insights" ? "the Request Headers section of this doc" : "the Quickstart doc for each API"}</>

The [ShipperHQ API Playground](https://graphiql.shipperhq.com) gives you an easy way to test <props.APIText />

### Loading and Viewing Docs
1. Navigate to the [ShipperHQ API Playground](https://graphiql.shipperhq.com)
2. Open a new API playground tab ("+ Add new" button in top navbar)
3. Enter the API Endpoint URL (<props.APIEndpoint />) into the URL bar
4. Click the Docs button
5. Click the Reload Docs (refresh) icon
6. Click the Query, Mutation, or Subscription link to view a list of available actions and the arguments and fields you can include in your request

### Updating Headers

Authentication information for ShipperHQ's APIs is sent in HTTP headers. Required Headers can be found in <props.APIHeaders />. In the API Playground, these can be set in the Headers window:
1. Click the Headers (asterisk) icon in the left-hand navbar
2. Enter the required Header keys and Header values for the API you're using (e.g. "X-ShipperHQ-Secret-Token")

### Creating a Query

In the left-hand column of the API Playground you can enter your desired query body. As you browse the Docs in the API Playground, you can use the "ADD QUERY" buttons to add a basic version of a given query to the body. You can also add specific elements of a query using the "ADD FRAGMENT" buttons shown next to each field. Alternately, copy and paste an example from one of our API Guides and update its variables to match the appropriate values for your use case.

When you click "Send Request" the response will be shown in the panel between the body and Docs. You'll also see HTTP status and status codes. To see previous queries and results, click the History (counter-clockwise clock) icon in the left-hand navbar.

:::note

The GraphQL tool used in our API Playground does not always display errors in your headers/queries. If docs fail to load, please clear all fields/headers, try again, and use Inspect Element/Console to see errors.

:::
