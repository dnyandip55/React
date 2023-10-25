//Quetion 3:Implement a form in a React component that allows the user to input their name. Display a greeting message using the entered name
import React, { useState } from 'react';

function GreetingForm() {
    const [name, setName] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    return (
      <div>
        <h1>Greeting Form</h1>
        <form>
          <label>
            Enter your name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </form>
        {name && (
          <p>Hello, {name}!</p>
        )}
      </div>
    );
  }
  
  export default GreetingForm;
  