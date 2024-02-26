import React from 'react';
import '../styles/ButtonClear.css';

const ButtonClear = (props) => (
  <div className='btn-clear'onClick={props.clickController}>
    {props.children}
  </div>
);

export default ButtonClear;