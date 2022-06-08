import React from 'react';
import './card.scss'

const Card = (props) => {
  const { country, period, place, photo, description } = props.item

  return (
    <div className="item">
      <img src={photo} alt={place}/>
      <div className="item__content">
        <div className="item__map">
          <img src="./images/map.svg" alt="map"/>
          <span>{country}</span>
          <p>View on Google Maps</p>
        </div>
        <h3 className="item__place">{place}</h3>
        <p className="item__period">{period}</p>
        <p className="item__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;