import styled from "@emotion/styled";
import Image from "next/image";
import { useAppSelector } from "../redux";
import { selectCells, selectUITheme } from "../redux/reducers";
import { OrderCell } from "./OrderCell";

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

export const OrderPanel = () => {
  const cells = useAppSelector(selectCells);

  const theme = useAppSelector(selectUITheme);
  {
    /* TODO: radial-gradient doen't work properly */
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        gap: "4px",
        width: "888px",
        height: "222px",
        borderRadius: "50px",
      }}
    >
      <StyledImage
        draggable="false"
        priority
        src={`/images/themes/${theme}/order-panel.png`}
        fill
        alt="order panel"
      />
      {cells.map(({ id, value, elementId }) => (
        <OrderCell key={id} id={id} elementId={elementId} value={value} />
      ))}
    </div>
  );
};
// ["/images/themes/cookie/order-panel.png", ]
