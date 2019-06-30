import * as React from 'react';
import {rootClass} from "../utils/classFactory";
import Icon, {IconProps} from "../Icon/icon";
import "./button.style.scss"
import cls from "classnames"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  title?: string;
  buttonType: "default" | "custom";
  iconProps?: IconProps;
  secondaryText?: string;
}

const classGenerator = rootClass('j-ui-button');

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {buttonType,iconProps,secondaryText,disabled,...restProps} = props;
  return (
    <button {...restProps} className={classGenerator(`${buttonType}-wrapper`)} disabled={disabled}>
      {iconProps ?
        <Icon {...iconProps} className={cls('j-ui-button-icon', iconProps.className)}/> : null}
      <div className={classGenerator(`${buttonType}-title`)}>
        {props.title || "button"}
      </div>
      {secondaryText ?
        <div className={classGenerator(`${buttonType}-secondaryText`)}>{secondaryText}</div> : null}
    </button>)
};

export default Button;