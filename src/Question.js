import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Data from './data'
const Question = (question) => {
  const {id, title ,info} = question
  const [btns,setBtns] = useState(true)
  const ics = (btns) => {
    let ic
    if(btns)
    ic = '-'
    else
    ic = '+'
    return (ic)
  }
  return (
    <div className='question'>
      <header>
      <h3>{title}</h3>
      <button className='btn' onClick={() => {setBtns(!btns)}}>{ics(btns)}</button>
      </header>
      <p>{btns ? info : ""}</p>
    </div>
  )
};

export default Question;
