import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Textarea from "./Textarea";
import { useRecoilState } from "recoil";
import emotionMemo from "../recoil/emotionMemo";

export default function Form() {
  const [isEmotionMemo, setIsEmotionMemo] = useRecoilState(emotionMemo);
  const label = ["😢 슬퍼요", "😤 화나요", "😓 힘들어요"];
  const [memoData, setMemoData] = useState({
    emotionLabels: "",
    emotionTitle: "",
    emotionContent: "",
    date: "",
  });
  const [isReset, setIsReset] = useState(false);
  const [emotionLabel, setEmotionLabel] = useState(["😢 슬퍼요"]);
  const isButton = true;
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
      {errorMessage === "감정 내용을 입력해주세요" && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button onClick={handleError}>감정 버리기</Button>
    </form>
  );
}

const LabelWrap = styled.div`
  display: flex;
  gap: 12px;
  margin: 32px 0 16px 0;
`;

const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 14px;
`;
