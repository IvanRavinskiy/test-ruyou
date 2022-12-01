import React, { FC, useState } from 'react';

import { HexColorPicker } from 'react-colorful';

import { Button, ColorBlock, Modal } from '../../components';
import { useAppSelector } from '../../state';

import style from './styles.module.css';

export const Palette: FC = () => {
  const [pickerColor, setPickerColor] = useState('#AABBCC');
  const [isShowPicker, setIsShowPicker] = useState(false);

  const colors = useAppSelector(state => state.palette.colors);

  const addColor = (): void => {
    setIsShowPicker(true);
  };

  return (
    <div>
      <div className={style.colorsContainer}>
        {colors.map(({ color, id }) => {
          return <ColorBlock key={id} id={id} color={color} />;
        })}
      </div>
      {isShowPicker && (
        <Modal setShow={setIsShowPicker} bgColor={pickerColor}>
          <HexColorPicker color={pickerColor} onChange={setPickerColor} />
        </Modal>
      )}
      <Button onClick={addColor} textChildren="Add color" />
    </div>
  );
};
