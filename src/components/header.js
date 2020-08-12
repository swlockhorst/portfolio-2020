import { Link } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import FancyText from "../components/fancyText";

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <h1>
          <Link to="/">
            <FancyText content={"Steven Lockhorst"} color={"#da1b60"} />
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
