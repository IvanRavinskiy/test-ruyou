import React, { FC, useState } from 'react';

import close from '../../assets/Icon.svg';
import { useAppDispatch } from '../../state';
import { Colors, REMOVE_COLOR } from '../../state/reducers/palette';

import style from './styles.module.css';

export const ColorBlock: FC<Colors> = props => {
  const { id, color } = props;
  const [isShowClose, setIsShowClose] = useState(false);

  const dispatch = useAppDispatch();

  const removeColor = (): void => {
    dispatch(REMOVE_COLOR(id));
  };

  return (
    <div
      key={id}
      role="group"
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
    </div>
  );
};
