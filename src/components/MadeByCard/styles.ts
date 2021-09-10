import styled from 'styled-components';
import { rem, flexCenter, theme } from '../../styles/index';

export const ContainerMadeByCard = styled.div`
  ${flexCenter()};
  justify-content: space-between;
  background-color: #ffffff;
  width: 260px;

  border-radius: 0 25% 25% 0;

  margin: 0 30px 30px;
`;
export const InformationsPersonContainer = styled.div`
  padding-left: 25px;

  h3 {
    font-size: ${rem(18)};
    font-family: ${theme.font.secondary};

    margin-bottom: 10px;
  }
`;
export const NewtWorkContainer = styled.div`
  ${flexCenter()};
  align-items: flex-start;
  flex-direction: column;

  a {
    text-decoration: none;
    font-size: ${rem(12)};
    font-family: ${theme.font.secondary};

    color: ${theme.color.link};
    ${flexCenter()};

    margin-bottom: 5px;

    transition-duration: 400ms;

    svg {
      margin-right: 10px;
      max-height: 24px;
      max-width: 22px;
    }

    &:hover {
      color: ${theme.color.blue_darker};
    }
  }
`;
export const ImageContainer = styled.div`
  transform: translateX(14px);
  img {
    border-radius: 50%;
    width: 122px;
    height: 122px;
  }
`;
