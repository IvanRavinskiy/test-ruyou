import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.css';

export const Header: FC = () => {
  return (
    <nav className={style.linkContainer}>
      <Link className={style.link} to={ROUTES.FORM}>
        Form
      </Link>
      <Link className={style.link} to={ROUTES.PALETTE}>
        Palette
      </Link>
    </nav>
  );
};
