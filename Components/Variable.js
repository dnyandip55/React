//Quetion2 :Define a state variable in a functional component using the useState hook. Initialize it with a default value of 0.
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
    
    </div>
  );
}

export default MyComponent;
