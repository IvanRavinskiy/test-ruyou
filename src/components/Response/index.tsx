import { FC } from 'react';

import style from './styles.module.css';

type ResponseProps = {
  value: string;
};

export const Response: FC<ResponseProps> = props => {
  const { value } = props;

  return (
    <>
      <p className={style.label}>Response:</p>
      <textarea readOnly className={style.response} value={value} />
    </>
  );
};
