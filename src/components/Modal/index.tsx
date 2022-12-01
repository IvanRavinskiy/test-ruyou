import React, { ReactNode } from 'react';

import style from './styles.module.css';

type ModalType = {
  setShow: (isShow: boolean) => void;
  children: ReactNode;
};

export const Modal: React.FC<ModalType> = props => {
  const { setShow, children } = props;

  const closeModal = (): void => {
    setShow(false);
  };

  return (
    <div className={style.body}>
      <div role="presentation" onClick={closeModal} className={style.veil} />
      <div className={style.modal}>{children}</div>
    </div>
  );
};
