import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <section className="left">
            <Card />
          </section>
          <section className="right">
            <Card />
          </section> 
        </div>       
      </div>
    );
  }
}

export default App;
