import React, { useState, useEffect } from "react";
import styled from "styled-components";

// recoil
import { useRecoilValue } from "recoil";
import emotionMemo from "../recoil/emotionMemo";

// components
import Card from "./Card";
import Dropbox from "./Dropbox";

// image
import defaultImg from "../assets/deFault-img.jpg";

const CardList = () => {
  const memo = useRecoilValue(emotionMemo);
  const memoData = [...memo].reverse();
  const [viewMemo, setViewMemo] = useState(null);

  useEffect(
    () => {
      setViewMemo(memoData);
    },
    [memo],
    [],
  );

  return (
    <>
      <Dropbox text={"모든 감정"} setViewMemo={setViewMemo} memo={memo} />
      <CardListLayout>
        {memo.length === 0 ? (
          <DefaultTextLayout>
            <img src={defaultImg} alt="게시물이 없을시 나오는 기본 이미지" />
            <p>당신의 마음을 저한테 비워주세요</p>
          </DefaultTextLayout>
        ) : (
          viewMemo?.map((el, index) => {
            return (
              <Card
                key={index}
                labels={el.emotionLabels}
                title={el.emotionTitle}
                contents={el.emotionContent}
                date={el.date}
              />
            );
          })
        )}
      </CardListLayout>
    </>
  );
};

const CardListLayout = styled.div`
  margin-top: 60px;
  height: 650px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DefaultTextLayout = styled.div`
  text-align: center;
  margin-top: 160px;

  & img {
    width: 120px;
    opacity: 0.4;
  }

  & p {
    margin-top: 24px;
    font-size: 15px;
    color: var(--gray400-color);
  }
`;

export default CardList;
