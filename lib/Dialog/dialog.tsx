import React, {Fragment} from "react"
import "./dialog.style.scss"
import {Icon} from "../index";
import {rootClass} from "../utils/classFactory"
interface Props {
  visible: boolean;
  children?: React.ReactNode
}

// HIGH ORDER FUNCTION
const classGenerator = rootClass('j-ui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={classGenerator("mask")}/>
        <div className={classGenerator("container")}>
          <Icon iconName={'Cancel'} USEMsFabricIcon
                className={classGenerator("close")}/>
          <header className={classGenerator("header")}>All emails together</header>
          <main className={classGenerator("content")}>{props.children}</main>
          <footer className={classGenerator("footer")}>footer</footer>
        </div>
      </Fragment> : null

  )
}
export default Dialog