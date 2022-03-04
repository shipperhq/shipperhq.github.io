import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
