import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import AspectObject from "../components/aspectObject";
import Button from "../components/button";

const ProjectPane = (data) => {
  console.log("props >>", data);
  return (
    <Container>
      <Pic>
        <AspectObject ratioWidth={4} ratioHeight={3} backgroundColor={"#000"}>
          <img src={data.data.poster.fluid.src} alt="" />
        </AspectObject>

        <Table>
          <tbody>
            <tr>
              <th>Role</th>
              <td>
                <div>
                  <div>Primary Developer</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Tech</th>
              <td>
                <div>{data.data.tech}</div>
              </td>
            </tr>
            <tr>
              <th>Client</th>
              <td>
                <div>
                  <div>{data.data.client}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Pic>
      <Body>
        <BodyDescription>
          {data.data.longDescription.longDescription}
        </BodyDescription>
        <ButtonContainer>
          <Link to={`/${data.data.slug}/`}>
            <Button>Learn More</Button>
          </Link>
        </ButtonContainer>
      </Body>
    </Container>
  );
};

export default ProjectPane;

const Table = styled.table`
  position: absolute;
  bottom: -20px;
  transform: translateX(-50%);
  left: 50%;
  background: linear-gradient(#222736, #201c29);
  min-width: 60%;
  z-index: 2;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }
`;

const Container = styled.div`
  position: sticky;
  top: 30px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    border: 3px solid #7a7acc;
    z-index: 1;
    pointer-events: none;
  }
`;

const Pic = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #222736 20%, transparent);
  }
`;

const Body = styled.p`
  margin-bottom: 20px;
  padding: 30px 20px;
  line-height: 1.2;
  background: linear-gradient(#222736, #201c29);
`;

const BodyDescription = styled.p`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
