import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";
import React, {
  MutableRefObject,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Draggable, DraggableProps } from "../drag-and-drop/draggable";
import { Droppable } from "../drag-and-drop/droppable";
import { MultiDroppable } from "../drag-and-drop/multi-droppable";
import {
  IDoStartDragEventArgs,
  LayoutResultContext,
} from "./layout-context.component";
import { IDragInfo } from "./layout.hook";
import "./layout.scss";

export enum EViewName {
  Empty = "Empty",
  JSON = "JSON",
  Presenter = "Presenter",
  Deleted = "Deleted",
  Comments = "Comments",
  Questions = "Questions",
  Chat = "Chat",
}

export interface ILayout {
  rows: ILayoutRow[];
}
export const PRIVATE_SYMBOL = Symbol("PRIVATE_SYMBOL");
interface ILayoutPrivateInfo {
  tempId: string;
}
export interface ILayoutCell {
  [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
  viewName?: EViewName;
  width?: number;
  rows?: ILayoutRow[];
}

export interface ILayoutRow {
  [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
  cells: ILayoutCell[];
  height?: number;
}
interface Props {
  renderView: (props: {
    viewName: EViewName;
    draggableProps: DraggableProps;
  }) => JSX.Element;
}

export const Layout = ({ renderView }: Props): JSX.Element => {
  const {
    layout: { dragInfo: dragInfo, closeView, rows: layoutRows },
    doDragStart: doStartDrag,
  } = useContext(LayoutResultContext);
  const rows: ILayoutRow[] = useMemo(() => {
    return layoutRows.length
      ? layoutRows
      : [{ cells: [{ viewName: EViewName.Empty }] }];
  }, [layoutRows]);

  const notEmptyRows = useMemo(() => rows.filter((f) => f.cells.length > 0), [
    rows,
  ]);

  const renderCells = (cells: ILayoutCell[], nested = false): JSX.Element => {
    const result = cells.map((cell: ILayoutCell, index): JSX.Element | null => {
      return (
        <LayoutCell
          key={cell[PRIVATE_SYMBOL]?.tempId || index}
          cell={cell}
          renderCellContent={renderCellContent}
          nested={nested}
          onDragStart={handleDragStart}
          dragInfo={dragInfo}
          isLastCell={index + 1 === cells.length}
        />
      );
    });
    return <>{result}</>;
  };

  const handleDragStart = useCallback(
    ({
      node,
      info,
    }: {
      node: MutableRefObject<HTMLElement | null>;
      info: IDragInfo;
    }) => {
      if (node.current) {
        doStartDrag({ node, info });
      }
    },
    [doStartDrag]
  );

  const renderCellContent = (cell: ILayoutCell): JSX.Element => {
    if (cell.rows?.length) {
      return renderRows(cell.rows, true);
    }
    return renderViewComponent(cell.viewName as EViewName);
  };

  const renderRows = (rows: ILayoutRow[], nested = false): JSX.Element => {
    const result = rows.map((row, index) => {
      return (
        <LayoutRow
          key={row[PRIVATE_SYMBOL]?.tempId || index}
          row={row}
          renderCells={renderCells}
          nested={nested}
          onDragStart={handleDragStart}
          dragInfo={dragInfo}
          isLastRow={index + 1 === rows.length}
        />
      );
    });
    return <div className="layout-rows"> {result}</div>;
  };

  const renderViewComponent = (viewName: EViewName): JSX.Element => {
    return (
      <div key={viewName} className={classNames("layout-view")}>
        <LayoutView
          dragInfo={dragInfo}
          onCloseClick={closeView}
          viewName={viewName}
          renderContent={(draggableProps) =>
            renderView({ viewName, draggableProps })
          }
        />
      </div>
    );
  };
  return <div className="layout">{renderRows(notEmptyRows)}</div>;
};

interface ILayoutRowProps {
  row: ILayoutRow;
  isLastRow: boolean;
  dragInfo: IDragInfo | undefined;
  nested: boolean;
  renderCells: (cells: ILayoutCell[], nested: boolean) => JSX.Element;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
const LayoutRow = ({
  row,
  dragInfo,
  renderCells,
  nested,
  isLastRow,
  onDragStart,
}: ILayoutRowProps): JSX.Element => {
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

interface ILayoutCellProps {
  cell: ILayoutCell;
  isLastCell: boolean;
  dragInfo: IDragInfo | undefined;
  nested: boolean;
  renderCellContent: (cell: ILayoutCell) => JSX.Element;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
const LayoutCell = ({
  cell,
  dragInfo,
  nested,
  renderCellContent,
  isLastCell,
  onDragStart,
}: ILayoutCellProps): JSX.Element => {
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
interface IRowSeparatorProps {
  row: ILayoutRow;
  dragInfo: IDragInfo | undefined;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
const RowSeparator = ({
  row,
  dragInfo,
  onDragStart,
}: IRowSeparatorProps): JSX.Element => {
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

interface ICellSeparatorProps {
  cell: ILayoutCell;
  dragInfo: IDragInfo | undefined;
  onDragStart: (props: IDoStartDragEventArgs) => void;
}
const CellSeparator = ({
  cell,
  dragInfo,
  onDragStart,
}: ICellSeparatorProps): JSX.Element => {
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

interface ILayoutViewProps {
  viewName: EViewName;
  dragInfo: IDragInfo | undefined;
  onCloseClick: (viewName: EViewName) => void;
  renderContent: (draggableProps: DraggableProps) => JSX.Element;
}
const LayoutView = ({
  dragInfo,
  viewName,
  renderContent,
}: ILayoutViewProps): JSX.Element => {
  const isDragging = useMemo<boolean>(
    () => !!(dragInfo?.id && dragInfo.type === "move"),
    [dragInfo]
  );

  if (viewName === EViewName.Empty) {
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
