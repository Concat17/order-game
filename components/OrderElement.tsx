import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const StyledImage = styled(Image)<{ align?: string }>`
  border: none;
  background-color: "transparent";
  transform: translate(0, 0);
`;

type OrderElementProps = {
  id: string;
  align?: string;
};

export const OrderElement = ({ id, align }: OrderElementProps) => {
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
      style={{ width: "150px", height: "150px", ...style }}
      {...listeners}
      {...attributes}
    >
      <StyledImage priority src="/images/cookie-element-1.png" fill alt="" />
    </div>
  );
};
