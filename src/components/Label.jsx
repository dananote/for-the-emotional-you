import React from "react";
import styled, { css } from "styled-components";

const Label = (props) => {
  return <LabelLayout {...props}>{props.children}</LabelLayout>;
};

const LabelLayout = styled.button`
  /* display: inline-block; */
  cursor: pointer;
  padding: 8px 12px;
  font-family: "Pretendard-Medium";
  font-size: 14px;
  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 50px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--gray100-color);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--black-color);
      color: white;
      border: none;

      &:hover {
        background-color: var(--gray500-color);
        border: none;
      }
    `}
`;

export default Label;
