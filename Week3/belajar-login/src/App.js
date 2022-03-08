
import React, { Component } from 'react';

import Footer from './component/Footer';
import List from './component/List';
class App extends React.Component {
  render() {
    return (
      <div>
        
        <h1>Component dari Class App</h1>
      
        <Footer judul='Halaman Footer' nama='Ndogh' />
        <List/>
      </div>
    );
  }
}export default App;
