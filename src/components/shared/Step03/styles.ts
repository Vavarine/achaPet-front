import styled from 'styled-components';
import { flexCenter, rem, theme } from '../../../styles';

export const Title = styled.h2`
  font-size: ${rem(18)};
  font-family: ${theme.font.secondary};

  margin-bottom: 40px;
`;

export const ButtonClose = styled.button`
  position: fixed;
  top: 0;
  right: 0;

  background: transparent;
  border: none;

  padding: 10px;
`;

export const ContainerLostorFind = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerImages = styled.div`
  width: 40%;
  margin-right: 20px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ImageMain = styled.div`
  height: 160px;
  ${flexCenter()};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;

  @media (max-width: 650px) {
    height: 250px;
  }

  > img {
    height: 100%;
    width: auto;
  }
`;

export const ImageThumbs = styled.div`
  width: 100%;
  ${flexCenter()};
  justify-content: flex-start;

  @media (max-width: 650px) {
    margin-bottom: 30px;
  }

  > svg {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  > img {
    max-width: 60px;
    max-height: 60px;

    width: 100%;
    height: 100%;
    margin-right: 5px;
  }
`;

export const ImageThumbsDiv = styled.div`
  width: 60px;
  height: 60px;
  ${flexCenter()};

  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 650px) {
    height: 80px;
    width: 80px;
  }
`;

export const Step3 = styled.section`
  ${flexCenter()};
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const ContainerConfirmation = styled.section`
  ${flexCenter()};
  flex-direction: column;
  align-items: flex-start;

  width: 60%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Informations = styled.div`
  ${flexCenter()};
  justify-content: space-between;

  margin-bottom: 10px;
`;
export const Span = styled.div``;
export const SpanLostFind = styled.span`
  font-weight: 300;
  font-size: ${rem(10)};
`;
export const SpanCity = styled.span`
  font-weight: 500;
  font-size: ${rem(14)};
`;
export const SpanName = styled.span`
  font-weight: 500;
  font-size: ${rem(16)};
`;

export const SpanStreet = styled.span`
  font-weight: 300;
  font-size: ${rem(12)};

  max-width: 120px;
`;
export const Description = styled.div``;
export const DescriptionTitle = styled.h5`
  font-weight: 300;
  font-size: ${rem(12)};

  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${theme.color.border_input};
  width: 100%;

  border-radius: 8px;
  padding: 10px;

  box-sizing: border-box;

  outline: ${theme.color.border_input};
`;
