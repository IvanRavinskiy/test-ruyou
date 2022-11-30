import React, { FC } from 'react';

import { Path, UseFormRegister } from 'react-hook-form';

import { FormValues } from '../../utils/configureUserData';

import style from './styles.module.css';

type TextInputProps = {
  label: Path<FormValues>;
  title: string;
  register: UseFormRegister<FormValues>;
};

export const TextInput: FC<TextInputProps> = props => {
  const { label, title, register } = props;

  return (
    <>
      <label htmlFor={label} className={style.label}>
        {title}:
      </label>
      <input {...register(label)} className={style.textInput} />
    </>
  );
};
