import React, { FC, useState } from 'react';

import close from '../../assets/Icon.svg';
import { useAppDispatch } from '../../state';
import { CHANGE_COLOR, REMOVE_COLOR } from '../../state/reducers/palette';
import { memo } from '../../utils/memo';
import { Modal } from '../Modal';

import style from './styles.module.css';

type ColorBlockProps = {
  id: number;
  color: string;
};

export const ColorBlock: FC<ColorBlockProps> = memo(props => {
  const { id, color } = props;
  const [currentColor, setCurrentColor] = useState(color);
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);
  const [isShowClose, setIsShowClose] = useState(false);

  const dispatch = useAppDispatch();

  const removeColor = (): void => {
    dispatch(REMOVE_COLOR(id));
  };

  const openColorPicker = (): void => {
    setIsShowColorPicker(true);
  };

  const closeModal = (): void => {
    setIsShowColorPicker(false);
    dispatch(CHANGE_COLOR({ currentColor, id }));
  };

  return (
    <div
      key={id}
      className={style.colorBlock}
      style={{ background: color }}
      onMouseOver={() => setIsShowClose(true)}
      onFocus={() => setIsShowClose(true)}
      onMouseLeave={() => setIsShowClose(false)}
    >
      {isShowClose && (
        <div role="none" onClick={removeColor} className={style.close}>
          <img className={style.photo} alt="close" src={close} />
        </div>
      )}
      <button className={style.fakeBtn} type="button" onClick={openColorPicker}>
        change
      </button>
      {isShowColorPicker && (
        <Modal
          setColor={closeModal}
          currentColor={currentColor}
          onChange={setCurrentColor}
        />
      )}
    </div>
  );
});
