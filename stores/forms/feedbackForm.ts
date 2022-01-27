import { createRule, yupDefault, yupEmail, yupWebsite } from 'constants/validation-rules';
import { createEffect, forward, restore } from 'effector';
import { createForm } from 'effector-forms';

interface FormRequest {
  userName: string;
  email: string;
  companyName: string;
  website?: string;
  checked: boolean;
}

export enum FeedbackFormNames {
  userName = 'userName',
  email = 'email',
  companyName = 'companyName',
  website = 'website'
}

const { userName, email, companyName, website } = FeedbackFormNames;

export const feedbackForm = createForm({
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
    },
    companyName: {
      init: '' as string,
      rules: [
        createRule<string>({
          name: companyName,
          schema: yupDefault
        })
      ]
    },
    website: {
      init: '' as string,
      rules: [
        createRule<string>({
          name: website,
          schema: yupWebsite
        })
      ]
    },
    checked: {
      init: false as boolean,
      rules: [
        {
          name: 'checked',
          validator: (value: boolean) => value
        }
      ]
    }
  },
  validateOn: ['submit']
});

//TODO need to add handler after API is ready

export const sendFeedbackForm = createEffect({
  handler: ({ checked, ...values }: FormRequest) => {
    console.log(values);
    feedbackForm.reset();
  }
});

const registerError = restore(sendFeedbackForm.failData, null);

registerError.reset(feedbackForm.$values.updates);

forward({
  from: feedbackForm.formValidated,
  to: sendFeedbackForm
});
