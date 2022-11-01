import { useAppDispatch, useAppSelector } from "../redux";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { EndGameModalTitle } from "./EndGameModalTitle";
import { restart } from "../redux/reducers";

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;
//TODO: make reponsive width and height
const ImageContainer = styled.div<{
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
}>`
  position: absolute;

  /* z-index: -1; */

  top: ${(props) => (props.top ? props.top : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};

  transform: ${(props) => (props.transform ? props.transform : "unset")};
`;

const Modal = styled.div`
  position: relative;

  z-index: 10;

  padding: 20px;

  height: 60%;
  width: 800px;

  border-radius: 40px;

  background: linear-gradient(#67df89, #8d67df29);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  padding: 30px 60px;

  height: 100%;

  border-radius: 40px;

  background: white;
`;

const Text = styled.span`
  padding: 0px 30px;

  font-family: "Circe Rounded";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;

  text-align: center;

  color: #5f40a1;
`;

const Button = styled.button`
  padding: 8px 60px;

  font-family: "Circe Rounded";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;

  background: #2bd600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 30px;
`;

export const EndGameModal = () => {
  const dispatch = useAppDispatch();

  return (
    <Page>
      <Modal>
        <ImageContainer
          top={"0"}
          left={"0"}
          transform={"translate(-50%, -20%)}"}
        >
          <StyledImage
            draggable="false"
            src="/images/end-game-star.svg"
            width={"200"}
            height={"200"}
            alt="BG"
          />
        </ImageContainer>
        <ImageContainer
          bottom={"0"}
          left={"0"}
          transform={"translate(-50%, 25%)}"}
        >
          <StyledImage
            draggable="false"
            src="/images/end-game-star.svg"
            width={"300"}
            height={"300"}
            alt="BG"
          />
        </ImageContainer>
        <ImageContainer
          top={"0"}
          right={"0"}
          transform={"translate(40%, 35%)}"}
        >
          <StyledImage
            draggable="false"
            src="/images/end-game-star.svg"
            width={"300"}
            height={"300"}
            alt="BG"
          />
        </ImageContainer>
        <ImageContainer
          bottom={"0"}
          right={"0"}
          transform={"translate(45%, 25%)}"}
        >
          <StyledImage
            draggable="false"
            src="/images/end-game-star.svg"
            width={"170"}
            height={"170"}
            alt="BG"
          />
        </ImageContainer>
        <ModalContent>
          <EndGameModalTitle text="Победа!" />
          <Text>Молодец! Ты успешно справился с заданием!</Text>
          <Button onClick={() => dispatch(restart())}>Заново</Button>
        </ModalContent>
      </Modal>
    </Page>
  );
};
// Circe Rounded Alt 'Calibri' 'Helvetica'
