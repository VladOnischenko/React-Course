import React from 'react';
import './cards.scss'
import Card from "../card/Card";

const Cards = (props) => {
  const { cards } = props

  return (
    <section className="cards">
      {cards.map( item => <Card key={item.id} item={item} />)}
    </section>
  );
};

export default Cards;