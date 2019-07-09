import * as React from "react"
import Dialog, {alert, confirm,modal} from "../lib/Dialog/dialog"
import Button from "../lib/Button/button"

const {useState} = React;

export default function () {
  const [x, setX] = useState(false);
  const disMiss = () => setX(false);
  const openModal = ()=> { const close = modal(<h1>hello<Button buttonType="default" title='close' onClick={()=>close()}/></h1>,true)};
  return (<div>
    <Button buttonType="default" onClick={() => {setX(!x)}}/>
    <Dialog onDismiss={disMiss} visible={x} buttons={[<Button buttonType="default" title="保存"/>,
      <Button onClick={disMiss} buttonType="custom" title="取消"/>]}>
      <div>1231213</div>
    </Dialog>
    <div>---------</div>
    <Button buttonType="default" onClick={() => {alert(<div>1234</div>)}}/>
    <div>---------</div>
    <Button buttonType="default" onClick={() => {confirm('1', () => {console.log('yes')}, () => {console.log('no')})}}/>
    <div>---------</div>
    <Button buttonType="custom" onClick={openModal}/>

  </div>)
}