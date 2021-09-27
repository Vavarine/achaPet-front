import { Component } from 'react';
import styled from 'styled-components';

import { rem, theme } from '../../styles/index';

interface ListItemProps {
  selected: boolean;
}

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${theme.color.blue_300};

  div {
    position: fixed;
    height: 100%;
    width: 100%;

    padding-left: calc((100vw - 1200px) / 2);
  }

  h2 {
    margin-bottom: ${rem(30)};

    font-size: ${rem(36)};
    color: ${theme.color.red};
  }

  ul {
    width: 330px;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  height: ${rem(40)};

  transition: background-color 0.2s;

  background-color: ${props => (props.selected ? theme.color.blue_200 : '')};

  :hover {
    background-color: ${theme.color.blue_200};
  }

  a {
    height: 100%;
    width: 100%;

    padding-left: ${rem(10)};

    display: flex;
    align-items: center;

    color: ${theme.color.text};
    text-decoration: none;
  }
`;
