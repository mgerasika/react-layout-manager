import { Icon, ICONS } from "../lib/icon.component";
import { ILayout } from "../lib/interfaces/layout.interface";
import { LayoutContext } from "../lib/layout/layout-context.component";
import { Layout } from "../lib/layout/layout.component";
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

  return (
    <LayoutContext layout={layout}>
      <Layout
        renderView={({ draggableProps }): JSX.Element => (
          <div className="card-header-icon" {...draggableProps}>
            <Icon name={ICONS.DRAG_HANDLE} color={"white"} size={16} />
          </div>
        )}
      />
    </LayoutContext>
  );
}
