import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { OrderCellType } from "../redux/reducers";

import Image from "next/image";

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

type OrderCellProps = OrderCellType;

export const OrderCell = ({ id, value, elementId }: OrderCellProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: "9999px",
        width: "130px",
        height: "130px",
        background: "rgba(0, 0, 0, 0.06)",
        boxShadow: "inset 0px 4px 25px rgba(0, 0, 0, 0.25)",
      }}
    >
      {elementId && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledImage
            priority
            src="/images/cookie-element-1.png"
            fill
            alt=""
          />
          <div style={{ zIndex: 10, color: "black" }}>{value}</div>
        </div>
      )}
    </div>
  );
};
