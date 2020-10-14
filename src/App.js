import React, { Component } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import './App.css';

export default class App extends Component {

  render () {
    return (
      <div className="app">
        <Cart></Cart>
        <Products></Products>
      </div>
    );
  }
}
