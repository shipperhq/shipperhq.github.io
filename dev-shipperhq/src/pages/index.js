import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';
import './homepage.scss'
import Head from '@docusaurus/Head';
import partnerLogo from '../../static/img/partner-logo-blueacorn.png'
import Link from '@docusaurus/Link';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title mb10 text-3xl">{siteConfig.title}</h1>
        <h4 className="hero__subtitle reg">{siteConfig.tagline}</h4>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Explore our API guides and examples for custom integration with ShipperHQ">
      <Head>
          {/*Custom Fonts*/}
          <link rel="stylesheet" href="https://use.typekit.net/ijr7wgn.css" />
          <script src="https://kit.fontawesome.com/b5946a4266.js" crossorigin="anonymous"></script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        <div className="container">
          <div className="questions">

              <div className="q-heading">
                  <h3 className="text-2xl">Questions?</h3>
                  <p className="mb20"> We would love to hear from you: Please <Link to="/contact">Contact Us</Link></p>
                  <p>If you need help configuring ShipperHQ, please visit our <Link to="https://docs.shipperhq.com/" className="arrow-right"> ShipperHQ Help Docs</Link></p>
              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
