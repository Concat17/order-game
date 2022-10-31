import { useDraggable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const StyledImage = styled(Image)<{ align: string }>`
  border: none;
  background-color: "transparent";
  transform: translate(0, 0);

  align-self: ${(props) => props.align};
`;

type ElementProps = {
  id: string;
  align: string;
};

export const Element = ({ id, align }: ElementProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable" + id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <StyledImage
        priority
        src="/images/cookie-element-1.png"
        width={150}
        height={150}
        align={align}
        alt=""
      />
    </div>
  );
};
