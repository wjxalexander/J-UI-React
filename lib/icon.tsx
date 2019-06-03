import * as React from "react";
interface IconProps {
    iconName: string;
}
// Icon 是一个React的函数式组件，他的类型是IconProps, props:IconProps+children
const Icon: React.FunctionComponent<IconProps> = (props)=>{
    return(
        <span>{props.iconName}</span>
    )
};
export default  Icon