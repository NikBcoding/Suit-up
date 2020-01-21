import React from 'react';
// import Suit from './Suit.svg';
import Suit from '../src/Components/Suit/Suit';
import './App.css';
// import { ReactSVG } from 'react-svg'

function App() {

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

export default App;
