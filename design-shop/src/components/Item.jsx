import React from 'react';

const Item = (props) => {
  const { title, image, description, price } = props.item
  return (
    <div className="item">
      <img src={`./images/` + image} alt={image} onClick={() => props.onShowItem(props.item)}/>
      <h2>{title}</h2>
      <p>{description}</p>
      <b>${price}</b>
      <div className="add-to-cart" onClick={() => props.onAdd(props.item)}>+</div>
    </div>
  );
};

export default Item;