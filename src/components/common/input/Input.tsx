import React from 'react';

interface Props {
    type: string,
    value: string,
    id: string,
    placeholder: string,
    className: string,
    checked: boolean,
    pattern: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
};

export const Input: React.FC<Props> = ({type = 'text', value = '', id, placeholder, className, checked, pattern, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      className={className}
      pattern={pattern}
      checked={checked}
      onChange={onChange}
    />
  );
};
