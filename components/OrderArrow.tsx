import styled from "@emotion/styled";
import Image from "next/image";

import { Text } from "../styles";

const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding-left: 10px;

  height: 100px;
  width: 400px;
`;

const ArrowContainer = styled.div<{
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
      <ArrowContainer top={"0"} left={"0"} right={"0"} bottom="0">
        <Image
          draggable="false"
          src="/images/order-arrow.svg"
          fill
          alt="Order arrow"
        />
      </ArrowContainer>
      {sort === "ascending" ? (
        <Text>По возростанию</Text>
      ) : (
        <Text>По убыванию</Text>
      )}
    </Container>
  );
};
