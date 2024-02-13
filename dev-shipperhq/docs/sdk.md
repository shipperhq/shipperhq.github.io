---
sidebar_position: 6
slug: sdk
title: Enhanced Checkout SDK
tags: [sdk, enhanced checkout, ec]
---

The goal of the ShipperHQ Enhanced Checkout SDK is to give you access to our checkout components, so you can build your own custom checkout experience. Below you'll find general information that applies to the ShipperHQ Enhanced Checkout SDK.

:::info Enhanced Checkout SDK Available on ShipperHQ Enterprise

Access to the Enhanced Checkout SDK requires a ShipperHQ Enterprise plan. You can check your current plan in [your ShipperHQ Dashboard](https://docs.shipperhq.com/subscription/#What_plan_am_I_on). If you're not currently on an Enterprise plan, please [contact us](https://shipperhq.com/contact) to review upgrade options.

***Note:*** This requirement does not apply to ShipperHQ Partners. Contact our [Partnerships team](https://shipperhq.com/contact) for more info.

:::

## Background
Visit [our docs](https://shipperhq.com/enhanced-checkout) to read about our Enhanced Checkout product.

## RMC Skeleton Application
The RMC Skeleton Application is an example app that demonstrates how to use our rate manager client in a React application. This is a great starting point for building your own checkout experience. 

- You can find the RMC Skeleton Application in our [GitHub repository](https://gitlab.com/ShipperHQ/Platform/rmc-example-app).

- Clone repo locally using this command and access token in place of ACCESS-TOKEN-HERE. We will provide you with an access token.

```
git clone https://oauth2:ACCESS-TOKEN-HERE@gitlab.com/ShipperHQ/Platform/rmc-example-app.git
```

- Follow the instructions in the README to get started.

## Checkout Setup
First, you will need to sync your ShipperHQ account to your checkout.

1. Set the scope dropdown to match the scope of your SHQ account
2. Get your SHQ API key from the SHQ dashboard in Websites > Basic > API Key. Paste that into the checkout. 
3. In the same section of the dashboard, generate a new auth code if you don’t already have one. Paste that into the auth code field in the checkout. 
4. Generate a token

After generating the token, a random dummy address will be generated. You can replace this with the location you would like to ship your item(s). 

You can add dummy items to your cart. Fetch rates, choose your shipping method, and finalize shipping.

## Data Flow in Enhanced Checkout
When the shipping step of checkout loads the provided `ShippingView` component can be rendered. If you are using an ecommerce platform like Magento, it fully replaces Magento’s stock shipping methods list.
					
When the user has filled out the shipping address form Magento’s estimate-shipping API should be called. This sets up the shipping quote in SHQ’s systems and provides Magento with a starting shipping rate and some other needed metadata.

Once estimate-shipping has succeeded, `RMCComponent.usePlatformState.setIsShippingAddressValid`, as well as `RMCComponent.usePlatformState.rates.setRates`, can be used to notify RMC that rates are ready.
RMC will call the SHQ servers to get a more detailed shipping view and will render results to the user.

RMC will handle shipping method selection and storage. 

## React Components
The main logic for checkout is in App.js. 

Import `RMCComponent` from the provided ZIP file. The root component for the shipping rates widget is `RMCComponent.ShippingView`.

The `RMCComponent.I18NProvider` HOF provides translation data for the widget. An example translation file is included in RMCComponent/locales/en/shq.json. Use `I18NProvider` near the top of your app, before `ShippingView`.

`RMCComponent.RateSubscription` is responsible for subscribing to updates from a GraphQL subscription and updating the UI with the latest rates. The `onCompletes` callback function is called when the subscription is completed. The component unsubscribes when `ShippingView` unmounts. This should wrap around `ShippingView`. `getUpdateKey()` is used to signal that rates have been updated. This is needed to show the updated UI, containing rates. 

`RMCComponent.CartItemsProvider` is a context provider to feed item details to the shipping view. It should wrap around the `RateSubscription` component. 

The request in `useFetchRates` is specific to this checkout and should be modified to fit your checkout experience. See our [GraphQL docs](https://dev.shipperhq.com/rates-service) for more information on the data structure and descriptions. 

## Global State
The `useAppState` hook controls properties related to the checkout application state as a whole, such as carrier info, shipping methods, shipping total, carrier pickup locations, etc.

The `usePlatformState` hook controls properties related to specific platform state, such as price formatting, UI locking, backup rates, etc. 
