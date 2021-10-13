import React, { useState } from 'react';
import { generateClassNames } from '../../utils';
import './input.scss'

export default function Input({ type, placeholder, error=false }) {
  const [value, setValue] = useState("");

  const cssClasses = generateClassNames("input",{
    [`--error`]: error
  });

  if(type ==="textarea") {
    return(
      <textarea  
      placeholder={placeholder} 
      rows={4}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cssClasses}
    />
    )
  };
  
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cssClasses}
    />
  );
};