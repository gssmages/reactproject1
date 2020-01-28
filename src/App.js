import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import EditContact from './component/contacts/EditContact';
import About from './component/pages/About';
import {Provider} from './context';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Notfound from './component/pages/Notfound';
import Test from './component/Test/Test';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts}></Route>
          <Route exact path="/contact/add" component={AddContact}></Route>
          <Route exact path="/contact/edit/:id" component={EditContact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/test" component={Test}></Route>
          <Route  component={Notfound}></Route>
        </Switch>
       {/*  <AddContact />
        <Contacts/>     */}   
      </div> 
    </div>
    </Router>
    </Provider>
  );
}

export default App;
