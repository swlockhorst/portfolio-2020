import React from "react";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        body {
          background: #100a0d;
          color: #a1a1af;
          font-family: "Roboto", sans-serif;
        }

        a {
          text-decoration: none;
          color: #a1a1af;
        }
      `}
    />
  );
};

export default GlobalStyles;
