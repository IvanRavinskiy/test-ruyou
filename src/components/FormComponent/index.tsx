import React, { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { api } from '../../api';
import { PhotoInput } from '../PhotoInput';
import { TextInput } from '../TextInput';

import style from './styles.module.css';

export type FormValues = {
  name: string;
  surname: string;
  patronymic: string;
  image: null;
};

const MIN_SYMBOLS = 2;
const formSchema = Yup.object({
  name: Yup.string()
    .min(MIN_SYMBOLS, `Must be min ${MIN_SYMBOLS} characters`)
    .required('Required'),
  surname: Yup.string()
    .min(MIN_SYMBOLS, `Must be min ${MIN_SYMBOLS} characters`)
    .required('Required'),
  patronymic: Yup.string()
    .min(MIN_SYMBOLS, `Must be min ${MIN_SYMBOLS} characters`)
    .required('Required'),
  image: Yup.mixed().required('Required'),
});

export const FormComponent: FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const formData = new FormData();

    formData.set('action', 'send_data');
    // @ts-ignore
    formData.set('image', data.image);
    formData.set('contact[name]', data.name);
    formData.set('contact[surname]', data.surname);
    formData.set('contact[patronymic]', data.patronymic);
    // @ts-ignore
    formData.set('id', 1);
    api(formData).then(res => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="name" title="Name" register={register} />
      <TextInput label="surname" title="Surname" register={register} />
      <TextInput label="patronymic" title="Patronymic" register={register} />
      <PhotoInput label="image" title="Image" register={register} setValue={setValue} />
      <div className={style.btnSubmitContainer}>
        <button type="submit" className={style.btnSubmit}>
          Save
        </button>
      </div>
    </form>
  );
};
