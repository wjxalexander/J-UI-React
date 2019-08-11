import Form, {FormValueProps} from "../lib/Form/form"
import * as React from "react";
import {useState, useEffect} from "react";
import Button from "../lib/Button/button"
import validator, {noError} from "../lib/Form/validator";
import style from "./form.example.scss"

const userNames = ['alex', 'wang', 'li', 'liu'];
const checkUserName = (username: string, success: () => void, fail: () => void) => {
  console.log(userNames.includes(username))

  setTimeout(() => {
    if (userNames.includes(username)) {
      fail()
    } else {
      success()
    }
  }, 3000)
};
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
      {
        key: "userName", validator: {
          name: 'unique',
          errorMessage: "用户名已经存在",
          validate(userName: string) {
            return new Promise<void>((resolve, reject) => {
              checkUserName(userName,resolve,reject)
            })
          }
        }
      },

      {key: "userName", minLength: 8, maxLength: 16},
      {key: "userName", pattern: /^[A-Za-z0-9]+$/},
      {key: "passWord", required: true},

    ];
    const errors = validator(formData, rules,(errors:any)=>{
      if (noError(errors)) {
        console.log('success')
      }
      setErrors((errors))
    });
    console.log(errors,"erros")
  };
  const [errors, setErrors] = useState({});
  useEffect(() => {
    console.log(setFields, setFormData)
  });
const errorTranslation=(message:string)=>{
  const map:any = {
    unique:"用户名已存在"
  };
  return map[message]
}
  return (
    <div className={style.container}>
      <Form value={formData} fields={fields} errors={errors}
            errorTranslation={errorTranslation}
            buttons={<div className={style.buttons}><Button buttonType='default' type='submit' title={"Submit"}/><Button
              buttonType='custom' type='submit' title={"Cancel"}/></div>}
            onSubmit={onSubmit}
            onChange={(newValue) => setFormData(newValue)}
      >
        form
      </Form>
    </div>

  )
}
export default FormExample