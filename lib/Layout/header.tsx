import React from 'react';
import {rootClass} from "../utils/classFactory";
const sc =  rootClass('j-ui-layout');
import cls from "classnames";

interface layoutHeaderProps extends React.HTMLAttributes<HTMLElement> {

}
const Header:React.FunctionComponent<layoutHeaderProps> = (props) => {
  const {className, ...restProps} = props;

  return (
    <div className={cls(sc('header'),className)} {...restProps}>

    </div>
  );
};

export default Header;