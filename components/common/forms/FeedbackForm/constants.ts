import { HTMLInputTypeAttribute } from 'react';
import { FeedbackFormNames } from 'stores/forms/feedbackForm';

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  name: FeedbackFormNames;
}

const { userName, email, companyName, website } = FeedbackFormNames;

export const feedbackFormFields: Props[] = [
  { placeholder: 'Name', name: userName },
  { placeholder: 'Email', name: email, type: 'email' },
  { placeholder: 'Company', name: companyName },
  { placeholder: 'Website', name: website }
];
