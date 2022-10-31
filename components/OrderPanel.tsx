import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";
import { useAppSelector } from "../redux";
import { selectCells } from "../redux/reducers";
import { OrderCell } from "../redux/reducers";

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

type OrderCellProps = OrderCell;

const OrderCell = ({ id, elementId }: OrderCellProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        position: "relative",
        borderRadius: "9999px",
        width: "130px",
        height: "130px",
        background: "rgba(0, 0, 0, 0.06)",
        boxShadow: "inset 0px 4px 25px rgba(0, 0, 0, 0.25)",
      }}
    >
      {elementId && (
        <StyledImage priority src="/images/cookie-element-1.png" fill alt="" />
      )}
    </div>
  );
};

export const OrderPanel = () => {
  const cells = useAppSelector(selectCells);
  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        gap: "4px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: "white",
        width: "888px",
        height: "222px",
        borderRadius: "50px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        background:
          "radial-gradient(238.96% 238.96% at 50% 54.28%, #FAF9F9 0%, #C09F9B 100%) ",
      }}
    >
      <StyledImage
        draggable="false"
        priority
        src="/svg/cookie-texture.svg"
        fill
        alt=""
      />
      {cells.map(({ id, elementId }) => (
        <OrderCell key={id} id={id} elementId={elementId} />
      ))}
    </div>
  );
};
