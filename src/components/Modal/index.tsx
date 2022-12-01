import React, { ReactNode } from 'react';

import { useAppDispatch } from '../../state';
import { ADD_COLOR } from '../../state/reducers/palette';

import style from './styles.module.css';

type ModalType = {
  setShow: (isShow: boolean) => void;
  bgColor?: string;
  children: ReactNode;
};

export const Modal: React.FC<ModalType> = props => {
  const { setShow, children, bgColor } = props;

  const dispatch = useAppDispatch();

  const closeModal = (): void => {
    setShow(false);
    dispatch(ADD_COLOR(bgColor));
  };

  return (
    <div className={style.body}>
      <div role="presentation" onClick={closeModal} className={style.veil} />
      <div className={style.modal}>{children}</div>
    </div>
  );
};
