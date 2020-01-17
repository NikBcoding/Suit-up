import React from 'react';
import Suit from './Suit.svg';
import './App.css';
import { ReactSVG } from 'react-svg'

function App() {
  return (
    <div className='header'>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ReactSVG 
        src={Suit}
        beforeInjection={svg => {
          svg.classList.add('Suit')
          svg.setAttribute('style', 'width: 15vw', 'height: 15vh')
        }}
        />
      </div>
    </div>
  );
}

export default App;
