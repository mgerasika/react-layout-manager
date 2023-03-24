import { useCallback } from "react";
import { Card } from "./card/card";
import { COLORS, Icon, ICONS } from "./icon2";
import { LayoutContext } from "./layout/layout-context.component";
import { EViewName, ILayoutRow, Layout } from "./layout/layout.component";
import { EXAMPLE_LAYOUT, useLayout } from "./layout/layout.hook";

export default function ModeratorPageContainer(): JSX.Element {
  const layout = useLayout({
    allViews: Object.values(EViewName).filter((f) => f !== EViewName.Empty),
    defaultLayout: EXAMPLE_LAYOUT,
  });
  const {
    rows,
    closeView,
    resetLayout,
    hiddenViews,
    dragInfo: activeView,
  } = layout;

  const handleCloseClick = useCallback(
    (view: EViewName) => {
      closeView(view);
    },
    [closeView]
  );

  const handleResetLayout = useCallback(() => {
    resetLayout();
  }, [resetLayout]);

  return (
    <LayoutContext layout={layout}>
      <Layout
        renderView={({ viewName, draggableProps }): JSX.Element => (
          <LayoutViewContent
            rows={rows}
            leftIcon={
              <div className="card-header-icon" {...draggableProps}>
                <Icon name={ICONS.DRAG_HANDLE} color={COLORS.WHITE} size={16} />
              </div>
            }
            viewName={viewName}
            isDragging={!!activeView}
            onCloseClick={handleCloseClick}
          />
        )}
      />
    </LayoutContext>
  );
}

interface LayoutViewContentProps {
  isDragging: boolean;
  viewName: EViewName;
  onCloseClick: (viewName: EViewName) => void;
  leftIcon: JSX.Element;
  rows: ILayoutRow[];
}
const LayoutViewContent = ({
  viewName,
  rows,
  onCloseClick,
  leftIcon,
}: LayoutViewContentProps): JSX.Element => {
  switch (viewName) {
    case EViewName.Chat:
      return (
        <Card
          leftIcon={leftIcon}
          title="Chat"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.Chat)}
        >
          Chat
        </Card>
      );
    case EViewName.Comments:
      return (
        <Card
          leftIcon={leftIcon}
          title="Comments"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.Comments)}
        >
          Comment
        </Card>
      );

    case EViewName.Questions:
      return (
        <Card
          leftIcon={leftIcon}
          title="Questions"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.Questions)}
        >
          Question
        </Card>
      );
    case EViewName.Deleted:
      return (
        <Card
          leftIcon={leftIcon}
          title="Deleted"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.Deleted)}
        >
          Delete
        </Card>
      );
    case EViewName.Presenter:
      return (
        <Card
          leftIcon={leftIcon}
          title="Presenter"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.Presenter)}
        >
          Presenter
        </Card>
      );
    case EViewName.JSON:
      return (
        <Card
          leftIcon={leftIcon}
          title="JSON"
          className="flex-grow-1"
          onCloseClick={() => onCloseClick(EViewName.JSON)}
        >
          <pre style={{ display: "block" }}>
            {JSON.stringify(rows || {}, null, 2)}
          </pre>
        </Card>
      );
  }
  return <></>;
};
