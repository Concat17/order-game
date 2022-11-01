import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";

import { useAppSelector } from "../redux";
import { OrderCellType, selectElementById } from "../redux/reducers";
import { Text } from "../styles";

const OrderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 130px;
  height: 130px;
`;

const PositiveZIndex = styled.div`
  z-index: 50;
`;

const StyledOrderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 9999px;
  width: 130px;
  height: 130px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
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
    <>
      {element ? (
        <OrderElement>
          <Image priority src={element.imgPath} fill alt="" />
          <PositiveZIndex>
            <Text>{value}</Text>
          </PositiveZIndex>
        </OrderElement>
      ) : (
        <StyledOrderCell ref={setNodeRef} />
      )}
    </>
  );
};
