import React from "react";
import styled from "@emotion/styled";

const Button = ({ children }) => {
  return (
    <ButtonOuter>
      <ButtonInner>{children}</ButtonInner>
    </ButtonOuter>
  );
};

export default Button;

const ButtonOuter = styled.button`
  position: relative;
  padding: 14px 20px;
  background: linear-gradient(#222736, #201c29);
  border: none;
  border-radius: 0;
  color: #a1a1af;
  text-transform: uppercase;

  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 2px solid #a1a1af;
    opacity: 0.3;
  }
`;

const ButtonInner = styled.div``;
