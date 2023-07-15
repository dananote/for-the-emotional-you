import React from "react";
import styled from "styled-components";

// components
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Textarea from "../components/Textarea";
import Dropbox from "../components/Dropbox";
import CardList from "../components/CardList";

// image
import main from "../assets/main-img.jpg";

export default function Main() {
  return (
    <MainLayout>
      <LeftLayout>
        <h1>오늘 너의 안좋은일 나한테 버려줘</h1>
        <p>일어났던 안좋은일이 괜찮아졌다면 마음을 비워봐!</p>
        <img src={main} alt="메인 아트 이미지" />
        <LabelWrap>
          <Label active={true}>😢 슬퍼요</Label>
          <Label>😤 화나요</Label>
          <Label>😓 힘들어요</Label>
        </LabelWrap>
        <Input placeholder={"어떤 안좋은 일이 있었어?"} />
        <Textarea placeholder={"힘들었겠다 더 자세히 말해줘"} />
        <Button>감정 버리기</Button>
      </LeftLayout>

      <RightLayout>
        <Dropbox text={"모든 감정"} />
        <CardList />
      </RightLayout>
    </MainLayout>
  );
}

const MainLayout = styled.article`
  margin: 32px auto 0 auto;
  max-width: 1000px;
  display: flex;
  gap: 40px;

  & article {
    /* background-color: salmon; */
    width: 100%;
  }
`;

const LeftLayout = styled.article`
  & h1 {
    font-family: "Pretendard-Bold";
    font-size: 28px;
  }

  & > p {
    font-family: "Pretendard-Regular";
    font-size: 16px;
    color: var(--gray400-color);
    margin: 16px 0 32px 0;
  }

  & img {
    display: block;
    width: 75%;
    margin: 0 auto;
  }

  & input {
    margin-bottom: 16px;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  gap: 12px;
  margin: 32px 0 16px 0;
`;
const RightLayout = styled.article`
  position: relative;

  & > div {
    margin-top: 60px;
  }
`;
