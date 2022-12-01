import React, { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { api } from '../../api';
import { configureUserData, FormValues } from '../../utils/configureUserData';

import { Button, PhotoInput, TextInput } from 'components';

type FormComponentProps = {
  setResponse: (text: string) => void;
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

export const FormComponent: FC<FormComponentProps> = props => {
  const { setResponse } = props;
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const userData = configureUserData(data);

    const res = await api(userData);

    setResponse(res.status);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="name" title="Name" register={register} />
      <TextInput label="surname" title="Surname" register={register} />
      <TextInput label="patronymic" title="Patronymic" register={register} />
      <PhotoInput label="image" title="Image" register={register} setValue={setValue} />
      <Button textChildren="Save" />
    </form>
  );
};
