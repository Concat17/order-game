import styled from "@emotion/styled";
import Image from "next/image";

import { useAppSelector } from "../redux";
import { selectCells, selectUITheme } from "../redux/reducers";
import { OrderCell } from "./OrderCell";

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  width: 888px;
  height: 222px;
  border-radius: 50px;
`;

export const OrderPanel = () => {
  const cells = useAppSelector(selectCells);

  const theme = useAppSelector(selectUITheme);

  return (
    <Panel>
      <Image
        draggable="false"
        priority
        src={`/images/themes/${theme}/order-panel.png`}
        fill
        alt="order panel"
      />
      {cells.map(({ id, value, elementId }) => (
        <OrderCell key={id} id={id} elementId={elementId} value={value} />
      ))}
    </Panel>
  );
};
