import useReState from '@raulpesilva/re-state/dist';
import { StepWizardChildrenProps } from '../..';

import * as S from './styles';

export const StepSucess = (props: StepWizardChildrenProps) => {
  return (
    <S.ContainerSucess onClick={props.closeModal}>
      <S.IconSucess size={90} />
      <S.Text>Dados cadastrados com sucesso!</S.Text>
    </S.ContainerSucess>
  );
};
