import styled from "@emotion/styled";

const Title = styled.span`
  position: relative;
`;

const OuterTitleText = styled.span`
  margin-bottom: 16px;

  font-family: Circe Rounded;
  font-style: normal;
  font-weight: bold;
  font-size: 128px;
  line-height: 163px;

  color: transparent;

  text-shadow: 0 0 50px #1e813a, 0 0 25px #1e813a, 0 0 10px #1e813a,
    0 0 10px #1e813a, 0 0 10px #1e813a;
`;

const InnerTitleText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 16px;

  font-family: "Circe Rounded";
  font-style: normal;
  font-weight: bold;
  font-size: 128px;
  line-height: 163px;

  background: -webkit-linear-gradient(#fff9d8 8.65%, #ffe44f 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

type EndGameModalTitleProps = {
  text: string;
};

export const EndGameModalTitle = ({ text }: EndGameModalTitleProps) => {
  return (
    <Title>
      <OuterTitleText>{text}</OuterTitleText>
      <InnerTitleText>{text}</InnerTitleText>
    </Title>
  );
};
