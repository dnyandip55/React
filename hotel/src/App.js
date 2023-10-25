import React from 'react';
import './App.css';
import Hotel from './Components/Hotel';

function App() {
  const hotels = [
    {  name: 'Phoenix Hotel', location: 'Vimannagar' },
    {  name: 'Hotel Konkan Express', location: 'Kothrud' },
    {  name: 'Hotel Abhishek Veg  ', location: 'Erandwane' },
    {  name: 'NH 37 Dhaba  ', location: 'Shivajinagar' },
    {  name: 'JW Marriott Hotel', location: 'Shivajinagar' },
    {  name: 'Hotel Sandeep', location: 'Shivajinagar' },
    {  name: 'Hotel Gavkari', location: 'Warje' },
  ];
  return (
    <div className="app-container">
      <h1 style={{ color: "teal" }}>Hotels in Pune</h1>
      <Hotel hotel={hotels[0]} />
      <Hotel hotel={hotels[1]} />
      <Hotel hotel={hotels[2]} />
      <Hotel hotel={hotels[3]} />
      <Hotel hotel={hotels[4]} />
      <Hotel hotel={hotels[5]} />
      <Hotel hotel={hotels[6]} />
    </div>
  );
}

export default App;
