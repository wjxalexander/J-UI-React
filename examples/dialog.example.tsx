import * as React from "react"
import Dialog from "../lib/Dialog/dialog"

const {useState} = React;
export default function () {
  const [x, setX] = useState(false);
  return (<div>
    <button onClick={() => {setX(!x)}}/>
    <Dialog visible={x}>
      <div>1231213</div>
    </Dialog>
  </div>)
}