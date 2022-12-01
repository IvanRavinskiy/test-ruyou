import React, { FC } from 'react';

import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

import { FormValues } from '../../utils/configureUserData';
import { memo } from '../../utils/memo';

import style from './styles.module.css';

type TextInputProps = {
  label: Path<FormValues>;
  title: string;
  register: UseFormRegister<FormValues>;
  error: FieldErrors<FormValues>;
};

export const TextInput: FC<TextInputProps> = memo(props => {
  const { label, title, register, error } = props;

  return (
    <>
      <label htmlFor={label} className={style.label}>
        {title}
      </label>
      <input {...register(label)} className={style.textInput} />
      <p className={style.error}>{error[label]?.message}</p>
    </>
  );
});
