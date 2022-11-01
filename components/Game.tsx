import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { OrderElement } from "./OrderElement";
import { OrderPanel } from "./OrderPanel";
import { useAppDispatch, useAppSelector } from "../redux";
import {
  putElementToCell,
  restart,
  generateGame,
  selectElements,
  selectIsWin,
  selectSort,
} from "../redux/reducers";
import { useEffect, useMemo } from "react";
import { Page } from "./Page";
import { EndGameModal } from "./EndGameModal";
import { OrderArrow } from "./OrderArrow";

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

  useEffect(() => {
    dispatch(
      generateGame({
        count: 5,
        range: 9,
        sort: "descending",
      })
    );
  }, [dispatch]);

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
              justifyContent: "center",
              gap: "50px",
              width: "100%",
              height: "300px",
              zIndex: 1,
            }}
          >
            {elements.map((props, i) => (
              <OrderElement key={props.id} align={align[i]} {...props} />
            ))}
          </div>
          <div>
            <OrderArrow sort={sort} />
            <OrderPanel />
          </div>
        </div>
      </Page>
    </DndContext>
  );
};
