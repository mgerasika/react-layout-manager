import classNames from "classnames";
import { MutableRefObject, useCallback, useContext, useMemo } from "react";
import { EMPTY_VIEW_NAME } from "../constants/empty-view.constant";
import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { DraggableProps } from "../draggable/draggable.component";
import { IDragInfo } from "../interfaces/drag-info.interface";
import { ILayoutCell } from "../interfaces/layout-cell.interface";
import { ILayoutRow } from "../interfaces/layout-row.interface";
import { LayoutCell } from "./layout-cell.component";
import { LayoutResultContext } from "./layout-context.component";
import { LayoutRow } from "./layout-row.component";
import { LayoutView } from "./layout-view.component";
import "./layout.scss";

interface IProps {
  renderView: (props: {
    viewName: string;
    draggableProps: DraggableProps;
  }) => JSX.Element;
}

export const Layout = ({ renderView }: IProps): JSX.Element => {
  const {
    layout: { dragInfo: dragInfo, closeView, rows: layoutRows },
    doDragStart: doStartDrag,
  } = useContext(LayoutResultContext);
  const rows: ILayoutRow[] = useMemo(() => {
    return layoutRows.length
      ? layoutRows
      : [{ cells: [{ viewName: EMPTY_VIEW_NAME }] }];
  }, [layoutRows]);

  const notEmptyRows = useMemo(
    () => rows.filter((f) => f.cells.length > 0),
    [rows]
  );

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
    return renderViewComponent(cell.viewName as string);
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

  const renderViewComponent = (viewName: string): JSX.Element => {
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
