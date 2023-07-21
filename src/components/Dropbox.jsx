import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// icon
import iconArrow from "../assets/Icons/icon_arrow.svg";
import iconCheckboxActive from "../assets/Icons/icon_checkbox-active.svg";
import iconCheckbox from "../assets/Icons/icon_checkbox.svg";

const Dropbox = (props) => {
  const { setViewMemo, memo } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("모든 감정");
  const [dropboxName, setDropboxName] = useState("모든 감정");
  const dropdownRef = useRef(null);

  // console.log(viewMemo[0].emotionLabels);

  const handleFilter = (e) => {
    const filterItem = e.target.innerText;
    const newArray = memo.filter((el) => el.emotionLabels.includes(filterItem));
    setViewMemo(newArray);
    setIsOpen(false);
    setDropboxName(filterItem);
    setIsActive(filterItem);
  };

  const handleAllView = (e) => {
    const filterItem = e.target.innerText;
    setViewMemo(memo);
    setIsOpen(false);
    setDropboxName("모든 감정");
    setIsActive(filterItem);
  };

  const handleNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <DropboxLayout ref={dropdownRef}>
      <DropboxButton onClick={handleNav}>
        {dropboxName}
        <img src={iconArrow} alt="화살표 아이콘" className={isOpen ? "rotate" : ""} />
      </DropboxButton>

      {isOpen && (
        <DropboxList>
          <DropboxItem onClick={handleAllView} className={isActive === "모든 감정" ? "active" : ""}>
            <img
              src={isActive === "모든 감정" ? iconCheckboxActive : iconCheckbox}
              alt="체크박스 아이콘"
            />
            모든 감정
          </DropboxItem>

          <DropboxItem onClick={handleFilter} className={isActive === "😢 슬퍼요" ? "active" : ""}>
            <img
              src={isActive === "😢 슬퍼요" ? iconCheckboxActive : iconCheckbox}
              alt="체크박스 아이콘"
            />
            😢 슬퍼요
          </DropboxItem>

          <DropboxItem
            onClick={handleFilter}
            className={isActive === "😓 힘들어요" ? "active" : ""}
          >
            <img
              src={isActive === "😓 힘들어요" ? iconCheckboxActive : iconCheckbox}
              alt="체크박스 아이콘"
            />
            😓 힘들어요
          </DropboxItem>

          <DropboxItem onClick={handleFilter} className={isActive === "😤 화나요" ? "active" : ""}>
            <img
              src={isActive === "😤 화나요" ? iconCheckboxActive : iconCheckbox}
              alt="체크박스 아이콘"
            />
            😤 화나요
          </DropboxItem>
        </DropboxList>
      )}
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
    transition: all 0.3s;
  }

  .rotate {
    transform: rotate(-180deg);
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

  .active {
    background-color: var(--gray100-color);
  }
`;
const DropboxItem = styled.li`
  cursor: pointer;
  display: flex;
  gap: 12px;
  padding: 12px;
  font-size: 14px;
  font-family: "Pretendard-Medium";

  & img {
    width: 16px;
    margin-right: 12px;
  }

  &:hover {
    background-color: var(--gray100-color);
  }
`;

export default Dropbox;
