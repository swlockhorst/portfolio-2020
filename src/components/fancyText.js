import React from "react";
import styled from "@emotion/styled";
import { fonts, breakpoints } from "../constants";

/*
 * This component is handy for making the text have a gradient fill
 * Usage:
 * <FancyText content={"Steven Lockhorst"} color={"#da1b60"} />
 */

const FancyText = ({ content, color }) => {
  return (
    <String content={content} color={color}>
      {content}
    </String>
  );
};

const defaultSmall = "10.77vw";
const defaultLarge = "60px";

const String = styled.span`
  font-size: ${defaultSmall};
  line-height: 1.2;
  display: block;
  color: ${(props) => props.color};
  position: relative;
  margin-bottom: 20px;
  font-family: ${fonts.fancy};
  font-weight: 900;

  @media (min-width: ${breakpoints.md}) {
    font-size: ${defaultLarge};
  }

  &:before {
  content: "${(props) => props.content}";
    font-size: ${defaultSmall};
    line-height: 1.2;
    display: block;
    background: linear-gradient(to top, #ff8a00, #da1b60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: -10px;
    left: 0;
    width: 100%;
    z-index: 1;

    @media (min-width: ${breakpoints.md}) {
      font-size: ${defaultLarge};
    }
  }
`;

export default FancyText;
