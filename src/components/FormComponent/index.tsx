import React, { ChangeEvent, FC, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { api } from '../../api';
import photoForm from '../../assets/photo.svg';
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const [avatarPreview, setAvatarPreview] = useState(photoForm);

  const addPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setAvatarPreview(URL.createObjectURL(event.target.files?.[0]));
      // @ts-ignore
      setValue('image', event.target.files?.[0]);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const userData = configureUserData(data);

    const res = await api(userData);

    setResponse(res.status);
    setAvatarPreview(photoForm);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="name" title="Name" register={register} error={errors} />
      <TextInput label="surname" title="Surname" register={register} error={errors} />
      <TextInput
        label="patronymic"
        title="Patronymic"
        register={register}
        error={errors}
      />
      <PhotoInput
        label="image"
        title="Image"
        register={register}
        avatarPreview={avatarPreview}
        addPhoto={addPhoto}
        error={errors}
      />
      <Button textChildren="Save" />
    </form>
  );
};
