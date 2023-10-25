//Quetion 4:Create a reusable React component that takes a list of items as props and renders them as a list. Ensure that each item has a unique key.

import React from 'react';

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
