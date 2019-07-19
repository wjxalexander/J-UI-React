import React from 'react';
import {rootClass} from "../utils/classFactory";
import cls from "classnames";

const sc = rootClass('j-ui-layout');

interface layoutSideBarProps extends React.HTMLAttributes<HTMLElement> {

}

const SideBar: React.FunctionComponent<layoutSideBarProps> = (props) => {
  const {className, ...restProps} = props;

  return (
    <div className={cls(sc('side-bar'),className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default SideBar;