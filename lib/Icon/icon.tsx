import * as React from "react";
import {Fragment} from "react";
import cls from "classnames";
import "./importAllIcons";
import "../fabicIcons/fabric-icons-inline.scss"
import "./test.scss"

/*所有的Onxx 响应全部在 extends里面了 可点击看react源码 这里因为会是SVG或者html元素 因此元素<T>是HTMLOrSVGElement
 * 最终传给DOMAttributes<T>
 */
interface IconProps extends React.SVGAttributes<HTMLOrSVGElement>, React.HTMLAttributes<HTMLOrSVGElement> {
    iconName: string;
    className?: string;
    USEMsFabricIcon?: boolean
}

// 为什么在JSX中使用...运算符需要加{} 因为他是JS语法，JSX规定需要加{}
const SvgComponent: React.FunctionComponent<IconProps> = (props => {
    const {iconName, className, ...restProps} = props;
    return (<svg className={cls("J-UI-Icon", className)} {...restProps}>
        <use xlinkHref={`#${iconName}`}/>
    </svg>)
});

const HTMLComponent: React.FunctionComponent<IconProps> = (props => {
    const {iconName, className, ...restProps} = props;
    return <i className={cls(`ms-Icon ms-Icon--${iconName} J-UI-Icon`,className)}{...restProps}/>
});

// Icon 是一个React的函数式组件，他的类型是IconProps, props:IconProps+children
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {USEMsFabricIcon, ...restProps} = props;
    const DisplayComponent = USEMsFabricIcon ? (<HTMLComponent {...restProps}/>) : (<SvgComponent {...restProps}/>);
    return (
        <Fragment>
            {DisplayComponent}
        </Fragment>
    )
};
export default Icon