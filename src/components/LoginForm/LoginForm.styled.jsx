import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-bottom: 36px;
  padding: 15px;

  font-size: 20px;
  width: 360px;
  height: 156px;
  border-radius: 12px;
  background: #1182ff ;
  box-shadow: 0px 8px 16px rgb(255 72 0 / 69%), 0px 4px 8px rgb(0 52 255 / 82%),
    0px 4px 8px rgb(0 204 255 / 0%), 0px 8px 16px rgb(0 223 255);
`;

export const LoginLabel = styled.label`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
  &:not-last-of-type {
    gap: 22px;
  }
`;

export const LoginInput = styled.input`
  width: 240px;
  height: 26px;
  border: none;
  border-radius: 5px;
  padding-left: 12px;
`;

export const LoginSubmitButton = styled.button`
  width: 360px;
  height: 36px;
  color: #fff;
  background: #00ff8e;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #225b18;
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;