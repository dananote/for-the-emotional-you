import React, { useState } from "react";
import styled from "styled-components";

// recoil
import { useRecoilState } from "recoil";
import emotionMemo from "../recoil/emotionMemo";

// components
import Label from "./Label";
import Button from "./Button";

const Card = ({ labels, title, contents, date }) => {
  const [isMemo, setIsMemo] = useRecoilState(emotionMemo);
  const [isButton, setIsButton] = useState(false);

  const handleDelete = (e) => {
    const targetItem = e.target.previousSibling.innerText;
    const updatedItems = isMemo.filter((item) => item.emotionContent !== targetItem);
    setIsMemo(updatedItems);
  };

  console.log(isMemo);

  return (
    <CardLayout>
      <TopWrap>
        <LabelWrap>
          {labels?.map((el, index) => {
            return <Label key={index} text={el} isButton={isButton} />;
          })}
        </LabelWrap>
        <p>{date}</p>
      </TopWrap>

      <h3>{title}</h3>
      <p>{contents}</p>
      <Button onClick={handleDelete} padding={"14px 0 14px 0"} font={"Pretendard-Regular"}>
        마음 비우기
      </Button>
    </CardLayout>
  );
};

const CardLayout = styled.section`
  padding: 24px 20px;
  background-color: var(--gray100-color);
  border: 1px solid var(--gray200-color);
  border-radius: 12px;

  & h3 {
    font-family: "Pretendard-Bold";
    font-size: 18px;
    margin: 20px 0;
  }

  & > p {
    color: var(--gray500-color);
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  & + & {
    margin-top: 20px;
  }
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-style: italic;
    color: var(--gray300-color);
    font-size: 14px;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export default Card;
