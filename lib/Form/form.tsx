import * as React from "react";


export interface FormValueProps {
  [key: string]: any
}

interface FormProps {
  value: FormValueProps;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: React.ReactElement;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValueProps) => void
}


const Form: React.FunctionComponent<FormProps> = (props) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();;
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string | number) => {
    const newFormValue = {...props.value,[name]: value};;
    props.onChange(newFormValue)
  };

  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((item, index) => (
        <div key={`${item.name}-${index}`}>
          {item.name}
          <input type={item.input.type} value={props.value[item.name]}
                 onChange={(e) => onInputChange(item.name, e.target.value)}/>
        </div>))}
      {props.buttons}
    </form>
  )
};
export default Form