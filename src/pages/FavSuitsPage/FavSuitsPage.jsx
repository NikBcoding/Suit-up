import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FavSuitsPage.css';
// import suitsService from '../../utils/suitsService';
import Shirt from '../../Components/Suit/Shirt';
import Tie from '../../Components/Suit/Tie';
import Coat from '../../Components/Suit/Coat';
import Handkerchief from '../../Components/Suit/Handkerchief';
import Pants from '../../Components/Suit/Pants';
import Shoes from '../../Components/Suit/Shoes';


export default class FavSuitsPage extends Component {
constructor(props){
  super(props);
}

  render() {
  
    return (
      <div className='nice'>
          {this.props.savedSuits && this.props.savedSuits.map((suit,idx) => (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.66478 709.40164" 
          height='100%'
          className="suit"
          key={idx}
          >
            <title>Suit</title>
              <Shirt className='savedSuit' fill={suit.Shirt} stroke="grey" />
              <Tie className='savedSuit' fill={suit.Tie} stroke="grey" />
              <Coat className='savedSuit' fill={suit.Coat} stroke="grey" />
              <Handkerchief className='savedSuit' fill={suit.Handkerchief} stroke="grey" />
              <Pants className='savedSuit' fill={suit.Pants} stroke="grey"  />
              <Shoes className='savedSuit' fill={suit.Shoes} stroke="grey" />
            
          </svg>
          ))}
          <div className='CMBtn'>
            <Link to = '/'><button>Create More</button></Link>
          </div>
      </div>
     )
  }
}
