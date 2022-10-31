import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { OrderElementType } from "../redux/reducers";

const StyledImage = styled(Image)<{ align?: string }>`
  border: none;
  background-color: "transparent";
  transform: translate(0, 0);
`;

type OrderElementProps = OrderElementType;

export const OrderElement = ({ id, value, imgPath }: OrderElementProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150px",
        height: "150px",
        ...style,
      }}
      {...listeners}
      {...attributes}
    >
      <StyledImage priority src={imgPath} fill alt="" />
      <div style={{ zIndex: 10, color: "black" }}>{value}</div>
    </div>
  );
};
