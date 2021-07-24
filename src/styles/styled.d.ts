import 'styled-components';
import { theme } from './index';

export type ThemeProps = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
