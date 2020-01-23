import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavSuitsPage.css';
import suitsService from '../../utils/suitsService';
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
  // console.log(this.props.location.state.createdSuits)
  
    return (
      <div className='nice'>
          {this.props.savedSuits && this.props.savedSuits.map((suit,idx) => (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.66478 709.40164" 
          height='100%'
          className="suit"
          key={idx}
          >
            <title>Suit</title>
              <Shirt fill={suit.Shirt} stroke="grey" />
              <Tie  fill={suit.Tie} stroke="grey" />
              <Coat fill={suit.Coat} stroke="grey" />
              <Handkerchief fill={suit.Handkerchief} stroke="grey" />
              <Pants fill={suit.Pants} stroke="grey"  />
              <Shoes fill={suit.Shoes} stroke="grey" />
            
          </svg>
          ))}
      </div>
     )
}
}
