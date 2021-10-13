import React, { useState } from 'react';
import './singleForm.scss'
import { generateClassNames } from '../../utils'
import Button from '../Button';

export default function SingleForm({ placeholder, cta }) {

  const [value, setValue] = useState("");

  const cssClasses = {
    container: generateClassNames("single-form"),
    input: generateClassNames("single-form-input")
  }

  return (
    <div className={cssClasses.container}>
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cssClasses.input}
      />
      <Button skin="primary">{cta}</Button>
    </div>
  )
}
