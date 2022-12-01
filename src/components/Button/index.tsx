import React, { FC } from 'react';

import style from './styles.module.css';

type ButtonProps = {
  textChildren: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = props => {
  const { textChildren, onClick } = props;

  return (
    <div className={style.btnContainer}>
      <button onClick={onClick} type="submit" className={style.btn}>
        {textChildren}
      </button>
    </div>
  );
};
