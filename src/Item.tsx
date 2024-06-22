import React from 'react';
import { useDispatch } from 'react-redux';
import { buyItem, refillItem } from './itemsSlice';

interface ItemProps {
  id: number;
  name: string;
  count: number;
}

function Item({ id, name, count }: ItemProps){
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <h3 style={{ marginRight: '1rem' }}>{name}</h3>
      <p style={{ margin: '0 1rem' }}>Count: {count}</p>
      <button onClick={() => dispatch(buyItem(id))} style={{ marginRight: '0.5rem' }}>Buy</button>
      <button onClick={() => dispatch(refillItem(id))}>Refill</button>
    </div>
  );
};

export default Item;
