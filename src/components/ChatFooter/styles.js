import styled from "styled-components";

export const Container = styled.div`
  height: 62px;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #f0f2f5;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 0 1px 1px #0003;
`;
