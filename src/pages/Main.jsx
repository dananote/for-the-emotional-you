import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

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
  const [label, setLabel] = useState(["😢 슬퍼요", "😤 화나요", "😓 힘들어요"]);
  const [memoData, setMemoData] = useState({
    emotionLabels: "",
    emotionTitle: "",
    emotionContent: "",
    date: "",
  });
  const [isButton, setIsButton] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [emotionLabel, setEmotionLabel] = useState(["😢 슬퍼요"]);
  const [isTitle, setIsTitle] = useState("");
  const [isContent, setIsContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "emotionTitle") {
      setIsTitle(value);
    } else {
      setIsContent(value);
    }

    setMemoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setMemoData((prevState) => ({
      ...prevState,
      emotionLabels: emotionLabel,
    }));
  };

  const handleError = () => {
    if (isTitle === "") {
      setErrorMessage("제목을 입력해주세요");
    } else if (isContent === "") {
      setErrorMessage("감정 내용을 입력해주세요");
    } else {
      setErrorMessage("");
      const currentDate = getCurrentDate();

      setMemoData((prevState) => ({
        ...prevState,
        date: currentDate,
      }));
    }
  };

  const handleJoin = (e) => {
    e.preventDefault();

    if (isTitle !== "" && isContent !== "") {
      setIsTitle("");
      setIsContent("");
      setEmotionLabel((prev) => {
        const newArray = ["😢 슬퍼요"];
        return newArray;
      });
      setIsReset((prev) => !prev);

      setIsEmotionMemo((prev) => {
        const newArray = [...prev];
        newArray.push(memoData);
        return newArray;
      });
    }
  };

  return (
    <MainLayout>
      <LeftLayout>
        <h1>오늘 너의 안좋은일 나한테 버려줘</h1>
        <p>일어났던 안좋은일이 괜찮아졌다면 마음을 비워봐!</p>
        <img src={main} alt="메인 아트 이미지" />

        <form onSubmit={handleJoin}>
          <LabelWrap>
            {label?.map((el, index) => {
              return (
                <Label
                  key={index}
                  isReset={isReset}
                  setEmotionLabel={setEmotionLabel}
                  emotionLabel={emotionLabel}
                  text={el}
                  isButton={isButton}
                />
              );
            })}
          </LabelWrap>
          <Input
            placeholder={"어떤 안좋은 일이 있었어?"}
            onChange={handleInputChange}
            name="emotionTitle"
            value={isTitle}
            hasError={errorMessage === "제목을 입력해주세요"}
          />
          {errorMessage === "제목을 입력해주세요" && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Textarea
            placeholder={"힘들었겠다 더 자세히 말해줘"}
            onChange={handleInputChange}
            name="emotionContent"
            setIsContent={setIsContent}
            value={isContent}
            hasError={errorMessage === "감정 내용을 입력해주세요"}
          />
          {errorMessage === "감정 내용을 입력해주세요" && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
          <Button onClick={handleError}>감정 버리기</Button>
        </form>
      </LeftLayout>

      <RightLayout>
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
    margin-bottom: 24px;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  gap: 12px;
  margin: 32px 0 16px 0;
`;

const RightLayout = styled.article`
  position: relative;
`;

const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 14px;
`;
