export type FormValues = {
  name: string;
  surname: string;
  patronymic: string;
  image: null;
};

export const configureUserData = (data: FormValues): FormData => {
  const formData = new FormData();
  const id = Date.now();

  formData.set('action', 'send_data');
  formData.set('image', data.image || '');
  formData.set('contact[name]', data.name);
  formData.set('contact[surname]', data.surname);
  formData.set('contact[patronymic]', data.patronymic);
  formData.set('id', `${id}`);

  return formData;
};
