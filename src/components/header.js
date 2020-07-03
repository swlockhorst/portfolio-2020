import { Link } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import { fonts } from "../constants";

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <h1>
          <Link to="/">
            <Name>{siteTitle}</Name>
          </Link>
        </h1>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 60px;
  line-height: 1.2;
  display: block;
  color: #da1b60;
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  font-family: ${fonts.fancy};
  font-weight: 900;
  &:before {
    content: "Steven Lockhorst";
    font-size: 60px;
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
  }
`;
