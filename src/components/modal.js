import React from "react";
import styled from "@emotion/styled";
import Portal from "../portal";

const Modal = ({ children, close, render }) => {
  return (
    <Portal>
      <Overlay onClick={close} />
      <ModalContainer>
        <CloseButton onClick={close}>
          <svg width={24} height={24}>
            <path d="M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z" />
          </svg>
        </CloseButton>
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
  border: none;
  background: none;
  box-shadow: none;

  svg {
    fill: #222736;
    filter: drop-shadow(0 0 8px #222736);
  }

  &:hover {
    svg {
      fill: #da1b60;
    }
  }
`;
