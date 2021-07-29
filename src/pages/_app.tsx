import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { theme, GlobalStyle } from '../styles/index';
import AuthContextProvider from '../contexts/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <Toaster />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
