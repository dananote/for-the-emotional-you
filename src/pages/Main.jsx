import React, { useState, useEffect } from "react";
import styled from "styled-components";

// recoil
import { useRecoilState } from "recoil";
import emotionMemo from "../recoil/emotionMemo";

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
  const [isEmotionMemo, setIsEmotionMemo] = useRecoilState(emotionMemo);
  const [memoData, setMemoData] = useState({
    emotionLabels: "",
    emotionTitle: "",
    emotionContent: "",
  });

  const [emotionLabel, setEmotionLabel] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleJoin = (e) => {
    e.preventDefault();
    setMemoData((prevState) => ({
      ...prevState,
      emotionLabels: emotionLabel.join(),
    }));

    console.log("함수내:", memoData);

    // submitData();
    test();
  };

  const test = () => {
    console.log("함수밖:", memoData);
  };

  const submitData = () => {
    setIsEmotionMemo((prev) => {
      const newArray = [...prev];
      newArray.push(memoData);
      return newArray;
    });
  };

  return (
    <MainLayout>
      <LeftLayout>
        <h1>오늘 너의 안좋은일 나한테 버려줘</h1>
        <p>일어났던 안좋은일이 괜찮아졌다면 마음을 비워봐!</p>
        <img src={main} alt="메인 아트 이미지" />

        <form onSubmit={handleJoin}>
          <LabelWrap>
            <Label setEmotionLabel={setEmotionLabel} emotionLabel={emotionLabel}>
              😢 슬퍼요
            </Label>
            <Label setEmotionLabel={setEmotionLabel} emotionLabel={emotionLabel}>
              😤 화나요
            </Label>
            <Label setEmotionLabel={setEmotionLabel} emotionLabel={emotionLabel}>
              😓 힘들어요
            </Label>
          </LabelWrap>
          <Input
            placeholder={"어떤 안좋은 일이 있었어?"}
            onChange={handleInputChange}
            name="emotionTitle"
          />
          <Textarea
            placeholder={"힘들었겠다 더 자세히 말해줘"}
            onChange={handleInputChange}
            name="emotionContent"
          />
          <Button>감정 버리기</Button>
        </form>
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
