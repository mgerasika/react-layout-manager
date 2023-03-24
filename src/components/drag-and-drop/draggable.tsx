import { useDraggable } from "@dnd-kit/core";
import classNames from "classnames";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { IDragInfo } from "../layout/layout.hook";

export type DraggableProps = ReturnType<typeof useDraggable>["listeners"] &
  ReturnType<typeof useDraggable>["attributes"] & {
    ref: ReturnType<typeof useDraggable>["setNodeRef"];
  };
interface Props {
  className?: string;
  info: IDragInfo;
  isCustomDragElement?: boolean;
  children: ReactNode;
  renderContent?: (props: DraggableProps) => ReactNode;
  onMove?: (props: { x: number; y: number }) => void;
  onDragStart?: (props: {
    info: IDragInfo;
    node: React.MutableRefObject<HTMLElement | null>;
  }) => void;
}
export function Draggable({
  info,
  isCustomDragElement,
  renderContent,
  children,
  className,
  onMove,
  onDragStart,
}: Props): JSX.Element {
  const refIsDragStarted = useRef(false);
  const { attributes, listeners, setNodeRef, transform, node } = useDraggable({
    id: JSON.stringify(info),
  });

  const isDragging = !!transform;
  const style = useMemo(
    () => (transform ? getStyle(isDragging, info.type, transform) : undefined),
    [isDragging, info, transform]
  );

  useEffect(() => {
    if (onMove && transform) {
      onMove(transform);
    }
  }, [transform, onMove]);

  useEffect(() => {
    if (!transform) {
      refIsDragStarted.current = false;
    }
  }, [transform]);

  useEffect(() => {
    if (isDragging && onDragStart && !refIsDragStarted.current) {
      let el: HTMLElement | null = node.current;
      while (el) {
        if (el.className.includes("draggable")) {
          onDragStart({ node: ({ current: el } as unknown) as any, info });

          refIsDragStarted.current = true;
          break;
        }
        el = el?.parentElement;
      }
    }
  }, [node, isDragging, onDragStart, info]);

  const draggableProps = useMemo<DraggableProps>((): DraggableProps => {
    return {
      ...listeners,
      ...attributes,
      ref: setNodeRef,
    } as DraggableProps;
  }, [listeners, attributes, setNodeRef]);

  const Child = useMemo(() => {
    return React.memo(
      function Content() {
        return <>{renderContent ? renderContent(draggableProps) : children}</>;
      },
      () => isDragging || false
    );
  }, [isDragging, children, renderContent, draggableProps]);

  return (
    <div
      className={classNames("draggable d-flex full-height", className)}
      style={{ ...style }}
      {...(isCustomDragElement ? {} : draggableProps)}
    >
      <Child />
    </div>
  );
}

const getStyle = (
  isDragging: boolean | undefined,
  type: IDragInfo["type"],
  transform: { x: number; y: number }
): React.CSSProperties => {
  switch (type) {
    case "move":
      return {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      };

    case "resize-cell":
      return {
        right: `${transform.x * -1}px`,
        zIndex: isDragging ? 999 : undefined,
      };

    case "resize-row":
      return {
        bottom: `${transform.y * -1}px`,
        zIndex: isDragging ? 999 : undefined,
      };
  }
  return {};
};
