import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import TopDishes from '../components/TopDishes/TopDishes';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='Good Taste Is Our Goal' subtitle='Welcome to Delish' />
      </Hero>
      <TopDishes />
    </>
  );
}
