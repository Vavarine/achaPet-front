import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface props {
  sizeFont: string;
  weightFont: string;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.color.blue_300};
  height: 100vh;
  width: 60%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-weight: bold;
  font-size: 4rem;
`;

export const ContainerDescrition = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const Descrition = styled.p<props>`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${(props) => props.weightFont};
  font-size: ${(props) => props.sizeFont};
  margin-bottom: 20px;
`;

export const MoreLink = styled(Link)`
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
`;

export const LogoImage = styled.img`
  min-width: 250px !important;
  height: auto;
`;
