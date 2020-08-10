import React, { useContext } from 'react';
import Title from '../Title/Title';
import './TopDishes.scss';
import { DishContext } from '../../DishContext';
import DishCard from '../DishCard/DishCard';
import GridContainer from '../GridContainer/GridContainer';

function TopDishes() {
  const dishContext = useContext(DishContext);

  let { topDishes, loading } = dishContext;

  let dishes = topDishes.map((dish) => <DishCard key={dish.id} dish={dish} />);

  return (
    <section className='topDishes'>
      <Title>Top Dishes</Title>
      <GridContainer>{loading ? 'Loading' : dishes}</GridContainer>
    </section>
  );
}

export default TopDishes;
