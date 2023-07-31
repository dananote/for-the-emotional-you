import React from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Form from "../components/Form";
import main from "../assets/main-img.jpg";

export default function Main() {
  return (
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
  );
}

const MainLayout = styled.article`
  margin: 32px auto 0 auto;
  max-width: 1000px;
  display: flex;
  gap: 40px;

  & > article {
    width: 100%;
  }
`;

const LeftLayout = styled.article`
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

const RightLayout = styled.article`
  position: relative;
`;
