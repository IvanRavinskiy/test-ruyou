import React from 'react';

import { HexColorPicker } from 'react-colorful';

import style from './styles.module.css';

type ModalType = {
  setColor: () => void;
  currentColor: string;
  onChange: (color: string) => void;
};

export const Modal: React.FC<ModalType> = props => {
  const { setColor, currentColor, onChange } = props;

  return (
    <div className={style.body}>
      <div role="presentation" onClick={setColor} className={style.veil} />
      <div className={style.modal}>
        <HexColorPicker color={currentColor} onChange={onChange} />
      </div>
    </div>
  );
};
