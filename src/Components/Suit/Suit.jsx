import React, {useState} from 'react';
import './Suit.css';
import Coat from './Coat';
import Pants from './Pants';
import Shoes from './Shoes';
import Tie from './Tie';
import Shirt from './Shirt';
import Handkerchief from './Handkerchief'
import NavBar from '../NavBar/NavBar'
import { SwatchesPicker } from 'react-color'



export default function(props) {

  const [color, setColor] = useState('#FFFFFF');

  function handleColorSelect(color) {
    setColor(color.hex);
    console.log(color.hex)
  }



  return(
      <div>
        <div>
					<NavBar 
						user={props.user}
						handleLogout={props.handleLogout}
					/>
        </div>
				<div  className="suitGrid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.66478 709.40164" 
          height='100%'
          className="suit"
          >
            <title>Suit</title>
              <Shirt handleShirtClick={props.handleShirtClick} fill={color} stroke="grey" />
              <Tie handleTieClick={props.handleTieClick} fill={color} stroke="grey" />
              <Coat handleCoatClick={props.handleCoatClick} fill={color} stroke="grey" />
              <Handkerchief handleHandkerchiefClick={props.handleHandkerchiefClick} fill={color} stroke="grey" />
              <Pants handlePantsClick={props.handlePantsClick} fill={color} stroke="grey"  />
              <Shoes handleShoesClick={props.handleShoesClick} fill={color} stroke="grey" />
          </svg>
          <div className="swatchesCell">
            <SwatchesPicker 
            height={'100%'} 
            width={'90%'} 
            color={color}
            onChange={ handleColorSelect }
  
            />
          </div>
      </div>
		</div>
  )
}