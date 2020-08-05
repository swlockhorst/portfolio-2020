import React from "react";
import styled from "@emotion/styled";
import AspectObject from "../components/aspectObject";

const ProjectPane = () => {
  return (
    <Container>
      <Pic>
        <AspectObject ratioWidth={1} ratioHeight={1} backgroundColor={"#000"}>
          {/* <img src={data.data.contentfulPage.images[0].file.url} alt="" /> */}
        </AspectObject>

        <Table>
          <tbody>
            <tr class="HeroTable-tableRow">
              <th class="HeroTable-tableHeader">Role</th>
              <td class="HeroTable-tableData">
                <div>
                  <div class="TableHeader-container">Tank</div>
                </div>
              </td>
            </tr>
            <tr class="HeroTable-tableRow">
              <th class="HeroTable-tableHeader">Difficulty</th>
              <td class="HeroTable-tableData">
                <div>Medium</div>
              </td>
            </tr>
            <tr class="HeroTable-tableRow">
              <th class="HeroTable-tableHeader">Universe</th>
              <td class="HeroTable-tableData">
                <div>
                  <div class="TableHeader-container">Warcraft</div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Pic>
      <Body>
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test
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
  background: red;

  th,
  td {
    border: 1px solid black;
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
`;

const Body = styled.p`
  margin-bottom: 20px;
  padding: 20px;
  background: linear-gradient(#222736, #201c29);
`;
const Links = styled.ul``;
