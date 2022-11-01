import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { OrderCellType, selectElementById } from "../redux/reducers";

import Image from "next/image";
import { useAppSelector } from "../redux";
import { Text } from "../styles";

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

type OrderCellProps = OrderCellType;

export const OrderCell = ({ id, value, elementId }: OrderCellProps) => {
  const element = useAppSelector((state) =>
    selectElementById(state, elementId ?? "")
  );

  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div>
      {element ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "130px",
            height: "130px",
          }}
        >
          <StyledImage
            priority
            // src="/images/cookie-element-1.png"
            src={element.imgPath}
            fill
            alt=""
          />
          <div style={{ zIndex: 10 }}>
            <Text>{value}</Text>
          </div>
        </div>
      ) : (
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
        />
      )}
    </div>
  );
};
