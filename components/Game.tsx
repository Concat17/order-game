import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../redux";
import { putElementToCell, selectElements, selectIsWin, selectSort } from "../redux/reducers";
import { EndGameModal } from "./EndGameModal";
import { OrderArrow } from "./OrderArrow";
import { OrderElement } from "./OrderElement";
import { OrderPanel } from "./OrderPanel";
import { Page } from "./Page";

const GameField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 150px 50px 100px 50px;
  margin-bottom: 100px;
  margin: auto;
`;

const OrderElements = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 300px;
  z-index: 1;
`;

const generateAlign = (count: number) => {
  switch (count) {
    case 2:
      return ["center", "center"];
    case 3:
      return ["center", "start", "center"];
    case 4:
      return ["center", "start", "center", "start"];
    default:
      return ["center", "start", "end", "start", "center"];
  }
};

export const Game = () => {
  const elements = useAppSelector(selectElements);
  const isWin = useAppSelector(selectIsWin);
  const sort = useAppSelector(selectSort);

  const dispatch = useAppDispatch();

  const align = useMemo(
    () => generateAlign(elements.length),
    [elements.length]
  );

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;

    if (over) {
      dispatch(
        putElementToCell({
          cellId: over.id.toString(),
          elementId: active.id.toString(),
        })
      );
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      {isWin && <EndGameModal />}

      <Page>
        <GameField>
          <OrderElements>
            {elements.map((props, i) => (
              <OrderElement key={props.id} align={align[i]} {...props} />
            ))}
          </OrderElements>
          <div>
            <OrderArrow sort={sort} />
            <OrderPanel />
          </div>
        </GameField>
      </Page>
    </DndContext>
  );
};
