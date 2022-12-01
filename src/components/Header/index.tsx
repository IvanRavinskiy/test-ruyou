import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import style from './styles.module.css';

export const Header: FC = React.memo(() => {
  return (
    <nav className={style.linkContainer}>
      <NavLink
        className={style.link}
        style={({ isActive }) => (isActive ? undefined : { textDecoration: 'none' })}
        to={ROUTES.FORM}
      >
        Form
      </NavLink>
      <NavLink
        className={style.link}
        style={({ isActive }) => (isActive ? undefined : { textDecoration: 'none' })}
        to={ROUTES.PALETTE}
      >
        Palette
      </NavLink>
    </nav>
  );
});
