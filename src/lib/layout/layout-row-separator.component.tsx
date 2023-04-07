import classNames from "classnames";
import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { Draggable } from "../draggable/draggable.component";
import { IDragInfo } from "../interfaces/drag-info.interface";
import { ILayoutRow } from "../interfaces/layout-row.interface";
import { IDoStartDragEventArgs } from "./layout-context.component";

import "./layout.scss";

interface IProps {
  row: ILayoutRow;
  dragInfo: IDragInfo | undefined;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
export const RowSeparator = ({
  row,
  dragInfo,
  onDragStart,
}: IProps): JSX.Element => {
  const isDragging =
    dragInfo?.type === "resize-row" &&
    dragInfo.id === row[PRIVATE_SYMBOL]!.tempId;
  return (
    <Draggable
      info={{ id: row[PRIVATE_SYMBOL]!.tempId, type: "resize-row" }}
      className={classNames("layout-separator layout-separator-row", {
        dragging: isDragging,
      })}
      onDragStart={onDragStart}
      isCustomDragElement={true}
      renderContent={(draggableProps) => (
        <div style={{ width: "100%" }} {...draggableProps}></div>
      )}
    >
      {" "}
    </Draggable>
  );
};
