import React, { FC, useState } from 'react';

import { HexColorPicker } from 'react-colorful';

import { Button, Modal } from '../../components';

import style from './styles.module.css';

export const Palette: FC = () => {
  const [color, setColor] = useState('#AABBCC');
  const [isShowPicker, setIsShowPicker] = useState(false);

  const addColor = (): void => {
    setIsShowPicker(true);
  };

  return (
    <div>
      <div className={style.colorsContainer}>
        <div
          role="none"
          onClick={addColor}
          className={style.colorBlock}
          style={{ background: color }}
        />
      </div>
      {isShowPicker && (
        <Modal setShow={setIsShowPicker}>
          <HexColorPicker color={color} onChange={setColor} />
        </Modal>
      )}
      <Button textChildren="Add color" />
    </div>
  );
};
