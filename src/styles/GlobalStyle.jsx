import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        box-sizing: border-box;
        font-size: 10px;

        --gray100-color: #F8F8FC;
        --gray200-color: #DADADA;
        --gray300-color: #ACACAC;
        --gray400-color: #979797;
        --gray500-color: #4B4B4B;
        --black-color: #000000;
    };

    body {
        font-family: "Pretendard-Regular", sans-serif;
    };

    a {
		text-decoration: none;
		color: inherit;
	  };

    button,
    input {
        all: unset;
    };

    img {
    vertical-align: top;
    };

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  };

`;

export default GlobalStyle;
