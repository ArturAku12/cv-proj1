import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header.js';
import Education from './Components/Education';
import Work from './Components/Work.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      basic_info: {
        name: 'Artur Akulenko',
        email: 'artur.akulenko@gmail.com',
        phone: '+37253092092',
      }
    }
  }


  render () {
    const { basic_info } = this.state;

    return (
    <div className="App">
      {console.log("render_app")}
      <Header basic_info = {basic_info} />
      <hr></hr>
      <h1><u>Education</u></h1>
      <Education/>
      <hr></hr>
      <h1><u>Work experience</u></h1>
      <Work/>
      <br/>
    </div> )
  }
}




export default App;
