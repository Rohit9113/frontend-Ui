// pages/index.js
import React from 'react';
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  // Add more items as needed
];

const Home = () => {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <div>
          <Pricing data={data} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
