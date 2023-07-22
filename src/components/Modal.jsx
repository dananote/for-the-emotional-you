import React from "react";
import styled from "styled-components";

//component
import Button from "./Button";

// image
import imgModal from "../assets/modal-img.png";

const Modal = () => {
  return (
    <ModalLayout>
      <ModalContent>
        <ModalWrap>
          <p>
            다 괜찮아 질꺼야
            <br /> 지금까지 잘 해왔잖아?
          </p>
          <Button bgColor="white" textColor="var(--black-color)">
            고마워 마음이 편해졌어
          </Button>
        </ModalWrap>

        <img src={imgModal} alt="" />
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
