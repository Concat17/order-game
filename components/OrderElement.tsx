import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

import { useAppSelector } from "../redux";
import { OrderElementType, selectUITheme } from "../redux/reducers";
import { Text } from "../styles";

const ThreadContainer = styled.div`
  position: absolute;

  top: 0;
  transform: translate(20%, -90%);

  width: 30px;
  height: 40px;
`;

const StyledOrderElement = styled.div<{
  align: string;
  inCell?: boolean;
  transform?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;

  z-index: 2;

  align-self: ${(props) => props.align};
  visibility: ${(props) => (props.inCell ? "hidden" : "unset")};
  transform: ${(props) => (props.transform ? props.transform : "unset")};
`;

type OrderElementProps = OrderElementType & { align: string };

export const OrderElement = ({
  id,
  value,
  inCell,
  imgPath,
  align,
}: OrderElementProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const theme = useAppSelector(selectUITheme);

  return (
    <StyledOrderElement
      ref={setNodeRef}
      align={align}
      inCell={inCell}
      transform={
        transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined
      }
      {...listeners}
      {...attributes}
    >
      {theme === "winter" && (
        <ThreadContainer>
          <Image
            priority
            src="/images/themes/winter/toy-thread.svg"
            fill
            alt=""
          />
        </ThreadContainer>
      )}
      <Image priority src={imgPath} fill alt="" />

      <div style={{ zIndex: 10, color: "black" }}>{<Text>{value}</Text>}</div>
    </StyledOrderElement>
  );
};
