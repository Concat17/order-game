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
} from "../redux/reducers";
import { useEffect } from "react";
import { Page } from "./Page";
import { EndGameModal } from "./EndGameModal";

export const Game = () => {
  const elements = useAppSelector(selectElements);
  const isWin = useAppSelector(selectIsWin);

  const dispatch = useAppDispatch();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;

    if (over) {
      console.log("put");
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
              justifyContent: "space-between",
              width: "100%",
              height: "300px",
              zIndex: 1,
            }}
          >
            {elements.map((props) => (
              <div
                key={props.id}
                style={{
                  position: "relative",
                  width: "150px",
                  height: "150px",
                  visibility: props.inCell ? "hidden" : "unset",
                }}
              >
                <OrderElement {...props} />
              </div>
            ))}
          </div>
          <OrderPanel />
        </div>
      </Page>
    </DndContext>
  );
};
