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
          <Contacts name='John Doe' email='jdoe@gmail.com' phone='555-555-5555' />
          <Contacts name='Kirsten Williams' email='kwilliams@gmail.com' phone='111-111-1111' />
          <Contacts name='Henry Johnson' email='henry@gmail.com' phone='222-222-2222' />
        </div>
      </div>
    );
  }
}

export default App;
