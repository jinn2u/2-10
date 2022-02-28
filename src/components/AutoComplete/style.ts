import styled from 'styled-components';

export const Input = styled.input<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  padding: 5px 0px 5px 5px;
  box-sizing: border-box;
  height: 35px;
  outline: none;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
