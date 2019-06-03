import * as React from "react";
import "SvgRepo/wechat.svg"
import "SvgRepo/alipay.svg"

interface IconProps {
    iconName: string;
    className?: string;
}

// Icon 是一个React的函数式组件，他的类型是IconProps, props:IconProps+children
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <div>
            <svg>
                <use xlinkHref={`#${props.iconName}`}/>
            </svg>
            <span>{props.iconName}</span>

        </div>
    )
};
export default Icon