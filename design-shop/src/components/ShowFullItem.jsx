import React from 'react';

const ShowFullItem = (props) => {
  const { title, image, description, price } = props.item
  return (
    <div className="full-item">
      <div>
        <img src={`./images/` + image} alt={image} onClick={() => props.onShowItem(props.item)}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <b>${price}</b>
        <div className="add-to-cart" onClick={() => props.onAdd(props.item)}>+</div>
      </div>
    </div>
  );
};

export default ShowFullItem;