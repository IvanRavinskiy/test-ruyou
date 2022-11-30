import { FC, useState } from 'react';

import { FormComponent, Response } from '../../components';

export const Form: FC = () => {
  const [response, setResponse] = useState('');

  return (
    <div>
      <FormComponent setResponse={setResponse} />
      <Response value={response} />
    </div>
  );
};
