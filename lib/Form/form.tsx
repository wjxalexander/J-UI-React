import * as React from "react";
import Input from "../Input/input";
import cls from "classnames";
import "./form.style.scss"
import {For} from "@babel/types";

export interface FormValueProps {
  [key: string]: any
}

interface FormProps {
  value: FormValueProps;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: React.ReactElement;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValueProps) => void;
  errors?: { [key: string]: Array<string> };
  className?: string;
  errorsDisplayMode?: 'first' | 'all'
}

export const customError = (customValidator: any) => {
  return Object.keys(customValidator).length === 0;
};

const Form: React.FunctionComponent<FormProps> = (props: FormProps) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string | number) => {
    const newFormValue = {...props.value, [name]: value};
    ;
    props.onChange(newFormValue)
  };
  const {className} = props;
  return (
    <form onSubmit={onSubmit} className={"j-ui-form"}>
      <table>
        <tbody>
        {props.fields.map((item, index) => (
          <React.Fragment key={`${item.name}-${index}`}>
            <tr className={cls('j-ui-form-row', className)}>
              <td className='j-ui-form-td'>
                <span className='j-ui-form-label'>{item.label}</span>
              </td>
              <td className='j-ui-form-td'>
                <Input type={item.input.type}
                       className={cls("j-ui-form-input", props.errors && props.errors[item.name] && props.errors[item.name].length > 0 && 'error-input')}
                       value={props.value[item.name]}
                       onChange={(e) => onInputChange(item.name, e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td/>
              <td
                className="j-ui-form-td-errors">
                {props.errors && props.errors[item.name] &&
                (props.errorsDisplayMode === "first" ? props.errors[item.name][0] : props.errors[item.name].join(","))}&nbsp;</td>
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td className="j-ui-form-td'"/>
          <td className="j-ui-form-td'">
            <div> {props.buttons} </div>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  )
};
Form.defaultProps = {
  errorsDisplayMode: 'first'
};
export default Form