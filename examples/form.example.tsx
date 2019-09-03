import Form, {FormValueProps} from "../lib/Form/form"
 import {useState} from "react";
import * as React from "react";

import Button from "../lib/Button/button"
import validator, {noError} from "../lib/Form/validator";
import style from "./form.example.scss"

const userNames = ['alex', 'wang', 'li', 'liu'];
const checkUserName = (username: string, success: () => void, fail: () => void) => {
  setTimeout(() => {
    if (userNames.includes(username)) {
      fail()
    } else {
      success()
    }
  }, 1000)
};
const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValueProps>({
    userName: "",
    passWord: "",
    email: ""
  });
  const fields = [
    {name: 'userName', label: "用户名", input: {type: 'text'}, required:true},
    {name: 'passWord', label: "密码", input: {type: 'password'},required:true},
    {name: 'email', label: "E-mail", input: {type: 'text'}}

  ];
  const [errors, setErrors] = useState({});

  const customValidator = (userName: string, errorKey: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(userName, resolve, () => reject(errorKey))
    })
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      {key: "userName", required: true, errorKey: 'userNameRequired'},
      {key: "userName", customValidator, errorKey: 'usernameUnique'},
      {key: "userName", minLength: 8, maxLength: 16, errorKey: 'minLength'},
      {key: "userName", pattern: /^[A-Za-z0-9]+$/, errorKey: 'usernamePattern'},
      {key: "passWord", required: true, errorKey: 'passwordRequired'},
      {
        key: "email",
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errorKey: 'emailPattern'
      },
    ];
    validator(formData, rules, (errors: any) => {
      if (noError(errors)) {
        console.log('success')
        return;
      }
      setErrors((errors))
    });
  };
  // useEffect(() => {
  //   console.log(setFields, setFormData)
  // });
  const errorTranslation = (message: string) => {
    const map: any = {
      // userNameRequired: "username has been registered",
      pattern: "wrong Pattern",
      userNameRequired: "Please fill the username!",
      minlength: "less than 8 chars",
      maxlength: "more than 16 chars",
      passwordRequired: "please input the pass word"
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