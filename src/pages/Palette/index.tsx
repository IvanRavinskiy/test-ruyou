import React, { FC, useState } from 'react';

import { Button, ColorBlock, Modal } from '../../components';
import { useAppDispatch, useAppSelector } from '../../state';
import { ADD_COLOR } from '../../state/reducers/palette';

import style from './styles.module.css';

export const Palette: FC = () => {
  const [pickerColor, setPickerColor] = useState('#AABBCC');
  const [isShowPicker, setIsShowPicker] = useState(false);
  const dispatch = useAppDispatch();
  const colors = useAppSelector(state => state.palette.colors);

  const addColor = (): void => {
    setIsShowPicker(true);
  };

  const closeModal = (): void => {
    setIsShowPicker(false);
    dispatch(ADD_COLOR(pickerColor));
  };

  return (
    <div>
      <div className={style.colorsContainer}>
        {colors.map(({ color, id }) => {
          return <ColorBlock key={id} id={id} color={color} />;
        })}
      </div>
      {isShowPicker && (
        <Modal
          setColor={closeModal}
          currentColor={pickerColor}
          onChange={setPickerColor}
        />
      )}
      <Button onClick={addColor} textChildren="Add color" />
    </div>
  );
};
