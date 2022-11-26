import { FC } from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import style from './FormComponent.module.css';

const MIN_SYMBOLS = 2;

type TextInputProps = {
  title: string;
  name: string;
};

const TextInput: FC<TextInputProps> = props => {
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

export const FormComponent: FC = () => {
  const FormSchema = Yup.object({
    name: Yup.string().min(MIN_SYMBOLS, 'Must be min 2 characters').required('Required'),
    surname: Yup.string()
      .min(MIN_SYMBOLS, 'Must be min 2 characters')
      .required('Required'),
    patronymic: Yup.string()
      .min(MIN_SYMBOLS, 'Must be min 2 characters')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        patronymic: '',
      }}
      validationSchema={FormSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null));
      }}
    >
      <Form>
        <TextInput title="Name:" name="name" />
        <TextInput title="Surname:" name="surname" />
        <TextInput title="Patronymic:" name="patronymic" />
        <div className={style.btnSubmitContainer}>
          <button type="submit" className={style.btnSubmit}>
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};
