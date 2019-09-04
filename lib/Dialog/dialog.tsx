import React, {Fragment, ReactElement, ReactNode} from "react"
import "./dialog.style.scss"
import {Icon, Button} from "../index";
import {rootClass} from "../utils/classFactory";
import cls from "classnames"
import ReactDOM from "react-dom";

interface dialogProps {
  visible: boolean;
  children?: React.ReactNode
  buttons?: Array<ReactElement>;
  onDismiss: React.MouseEventHandler<HTMLOrSVGElement | React.ReactNode>;
  onOk?: React.MouseEventHandler<HTMLOrSVGElement | React.ReactNode>;
  maskClosable?: boolean;
  showCloseButton?: boolean;
  noButton?: boolean;
  title?: React.ReactNode;
  className?: string
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
  const onOk: React.MouseEventHandler<HTMLOrSVGElement> = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    props.onOk && props.onOk(event)
  };
  const MaskDismiss: React.MouseEventHandler<HTMLOrSVGElement> = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    if (!props.maskClosable) return;
    props.onDismiss(event)
  };
  const portalContent = (props.visible ?
    <Fragment>
      <div className={classGenerator("mask")} onClick={MaskDismiss}/>
      <div className={cls(classGenerator("container"), props.className)}>
        {props.showCloseButton ? (<Icon iconName={'Cancel'} USEMsFabricIcon
                                        className={classGenerator("close")}
                                        onClick={onDismiss}/>) : null}
        <header className={classGenerator("header")}>{props.title || "提示"}</header>
        <main className={classGenerator("content")}>{props.children}</main>
        <footer className={classGenerator("footer")}>
          {props.buttons && props.buttons.length > 0 ? (buttons(props.buttons)) :
            props.noButton ? null : (<Fragment>
              <span><Button buttonType="default" title="Save" onClick={onOk}/></span>
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
  maskClosable: true,
  showCloseButton: true,
  noButton: false
};
const alert = (content: React.ReactNode) => {
  const button = [<Button buttonType="default" title="确定" onClick={() => onClose()}/>];
  const onClose = modal(content, false, button)
};
const confirm = (content: React.ReactNode, confirm?: () => void, cancel?: () => void) => {
  const div = document.createElement("div");
  document.body.append(div);
  const onYes = () => {
    onClose()
    confirm && confirm()
  };
  const onNo = () => {
    onClose();
    cancel && cancel()
  };
  const buttons = [
    <Button buttonType="default" title="Confirm" onClick={onYes}/>,
    <Button buttonType="default" title="Cancel" onClick={onNo}/>
  ];
  const onClose = modal(content, false, buttons)
};


const modal = (content: ReactNode, noButton?: boolean, buttons?: Array<ReactElement>,) => {
  const disMiss = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove()
  };
  const component = <Dialog showCloseButton={false}
                            onDismiss={disMiss}
                            visible={true}
                            noButton={noButton}
                            buttons={buttons}>{content}</Dialog>;
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return disMiss;
};
export {alert, confirm, modal}
export default Dialog