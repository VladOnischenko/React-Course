import React from 'react';

const Item = (props) => {
  const { title, image, description, price, category } = props.item
  return (
    <div className="item">
      <img src={`./images/` + image} alt=""/>
      <h2>{title}</h2>
      <p>{description}</p>
      <b>${price}</b>
      <div className="add-to-cart">+</div>
    </div>
  );
};

export default Item;