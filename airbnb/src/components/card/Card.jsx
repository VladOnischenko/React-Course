import React from 'react';
import './card.scss'
import star from '../../images/star.svg'

const Card = (props) => {
  const {image, description, price, country, rates, votes} = props
  return (
    <div className="card">
      <img src={image} alt="1" className="card__image"/>
      <div className="card__stats">
        <img src={star} alt="star" className="card__stats-star"/>
        <span className="card__stats-bold">{rates}</span>
        <span>({votes}) * </span>
        <span>{country}</span>
      </div>
      <p className="card__description">{description}</p>
      <p className="card__price"><span>From {price}</span> / person</p>
    </div>
  );
};

export default Card;