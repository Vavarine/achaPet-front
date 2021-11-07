import styled from 'styled-components';
import { flexCenter, rem } from '../../../styles';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const ContainerSucess = styled.section`
  ${flexCenter()};
  flex-direction: column;
`;

export const IconSucess = styled(BsFillCheckCircleFill)`
  color: green;

  margin: 30px 0;
`;

export const Text = styled.p`
  ${flexCenter()};
  text-align: center;
  font-size: ${rem(25)};
`;
