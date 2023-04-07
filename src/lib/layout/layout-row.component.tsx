import { useDroppable } from "@dnd-kit/core";
import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { IDragInfo } from "../interfaces/drag-info.interface";
import { ILayoutCell } from "../interfaces/layout-cell.interface";
import { ILayoutRow } from "../interfaces/layout-row.interface";
import { IDoStartDragEventArgs } from "./layout-context.component";
import { RowSeparator } from "./layout-row-separator.component";
import "./layout.scss";

interface IProps {
  row: ILayoutRow;
  isLastRow: boolean;
  dragInfo: IDragInfo | undefined;
  nested: boolean;
  renderCells: (cells: ILayoutCell[], nested: boolean) => JSX.Element;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
export const LayoutRow = ({
  row,
  dragInfo,
  renderCells,
  nested,
  isLastRow,
  onDragStart,
}: IProps): JSX.Element => {
  const { setNodeRef } = useDroppable({
    id: JSON.stringify({ id: row[PRIVATE_SYMBOL]?.tempId }),
  });
  return (
    <div
      ref={setNodeRef}
      className="layout-row full-height"
      style={{
        height: row.height ? row.height + "%" : undefined,
        minHeight: row.height ? row.height + "%" : undefined,
        maxHeight: row.height ? row.height + "%" : undefined,
      }}
    >
      <div className="layout-cells">{renderCells(row.cells, nested)}</div>
      {!isLastRow && (
        <RowSeparator row={row} dragInfo={dragInfo} onDragStart={onDragStart} />
      )}
    </div>
  );
};
