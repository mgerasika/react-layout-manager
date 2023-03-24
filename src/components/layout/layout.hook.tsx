import { Coordinates, LayoutRect } from "@dnd-kit/core/dist/types";
import { useMemo, useState } from "react";
import { EDropArea } from "../drag-and-drop/multi-droppable";
import { generateUID } from "../generate-uid";
import {
  EViewName,
  ILayout,
  ILayoutCell,
  ILayoutRow,
  PRIVATE_SYMBOL,
} from "./layout.component";

interface IProps {
  allViews: EViewName[];
  defaultLayout: ILayout;
}

export interface IDragInfo {
  id: string;
  viewName?: EViewName;
  type: "move" | "resize-cell" | "resize-row";
}

export interface IDropInfo {
  id: string;
  dropArea?: EDropArea | undefined;
}

export interface ILayoutRect {
  info: IDropInfo;
  rect: LayoutRect;
}
export interface ILayoutResult {
  rows: ILayoutRow[];
  moveView: (from: EViewName, to: EViewName, position: EDropArea) => void;
  closeView: (view: EViewName) => void;
  resetLayout: () => void;
  hiddenViews: EViewName[];
  dragInfo: IDragInfo | undefined;
  setDragInfo: (dragInfo: IDragInfo | undefined) => void;
  resizeCell: (props: {
    info: IDragInfo;
    delta: Coordinates;
    parentRect: LayoutRect;
    currentRect: LayoutRect;
    layoutRectangles: ILayoutRect[];
  }) => void;
  resizeRow: (props: {
    info: IDragInfo;
    delta: Coordinates;
    parentRect: LayoutRect;
    currentRect: LayoutRect;
    layoutRectangles: ILayoutRect[];
  }) => void;
}

interface IFindViewResult {
  row: ILayoutRow;
  rows: ILayoutRow[];
  cell: ILayoutCell;
  rowIndex: number;
  cellIndex: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EXAMPLE_LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        {
          width: 50,
          rows: [
            {
              height: 50,
              cells: [{ viewName: EViewName.JSON }],
            },
            {
              cells: [
                { viewName: EViewName.Presenter },
                { viewName: EViewName.Deleted },
              ],
            },
          ],
        },
        {
          rows: [
            {
              cells: [{ viewName: EViewName.Comments }],
            },
            {
              cells: [{ viewName: EViewName.Questions }],
            },
          ],
        },
        { viewName: EViewName.Chat },
      ],
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EXAMPLE_VERTICAL_LAYOUT: ILayout = {
  rows: [
    {
      cells: [{ viewName: EViewName.JSON }],
    },
    {
      cells: [{ viewName: EViewName.Presenter }],
    },
    {
      cells: [{ viewName: EViewName.Deleted }],
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EXAMPLE_HORIZONTAL_LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        { viewName: EViewName.JSON },
        { viewName: EViewName.Presenter },
        { viewName: EViewName.Deleted },
      ],
    },
  ],
};

export const DEFAULT_LAYOUT = EXAMPLE_LAYOUT;
export const ALL_LAYOUT_VIEWS = Object.values(EViewName).filter(
  (f) => f !== EViewName.Empty
);

const MAX_PERCENTAGE = 90;
const MIN_PERCENTAGE = 10;
const MARGIN = 8;
export const useLayout = ({
  defaultLayout,
  allViews,
}: IProps): ILayoutResult => {
  const [rows, setRows] = useState<ILayoutRow[]>(
    normalizeLayout(JSON.parse(JSON.stringify(defaultLayout.rows)))
  );
  const [dragInfo, setDragInfo] = useState<IDragInfo | undefined>(undefined);

  return useMemo(() => {
    return {
      resizeCell: (props) => {
        const findResult = findByTempId(rows, props.info.id);
        const rectangles = props.layoutRectangles.filter((rectangle) =>
          findResult?.row.cells.some(
            (cell) => cell[PRIVATE_SYMBOL]?.tempId === rectangle.info.id
          )
        );
        //update width for all cells except next
        for (let i = 0, len = findResult?.row.cells.length || 0; i < len; ++i) {
          const cell = findResult!.row.cells[i];
          // don't update width for next cell - always reset next row (avoid problem with more than 100%)
          if (i === findResult!.cellIndex! + 1) {
            cell!.width = undefined;
          } else {
            //if not active cell already has width - don't recalculate
            if (cell !== findResult!.cell && cell.width) {
              continue;
            }
            const cellRect =
              cell == findResult?.cell
                ? props.currentRect
                : rectangles.find(
                    (rectangle) =>
                      rectangle.info.id === cell[PRIVATE_SYMBOL]?.tempId
                  )!.rect;
            const percentage =
              ((cellRect!.width + MARGIN) / props.parentRect.width) * 100;

            console.log("resize-cell", props, {
              cellRect,
              percentage,
              findResult,
              rectangles,
            });
            cell!.width = Math.max(
              Math.min(percentage, MAX_PERCENTAGE),
              MIN_PERCENTAGE
            );
          }
        }
      },
      resizeRow: (props) => {
        const findResult = findByTempId(rows, props.info.id);

        const rectangles = props.layoutRectangles.filter((rectangle) =>
          findResult?.rows.some(
            (row) => row[PRIVATE_SYMBOL]?.tempId === rectangle.info.id
          )
        );
        for (let i = 0, len = findResult?.rows.length || 0; i < len; ++i) {
          const row = findResult?.rows[i];

          // don't update height for next row - always reset next row  (avoid problem with more than 100%)
          if (i === findResult!.rowIndex + 1) {
            row!.height = undefined;
          } else {
            //if not active row already has height - don't recalculate
            if (row !== findResult!.row && row?.height) {
              continue;
            }
            const rowRect =
              row == findResult?.row
                ? props.currentRect
                : rectangles.find(
                    (rectangle) =>
                      rectangle.info.id === row?.[PRIVATE_SYMBOL]?.tempId
                  )!.rect;

            const percentage =
              ((rowRect.height + MARGIN) / props.parentRect.height) * 100;

            console.log("resize-row", props, {
              rowRect,
              percentage,
              findResult,
              rectangles,
            });
            row!.height = Math.max(
              Math.min(percentage, MAX_PERCENTAGE),
              MIN_PERCENTAGE
            );
          }
        }
      },
      rows: normalizeLayout(rows),

      hiddenViews: allViews.filter(
        (view) => findView(rows, view) === undefined
      ),

      moveView: (from: EViewName, to: EViewName, position: EDropArea) => {
        let newRows: ILayoutRow[] = cloneRows(rows);

        if (to === EViewName.Empty) {
          newRows.push({
            cells: [{ viewName: from }],
          });
        } else {
          const toView = findView(newRows, to);
          if (toView) {
            const fromView = findView(newRows, from);
            if (fromView) {
              fromView.row.cells = fromView.row.cells.filter(
                (cell) => cell.viewName !== from
              );
            }
            switch (position) {
              case EDropArea.Top: {
                if (toView.row.cells.length > 1) {
                  toView.row.cells = toView.row.cells.map((c) => {
                    if (c === toView.cell) {
                      return {
                        viewName: undefined,
                        rows: [
                          {
                            cells: [
                              {
                                viewName: from,
                              },
                            ],
                          },
                          {
                            cells: [
                              {
                                viewName: to,
                              },
                            ],
                          },
                        ],
                      };
                    }
                    return c;
                  });
                } else {
                  toView.rows.splice(toView.rowIndex, 0, {
                    cells: [{ viewName: from }],
                  });
                }
                break;
              }
              case EDropArea.Bottom: {
                if (toView.row.cells.length > 1) {
                  toView.row.cells = toView.row.cells.map((c) => {
                    if (c === toView.cell) {
                      return {
                        viewName: undefined,
                        rows: [
                          {
                            cells: [
                              {
                                viewName: to,
                              },
                            ],
                          },
                          {
                            cells: [
                              {
                                viewName: from,
                              },
                            ],
                          },
                        ],
                      };
                    }
                    return c;
                  });
                } else {
                  toView.rows.splice(toView.rowIndex + 1, 0, {
                    cells: [{ viewName: from }],
                  });
                }
                break;
              }
              case EDropArea.Left:
                toView.row.cells.splice(toView.cellIndex, 0, {
                  viewName: from,
                });
                break;
              case EDropArea.Right:
                toView.row.cells.splice(toView.cellIndex + 1, 0, {
                  viewName: from,
                });
                break;
            }
          }
        }
        newRows = normalizeLayout(newRows);
        setRows(newRows);
      },
      closeView: (view: EViewName) => {
        let newRows = cloneRows(rows);
        const result = findView(newRows, view);
        if (result) {
          result.row.cells = result.row.cells.filter(
            (cell) => cell.viewName !== view
          );
          newRows = normalizeLayout(newRows);
          setRows(newRows);
        }
      },
      resetLayout: () => {
        let newRows = cloneRows(defaultLayout.rows);
        newRows = normalizeLayout(newRows);
        setRows(newRows);
      },
      dragInfo,
      setDragInfo,
    };
  }, [rows, defaultLayout, allViews, dragInfo]);
};

// helper functions
const cloneRows = (layout: ILayoutRow[]): ILayoutRow[] =>
  JSON.parse(JSON.stringify(layout));

const findViewInCells = ({
  rows,
  row,
  rowIndex,
  view,
}: {
  rows: ILayoutRow[];
  row: ILayoutRow;
  rowIndex: number;
  view: EViewName;
}): IFindViewResult | undefined => {
  let result = undefined;
  for (
    let cellIndex = 0, len = row.cells.length;
    cellIndex < len;
    ++cellIndex
  ) {
    const cell = row.cells[cellIndex];
    if (cell.viewName === view) {
      result = {
        rows,
        row,
        cell,
        rowIndex,
        cellIndex,
      } as IFindViewResult;
      break;
    } else {
      result = findView(cell.rows || [], view);
    }
    if (result) {
      break;
    }
  }
  return result;
};

const findView = (
  rows: ILayoutRow[],
  view: EViewName
): IFindViewResult | undefined => {
  let result = undefined;
  for (let rowIndex = 0, len = rows.length; rowIndex < len; ++rowIndex) {
    const row = rows[rowIndex];
    result = findViewInCells({ rows, row, rowIndex, view });
    if (result) {
      break;
    }
  }
  return result;
};

const normalizeLayout = (rows: ILayoutRow[]): ILayoutRow[] => {
  let result = removeExtraRowsAndEmptyCells(rows);
  result = removeWidthAndHeight(result);
  return result;
};

const removeExtraRowsAndEmptyCells = (rows: ILayoutRow[]): ILayoutRow[] => {
  const result: ILayoutRow[] = [];
  rows.forEach((row) => {
    const temp = removeExtraRowsAndEmptyCellsInternal({ row, rows }).filter(
      (f) => f
    );
    result.push(...temp);
  });
  return result;
};

const removeWidthAndHeight = (rows: ILayoutRow[]): ILayoutRow[] => {
  const result: ILayoutRow[] = [];
  rows.forEach((row) => {
    const temp = removeWidthAndHeightInternal({ row, rows }).filter((f) => f);
    result.push(...temp);
  });
  return result;
};

const removeExtraRowsAndEmptyCellsInternal = ({
  row,
  rows,
}: {
  row: ILayoutRow;
  rows: ILayoutRow[];
}): ILayoutRow[] => {
  if (!row.cells || row.cells.length === 0) {
    return [];
  }

  let currentRow: ILayoutRow = { ...row };
  if (!currentRow[PRIVATE_SYMBOL]) {
    currentRow[PRIVATE_SYMBOL] = {
      tempId: generateUID(),
    };
  }

  // move row from child to parent (remove extra row)
  if (
    rows?.length === 1 &&
    currentRow.cells.length === 1 &&
    !currentRow.cells[0].viewName &&
    currentRow.cells[0].rows?.length
  ) {
    return removeExtraRowsAndEmptyCells(currentRow.cells[0].rows!);
  }

  // TODO investigate more simple algorithm
  for (let i = 0; i < currentRow.cells?.length; ++i) {
    const childCell = currentRow.cells[i];
    if (!childCell[PRIVATE_SYMBOL]) {
      childCell[PRIVATE_SYMBOL] = {
        tempId: childCell.viewName
          ? childCell.viewName + "temp-id"
          : generateUID(),
      };
    }

    //call recursive same function
    if (childCell.rows?.length) {
      childCell.rows = removeExtraRowsAndEmptyCells(childCell.rows);
    }

    //move cell from child to parent
    if (childCell.rows?.length == 1 && childCell.rows[0].cells?.length === 1) {
      currentRow.cells[i] = childCell.rows[0].cells[0];
      i = -1;
      continue;
    }

    // move row from child to parent
    if (currentRow.cells.length === 1 && childCell.rows?.length === 1) {
      const [childRow] = childCell.rows;
      currentRow = childRow;
      i = -1;
      continue;
    }

    // remove empty cell
    if (childCell.rows?.length === 0 && childCell.viewName === undefined) {
      currentRow.cells = currentRow.cells.filter((f) => f !== childCell);
      i = -1;
      continue;
    }
  }

  return [currentRow];
};

const removeWidthAndHeightInternal = ({
  row,
  rows,
}: {
  row: ILayoutRow;
  rows: ILayoutRow[];
}): ILayoutRow[] => {
  if (!row.cells || row.cells.length === 0) {
    return [];
  }

  const currentRow: ILayoutRow = { ...row };

  // TODO investigate more simple algorithm
  for (let i = 0; i < currentRow.cells?.length; ++i) {
    const childCell = currentRow.cells[i];

    //call recursive same function
    if (childCell.rows?.length) {
      childCell.rows = removeWidthAndHeight(childCell.rows);
    }

    // remove width if only one cell
    if (childCell.width !== undefined && currentRow.cells.length === 1) {
      childCell.width = undefined;
    }
  }

  // remove height if only one row
  if (currentRow?.height !== undefined && rows?.length === 1) {
    currentRow.height = undefined;
  }

  // remove last width if all other cells has any width
  const allCellsHasWidth =
    currentRow.cells.filter((f) => f.width).length === currentRow.cells.length;
  if (allCellsHasWidth && currentRow.cells.length > 0) {
    currentRow.cells[currentRow.cells.length - 1].width = undefined;
  }
  // remove last height if all another rows has any height
  const allRowsHasHeight = rows.filter((f) => f.height).length === rows.length;
  if (allRowsHasHeight && rows.length > 0) {
    rows[rows.length - 1].height = undefined;
  }

  return [currentRow];
};

const findByTempId = (
  rows: ILayoutRow[],
  tempId: string
):
  | {
      row: ILayoutRow;
      rows: ILayoutRow[];
      rowIndex: number;
      cellIndex?: number;
      cell?: ILayoutCell;
    }
  | undefined => {
  let result: ReturnType<typeof findByTempId> = undefined;
  rows.some((row, rowIndex) => {
    if (row[PRIVATE_SYMBOL]?.tempId === tempId) {
      result = {
        rowIndex,
        row,
        rows,
      };
      return row;
    }
    if (row.cells?.length) {
      row.cells.some((cell, cellIndex) => {
        if (cell[PRIVATE_SYMBOL]?.tempId === tempId) {
          result = {
            row,
            rows,
            rowIndex,
            cell,
            cellIndex,
          };
          return result;
        }
        if (cell.rows) {
          result = findByTempId(cell.rows, tempId);
          return result;
        }
      });
    }
  });
  return result;
};
