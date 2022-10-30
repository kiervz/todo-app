import React from 'react';

interface Props {
  type?: "button" | "submit" | "reset",
  className: string,
  onSubmit: React.FormEventHandler,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  btnText: string,
  isDisabled: boolean,
  isLoading: boolean
  btnIcon: string
};

export const Button: React.FC<Props> = ({type = 'button', className, onSubmit, onClick, btnText = '', isDisabled = false, isLoading, btnIcon = null}) => {
  return (
    <button
      type={type}
      className={className}
      onSubmit={onSubmit}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      { btnIcon && !isLoading && (<i className={btnIcon}></i>)}
      { isLoading ? (<>Loading...</>) : btnText}
    </button>
  );
};
