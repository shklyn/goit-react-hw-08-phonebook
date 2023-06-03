import styled from '@emotion/styled';

export const ContactItemLi = styled.li`
  display: flex;
  gap: 16px;
`;

export const DeleteBtn = styled.button`
  width: 100px;
  color: #fff;
  background: #00ff8e;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: #fff;
    background-color: #225b18;
    box-shadow: inset 0px 2px 4px rgba(255, 0, 33, 0.5),
      inset 0px 4px 8px rgba(255, 0, 33, 0.5),
      inset 0px 8px 16px rgba(255, 0, 33, 0.5);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;