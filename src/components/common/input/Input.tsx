import React from 'react';
import { Input as InputProps } from './types';

export const Input: React.FC<InputProps> = ({type, value = '', id, placeholder, className, style, checked, pattern, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      className={className}
      style={style}
      pattern={pattern}
      checked={checked}
      onChange={onChange}
    />
  );
};
