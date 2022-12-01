import React, { ChangeEvent, FC } from 'react';

import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

import { FormValues } from '../../utils/configureUserData';

import style from './styles.module.css';

import { memo } from 'utils/memo';

type PhotoInputProps = {
  label: Path<FormValues>;
  title: string;
  register: UseFormRegister<FormValues>;
  error: FieldErrors<FormValues>;
  avatarPreview: string;
  addPhoto: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const PhotoInput: FC<PhotoInputProps> = memo(props => {
  const { label, title, register, error, addPhoto, avatarPreview } = props;

  return (
    <>
      <label htmlFor={label} className={style.label}>
        {title}
      </label>
      <label className={style.inputPhotoContainer} htmlFor={label}>
        <img className={style.photo} alt="avatar" src={avatarPreview} />
      </label>
      <input
        hidden
        type="file"
        {...register(label)}
        id={label}
        onChange={addPhoto}
        accept=".png,.jpg,.jpeg,.gif,.svg,.bmp"
      />
      <p className={style.error}>{error[label]?.message}</p>
    </>
  );
});
