import React from "react";
import styled from "@emotion/styled";

const Button = (props) => {
  return <ButtonInner>{props.children}</ButtonInner>;
};

export default Button;

const ButtonInner = styled.button`
  padding: 16px;
`;
