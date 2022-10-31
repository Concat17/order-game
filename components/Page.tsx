import styled from "@emotion/styled";

import Image from "next/image";
import { useAppSelector } from "../redux";
import { selectUITheme } from "../redux/reducers";

const StyledPage = styled.div`
  position: relative;
  height: 100vh;
`;

const BG = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => props.color};
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

type PageProps = {
  children: JSX.Element;
};

const CookieBG = () => (
  <BG color={"#DEC6AA"}>
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
  </BG>
);

const CoinBG = () => (
  <BG color={"#3A1F36"}>
    <ImageContainer top={"0"} left={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/coin/left-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer top={"0"} right={"0"} width="400px" height="450px">
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/coin/right-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
  </BG>
);

const WinterBG = () => (
  <BG color={"#132738"}>
    <ImageContainer top={"0"} left={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/winter/left-top-bg.png"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer bottom={"0"} left={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/winter/left-bottom-bg.png"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer top={"0"} right={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/winter/right-top-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer bottom={"0"} right={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/winter/right-bottom-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
  </BG>
);

const FlowerBG = () => (
  <BG color={"#2D3539"}>
    <ImageContainer top={"0"} left={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/flower/left-top-bg.png"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer bottom={"0"} left={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/flower/left-bottom-bg.png"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer top={"0"} right={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/flower/right-top-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer bottom={"0"} right={"0"}>
      <StyledImage
        draggable="false"
        priority
        src="/images/themes/flower/right-bottom-bg.png"
        fill
        alt=""
      />
    </ImageContainer>
  </BG>
);

export const Page = ({ children }: PageProps) => {
  const theme = useAppSelector(selectUITheme);

  let BG = CookieBG;

  switch (theme) {
    case "coin":
      BG = CoinBG;
      break;
    case "cookie":
      BG = CookieBG;
      break;
    case "winter":
      BG = WinterBG;
      break;
    case "flower":
      BG = FlowerBG;
      break;
  }

  return (
    <StyledPage>
      <BG />
      {children}
    </StyledPage>
  );
};
