import * as React from "react"
import Dialog from "../lib/Dialog/dialog"
import Button from "../lib/Button/button"

const {useState} = React;

export default function () {
  const [x, setX] = useState(false);
  const disMiss = ()=>setX(false);
  return (<div>
    <Button buttonType="default" onClick={() => {setX(!x)}}/>
    <Dialog onDismiss={disMiss} visible={x} buttons={[<Button buttonType="default" title="保存"/>,
      <Button onClick={disMiss} buttonType="custom" title="取消"/>]}>
      <div>1231213</div>
    </Dialog>
  </div>)
}