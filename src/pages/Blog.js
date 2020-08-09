import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';

export default function Blog() {
  return (
    <>
      <Hero hero='blog-hero'>
        <Banner
          dark
          title='Food Blog'
          subtitle='More than 1000 food related articles'
        />
      </Hero>
    </>
  );
}
