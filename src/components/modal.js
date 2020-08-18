import React from "react";
import styled from "@emotion/styled";
import Portal from "../portal";

const Modal = ({ children, close, render }) => {
  return (
    <Portal>
      <Overlay onClick={close} />
      <ModalContainer>
        <CloseButton onClick={close}>Close</CloseButton>
        {render(children) || children}
      </ModalContainer>
    </Portal>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  padding: 10px;
  top: 50px;
  width: 100%;
  z-index: 10;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.9;
  z-index: 9;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
`;
