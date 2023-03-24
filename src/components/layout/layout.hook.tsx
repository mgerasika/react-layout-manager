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

export const LAYOUT: ILayout = {
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
      cells: [{ viewName: EViewName.JSON }, { viewName: EViewName.Presenter }],
    },
  ],
};

const MAX_PERCENTAGE = 80;
const MIN_PERCENTAGE = 20;
export const useLayout = ({
  defaultLayout,
  allViews,
}: IProps): ILayoutResult => {
  const [rows, setRows] = useState<ILayoutRow[]>(
    JSON.parse(JSON.stringify(defaultLayout.rows))
  );
  const [dragInfo, setDragInfo] = useState<IDragInfo | undefined>(undefined);

  return useMemo(() => {
    return {
      resizeCell: (props) => {
        const findResult = findView(rows, props.info.viewName!);
        const percentage =
          (props.currentRect.width / props.parentRect.width) * 100;

        const rectangles = props.layoutRectangles.filter((rectangle) =>
          findResult?.row.cells.some(
            (cell) => cell[PRIVATE_SYMBOL]?.tempId === rectangle.info.id
          )
        );
        console.log(
          "resizeCell",
          props,
          percentage,
          findResult?.cell,
          rectangles
        );
        if (findResult?.cell) {
          findResult.cell.width = Math.max(
            Math.min(percentage, MAX_PERCENTAGE),
            MIN_PERCENTAGE
          );
        }
      },
      resizeRow: (props) => {
        const findResult = findRowByTempId(rows, props.info.id);
        const percentage =
          (props.currentRect.height / props.parentRect.height) * 100;

        const rectangles = props.layoutRectangles.filter((rectangle) =>
          findResult?.rows.some(
            (row) => row[PRIVATE_SYMBOL]?.tempId === rectangle.info.id
          )
        );
        console.log("resizeRow", props, percentage, findResult, rectangles);
        if (findResult) {
          findResult.row.height = Math.max(
            Math.min(percentage, MAX_PERCENTAGE),
            MIN_PERCENTAGE
          );
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
  const result: ILayoutRow[] = [];
  rows.forEach((row) => {
    const temp = removeExtraRowsAndEmptyCells({ row, rows }).filter((f) => f);
    result.push(...temp);
  });
  return result;
};

const removeExtraRowsAndEmptyCells = ({
  row,
  rows,
}: {
  row: ILayoutRow;
  rows: ILayoutRow[] | undefined;
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
    return normalizeLayout(currentRow.cells[0].rows!);
  }

  // remove height if only one row
  if (currentRow?.height !== undefined && rows?.length === 1) {
    currentRow.height = undefined;
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

    //move cell from child to parent
    if (childCell.rows?.length == 1 && childCell.rows[0].cells?.length === 1) {
      currentRow.cells[i] = childCell.rows[0].cells[0];
      i = -1;
      continue;
    }

    //call recursive same function
    if (childCell.rows?.length) {
      childCell.rows = normalizeLayout(childCell.rows);
    }
    // move row from child to parent
    if (currentRow.cells.length === 1 && childCell.rows?.length === 1) {
      const [childRow] = childCell.rows;
      currentRow = childRow;
      i = -1;
      continue;
    }
    // remove width if only one cell
    if (childCell.width !== undefined && currentRow.cells.length === 1) {
      childCell.width = undefined;
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

const findRowByTempId = (
  rows: ILayoutRow[],
  tempId: string
): { row: ILayoutRow; rows: ILayoutRow[] } | undefined => {
  let result: ReturnType<typeof findRowByTempId> = undefined;
  rows.some((row) => {
    if (row[PRIVATE_SYMBOL]?.tempId === tempId) {
      result = {
        row,
        rows,
      };
      return row;
    }
    if (row.cells?.length) {
      row.cells.some((cell) => {
        if (cell.rows) {
          result = findRowByTempId(cell.rows, tempId);
          return result;
        }
      });
    }
  });
  return result;
};
