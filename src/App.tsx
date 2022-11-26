import React, { FC } from 'react';

import styles from './App.module.css';

import { Form } from 'pages';

export const App: FC = () => {
  return (
    <div className={styles.App}>
      <Form />
    </div>
  );
};
