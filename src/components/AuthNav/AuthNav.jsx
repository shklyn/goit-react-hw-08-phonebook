import { RegisterLogInLink, AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <RegisterLogInLink to="/register">Register</RegisterLogInLink>
      <RegisterLogInLink to="/login">LogIn</RegisterLogInLink>
    </AuthNavBox>
  );
};