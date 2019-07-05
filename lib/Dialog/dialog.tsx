import React, {Fragment, ReactElement} from "react"
import "./dialog.style.scss"
import {Icon, Button} from "../index";
import {rootClass} from "../utils/classFactory";
import ReactDOM from "react-dom";

interface dialogProps {
  visible: boolean;
  children?: React.ReactNode
  buttons?: Array<ReactElement>;
  onDismiss: React.MouseEventHandler<HTMLOrSVGElement>;
  maskClosable?: boolean;
}

// button Generation
const buttons = (buttonArray: Array<ReactElement>): ReactElement => {
  return (
    <Fragment>
      {buttonArray.map((item, index) => (<span key={`${index}-${Math.random()}`}>{item}</span>))}
    </Fragment>
  )
};
// HIGH ORDER FUNCTION
const classGenerator = rootClass('j-ui-dialog');

const Dialog: React.FunctionComponent<dialogProps> = (props: dialogProps) => {
  const onDismiss: React.MouseEventHandler<HTMLOrSVGElement> = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    props.onDismiss(event)
  };
  const MaskDismiss: React.MouseEventHandler<HTMLOrSVGElement> = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    if (!props.maskClosable) return;
    props.onDismiss(event)
  };
  const portalContent = (props.visible ?
    <Fragment>
      <div className={classGenerator("mask")} onClick={MaskDismiss}/>
      <div className={classGenerator("container")}>
        <Icon iconName={'Cancel'} USEMsFabricIcon
              className={classGenerator("close")}
              onClick={onDismiss}/>
        <header className={classGenerator("header")}>All emails together</header>
        <main className={classGenerator("content")}>{props.children}</main>
        <footer className={classGenerator("footer")}>
          {props.buttons && props.buttons.length > 0 ? (buttons(props.buttons)) :
            (<Fragment>
              <span><Button buttonType="default" title="Save"/></span>
              <span><Button buttonType="custom" title="Cancel" onClick={onDismiss}/></span>
            </Fragment>)}
        </footer>
      </div>
    </Fragment> : null);
  return (
    // React 传送门
    ReactDOM.createPortal(portalContent, document.body)
  )
};
Dialog.defaultProps = {
  maskClosable: true
};
const alert = (content: React.ReactNode) => {

  const div = document.createElement("div");
  document.body.append(div);
  const component = <Dialog onDismiss={() => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove()
  }} visible={true}>{content}</Dialog>;

  ReactDOM.render(component, div);
};

export {alert}
export default Dialog