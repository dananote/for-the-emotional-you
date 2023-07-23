import React, { useEffect } from "react";
import styled from "styled-components";

// recoil
import { useRecoilState } from "recoil";
import emotionMemo from "../recoil/emotionMemo";

//component
import Button from "./Button";

// image
import imgModal from "../assets/modal-img.png";

// data
import mindComment from "../mock/mindComment";

const Modal = ({ targetItem, setShowModal, showModal }) => {
  const [isMemo, setIsMemo] = useRecoilState(emotionMemo);

  const randomComment = Math.floor(Math.random() * mindComment.length);

  const handleDelete = () => {
    const updatedItems = isMemo.filter((item) => item.emotionContent !== targetItem);
    setIsMemo(updatedItems);
    setShowModal(false);
  };

  useEffect(() => {
    const body = document.body;
    if (showModal) {
      body.style.overflow = "hidden";
    }
  });

  return (
    <ModalLayout>
      <ModalContent>
        <ModalWrap>
          <p>{mindComment[randomComment]}</p>
          <Button onClick={handleDelete} bgColor="white" textColor="var(--black-color)">
            고마워 마음이 편해졌어
          </Button>
        </ModalWrap>

        <img src={imgModal} alt="모달 이미지" />
      </ModalContent>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ModalContent = styled.article`
  width: 35%;
  padding: 0 40px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: var(--black-color);
  left: 50%;
  top: 30%;
  transform: translatex(-50%);
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 200px;
    margin-right: -24px;
  }
`;

const ModalWrap = styled.div`
  flex-basis: 60%;

  p {
    margin-bottom: 40px;
    color: white;
    font-size: 24px;
    font-family: "Pretendard-Medium";
    line-height: 1.5;
  }

  & > button:hover {
    background-color: var(--gray200-color);
  }
`;

export default Modal;
