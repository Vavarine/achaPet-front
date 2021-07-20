import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles/index';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;