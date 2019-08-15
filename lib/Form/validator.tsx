import {FormValueProps} from "./form";


interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  errorKey: string;
  customValidator?: (val: string, error: string) => Promise<string>

}

interface FormErrors {
  [key: string]: Array<string | number>
}

type FormRules = Array<FormRule>

// 每个错误
type OneError = string | Promise<string>

const isEmpty = (value: any) => value === undefined || value === null || value === "";

export const noError = (errors: any): boolean => Object.keys(errors).length === 0;

const validator = (formValue: FormValueProps, rules: FormRules, callBack: (errors: FormErrors) => void): void => {
  let errors: { [key: string]: OneError[] } = {}
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, rule.errorKey)
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, rule.errorKey)
    }
    if (rule.maxLength && value.length > rule.maxLength && !isEmpty(value)) {
      addError(rule.key, rule.errorKey)
    }
    if (rule.pattern && !rule.pattern.test(value) && !isEmpty(value)) {
      addError(rule.key, rule.errorKey)
    }
    if (rule.customValidator) {
      const promise = rule.customValidator(value, rule.errorKey);
      addError(rule.key, promise)
    }
  });
  const constructErrors = flat<[string, OneError]>(
    Object.keys(errors)
      .map<[string, OneError][]>(key => errors[key] // MAP接受的范型 代表她里面每一项是什么
        .map<[string, OneError]>((error: OneError) => ([key, error]))));
  const promiseErrors = constructErrors.map(([key, promiseOrString]) => (
    // notice the position of ) first get a promise then reject or resolve it
    promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
    .then<[string, undefined]>(() => ([key, undefined])).catch<[string, string]>((reason: string) => ([key, reason])));
  // write the most important part is enough
  // handle all errors
  Promise.all(promiseErrors).then((ret: Array<[string, string]>) => callBack(zip(ret.filter(item => item[1]))));
}
export default validator

// 范型T： 你后面是什么类型 你告诉我
function flat<T>(array: Array<T | T[]>) {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) { //t[]
      result.push(...array[i] as T[]) //assert
    } else {
      result.push(array[i] as T) //T
    }
  }
  return result
}

// kvlist = [[u,r],[u,r]]
function zip(kvList: Array<[string, string]>) {
  const result: FormErrors = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value)
  });
  return result;
}
