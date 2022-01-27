import { invalidEmailMessage, invalidWebsiteMessage, requiredFieldMessage } from 'constants/messages';
import { Rule } from 'effector-forms';
import * as Yup from 'yup';

export function createRule<V, T = any>({ schema, name }: { schema: Yup.SchemaOf<T>; name: string }): Rule<V> {
  return {
    name,
    validator: (v: V) => {
      try {
        schema.validateSync(v);
        return {
          isValid: true,
          value: v
        };
      } catch (err: any) {
        return {
          isValid: false,
          value: v,
          errorText: err.message
        };
      }
    }
  };
}

export const yupDefault = Yup.string().required(requiredFieldMessage);
export const yupEmail = Yup.string().email(invalidEmailMessage).required(requiredFieldMessage);
export const yupWebsite = Yup.string()
  .nullable()
  .notRequired()
  .when({
    is: (value: string) => !!value,
    then: rule =>
      rule.matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        invalidWebsiteMessage
      )
  });
