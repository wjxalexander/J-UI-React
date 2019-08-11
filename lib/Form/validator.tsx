import {FormValueProps} from "./form";


interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: {
    name: string,
    errorMessage:string,
    validate: (val: string) => Promise<void>
  }
}

interface FormErrors {
  [key: string]: Array<string | number>
}

type FormRules = Array<FormRule>

// 每个错误
interface OneError {
  message:string;
  promise?: Promise<any>
}

const isEmpty = (value: any) => value === undefined || value === null || value === "";

export const noError = (errors: any): boolean => Object.keys(errors).length === 0;

const validator = (formValue: FormValueProps, rules: FormRules,callBack:(errors:FormErrors)=>void): void => {
  let errors: any = {}
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, {message: "required"})
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, {message: "minlength"})
    }
    if (rule.maxLength && value.length > rule.maxLength && !isEmpty(value)) {
      addError(rule.key, {message: "maxlength"})
    }
    if (rule.pattern && !rule.pattern.test(value) && !isEmpty(value)) {
      addError(rule.key, {message: "pattern"})
    }
    if (rule.validator) {
      const promise = rule.validator.validate(value)
      addError(rule.key, {message: rule.validator.name, promise})
      addError(rule.key, {message: rule.validator.name, promise})
    }

  });
  const promises = flat(Object.values(errors)).filter(item => item.promise).map(item => item.promise)
  Promise.all(promises).finally(() => {
    callBack(
        fromEntries(
            Object.keys(errors)
                .map(key => [key, errors[key]
                    .map((item: OneError) => (item.message))])))
  });

}
export default validator

function flat(array: Array<any>){
    const result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        result.push(...array[i])
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  function fromEntries(array:Array<[string,Array<string>]>){
     const result:{[key:string]:string[]} ={}
     for(let i=0;i<array.length;i++){
       result[array[i][0]] = array[i][1]
    }
     return result
  }