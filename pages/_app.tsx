import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../styles/index";
import type { AppProps } from "next/app";

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
