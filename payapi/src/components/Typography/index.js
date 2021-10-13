import React from 'react';
import './styles/index.scss'
import { generateClassNames } from '../../utils';

export default function Typography({
  type,
  color,
  tag,
  children
}) {

  const Tag = (() => {
    if(!tag) return "p";
    return tag;
  })();

  const cssClasses = generateClassNames("text",{
    [`--type-${type}`]: type,
    [`--color-${color}`]: color
  })

  return (
    <Tag className={cssClasses}>
      {children}
    </Tag>
  );
};
