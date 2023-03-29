import { useCallback } from "react";
import { Card } from "../lib/card/card.component";
import { Icon, ICONS } from "../lib/icon.component";
import { LayoutContext } from "../lib/layout/layout-context.component";
import { ILayout, Layout } from "../lib/layout/layout.component";
import { useLayout } from "../lib/layout/layout.hook";

export const EXAMPLE_HORIZONTAL_LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        { viewName: "json" },
        { viewName: "code-editor" },
        { viewName: "console" },
      ],
    },
  ],
};

export function ExampleHorizontal(): JSX.Element {
  const layout = useLayout({
    allViewNames: ["json", "code-editor", "console"],
    defaultLayout: EXAMPLE_HORIZONTAL_LAYOUT,
  });
  const {
    rows,
    closeView,
    resetLayout,
    hiddenViews,
    dragInfo: activeView,
  } = layout;

  const handleCloseClick = useCallback(
    (view: string) => {
      closeView(view);
    },
    [closeView]
  );

  //   const handleResetLayout = useCallback(() => {
  //     resetLayout();
  //   }, [resetLayout]);

  return (
    <LayoutContext layout={layout}>
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
