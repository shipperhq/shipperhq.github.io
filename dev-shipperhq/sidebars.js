/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
};

module.exports = {
  sidebars,
  UseCases: [
    {
      type: 'category',
      label: 'Use Cases',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'use-cases'
        }
      ]
    }
  ],
  Rating: [
    {
      type: 'category',
      label: 'Rates API Guide',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'rates'
        }
      ]
    },
    {
      type: 'link',
      label: 'Rates API Reference',
      href: 'https://dev.shipperhq.com/rates-service/'
    }
  ],
  ShippingInsights: [
    {
      type: 'category',
      label: 'Insights API Guide',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'insights'
        }
      ]
    },
    {
      type: 'link',
      label: 'Insights API Reference',
      href: 'https://dev.shipperhq.com/insights-service/'
    }
  ],
  Label: [
    {
      type: 'category',
      label: 'Labels API Guide',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'labels'
        }
      ]
    }
  ],
}
