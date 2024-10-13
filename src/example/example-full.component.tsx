import classNames from "classnames";
import { useCallback } from "react";
import { Card } from "../lib/card/card.component";
import { Draggable } from "../lib/draggable/draggable.component";
import { Icon, ICONS } from "../lib/icon.component";
import { ILayout } from "../lib/interfaces/layout.interface";
import { LayoutContext } from "../lib/layout/layout-context.component";
import { Layout } from "../lib/layout/layout.component";
import { useLayout } from "../lib/layout/layout.hook";

export const EViewName = {
  CodeEditor: "CodeEditor",
  Terminal: "Terminal",
  SolutionExplorer: "SolutionExplorer",
  Output: "Output",
};

const EXAMPLE_LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        { 
          width: 20,
          viewName: EViewName.SolutionExplorer },
        {
          rows: [
            {
              height:70,
              cells: [{ viewName: EViewName.CodeEditor, }],
            },
            {
             cells: [{
              rows: [
                { cells: [{ viewName: EViewName.Terminal, width: 80 },{ viewName: EViewName.Output }],
              }]
             }]
            },
          ],
        },
      ],
    },
  ],
};

export function ExampleFull(): JSX.Element {
  const layout = useLayout({
    allViewNames: Object.values(EViewName),
    defaultLayout: EXAMPLE_LAYOUT,
  });
  const { closeView, resetLayout, hiddenViews, dragInfo } = layout;

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
      <div style={{margin:'8px 8px 0px', gap:"8px", display:'flex'}}>
        <button onClick={handleResetLayout}>Reset layout</button>
          {hiddenViews.map((viewName) => (
            <Draggable
              key={viewName}
              info={{ id: viewName, type: "move" }}
              isCustomDragElement={true}
              renderContent={(draggableProps): JSX.Element => {
                return (
                  <div
                  style={{paddingTop:'3px',}}
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
              {/* {JSON.stringify(rows || {}, null, 2)} */}
            </pre>
          </Card>
        )}
      />
    </LayoutContext>
  );
}
