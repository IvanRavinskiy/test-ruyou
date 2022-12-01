import React, { FC, useState } from 'react';

import { FormComponent, Response } from '../../components';

export const Form: FC = React.memo(() => {
  const [response, setResponse] = useState('');

  return (
    <div>
      <FormComponent setResponse={setResponse} />
      <Response value={response} />
    </div>
  );
});
