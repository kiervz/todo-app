export interface Button {
  type: "button" | "submit" | "reset",
  className?: string,
  onSubmit?: React.FormEventHandler,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  btnText?: string,
  isDisabled?: boolean,
  isLoading?: boolean
  btnIcon?: JSX.Element | string
};
