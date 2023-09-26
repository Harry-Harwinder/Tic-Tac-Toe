/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
export default function Square(props) {
  return (
    <div onClick={props.onClick} className="square" >
      <h3 style={{ marginTop: '40px' }}>{props.value}</h3>
    </div>
  )
}
