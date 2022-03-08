import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Shipping Rates',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Integrate Shipping Rates produced by ShipperHQ into your app via the Rating API.
      </>
    ),
  },
  {
    title: 'Manage your orders easily',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The Insight API allows you to leverage the most advanved ShipperHQ (split shipment, LTL, delivery date, dimensional) with a few lines
        of code..
      </>
    ),
  },
  {
    title: 'Purchase and print Shipping Labels to complete your orders',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Coming soon! Please contact sales@shipperhq.com to get early access (API available in beta).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
      <div className="container">
          <div className={styles.featureSect}>

          <div className={clsx('col col--6 feature-img')}>
            <Svg className={styles.featureSvg} alt={title} />
          </div>
          <div className="text--left padding-horiz--md col col--6">
            <div className={styles.featureText}>
            <h2 className="text-1xl mb10">{title}</h2>
            <p className="text-lg">{description}</p>
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
