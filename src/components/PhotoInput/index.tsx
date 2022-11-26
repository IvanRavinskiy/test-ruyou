import { ChangeEvent, FC, useState } from 'react';

import { ErrorMessage, Field } from 'formik';

import photoForm from '../../assets/photo.svg';

import style from './styles.module.css';

type PhotoInputProps = {
  setFieldValue: (field: string, value: any) => void;
};

export const PhotoInput: FC<PhotoInputProps> = ({ setFieldValue }) => {
  const [avatarPreview, setAvatarPreview] = useState(photoForm);

  const addPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      setFieldValue('image', fileReader.result);
      setAvatarPreview(fileReader.result as string);
    };
    if (event.target.files) fileReader.readAsDataURL(event.target.files?.[0]);
  };

  return (
    <>
      <label htmlFor="title" className={style.label}>
        Photo:
      </label>
      <label className={style.inputPhotoContainer} htmlFor="photo">
        <img className={style.photo} alt="avatar" src={avatarPreview} />
      </label>
      <Field hidden type="file" id="photo" name="photo" onChange={addPhoto} />
      <ErrorMessage name="photo" component="div" className={style.formValidateText} />
    </>
  );
};
