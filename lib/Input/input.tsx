import React, {useRef, useState} from 'react';
import cls from "classnames";
import "./input.scss"
import Icon, {IconProps} from "../Icon/icon";

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  className?: string;
  mask?: maskProps;
  componentRef?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, newValue?: string) => void;
  iconProps?:IconProps
}

interface maskProps {
  regExp: RegExp;
}

function setSelectionRange(input: HTMLInputElement, selectionStart: number, selectionEnd: number) {
  input.focus();
  input.setSelectionRange(selectionStart, selectionEnd)
}


const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const {className, mask, componentRef, onChange,iconProps, ...restProps} = props;
  const textInput = useRef<HTMLInputElement>(null);
  const value = props.value || "";
  const [inputVal, setInputVal] = useState(value);
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (!mask) {
      setInputVal(newVal);
      props.onChange && props.onChange(e)
    } else if (mask && typeof inputVal === "string") {
      const globalsRegExp = mask.regExp;
      const originalLength: number = inputVal.length;
      new Promise((resolve, reject) => {
        if (newVal.length > inputVal.length) {
          for (let i = 0; i < originalLength; i++) {
            if (newVal[i] !== inputVal[i]) {
              if (/[\d_]/.test(newVal[i])) {
                let newVal2 = newVal.split("");
                newVal2.splice(i + 1, 1);
                const newVal3 = newVal2.join("");
                if (globalsRegExp.test(newVal3)) {
                  setInputVal(newVal3);
                  onChange && onChange(e, newVal3);
                }
                resolve(i);
                break;
              } else {
                reject(i);
              }
            }
          }
        } else if (newVal.length < originalLength) {
          if (!textInput.current || !textInput.current.selectionEnd) {
            return
          } else {
            const position = textInput.current.selectionEnd;
            let arraySplit = [...(inputVal as string).split("")];
            if (/[\d_]/.test((inputVal as string)[position])) {
              arraySplit.splice(position, 1, "_");
              setInputVal(arraySplit.join(""));
              onChange && onChange(e, arraySplit.join(""));
              resolve(position - 1);
            } else {
              reject(position)
            }
          }
        }
      }).then((i: number) => {
        setSelectionRange(textInput.current!, i + 1, i + 1);
      })
        .catch(i => {
          setSelectionRange(textInput.current!, i, i);
        });
    }
  };
  return (
    <span className="J-UI-input-wrapper">
      <input ref={textInput} value={inputVal} onChange={_onChange}
                className={cls(className, 'J-UI-input')}{...restProps} />
      {iconProps && iconProps.iconName&&<Icon {...iconProps} />}
    </span>)

};

Input.defaultProps = {};


export default Input;