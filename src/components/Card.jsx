import React from "react";
import styled, { css } from "styled-components";

// components
import Label from "./Label";
import Button from "./Button";

const Card = () => {
  return (
    <CardLayout>
      <TopWrap>
        <LabelWrap>
          <Label>😤 화나요</Label>
          <Label>😓 힘들어요</Label>
        </LabelWrap>
        <p>2023.04.25</p>
      </TopWrap>

      <h3>회사에서 상사에게 혼나서 기분이 좋지 않아</h3>
      <p>
        오늘 회사에서 이런저런 일이 있어서 상사한테 혼났는데 너무 억울해 그건 내가 한게 아닌데..
        다른사람한테 말하기엔 너무 찡찡거리는거 같고 답답해!!
      </p>
      <Button padding={"14px 0 14px 0"} font={"Pretendard-Regular"}>
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
