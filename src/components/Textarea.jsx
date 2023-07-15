import React from "react";
import styled, { css } from "styled-components";

const Textarea = (props) => {
  return (
    <>
      <InputStyled placeholder={props.placeholder} {...props} />
      <CountText>0 / 100</CountText>
    </>
  );
};

const InputStyled = styled.textarea`
  resize: none;
  padding: ${(props) => props.padding || "16px 16px"};
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  border: ${(props) =>
    props.hasError ? "1px solid var(--error-color)" : "1px solid var(--gray200-color)"};
  border-radius: 8px;
  background-color: white;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  transition: all 0.3s;

  &::placeholder {
    color: var(--gray400-color);
    font-size: 16px;
  }

  &:focus {
    border: 1px solid var(--black-color);
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--gray100-color);
      border: 1px solid var(--gray200-color);

      &::placeholder {
        color: var(--gray200-color);
      }
    `}
`;

const CountText = styled.div`
  font-style: italic;
  text-align: right;
  margin: 6px 0 24px 0;
  color: var(--gray300-color);
  font-size: 14px;
`;

export default Textarea;
