import React, {HTMLAttributes} from 'react';
import "./card.style.scss"
import {rootClass} from "../utils/classFactory";
import cls from "classnames";
interface CardProps extends HTMLAttributes<HTMLElement>{
  title?:string;
  className?:string
}
// HIGH ORDER FUNCTION
const classGenerator = rootClass('j-ui-card');
const Card:React.FunctionComponent<CardProps> = (props:CardProps) => {
  return (
    <div className={cls(classGenerator("container"),props.className)}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Card;