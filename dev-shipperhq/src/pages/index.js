import { useEffect } from 'react';

const REDIRECT_URL = 'https://docs.shipperhq.com/shipperhq-sdk/';

export default function Home() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
}

export function Head() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${REDIRECT_URL}`} />
      <link rel="canonical" href={REDIRECT_URL} />
    </>
  );
}
