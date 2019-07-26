import Demo from "../../demo";
import React from "react"
import IconExample from "../icon.example"

const sourceCode = require("!!raw-loader!../icon.example.tsx");

const IconDemo:React.FunctionComponent = (props)=>{
  return(
    <Demo code={sourceCode.default} >
      <IconExample/>
    </Demo>
  )
};
export default IconDemo
