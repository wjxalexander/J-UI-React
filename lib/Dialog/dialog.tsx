import React, {Fragment, ReactElement} from "react"
import "./dialog.style.scss"
import {Icon, Button} from "../index";
import {rootClass} from "../utils/classFactory";

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
    if (!props.maskClosable) {
      return
    }
    props.onDismiss(event)
  };
  return (
    props.visible ?
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
                <span><Button buttonType="custom" title="Cancel"/></span>
              </Fragment>)}
          </footer>
        </div>
      </Fragment> : null

  )
};
Dialog.defaultProps = {
  maskClosable: true
};
export default Dialog