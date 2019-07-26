import Form, {FormValueProps} from "../lib/Form/form"
import * as React from "react";
import {useState, Fragment, useEffect} from "react";
import Button from "../lib/Button/button"

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValueProps>({
    userName: "",
    passWord: ""
  });
  const [fields, setFields] = useState([
    {name: 'userName', label: "用户名", input: {type: 'text'}},
    {name: 'passWord', label: "密码", input: {type: 'password'}}
  ])
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData)
  }
  useEffect(() => {
    console.log(setFields, setFormData)
  })
  // const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>setFormData(e.target.value)

  return (
    <Form value={formData} fields={fields}
          buttons={<Fragment><Button buttonType='default' type='submit' title={"Submit"}/></Fragment>}
          onSubmit={onSubmit}
          onChange={(newValue) => setFormData(newValue)}
    >
      form
    </Form>
  )
}
export default FormExample