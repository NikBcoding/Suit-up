import React from 'react';
import './Suit.css';
import Coat from './Coat';
import Pants from './Pants';
import Shoes from './Shoes';
import Tie from './Tie';
import Shirt from './Shirt';
import Handkerchief from './Handkerchief'

export default function(props) {

    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.66478 709.40164" width='80vw' height='80vh'>
                <title>Suit</title>
                <Shirt fill="lavendar" stroke="black" />
                <Tie fill='purple' stroke="black" />
                <Coat fill='lightgrey' stroke="black" />
                <Handkerchief fill='purple' stroke="black" />
                <Pants fill="lightgrey" stroke="grey"  />
                <Shoes fill="black" stroke="grey" />
            </svg>
        </div>
    )
}