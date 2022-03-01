import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  padding: 20px 0px 20px 24px;
  box-sizing: border-box;
  flex: 1;
`;

export const Input = styled.input<{ width: number }>`
  border: 0;
  background-color: transparent;
  padding: 5px 0px 5px 5px;
  box-sizing: border-box;
  height: 35px;
  outline: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 400;
  width
`;

export const Btn = styled.button`
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #007be9;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 18px;
  padding-bottom: 18px;
  cursor: pointer;
  height: 60px;
`;

export const Ul = styled.ul<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid lightgray;
  top: 25px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: absolute;
  z-index: 100;
  box-sizing: border-box;
`;

export const Li = styled.li<{ isSelected: boolean }>`
  padding: 0px 0px 0px 5px;
  margin: 0px;
  background-color: ${({ isSelected }) => (isSelected ? 'lightgray' : 'white')};
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
