import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  const { type } = props;
  return (
    <ButtonStyled type={type ? type : "submit"} {...props}>
      {props.children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: ${(props) => props.bgColor || "var(--black-color)"};
  color: ${(props) => props.textColor || "white"};
  padding: ${(props) => props.padding || "18px 0 18px 0"};
  font-family: ${(props) => props.font || "Pretendard-Medium"};
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--gray400-color);
      cursor: default;

      &:hover {
        background-color: var(--gray400-color);
      }
    `}
`;

export default Button;
