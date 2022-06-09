import React from 'react';

const Categories = (props) => {
  return (
    <div className="categories">
      {props.categories.map( el => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  );
};

export default Categories;