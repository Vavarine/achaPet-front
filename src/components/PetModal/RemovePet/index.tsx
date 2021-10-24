import { sendError } from 'next/dist/next-server/server/api-utils';
import { useState } from 'react';

import { Foto } from '../../../types';
import * as S from './styles';

interface RemovePetProps {
  message: string;
  onRemove?: () => void;
}

export const RemovePet = ({ message, onRemove }: RemovePetProps) => {
  const [confirm, setConfirm] = useState(true);

  if (confirm) {
    return (
      <S.Confirm>
        <p>Deseja remover o pet do mapa?</p>
        <div>
          <button className="cancel" onClick={() => setConfirm(false)}>
            Não
          </button>
          <button className="confirm" onClick={onRemove}>
            Sim
          </button>
        </div>
      </S.Confirm>
    );
  }

  return <S.Remove onClick={() => setConfirm(true)}>{message}</S.Remove>;
};
