import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Rating',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Access shipping rate details and query what is most important to you and your business.
      </>
    ),
  },
  {
    title: 'Shipping Insights',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Connect your checkout with post-order fulfillment with detailed shipping information for each order.
      </>
    ),
  },
  {
    title: 'Label',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Generate labels with essential shipment infomation like tracking ID, returns, taxes and more..
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
