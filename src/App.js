import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header.js';
import Work1 from './Components/Work1.js';
import Education1 from './Components/Education1.js';
import Education2 from './Components/Education2';
import Work2 from './Components/Work2.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      basic_info: {
        name: 'Artur Akulenko',
        email: 'artur.akulenko@gmail.com',
        phone: '+37253092092',
      },
      education: {
        school: "King's College London",
        years: '2018-2021',
        subject: 'Law',
      },
      work: {
        place: 'Ellex Raidla',
        months_of_experience: '3 months',
        position: 'Legal intern',
        tasks: ['legal research', 'document composition'],
      }

    }
  }

  /*handleChange_work = (e) => {
    this.SetState({
      work: {
        place: e.target.value,
        months_of_experience: e.target.value,
        position: e.target.value,
        tasks: e.target.value,
      }
    })
  }*/

  render () {
    const { basic_info } = this.state;

    return (
    <div className="App">
      <Header basic_info = {basic_info} />
      <hr></hr>
      <h1><u>Education</u></h1>
      <Education2/>
      <hr></hr>
      <h1><u>Work experience</u></h1>
      <Work2/>
      <br/>
    </div> )
  }
}



export default App;
