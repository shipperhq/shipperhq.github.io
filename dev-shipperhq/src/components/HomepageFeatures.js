import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Rate',
    subtitle: 'Get shipping rates for your checkout',
    Png: require('../../static/img/rating-sdk-img.png').default,
    description: (
      <>
        Integrate Shipping Rates produced by ShipperHQ into your app via the Rating API.
      </>
    ),
  },
  {
    title: 'Shipping Insights',
    subtitle: 'Manage and fulfill your orders easily',
    Png: require('../../static/img/shipping-insights-sdk-img.png').default,
    description: (
      <>
        The Insight API allows you to leverage the most advanved ShipperHQ (split shipment, LTL, delivery date, dimensional) with a few lines
        of code.
      </>
    ),
  },
  {
    title: 'Label',
    subtitle: 'Purchase and print shipping labels',
    Png: require('../../static/img/label-sdk-img.png').default,
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
