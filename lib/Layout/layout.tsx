import React, {ReactElement} from 'react';
import {rootClass} from "../utils/classFactory";
import "./layout.style.scss";
import cls from "classnames";
import SideBar from "./sideBar";

const sc = rootClass('j-ui-layout');

interface layoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<layoutProps> = (props) => {
    const {className, ...restProps} = props;
    const assertArray = (props.children as Array<ReactElement>);
    const hasSideBar = assertArray.length &&
      assertArray.some(item => item.type == SideBar);

    return (
      <div className={cls(sc(), className, hasSideBar ? 'topSideBar' : null)} {...restProps}>
        {props.children}
      </div>
    );
  }
;

export default Layout;