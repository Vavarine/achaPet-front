import { ImageDescription } from '../../components/ImageDescription';
import LoginForm from '../../components/LoginForm';

import * as S from '../../styles/pages/login';

export default function LoginScreen() {
  return (
    <S.LoginContainer>
      <ImageDescription />
      <LoginForm />
    </S.LoginContainer>
  );
}
