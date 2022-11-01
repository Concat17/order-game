import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useAppSelector } from "../redux";
import { OrderElementType, selectUITheme } from "../redux/reducers";
import { Text } from "../styles";

const StyledImage = styled(Image)<{ align?: string }>`
  border: none;
  background-color: "transparent";
  transform: translate(0, 0);

  position: absolute;
`;

const ThreadContainer = styled.div`
  position: absolute;

  top: 0;
  transform: translate(20%, -90%);

  width: 30px;
  height: 40px;
`;

const StemContainer = styled.div`
  position: fixed;

  top: 750px;
  bottom: 0;
  left: 0;
  right: 0;
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
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150px",
        height: "150px",
        visibility: inCell ? "hidden" : "unset",
        alignSelf: align,
        ...style,
      }}
      {...listeners}
      {...attributes}
    >
      {theme === "winter" && (
        <ThreadContainer>
          <StyledImage
            priority
            src="/images/themes/winter/toy-thread.svg"
            fill
            alt=""
          />
        </ThreadContainer>
      )}

      <StyledImage priority src={imgPath} fill alt="" />
      <div style={{ zIndex: 10, color: "black" }}>{<Text>{value}</Text>}</div>
    </div>
  );
};
