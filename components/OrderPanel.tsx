import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

type ElementPlaceProps = {
  id: string;
};

const ElementPlace = ({ id }: ElementPlaceProps) => {
  const { setNodeRef } = useDroppable({
    id: "droppable" + id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        borderRadius: "9999px",
        width: "130px",
        height: "130px",
        background: "rgba(0, 0, 0, 0.06)",
        boxShadow: "inset 0px 4px 25px rgba(0, 0, 0, 0.25)",
      }}
    />
  );
};

export const OrderPanel = () => {
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
      <ElementPlace id={"1"} />
      <ElementPlace id={"2"} />
      <ElementPlace id={"3"} />
      <ElementPlace id={"4"} />
      <ElementPlace id={"5"} />
      <ElementPlace id={"6"} />
    </div>
  );
};
