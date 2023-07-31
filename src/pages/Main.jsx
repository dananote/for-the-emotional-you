import React, { useState } from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Form from "../components/Form";
import main from "../assets/main-img.jpg";
import { useMediaQuery } from "react-responsive";
import pencil from "../assets/Icons/icon_pencil.svg";
import memo from "../assets/Icons/icon_card.svg";

export default function Main() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 999px)" });

  const [viewCard, setViewCard] = useState(false);

  const handleCard = () => {
    setViewCard((prev) => !prev);
  };
  return (
    <>
      {isDesktop && (
        <MainLayout>
          <LeftLayout>
            <h1>오늘 너의 안좋은일 나한테 버려줘</h1>
            <p>일어났던 안좋은일이 괜찮아졌다면 마음을 비워봐!</p>
            <img src={main} alt="메인 아트 이미지" />
            <Form />
          </LeftLayout>

          <RightLayout>
            <CardList />
          </RightLayout>
        </MainLayout>
      )}

      {isMobile && (
        <MobileMainLayout>
          {!viewCard && (
            <LeftLayout>
              <h1>오늘 너의 안좋은일 나한테 버려줘</h1>
              <p>일어났던 안좋은일이 괜찮아졌다면 마음을 비워봐!</p>
              <img src={main} alt="메인 아트 이미지" />
              <Form />
            </LeftLayout>
          )}
          {viewCard && (
            <RightLayout>
              <CardList isMobile={isMobile} />
            </RightLayout>
          )}

          <ViewCard type="button" onClick={handleCard}>
            <img src={!viewCard ? memo : pencil} alt="이미지" />
          </ViewCard>
        </MobileMainLayout>
      )}
    </>
  );
}

const MainLayout = styled.article`
  margin: 32px auto 0 auto;
  max-width: calc(100% - 400px);
  display: flex;
  gap: 40px;

  & > section {
    width: 100%;
  }
`;

const MobileMainLayout = styled.article`
  margin: 32px auto 0 auto;
  max-width: calc(100% - 48px);
  display: flex;
  gap: 40px;
  flex-direction: column;

  & > section {
    width: 100%;
  }

  & h1 {
    margin-top: 48px;
  }
`;

const ViewCard = styled.button`
  border-radius: 100px;
  background-color: var(--gray500-color);
  width: 64px;
  aspect-ratio: 1 /1;
  position: fixed;
  text-align: center;
  bottom: 56px;
  right: 32px;

  & > img {
    width: 32px;
  }
`;

const LeftLayout = styled.section`
  h1 {
    font-family: "Pretendard-Bold";
    font-size: 28px;
  }

  & > p {
    font-family: "Pretendard-Regular";
    font-size: 16px;
    color: var(--gray400-color);
    margin: 16px 0 32px 0;
  }

  img {
    display: block;
    width: 75%;
    margin: 0 auto;
  }

  input {
    margin-bottom: 24px;
  }
`;

const RightLayout = styled.section`
  position: relative;
`;
