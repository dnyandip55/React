import React from 'react';
import './App.css';
import Profile from './Components/FuncProfile';
import MyProfile from './Components/ClassProfile';

function App() {
  return (
    <div> 
    <Profile name="riya" text={{age:"20"}}/>
    <Profile name="neha" text ={{age:"30"}}/>

    <MyProfile text={{name:"nikita"}} city="Pune"/>
    <MyProfile text={{name:"priya"}} city="Pune"/>
    <MyProfile text={{name:"sheela"}} city="Nashik"/>

    </div>
  );
}
export default App;
