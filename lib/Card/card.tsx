import React, {HTMLAttributes} from 'react';


interface CardProps extends HTMLAttributes<HTMLElement>{
  title?:string
}
const Card:React.FunctionComponent<CardProps> = () => {
  return (
    <div>

    </div>
  );
};

export default Card;