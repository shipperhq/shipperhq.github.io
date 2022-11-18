import React from 'react';
import { HubSpotForm } from '../components/HubSpotForm';
import Layout from '@theme/Layout';
import '../css/contact-us.scss';

function Contact() {
  return (
    <Layout>
      <div className="container">
        <h1 className="contact-title">Dev Support</h1>
        <p>This is specifically for support around implementing the ShipperHQ APIs, for general support of ShipperHQ or if you are not using a custom API integration contact us at: <a href="https://docs.shipperhq.com/contact/" target="_blank">Request Support</a></p>

        <div className="contact-form">
          <HubSpotForm portalId="20068459" formId="f34e690f-a952-4cb0-90d0-522c03304dd9" />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
