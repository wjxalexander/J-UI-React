import React from 'react';
import {rootClass} from "../utils/classFactory";

const sc = rootClass('j-ui-layout');
import cls from "classnames";

interface layoutFooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<layoutFooterProps> = (props) => {
  const {className, ...restProps} = props;

  return (
    <div className={cls(sc('footer'),className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Footer;