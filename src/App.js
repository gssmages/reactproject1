import React from 'react';
import Contacts from './component/Contacts';
import Header from './component/Header';
import {Provider} from './context';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Contacts/>
        {/* <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/>
        <Contact name="Magesh" email="mageshbabu.s@flex.com" contact="9442778471"/> */}
      </div> 
    </div>
    </Provider>
  );
}

export default App;