import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';

export default function Menu() {
  return (
    <>
      <Hero hero='menu-hero'>
        <Banner title='Our Menu' subtitle='Enter subtitle here' />
      </Hero>
    </>
  );
}
