import React from "react";
import styled from "styled-components";

// icon
import iconArrow from "../assets/Icons/icon_arrow.svg";
import iconCheckboxActive from "../assets/Icons/icon_checkbox-active.svg";
import iconCheckbox from "../assets/Icons/icon_checkbox.svg";

const Dropbox = (props) => {
  return (
    <DropboxLayout>
      <DropboxButton>
        {props.text}
        <img src={iconArrow} alt="화살표 아이콘" />
      </DropboxButton>

      <DropboxList>
        <DrobboxItem>
          <img src={iconCheckboxActive} alt="체크박스 아이콘" />
          <p>모든 감정</p>
        </DrobboxItem>

        <DrobboxItem>
          <img src={iconCheckboxActive} alt="체크박스 아이콘" />
          <p>모든 감정</p>
        </DrobboxItem>

        <DrobboxItem>
          <img src={iconCheckboxActive} alt="체크박스 아이콘" />
          <p>모든 감정</p>
        </DrobboxItem>
      </DropboxList>
    </DropboxLayout>
  );
};

const DropboxLayout = styled.section`
  width: 150px;
  position: absolute;
  right: 0;
`;

const DropboxButton = styled.button`
  cursor: pointer;
  font-family: "Pretendard-Medium";
  background-color: white;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid var(--gray200-color);
  border-radius: 6px;

  & img {
    width: 16px;
    text-align: right;
  }
`;

const DropboxList = styled.ul`
  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 6px;
  width: 150px;
  padding: 16px 0;
  margin-top: 8px;
  box-shadow: -4px 4px 10px rgb(0, 0, 0, 0.08);
`;
const DrobboxItem = styled.li`
  cursor: pointer;
  background-color: var(--gray100-color);
  display: flex;
  gap: 12px;
  padding: 12px;

  & img {
    width: 16px;
  }

  & p {
    font-size: 14px;
    font-family: "Pretendard-Medium";
  }
`;

export default Dropbox;
