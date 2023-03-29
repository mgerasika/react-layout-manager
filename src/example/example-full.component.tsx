import classNames from "classnames";
import { useCallback } from "react";
import { Card } from "../lib/card/card.component";
import { Draggable } from "../lib/draggable/draggable.component";
import { Icon, ICONS } from "../lib/icon.component";
import { LayoutContext } from "../lib/layout/layout-context.component";
import { ILayout, Layout } from "../lib/layout/layout.component";
import { useLayout } from "../lib/layout/layout.hook";

export const EViewName = {
  JSON: "JSON",
  CodeEditor: "CodeEditor",
  Terminal: "Terminal",
  SolutionExplorer: "SolutionExplorer",
  Git: "Git",
  SQL: "SQL",
};

const EXAMPLE_LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        {
          width: 25,
          rows: [
            {
              height: 75,
              cells: [{ viewName: EViewName.SolutionExplorer }],
            },
            {
              cells: [
                { viewName: EViewName.CodeEditor },
                { viewName: EViewName.Terminal },
              ],
            },
          ],
        },
        {
          rows: [
            {
              cells: [{ viewName: EViewName.JSON }],
            },
            {
              cells: [{ viewName: EViewName.Git }],
            },
          ],
        },
        { viewName: EViewName.SQL },
      ],
    },
  ],
};

export function ExampleFull(): JSX.Element {
  const layout = useLayout({
    allViewNames: Object.values(EViewName),
    defaultLayout: EXAMPLE_LAYOUT,
  });
  const { rows, closeView, resetLayout, hiddenViews, dragInfo } = layout;

  const handleCloseClick = useCallback(
    (view: string) => {
      closeView(view);
    },
    [closeView]
  );

  const handleResetLayout = useCallback(() => {
    resetLayout();
  }, [resetLayout]);

  return (
    <LayoutContext layout={layout}>
      <div>
        <button onClick={handleResetLayout}>Reset layout</button>
        <div>
          {hiddenViews.map((viewName) => (
            <Draggable
              key={viewName}
              info={{ id: viewName, type: "move" }}
              isCustomDragElement={true}
              renderContent={(draggableProps): JSX.Element => {
                return (
                  <div
                    className={classNames("cursor-move d-flex", {
                      dragging: !!dragInfo,
                    })}
                    {...draggableProps}
                  >
                    <Icon name={ICONS.DRAG_HANDLE} color={"white"} size={16} />
                    <div className="card-title">{viewName}</div>
                  </div>
                );
              }}
            />
          ))}
        </div>
      </div>
      <Layout
        renderView={({ viewName, draggableProps }): JSX.Element => (
          <Card
            leftIcon={
              <div className="card-header-icon" {...draggableProps}>
                <Icon name={ICONS.DRAG_HANDLE} color={"white"} size={16} />
              </div>
            }
            title={viewName}
            className="flex-grow-1"
            onCloseClick={() => handleCloseClick(viewName)}
          >
            <pre style={{ display: "block" }}>
              {JSON.stringify(rows || {}, null, 2)}
            </pre>
          </Card>
        )}
      />
    </LayoutContext>
  );
}
