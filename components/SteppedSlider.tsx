import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  SliderThumb,
  Flex,
  useSlider,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const Text = styled.span`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 44px;

  color: #423f45;
`;

type SteppedSliderProps = {
  range: Array<number>;
  onChange: (value: number) => void;
};

export const SteppedSlider = ({ range, onChange }: SteppedSliderProps) => {
  //TODO: fix align number labels
  return (
    <>
      <Flex justifyContent={"space-between"}>
        {range.map((v) => (
          <Text key={v}>{v}</Text>
        ))}
      </Flex>

      <Slider
        onChange={(v) => {
          onChange(range[v]);
        }}
        defaultValue={0}
        min={0}
        max={range.length - 1}
        step={1}
      >
        <SliderTrack bg="#FFD748" height="21px" borderRadius={"10px"}>
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="#FFD748" />
        </SliderTrack>
        <SliderThumb boxSize={6} bg={"#104987"} />
      </Slider>
    </>
  );
};
