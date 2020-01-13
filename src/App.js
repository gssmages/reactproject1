import React from 'react';
import Contact from './component/Contact';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
      </div> 
    </div>
  );
}

export default App;
