import { createRule, yupDefault, yupEmail } from 'constants/validation-rules';
import { createEffect, forward, restore } from 'effector';
import { createForm } from 'effector-forms';

interface FormRequest {
  userName: string;
  email: string;
}

export enum NewsletterFormNames {
  userName = 'userName',
  email = 'email'
}

const { userName, email } = NewsletterFormNames;

export const newsletterForm = createForm({
  fields: {
    userName: {
      init: '' as string,
      rules: [
        createRule<string>({
          name: userName,
          schema: yupDefault
        })
      ]
    },
    email: {
      init: '' as string,
      rules: [
        createRule<string>({
          name: email,
          schema: yupEmail
        })
      ],
      validateOn: ['change']
    }
  },
  validateOn: ['submit']
});

//TODO need to add handler after API is ready
export const sendNewsletterForm = createEffect({
  handler: (values: FormRequest) => {
    console.log(values);
    newsletterForm.reset();
  }
});
const registerError = restore(sendNewsletterForm.failData, null);

registerError.reset(newsletterForm.$values.updates);

forward({
  from: newsletterForm.formValidated,
  to: sendNewsletterForm
});
