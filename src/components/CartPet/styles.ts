import styled from 'styled-components';
import { rem, theme } from '../../styles';

export const ContainerCart = styled.div`
  width: 140px;
  height: 60px;

  border-radius: 10px;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const CartInfo = styled.div`
  display: flex;
`;

export const Status = styled.span`
  font-weight: 300;
  font-size: ${rem(7)};
  margin-bottom: 10px;

  display: inline-block;
`;

export const Name = styled.h5`
  font-size: ${rem(12)};
  font-weight: 500;
  font-family: ${theme.font.secondary};
`;

export const Breed = styled.span`
  font-family: ${theme.font.secondary};
  font-size: ${rem(10)};
  font-weight: 300;
`;
