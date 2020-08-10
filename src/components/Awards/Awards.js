import React, { useState } from 'react';
import Title from '../Title/Title';
import './Awards.scss';
import AwardCard from '../AwardCard/AwardCard';
import { GiChefToque } from 'react-icons/gi';
import { FaFireAlt } from 'react-icons/fa';
import GridContainer from '../GridContainer/GridContainer';

export default function Awards() {
  const [awards] = useState([
    { title: 'top chef', year: 2018, icon: <GiChefToque /> },
    { title: 'iron chef', year: 2018, icon: <FaFireAlt /> },
    { title: 'top chef', year: 2018, icon: <GiChefToque /> },
    { title: 'iron chef', year: 2018, icon: <FaFireAlt /> },
  ]);

  let awardList = awards.map((award, index) => (
    <AwardCard key={index} award={award} />
  ));

  return (
    <section className='awards '>
      <Title>Awards</Title>
      <GridContainer>{awardList}</GridContainer>
    </section>
  );
}
