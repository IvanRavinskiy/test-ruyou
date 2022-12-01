import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import { Header } from './components';
import { ROUTES } from './constants/routes';

import { Form, Palette } from 'pages';

export const App: FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path={ROUTES.FORM} element={<Form />} />
        <Route path={ROUTES.PALETTE} element={<Palette />} />
      </Routes>
    </div>
  );
};
