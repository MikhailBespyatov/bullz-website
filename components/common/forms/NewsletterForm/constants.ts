import { HTMLInputTypeAttribute } from 'react';
import { NewsletterFormNames } from 'stores/forms/newsletterForm';

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  name: NewsletterFormNames;
}

const { userName, email } = NewsletterFormNames;

export const newsletterFormFields: Props[] = [
  { placeholder: 'Full Name', name: userName },
  { placeholder: 'Email', name: email, type: 'email' }
];
