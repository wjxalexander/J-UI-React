import * as React from "react";
import Input from "@/Input/input"
import {useState} from "react";
import style from "./input.example.scss"

const InputExample = () => {
  const [input, setInput] = useState("");
  const [maskInput, setMaskInput] = useState("(___)___-____");
  const [iconInput,setIconInput] = useState("")
  return (
    <div className={style.inputContainer}>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Input value={maskInput} mask={{regExp: /^\([\d_]{3}\)[\d_]{3}-[\d_]{4}$/g}} onChange={(e,value) => {setMaskInput(value||"");console.log(value)}}/>
      <Input value={iconInput} onChange={(e)=>setIconInput(e.target.value)} iconProps={{iconName:"Calendar",USEMsFabricIcon:true}}/>
    </div>
  )
};
export default InputExample