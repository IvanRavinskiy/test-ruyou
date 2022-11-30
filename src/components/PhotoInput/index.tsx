import { ChangeEvent, FC, useState } from 'react';

import { Path, UseFormRegister } from 'react-hook-form';

import photoForm from '../../assets/photo.svg';
import { FormValues } from '../FormComponent';

import style from './styles.module.css';

type PhotoInputProps = {
  label: Path<FormValues>;
  title: string;
  register: UseFormRegister<FormValues>;
  setValue: any;
};

export const PhotoInput: FC<PhotoInputProps> = props => {
  const { label, title, register, setValue } = props;
  const [avatarPreview, setAvatarPreview] = useState(photoForm);

  const addPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setAvatarPreview(URL.createObjectURL(event.target.files?.[0]));
      setValue(label, event.target.files?.[0]);
    }
  };

  return (
    <>
      <label htmlFor={label} className={style.label}>
        {title}:
      </label>
      <label className={style.inputPhotoContainer} htmlFor={label}>
        <img className={style.photo} alt="avatar" src={avatarPreview} />
      </label>
      <input hidden type="file" {...register(label)} id={label} onChange={addPhoto} />
    </>
  );
};
