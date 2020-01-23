import React from 'react'

export default function(props) {
    return(
     <g onClick={props.handleHandkerchiefClick} id="handkerchief">
    <polyline className="cls-5 handkerchief" style={{fill: props.fill, stroke: props.stroke}} points="181.177 93.175 178.486 83.113 158.503 93.175"/>
  </g>

    )
}