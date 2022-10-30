import React from "react"

export interface Input {
  type: string,
  value?: string,
  id?: string,
  innerRef?: React.RefObject<HTMLInputElement>,
  autoFocus?: boolean,
  placeholder?: string,
  className: string,
  style?: React.CSSProperties,
  checked?: boolean,
  pattern?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};
