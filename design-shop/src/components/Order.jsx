import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = (props) => {
  const { title, image, price, id } = props.item
  return (
    <div className="item">
      <img src={`./images/` + image} alt=""/>
      <h2>{title}</h2>
      <b>${price}</b>
      <FaTrash className="delete-icon" onClick={() => props.onDelete(id)}/>
    </div>
  );
};

export default Order;