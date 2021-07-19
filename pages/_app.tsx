import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
export default MyApp;
