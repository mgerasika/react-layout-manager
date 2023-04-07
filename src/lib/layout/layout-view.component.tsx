import {
  useMemo,
} from "react";
import { EMPTY_VIEW_NAME } from "../constants/empty-view.constant";
import { Draggable, DraggableProps } from "../draggable/draggable.component";
import { Droppable } from "../droppable/droppable.component";
import { IDragInfo } from "../interfaces/drag-info.interface";
import { MultiDroppable } from "../multi-droppable/multi-droppable.component";
import "./layout.scss";

interface IProps {
  viewName: string;
  dragInfo: IDragInfo | undefined;
  onCloseClick: (viewName: string) => void;
  renderContent: (draggableProps: DraggableProps) => JSX.Element;
}
export const LayoutView = ({
  dragInfo,
  viewName,
  renderContent,
}: IProps): JSX.Element => {
  const isDragging = useMemo<boolean>(
    () => !!(dragInfo?.id && dragInfo.type === "move"),
    [dragInfo]
  );

  if (viewName === EMPTY_VIEW_NAME) {
    return (
      <Droppable info={{ id: viewName }} isDragging={isDragging}></Droppable>
    );
  }

  return (
    <MultiDroppable id={viewName} isDragging={isDragging}>
      <Draggable
        info={{ id: viewName, type: "move" }}
        isCustomDragElement={true}
        renderContent={renderContent}
      >
        {" "}
      </Draggable>
    </MultiDroppable>
  );
};
