import React from 'react';
import Item from "./Item";

const Items = (props) => {
  console.log(props.items);
  return (
    <main>
      {props.items.map(el => <Item key={el.id} item={el}/>)}
    </main>
  );
};

export default Items;