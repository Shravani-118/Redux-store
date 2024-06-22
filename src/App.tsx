import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Item from './Item';

function App () {
  const items = useSelector((state: RootState) => state.items);

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <Item key={item.id} id={item.id} name={item.name} count={item.count} />
      ))}
    </div>
  );
};

export default App;

