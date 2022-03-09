import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Rates',
    subtitle: 'Get shipping rates for your checkout',
    Png: require('../../static/img/rating-feature.png').default,
    description: (
      <>
          Access shipping rate details and query what is most important to you and your business via the Rates API.
      </>
    ),
  },
  {
    title: 'Insights',
    subtitle: 'Manage and fulfill your orders easily',
    Png: require('../../static/img/shippinginsights-feature.png').default,
    description: (
      <>
          Connect your checkout with post-order fulfillment with detailed shipping information for each order.
      </>
    ),
  },
  {
    title: 'Labels',
    subtitle: 'Purchase and print shipping labels',
    Png: require('../../static/img/labelprinting-feature.png').default,
    description: (
      <>
        Coming soon! Please contact sales@shipperhq.com to get early access (API available in beta).
      </>
    ),
  },
];

function Feature({Png, title, subtitle, description}) {
  return (
      <div className="container">
          <div className={styles.featureSect}>

          <div className={styles.featureImg}>
            <img src={Png} className={styles.featurePng} alt={title} />
          </div>
          <div className="text--left padding-horiz--md col col--6">
            <div className={styles.featureText}>
            <h2 className="text-2xl mb10">{title}</h2>
            <h3 className="semi">{subtitle}</h3>
            <p className="text-md">{description}</p>
            <p className="text-md mb10"><a className="arrow-right">Go to Documentation</a></p>
            <p className="text-md"><a className="arrow-right">Playground</a></p>
            </div>
        </div>

          </div>
      </div>

  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
  );
}
