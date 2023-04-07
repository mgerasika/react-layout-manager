import classNames from "classnames";
import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { Draggable } from "../draggable/draggable.component";
import { IDragInfo } from "../interfaces/drag-info.interface";
import { ILayoutCell } from "../interfaces/layout-cell.interface";
import { IDoStartDragEventArgs } from "./layout-context.component";
import "./layout.scss";

interface IProps {
  cell: ILayoutCell;
  dragInfo: IDragInfo | undefined;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
export const CellSeparator = ({
  cell,
  dragInfo,
  onDragStart,
}: IProps): JSX.Element => {
  const isDragging =
    dragInfo?.type === "resize-cell" &&
    dragInfo.id == cell[PRIVATE_SYMBOL]!.tempId;
  return (
    <Draggable
      className={classNames("layout-separator layout-separator-cell", {
        dragging: isDragging,
      })}
      onDragStart={onDragStart}
      info={{
        id: cell[PRIVATE_SYMBOL]!.tempId,
        type: "resize-cell",
        viewName: cell.viewName,
      }}
      isCustomDragElement={true}
      renderContent={(draggableProps) => (
        <div style={{ width: "100%" }} {...draggableProps}></div>
      )}
    >
      {" "}
    </Draggable>
  );
};
