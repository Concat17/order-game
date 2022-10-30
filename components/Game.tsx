import styled from "@emotion/styled";
import Image from "next/image";

import { Element } from "./Element";
import { OrderPanel } from "./OrderPanel";

const Page = styled.div`
  position: relative;
  height: 100vh;
  color: turquoise;
  background-color: #dec6aa;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;
//TODO: make reponsive width and height
const ImageContainer = styled.div<{
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;

  width: ${(props) => (props.width ? props.width : "600px")};
  height: ${(props) => (props.height ? props.height : "600px")};
  top: ${(props) => (props.top ? props.top : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
`;

export const Game = () => {
  return (
    <Page>
      <ImageContainer top={"0"} left={"0"}>
        <StyledImage
          draggable="false"
          priority
          src="/images/cookie-left-bg.png"
          fill
          alt=""
        />
      </ImageContainer>
      <ImageContainer top={"0"} right={"0"} width="400px" height="450px">
        <StyledImage
          draggable="false"
          priority
          src="/images/cookie-right-bg.png"
          fill
          alt=""
        />
      </ImageContainer>
      {/* TODO: radial-gradient doen't work properly */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "100px",
          width: "fit-content",
          height: "100%",
          padding: "150px 50px 100px 50px",
          marginBottom: "100px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "300px",
            zIndex: 1,
          }}
        >
          <Element align={"center"} />
          <Element align={"start"} />
          <Element align={"end"} />
          <Element align={"start"} />
          <Element align={"center"} />
        </div>
        <OrderPanel />
      </div>
    </Page>
  );
};
