import React, { useState } from 'react';
import { generateClassNames } from '../../utils';
import './textarea.scss';

export default function TextArea({ placeholder, error=false, rows=4 }) {
  const [value, setValue] = useState("");

  const cssClasses = generateClassNames("textarea",{
    [`--error`]: error
  });

  return (
    <textarea  
      placeholder={placeholder} 
      rows={rows}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cssClasses}
    />
  );
};