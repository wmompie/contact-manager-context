import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
