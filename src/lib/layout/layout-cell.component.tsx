import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";
import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { ILayoutCell } from "../interfaces/layout-cell.interface";
import { CellSeparator } from "./layout-cell-separator.component";
import { IDoStartDragEventArgs } from "./layout-context.component";
import { IDragInfo } from "../interfaces/drag-info.interface";
import "./layout.scss";

interface IProps {
  cell: ILayoutCell;
  isLastCell: boolean;
  dragInfo: IDragInfo | undefined;
  nested: boolean;
  renderCellContent: (cell: ILayoutCell) => JSX.Element;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}

export const LayoutCell = ({
  cell,
  dragInfo,
  nested,
  renderCellContent,
  isLastCell,
  onDragStart,
}: IProps): JSX.Element => {
  const { setNodeRef } = useDroppable({
    id: JSON.stringify({ id: cell[PRIVATE_SYMBOL]?.tempId }),
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        flexBasis: cell.width ? cell.width + "%" : undefined,
        maxWidth: cell.width ? cell.width + "%" : undefined,
      }}
      className={classNames("layout-cell", {
        "root-level": !nested,
      })}
    >
      {renderCellContent(cell)}
      {!isLastCell && (
        <CellSeparator
          cell={cell}
          dragInfo={dragInfo}
          onDragStart={onDragStart}
        />
      )}
    </div>
  );
};
