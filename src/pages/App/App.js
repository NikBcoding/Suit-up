import React, { Component } from 'react';
// import Suit from './Suit.svg';
import Suit from '../../Components/Suit/Suit';
import './App.css';
import userService from '../../utils/userService';

// import { ReactSVG } from 'react-svg'

class App extends Component {
    constructor() {
      super();
      this.state = {
        user: userService.getUser(),
        suit: []
      };
    }


  render() {

    return (
      <div className='header'>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {/* <ReactSVG 
            src={Suit}
            beforeInjection={svg => {
              svg.classList.add('Suit')
              svg.setAttribute('style', 'width: 15vw', 'height: 15vh')
            }}
            /> */}
          <Suit />
        </div>
      </div>
    );
  }
}

export default App;
