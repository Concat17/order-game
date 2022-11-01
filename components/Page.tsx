import styled from "@emotion/styled";
import Image from "next/image";

import { useAppSelector } from "../redux";
import { selectUITheme } from "../redux/reducers";
import { ImageContainer } from "../styles";

const StyledPage = styled.div`
  position: relative;
  height: 100vh;

  overflow: hidden;
`;

const BG = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => props.color};
`;

type PageProps = {
  children: JSX.Element;
};

const CookieBG = () => (
  <BG color={"#DEC6AA"}>
    <ImageContainer top={"0"} left={"0"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/cookie/left-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer top={"0"} right={"0"} width="400px" height="450px">
      <Image
        draggable="false"
        priority
        src="/images/themes/cookie/right-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>
  </BG>
);

const CoinBG = () => (
  <BG color={"#3A1F36"}>
    <ImageContainer top={"0"} left={"0"} width="400px" height="750px">
      <Image
        draggable="false"
        priority
        src="/images/themes/coin/left-bg.svg"
        fill
        alt="coin-bg-left"
      />
    </ImageContainer>
    <ImageContainer top={"0"} right={"0"} width="300px" height="550px">
      <Image
        draggable="false"
        priority
        src="/images/themes/coin/right-bg.svg"
        fill
        alt="coin-bg-right"
      />
    </ImageContainer>
  </BG>
);

const WinterBG = () => (
  <BG color={"#132738"}>
    <ImageContainer top={"0"} left={"0"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/winter/left-top-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer bottom={"0"} left={"0"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/winter/left-bottom-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer top={"0"} right={"0"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/winter/right-top-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer bottom={"0"} right={"0"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/winter/right-bottom-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>
  </BG>
);

const FlowerBG = () => (
  <BG color={"#2D3539"}>
    <ImageContainer top={"0"} left={"0"} transform={"translate(-20%, 0)}"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/flower/left-top-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer bottom={"0"} left={"0"} transform={"translate(-20%, 0)}"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/flower/left-bottom-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>

    <ImageContainer top={"0"} right={"0"} transform={"translate(20%, 0)}"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/flower/right-top-bg.svg"
        fill
        alt=""
      />
    </ImageContainer>
    <ImageContainer bottom={"0"} right={"0"} transform={"translate(30%, 0)}"}>
      <Image
        draggable="false"
        priority
        src="/images/themes/flower/right-bottom-bg.svg"
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
