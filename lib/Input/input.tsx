import React, {InputHTMLAttributes} from 'react';
import cls from "classnames";
import "./input.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}


const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const {className, ...restProps} = props;
  return<input className={cls(className, 'j-ui-input')}{...restProps}/>
};

export default Input;