import React from 'react';
import './button.scss';
import { generateClassNames } from '../../utils'

export default function Button({ 
  skin="default",
  children,
  onClick= () => {}, 
  disabled=false
}) {
  
  const cssClasses = {
    root: generateClassNames("button", {
      [`--${skin}`]: skin,
      [`--disabled`]: disabled,
    })
  }

  return (
    <button className={cssClasses.root} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};