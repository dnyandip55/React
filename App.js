
import React from 'react';
import Counter from './Components/Counter'; 
import MyComponent from './Components/Variable';
import GreetingForm from './Components/GreetingForm';
import ItemList from './Components/ItemList';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
      <h1>My React App</h1>
      Q1.
      <Counter />
      Q2.
      <MyComponent />
      Q.3 
      <GreetingForm />

      Q.4 
      <h1>Item List</h1>
      <ItemList items={items} />
      
    </div>
  );
}

export default App;
