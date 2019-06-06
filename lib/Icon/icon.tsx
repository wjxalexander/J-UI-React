import * as React from "react";
import "./importAllIcons";
import "../fabicIcons/fabric-icons-inline.scss"
import "./test.scss"

interface IconProps {
    iconName: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>
    USEMsFabicIcon?:boolean
}

const SvgComponent: React.FunctionComponent<IconProps> = (props => {
    return (<svg className="J-UI-Icon">
        <use xlinkHref={`#${props.iconName}`}/>
    </svg>)
})
const HTMLComponent: React.FunctionComponent<IconProps> = (props => {
    return  <i className={`ms-Icon ms-Icon--${props.iconName} J-UI-Icon`}/>
})
// Icon 是一个React的函数式组件，他的类型是IconProps, props:IconProps+children
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {USEMsFabicIcon,...restProps} = props
    const DisplayComponent = USEMsFabicIcon ? (<HTMLComponent {...restProps}/>):(<SvgComponent {...restProps}/>)
    return (
        <span onClick={props.onClick}>
            {DisplayComponent}
        </span>
    )
};
export default Icon