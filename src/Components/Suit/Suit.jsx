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
  const [coatColor, setCoatColor] = useState('#FFFFFF');
  const [tieColor, setTieColor] = useState('#FFFFFF');
  const [pantsColor, setPantsColor] = useState('#FFFFFF');
  const [shoesColor, setShoesColor] = useState('#FFFFFF');
  const [shirtColor, setShirtColor] = useState('#FFFFFF');
  const [handkerchiefColor, setHandkerchiefColor] = useState('#FFFFFF');
  const [color, setColor] = useState('#FFFFFF');
  const [selItem, setSelected] = useState('');

  function  handleCoatClick (){
    // if color was selected on something else, set the selected color to whatever color the coat currently is.
    if (color !== coatColor) setColor(coatColor);
    setSelected('coat');
  
  }
  
  function handlePantsClick () {
    if (color !== pantsColor) setColor(pantsColor);
    setSelected('pants');
  }
  
  function handleShirtClick(){
    if (color !== shirtColor) setColor(shirtColor);
    setSelected('shirt');
  }
  
  function handleTieClick(){
    if (color !== tieColor) setColor(tieColor);
    setSelected('tie');
  }
  
 function handleShoesClick(){
  if (color !== shoesColor) setColor(shoesColor);
  setSelected('shoes');
  }
  
 function handleHandkerchiefClick() {
  if (color !== handkerchiefColor) setColor(handkerchiefColor);
  setSelected('handkerchief');
  }

  //<SwatchesPicker>'s onChange property accepts a function as a parameter that is triggered whenever we click on a color. It inputs in the selected color on the swatch as the argument into the function. The color argument has a property of .hex which contains the hex string of the color. 
function handleClick(color){
  //Since <SwatchesPicker> shows a checkmark based on the selected color, and since we are passing our 'color' state as the property for the selected color for swatchespicker, update the state, so that swatchespicker places its checkmark on the color we just clicked on.
  setColor(color.hex)
  //based on what article of clohing was selected in the functions above, change the color of that article.
  switch (selItem) {
    case 'coat':
      setCoatColor(color.hex)
      return;
    case 'pants':
      setPantsColor(color.hex);
      return;
    case 'shirt':
      setShirtColor(color.hex);
      return;
    case 'tie':
      setTieColor(color.hex);
      return;
    case 'shoes':
      setShoesColor(color.hex);
      return;
    case 'handkerchief':
      setHandkerchiefColor(color.hex);
      return;
    default: 
      return;
  }
}

function refreshSuit() {
  setCoatColor('#FFFFFF')
  setPantsColor('#FFFFFF')
  setShirtColor('#FFFFFF')
  setTieColor('#FFFFFF')
  setShoesColor('#FFFFFF')
  setHandkerchiefColor('#FFFFFF')
}



function saveSuit(){
  const createdSuit={
    Coat: coatColor,
    Pants: pantsColor,
    Shirt: shirtColor,
    Tie: tieColor,
    Shoes: shoesColor,
    Handkerchief: handkerchiefColor
  }
  props.handleSaveSuit(createdSuit)
}


  return(
      <div>
        <div>
					<NavBar 
						user={props.user}
            handleLogout={props.handleLogout}
            refreshSuit={refreshSuit}
            saveSuit={saveSuit}
					/>
        </div>
				<div  className="suitGrid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.66478 709.40164" 
          height='100%'
          className="suit"
          >
            <title>Suit</title>
              <Shirt handleShirtClick={handleShirtClick} fill={shirtColor} stroke="grey" />
              <Tie handleTieClick={handleTieClick} fill={tieColor} stroke="grey" />
              <Coat handleCoatClick={handleCoatClick} fill={coatColor} stroke="grey" />
              <Handkerchief handleHandkerchiefClick={handleHandkerchiefClick} fill={handkerchiefColor} stroke="grey" />
              <Pants handlePantsClick={handlePantsClick} fill={pantsColor} stroke="grey"  />
              <Shoes handleShoesClick={handleShoesClick} fill={shoesColor} stroke="grey" />
          </svg>
          <div className="swatchesCell">
            <SwatchesPicker 
            height={'100%'} 
            width={'90%'} 
            color={ color }
            onChange={ handleClick }
  
            />
          </div>
      </div>
		</div>
  )
}