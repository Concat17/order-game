import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
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
  range: Array<{ value: number; label?: string }>;
  onChange: (value: number) => void;
};

export const SteppedSlider = ({ range, onChange }: SteppedSliderProps) => {
  const labelStyles = {
    mt: "-50px",
    ml: "-2.5",
  };

  return (
    <Slider
      onChange={(v) => {
        onChange(range[v].value);
      }}
      defaultValue={0}
      min={0}
      max={range.length - 1}
      step={1}
    >
      {range.map((v, i) => (
        <SliderMark key={v.value} value={i} {...labelStyles}>
          <Text>{v.label ? v.label : v.value}</Text>
        </SliderMark>
      ))}

      <SliderTrack bg="#FFD748" height="21px" borderRadius={"10px"}>
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="#FFD748" />
      </SliderTrack>
      <SliderThumb boxSize={6} bg={"#104987"} />
    </Slider>
  );
};
