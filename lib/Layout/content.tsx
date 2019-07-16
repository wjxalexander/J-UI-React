import React from 'react';
import {rootClass} from "../utils/classFactory";
import cls from "classnames";

const sc =  rootClass('j-ui-layout');
interface layoutContentProps extends React.HTMLAttributes<HTMLElement> {

}
const Content:React.FunctionComponent<layoutContentProps> = (props) => {
  const {className, ...restProps} = props;

  return (
    <div className={cls(sc('content'),className)} {...restProps}>
    content
    </div>
  );
};

export default Content;