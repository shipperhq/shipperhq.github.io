import React from 'react';
import styles from './HomepageFeatures.module.scss';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Rates',
    subtitle: 'Get shipping rates for your application',
    docsLink: "/docs/rates/overview",
    Png: require('../../static/img/rating-feature-portal.png').default,
    description: (
      <>
          Get live shipping rates using complex business logic with a simple query via the Rates API.
      </>
    ),
  },
  {
    title: 'Insights',
    subtitle: 'Manage and fulfill your orders easily',
    docsLink: "/docs/insights/overview",
    Png: require('../../static/img/insights-feature-portal.png').default,
    description: (
      <>
          Leverage ShipperHQ's orders database to fulfill orders more efficiently via the Insights API.
      </>
    ),
  },
  {
    title: 'Labels',
    subtitle: 'Purchase and print shipping labels',
    docsLink: "/docs/labels/overview",
    Png: require('../../static/img/label-feature-portal.png').default,
    description: (
      <>
        Coming soon! Please <Link to="/contact">contact us</Link> if you want to print Shipping Labels in your application! (Labels API available in beta).
      </>
    ),
  },
];

function Feature({Png, title, subtitle, description, docsLink}) {
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
              <p className="text-md mb10"><Link to={docsLink} className="arrow-right">Go to API Guide</Link></p>
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
