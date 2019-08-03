import Form, {FormValueProps} from "../lib/Form/form"
import * as React from "react";
import {useState, Fragment, useEffect} from "react";
import Button from "../lib/Button/button"
import validator,{noError} from "../lib/Form/validator";
import style from "./form.example.scss"
const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValueProps>({
    userName: "",
    passWord: ""
  });
  const [fields, setFields] = useState([
    {name: 'userName', label: "用户名", input: {type: 'text'}},
    {name: 'passWord', label: "密码", input: {type: 'password'}}
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: "userName", required: true},
      {key: "userName", minLength: 8, maxLength: 16},
      {key: "userName", pattern: /^[A-Za-z0-9]+$/}

    ];
    const errors = validator(formData, rules);
    if(noError(errors)) {
      console.log('success')
    }
    setErrors((errors))
  };
  const [errors, setErrors] = useState({});
  useEffect(() => {
    console.log(setFields, setFormData)
  });
  // const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>setFormData(e.target.value)

  return (
    <div className={style.container}>
      <Form value={formData} fields={fields} errors={errors}
            buttons={<Fragment><Button buttonType='default' type='submit' title={"Submit"}/></Fragment>}
            onSubmit={onSubmit}
            onChange={(newValue) => setFormData(newValue)}
      >
        form
      </Form>
    </div>

  )
}
export default FormExample