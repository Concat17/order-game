import styled from "@emotion/styled";
import Image from "next/image";

const StyledImage = styled(Image)`
  border: none;
  background-color: "transparent";
`;

type ElementProps = {
  align: string;
};

export const Element = ({ align }: ElementProps) => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        position: "relative",
        width: "150px",
        height: "150px",
        alignSelf: align,
      }}
    >
      <StyledImage
        draggable="true"
        priority
        src="/images/cookie-element-1.png"
        fill
        alt=""
      />
    </div>
  );
};
