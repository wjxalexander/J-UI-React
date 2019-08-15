import * as React from "react";
import Input from "../Input/input";
import cls from "classnames";
import "./form.style.scss"
import {rootClass} from "../utils/classFactory";

export interface FormValueProps {
  [key: string]: any
}

// form properties
interface FormProps {
  value: FormValueProps;
  fields: Array<{ name: string, label: string, input: { type: string }, required?: Boolean }>;
  buttons: React.ReactElement;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValueProps) => void;
  errors?: { [key: string]: Array<string> };
  className?: string;
  errorsDisplayMode?: 'first' | 'all';
  errorTranslation?: (key: string | number) => string
}

export const customError = (customValidator: any) => {
  return Object.keys(customValidator).length === 0;
};
// HIGH ORDER FUNCTION
const classGenerator = rootClass('j-ui-form');
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
  const defaultError = (message: string): string => {
    const map: any = {
      required: "required",
      minLength: "less than minLength",
      maxLength: "longer than maxLength",
      pattern: "wrong pattern"
    };
    return props.errorTranslation && props.errorTranslation(message) || map[message] || "未知错误"
  }

  const {className} = props;
  return (
    <form onSubmit={onSubmit} className={classGenerator()}>
      <table>
        <tbody>
        {props.fields.map((item, index) => (
          <React.Fragment key={`${item.name}-${index}`}>
            <tr className={cls(classGenerator('row'), className)}>
              <td className={classGenerator("td")}>
                {item.required && <span className={classGenerator("remark")}>*</span>}
                <span className='j-ui-form-label'>{item.label}</span>
              </td>
              <td className={classGenerator("td")}>
                <Input type={item.input.type}
                       className={cls(classGenerator("input"), props.errors && props.errors[item.name] && props.errors[item.name].length > 0 && 'error-input')}
                       value={props.value[item.name]}
                       onChange={(e) => onInputChange(item.name, e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td/>
              <td
                className={classGenerator('errors')}>
                <div
                  className={cls("j-ui-form-td-errors-content", props.errors && props.errors[item.name] && "j-ui-form-td-errors-content-show")}>
                  <span>{props.errors && props.errors[item.name] &&
                  (props.errorsDisplayMode === "first" ? defaultError!(props.errors[item.name][0]) : props.errors[item.name].map(ele => defaultError!(ele)).join(","))} </span>&nbsp;
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td className={classGenerator("td")}/>
          <td className={classGenerator("td")}>
            <div> {props.buttons} </div>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  )
};
Form.defaultProps = {
  errorsDisplayMode: 'first',

};
export default Form