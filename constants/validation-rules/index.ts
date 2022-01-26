import { invalidEmailMessage, requiredFieldMessage } from 'constants/messages';
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
      } catch (err) {
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
