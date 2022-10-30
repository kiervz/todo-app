export interface Input {
  type: string,
  value?: string,
  id?: string,
  placeholder?: string,
  className: string,
  style?: React.CSSProperties,
  checked?: boolean,
  pattern?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};
