import React, { useState } from "react";
import styled from "styled-components";

const Label = (props) => {
  const { setEmotionLabel } = props;
  const { emotionLabel } = props;
  const [isActiveLabel, setIsActiveLabel] = useState(false);

  const handleActive = (e) => {
    setIsActiveLabel((prev) => !prev);
    const newItem = e.target.innerText;
    const isExist = emotionLabel.includes(newItem);
    if (isExist) {
      setEmotionLabel((prevArray) => {
        return prevArray.filter((el) => el !== newItem);
      });
    } else {
      setEmotionLabel((prevArray) => {
        return [...prevArray, newItem];
      });
    }
  };

  return (
    <LabelLayout
      type="button"
      className={isActiveLabel ? "active" : ""}
      onClick={handleActive}
      {...props}
    >
      {props.children}
    </LabelLayout>
  );
};

const LabelLayout = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  font-family: "Pretendard-Medium";
  font-size: 14px;
  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 50px;
  box-sizing: border-box;
  transition: all 0.1s;

  &:hover {
    background-color: var(--gray100-color);
  }

  &.active {
    background-color: var(--black-color);
    color: white;
    border: 1px solid var(--black-color);
  }
`;

export default Label;
