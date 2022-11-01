import { useAppDispatch, useAppSelector } from "../redux";
import {
  putElementToCell,
  generateGame,
  selectElements,
} from "../redux/reducers";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { SteppedSlider } from "./SteppedSlider";

import { Text } from "../styles";

const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding-left: 10px;

  height: 100px;
  width: 400px;
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
}>`
  position: absolute;

  top: ${(props) => (props.top ? props.top : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
`;

type OrderArrowProps = {
  sort: "ascending" | "descending";
};

export const OrderArrow = ({ sort }: OrderArrowProps) => {
  return (
    <Container>
      <ImageContainer top={"0"} left={"0"} right={"0"} bottom="0">
        <StyledImage
          draggable="false"
          src="/images/order-arrow.svg"
          fill
          alt="BG"
        />
      </ImageContainer>
      {sort === "ascending" ? (
        <Text>По возростанию</Text>
      ) : (
        <Text>По убыванию</Text>
      )}
    </Container>
  );
};
