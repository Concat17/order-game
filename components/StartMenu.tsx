import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

import { useAppDispatch } from "../redux";
import { generateGame } from "../redux/reducers";
import { SteppedSlider } from "./SteppedSlider";

const Page = styled.div`
  position: relative;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BG = styled.div<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;

  z-index: -1;

  top: ${(props) => (props.top ? props.top : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
`;

const Modal = styled.div`
  padding: 20px;

  height: 75%;
  width: 800px;

  border-radius: 40px;

  background: linear-gradient(#7f75f0, #101f32);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  padding: 30px 60px;

  height: 100%;

  border-radius: 40px;

  background: white;
`;

const Text = styled.span`
  margin-bottom: 16px;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  color: #423f45;
`;

const SwitchButton = styled.button<{ selected?: boolean }>`
  padding: 5px 20px;

  height: 45px;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;

  color: #423f45;

  opacity: ${(props) => (props.selected ? 1 : 0.5)};
  background: #ffd748;
  border-radius: 20px;
`;

const Button = styled.button`
  padding: 5px 60px;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;

  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &:hover {
    background: #2f9558;
  }
`;

const SliderContainer = styled.div<{ width?: string }>`
  text-align: center;

  width: ${(props) => (props.width ? props.width : "")};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 30px;
`;

const Gap = styled.div`
  margin-bottom: 50px;
`;

export const StartMenu = () => {
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(2);
  const [range, setRange] = useState(0);
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");

  return (
    <Page>
      <BG top={"0"} left={"0"} right={"0"} bottom="0">
        <Image
          draggable="false"
          src="/images/start-menu-bg.jpg"
          fill
          alt="BG"
        />
      </BG>

      <Modal>
        <ModalContent>
          <SliderContainer>
            <Gap>
              <Text>Кол-во предметов</Text>
            </Gap>

            <SteppedSlider
              range={[{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]}
              onChange={(n) => setCount(n)}
            />
          </SliderContainer>
          <SliderContainer width="100%">
            <Gap>
              <Text>Значения</Text>
            </Gap>
            <SteppedSlider
              range={[
                { value: 0, label: "A" },
                { value: 9 },
                { value: 19 },
                { value: 50 },
                { value: 99 },
                { value: 999 },
              ]}
              onChange={(n) => setRange(n)}
            />
          </SliderContainer>
          <Flex>
            <SwitchButton
              selected={order === "ascending"}
              onClick={() => setOrder("ascending")}
            >
              По возрастанию
            </SwitchButton>
            <SwitchButton
              selected={order === "descending"}
              onClick={() => setOrder("descending")}
            >
              По убыванию
            </SwitchButton>
          </Flex>

          <Button
            onClick={() =>
              dispatch(
                generateGame({
                  count: count,
                  range: range !== 0 ? range : undefined,
                  sort: order,
                })
              )
            }
          >
            Играть
          </Button>
        </ModalContent>
      </Modal>
    </Page>
  );
};
