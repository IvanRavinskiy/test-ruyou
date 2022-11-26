import { FC } from 'react';

import { ErrorMessage, Field } from 'formik';

import style from './styles.module.css';

type TextInputProps = {
  title: string;
  name: string;
};

export const TextInput: FC<TextInputProps> = props => {
  const { title, name } = props;

  return (
    <>
      <label htmlFor={name} className={style.label}>
        {title}
      </label>
      <Field className={style.textInput} type="text" name={name} />
      <ErrorMessage name={name} component="div" className={style.formValidateText} />
    </>
  );
};
