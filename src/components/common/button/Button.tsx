import React from 'react';
import { Button as ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({type = 'button', className, onSubmit, onClick, btnText = '', isDisabled = false, isLoading, btnIcon = null}) => {
  return (
    <button
      type={type}
      className={className}
      onSubmit={onSubmit}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      { btnIcon && !isLoading && (typeof btnIcon === 'string' ? <i className={btnIcon}></i> : btnIcon)}
      { isLoading ? (<>Loading...</>) : btnText}
    </button>
  );
};
