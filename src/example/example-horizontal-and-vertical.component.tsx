import { useCallback } from "react";
import { Card } from "../lib/card/card.component";
import { Icon, ICONS } from "../lib/icon.component";
import { LayoutContext } from "../lib/layout/layout-context.component";
import { ILayout, Layout } from "../lib/layout/layout.component";
import { useLayout } from "../lib/layout/layout.hook";

export const EViewName = {
  JSON: "JSON",
  Presenter: "Presenter",
  Deleted: "Deleted",
  Comments: "Comments",
  Questions: "Questions",
  Chat: "Chat",
};

const EXAMPLE_LAYOUT: ILayout = {
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

export function ExampleHorizontalAndVertical(): JSX.Element {
  const layout = useLayout({
    allViewNames: Object.values(EViewName),
    defaultLayout: EXAMPLE_LAYOUT,
  });
  const { rows, closeView } = layout;

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
