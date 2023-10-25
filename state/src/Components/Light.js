import React, { useState } from 'react';

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState('red');

  const changeLight = (newColor) => {
    setLightColor(newColor);
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: lightColor,
          borderRadius: '50%',
          margin: '20px auto',
        }}
      ></div>
      <button onClick={() => changeLight('red')}>Set Red</button>
      <button onClick={() => changeLight('yellow')}>Set Yellow</button>
      <button onClick={() => changeLight('green')}>Set Green</button>
    </div>
  );
};

export default TrafficLight;
