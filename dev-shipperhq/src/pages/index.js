import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';
import './homepage.scss'
import Head from '@docusaurus/Head';
import partnerLogo from '../../static/img/partner-logo-blueacorn.png'


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
      title={`${siteConfig.title}`}
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
            <div className="partner-quote">
                <img src={partnerLogo} className="quote-logo"/>
                <div className="quote">
                    <p className="text-lg quote-body">ShipperHQ’s development team deﬁnes the standard for how to provide an amazing level of support. When it comes to any custom shipping requirements - they are the go-to solution for anything shipping related.</p>
                    <p className="quote-author mb0">
                        <b>Emily Wilhoit</b><br/>
                        VP of Strategic Partnerships
                    </p>
                </div>
            </div>
        </div>
        <div className="container">
          <div className="questions">

              <div className="q-heading">
                  <h3 className="text-2xl">Questions?</h3>
                  <p className="mb20">Have a question about ShipperHQ? Find the answers you need from our robust <a href="https://docs.shipperhq.com" target="_blank">Help Docs knowlege base</a>, or reach out directly.</p>
                  <p><a className="arrow-right">Contact Us</a></p>
              </div>
              <div className="q-links">
                  <div className="q-link">
                      <i className="fas fa-medal"></i>
                      <p><b>Already a partner?</b> Existing partners can engage with our APIs using a dev account. <a href="">Learn more</a></p>
                  </div>
                  <div className="q-link">
                      <i className="fas fa-handshake"></i>
                      <p><b>Become a partner.</b> To engage with our APIs, partners will need a client on the platform. <a href="">Learn more</a></p>
                  </div>
              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
