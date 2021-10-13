import React, { Children } from 'react';
import './checkbox.scss';
import { generateClassNames } from '../../utils';

export default function Checkbox({ disabled, children }) {

  const cssClasses ={
    container: generateClassNames("container",{
      [`--disabled`]: disabled
    }),
    checkbox: generateClassNames("checkbox",),
    checkmark: generateClassNames("checkmark"),
  };

  return (
      <label className={cssClasses.container}>
        {children}
        <input 
          type="checkbox"
          className={cssClasses.checkbox}
          disabled={disabled}
        />
        <span className={cssClasses.checkmark}></span>
      </label>
  );
};