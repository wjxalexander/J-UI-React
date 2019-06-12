import * as React from "react";
import {Fragment} from "react";
import cls from "classnames";
import "./utils/importAllIcons.js";
import "./fabicIcons/fabric-icons-inline.scss"
import "./icon.scss"

/*所有的Onxx 响应全部在DOMAttributes<T>中 extends里面了  可点击看react源码 这里因为会是SVG或者html元素 因此元素<T>是HTMLOrSVGElement
 * 最终传给DOMAttributes<T>
 */
interface IconProps extends React.SVGAttributes<HTMLOrSVGElement>, React.HTMLAttributes<HTMLOrSVGElement> {
    iconName: string;
    className?: string;
    USEMsFabricIcon?: boolean
}

//  用户可以使用自己的iconfont
const customCache = new Set<string>();

export function createFromIconFont(scripts: string = ""): void {
    if (
        typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function' &&
        scripts.length &&
        !customCache.has(scripts)
    ) {
        const script = document.createElement('script');
        script.setAttribute('type', "text/javascript");
        script.setAttribute('src', scripts);
        script.setAttribute('script-import-from-user', scripts);
        customCache.add(scripts);
        document.body.appendChild(script);
    }
}

// 为什么在JSX中使用...运算符需要加{} 因为他是JS语法，JSX规定需要加{}
const SvgComponent: React.FunctionComponent<IconProps> = (({iconName, className, ...restProps}) => {
    return (
        <svg className={cls("J-UI-Icon", className)} {...restProps}>
            <use xlinkHref={`#${iconName}`}/>
        </svg>)
});

const HTMLComponent: React.FunctionComponent<IconProps> = (({iconName, className, ...restProps}) => {
    return <i className={cls(`ms-Icon ms-Icon--${iconName} J-UI-Icon`, className)}{...restProps}/>
});

// Icon 是一个React的函数式组件，他的类型是IconProps, props:IconProps+children
const Icon: React.FunctionComponent<IconProps> = ({USEMsFabricIcon, ...restProps}) => {
    const DisplayComponent = USEMsFabricIcon ? (<HTMLComponent {...restProps}/>) : (<SvgComponent {...restProps}/>);
    return (
        <Fragment>
            {DisplayComponent}
        </Fragment>
    )
};
export default Icon;