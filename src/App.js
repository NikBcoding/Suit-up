import React, { Component } from 'react';
// import Suit from './Suit.svg';
import Suit from './Components/Suit/Suit';
import './App.css';
import userService from '../../utils/userService';

// import { ReactSVG } from 'react-svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser()
    }
  }


makeSuit() {
  return {
    suit: this.suit()
  }
}

suit() {

  const coatColor = "red"

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
        <Suit coatColor={coatColor} />
      </div>
    </div>
  );
}
}

export default App;
