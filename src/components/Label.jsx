import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Label = ({ isReset, setEmotionLabel, emotionLabel, text }) => {
  const [isActiveLabel, setIsActiveLabel] = useState(false);
  const targetRef = useRef(null);

  const handleActive = () => {
    setIsActiveLabel((prev) => !prev);
    const selectLabel = targetRef.current.innerText;
    const isExist = emotionLabel.includes(selectLabel);

    if (isExist) {
      setEmotionLabel((prev) => {
        return prev.filter((el) => el !== selectLabel);
      });
    } else {
      setEmotionLabel((prev) => {
        const newArray = [...prev];
        newArray.push(selectLabel);
        return newArray;
      });
    }
  };

  useEffect(() => {
    setIsActiveLabel(false);
  }, [isReset]);

  return (
    <LabelLayout
      ref={targetRef}
      type="button"
      className={isActiveLabel ? "active" : ""}
      onClick={handleActive}
    >
      {text}
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
