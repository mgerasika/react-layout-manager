import { useCallback } from "react";
import { Card } from "./card/card";
import { Icon, ICONS } from "./icon2";
import { LayoutContext } from "./layout/layout-context.component";
import { ILayout, Layout } from "./layout/layout.component";
import { useLayout } from "./layout/layout.hook";

const EXAMPLE_VERTICAL_LAYOUT: ILayout = {
  rows: [
    {
      cells: [{ viewName: "json" }],
    },
    {
      cells: [{ viewName: "code-editor" }],
    },
    {
      cells: [{ viewName: "console" }],
    },
  ],
};

export function ExampleVertical(): JSX.Element {
  const layout = useLayout({
    allViewNames: ["json", "code-editor", "console"],
    defaultLayout: EXAMPLE_VERTICAL_LAYOUT,
  });
  const { rows, closeView, resetLayout } = layout;

  const handleCloseClick = useCallback(
    (view: string) => {
      closeView(view);
    },
    [closeView]
  );

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
