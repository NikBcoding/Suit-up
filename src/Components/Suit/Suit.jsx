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

  const [color, setColor] = useState('#000000');

  function handleColorSelect(color) {
    setColor(color);
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
              <Shirt fill="pink" stroke="white" />
              <Tie fill='red' stroke="grey" />
              <Coat fill='grey' stroke="white" />
              <Handkerchief fill='red' stroke="black" />
              <Pants fill="grey" stroke="white"  />
              <Shoes fill="black" stroke="grey" />
          </svg>
          <div className="swatchesCell">
            <SwatchesPicker 
            height={'100%'} 
            width={'90%'} 
            color={color}
            onChangeComplete={ handleColorSelect }
            />
          </div>
      </div>
		</div>
  )
}