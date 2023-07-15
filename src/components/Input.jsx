import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  const { type } = props;
  return <InputStyled type={type ? type : "text"} placeholder={props.placeholder} {...props} />;
};

const InputStyled = styled.input`
  padding: ${(props) => props.padding || "16px 16px"};
  width: 100%;
  box-sizing: border-box;
  border: ${(props) =>
    props.hasError ? "1px solid var(--error-color)" : "1px solid var(--gray200-color)"};
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  transition: all 0.3s;

  &::placeholder {
    color: var(--gray400-color);
    font-size: 16px;
  }

  &:focus {
    border: 1px solid var(--black-color);
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

export default Input;
