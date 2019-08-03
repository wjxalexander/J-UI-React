import {FormValueProps} from "./form";


interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface FormErrors {
  [key: string]: Array<string | number>
}

type FormRules = Array<FormRule>

const isEmpty = (value: any) => value === undefined || value === null || value === "";

export const noError = (errors:any) :boolean=> Object.keys(errors).length === 0;

const validator = (formValue: FormValueProps, rules: FormRules): FormErrors => {
  let errors: any = {}
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(message)
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, "required")

    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, "too short")
    }
    if (rule.maxLength && value.length > rule.maxLength && !isEmpty(value)) {
      addError(rule.key, "too long")
    }
    if (rule.pattern && !rule.pattern.test(value) && !isEmpty(value)) {
      addError(rule.key, "wrong patten")
    }
  });

  return errors
}

export default validator