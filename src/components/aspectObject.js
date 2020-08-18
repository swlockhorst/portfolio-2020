import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

/*
 * This component is handy for wrapping images
 * that might not get loaded right away(lazy loading/slow network), but
 * you would still like to reserve the space in the layout.
 * Usage:
 * <AspectObject ratioWidth={16} ratioHeight={9} backgroundColor={'#000'}>
 *   <img src='/path/to/img/nX9AVtA.jpg' />
 * </AspectObject>
 * Note:
 * if a child element is not given to the component, then
 * it will render with the aspect ratio in the center of it
 */

const AspectObjectContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  /* margin-bottom: 0; */
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 100%;
    padding-top: ${(props) => (props.ratioHeight / props.ratioWidth) * 100}%;
  }

  & > * {
    margin: 0;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }

  & > iframe,
  & > embed,
  & > video {
    height: 100%;
  }

  & > .label {
    display: inline-block;
    height: auto;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PlaceholderLabel = styled.span`
  font-size: 4vw;
`;

const AspectObject = ({
  backgroundColor,
  ratioWidth,
  ratioHeight,
  children,
}) => {
  return (
    <AspectObjectContainer
      ratioWidth={ratioWidth}
      ratioHeight={ratioHeight}
      backgroundColor={backgroundColor}
    >
      {!children && (
        <PlaceholderLabel className="label" labelFontSize={ratioWidth}>
          {ratioWidth}:{ratioHeight}
        </PlaceholderLabel>
      )}

      {children}
    </AspectObjectContainer>
  );
};

export default AspectObject;

AspectObject.propTypes = {
  ratioHeight: PropTypes.number,
  ratioWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
};
