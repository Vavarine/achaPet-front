import {
  createGetReState,
  createReState,
  createReStateDispatch,
  createReStateSelect,
} from '@raulpesilva/re-state';

type tokenProps = string | null;

export const tokenKey = 'token';
export const getInitialValue = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(tokenKey);
  } else {
    return null;
  }
};
export const useTokenState = createReState<tokenProps>(
  tokenKey,
  getInitialValue,
);
export const setTokenState = createReStateDispatch<tokenProps>(tokenKey);
export const dispatchTokenState = (value: string) => {
  setTokenState(value);
  localStorage.setItem(tokenKey, value);
};

export const getTokenState = createGetReState<tokenProps>(tokenKey);
export const useTokenSelect = createReStateSelect<tokenProps>(tokenKey);
export const resetTokenState = () => dispatchTokenState(null);
