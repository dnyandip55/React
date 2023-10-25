//Question: Implement a navigation menu using React Router. Create routes for Home, About, and Contact pages.
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';

import './App.css';

function App() {
  return (
    <div>
        <Navigation />
        <Router>
          <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
         
          </Routes>
      
    </Router>
    </div>
  );
}

export default App;

