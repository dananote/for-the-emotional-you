import React from "react";
import styled from "styled-components";

// components
import Card from "./Card";

const CardList = () => {
  return (
    <CardListLayout>
      <Card />
      <Card />
      <Card />
    </CardListLayout>
  );
};

const CardListLayout = styled.div`
  margin-top: 24px;
  height: 650px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default CardList;
