import * as React from "react";
import Input from "../Input/input";
import cls from "classnames";
import "./form.style.scss"

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
  className?: string
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

  const {className, ...restProps} = props;
  return (
    <form onSubmit={onSubmit} className={"j-ui-form"}>
      <table>
        <tbody>
        {props.fields.map((item, index) => (
          <React.Fragment key={`${item.name}-${index}`}>
            <tr className={cls('j-ui-form-row', className)} >
              <td className='j-ui-form-td'>
                <span className='j-ui-form-label'>{item.label}</span>
              </td>
              <td className='j-ui-form-td'>
                <Input type={item.input.type} className="j-ui-form-input" value={props.value[item.name]}
                       onChange={(e) => onInputChange(item.name, e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td className="j-ui-form-td-errors">{props.errors && props.errors[item.name]}</td>
            </tr>
          </React.Fragment>
        ))}
        </tbody>
      </table>

      <div> {props.buttons} </div>
    </form>
  )
};
export default Form