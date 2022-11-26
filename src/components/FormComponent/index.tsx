import { FC } from 'react';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import style from './styles.module.css';

import { PhotoInput, TextInput } from 'components';

const MIN_SYMBOLS = 2;

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
      {({ setFieldValue }) => (
        <Form>
          <TextInput title="Name:" name="name" />
          <TextInput title="Surname:" name="surname" />
          <TextInput title="Patronymic:" name="patronymic" />
          <PhotoInput setFieldValue={setFieldValue} />
          <div className={style.btnSubmitContainer}>
            <button type="submit" className={style.btnSubmit}>
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
