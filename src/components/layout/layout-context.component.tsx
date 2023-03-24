import { DndContext, Modifier } from "@dnd-kit/core";
import { LayoutRectMap } from "@dnd-kit/core/dist/store";
import { LayoutRect } from "@dnd-kit/core/dist/types";
import React, { MutableRefObject, useMemo, useRef } from "react";
import { EDropArea } from "../drag-and-drop/multi-droppable";
import { EViewName } from "./layout.component";
import {
  IDragInfo,
  IDropInfo,
  ILayoutRect,
  ILayoutResult,
} from "./layout.hook";

interface Props {
  layout: ILayoutResult;
  children: JSX.Element;
}

export const LayoutContext = ({ layout, children }: Props): JSX.Element => {
  const { setDragInfo, moveView, resizeCell, resizeRow, dragInfo } = layout;
  const parentSizeRef = useRef<LayoutRect | undefined>();
  const currentSizeRef = useRef<LayoutRect | undefined>();
  const draggableElementRef = useRef<HTMLElement | null>();
  const layoutRectMapRef = useRef<LayoutRectMap | null>();

  const layoutContext = useMemo<ILayoutContext>((): ILayoutContext => {
    return {
      layout,
      doDragStart: ({ node, info }) => {
        draggableElementRef.current = node.current;

        //   if (el?.style) {
        //     el.style.border = "1px solid gold";
        //   }

        if (node.current && info.type === "resize-cell") {
          const parent = findParentByClassName(node.current, "layout-cells");
          if (parent) {
            parentSizeRef.current = {
              offsetLeft: parent?.offsetLeft || 0,
              offsetTop: parent?.offsetTop || 0,
              width: parent?.offsetWidth || 0,
              height: parent?.offsetHeight || 0,
            };
          }
        } else if (node.current && info.type === "resize-row") {
          const parent = findParentByClassName(node.current, "layout-rows");
          if (parent) {
            parentSizeRef.current = {
              offsetLeft: parent?.offsetLeft || 0,
              offsetTop: parent?.offsetTop || 0,
              width: parent?.offsetWidth || 0,
              height: parent?.offsetHeight || 0,
            };
          }
        }
      },
    };
  }, [layout]);

  const handleClear = () => {
    draggableElementRef.current = undefined;
    currentSizeRef.current = undefined;
    parentSizeRef.current = undefined;
    layoutRectMapRef.current = undefined;
    setDragInfo(undefined);
  };

  const getLayoutRectangles = (): ILayoutRect[] => {
    if (!layoutRectMapRef.current) {
      return [];
    }
    const keys = Array.from(layoutRectMapRef.current!.keys());
    return keys.map<ILayoutRect>(
      (key): ILayoutRect => {
        const rect = layoutRectMapRef.current!.get(key);

        const dropInfo = JSON.parse(key);
        return {
          info: dropInfo,
          rect: rect!,
        };
      }
    );
  };

  const modifier: Modifier = ({ transform, draggingNodeRect }) => {
    if (dragInfo) {
      if (parentSizeRef.current && draggingNodeRect) {
        if (dragInfo.type === "resize-cell") {
          // console.log({
          // 	parent: parentSizeRef.current,
          // 	right: draggingNodeRect.right,
          // 	draggingNodeRect,
          // 	containerNodeRect,
          // 	activeNodeRect,
          // 	transform,
          // });

          return {
            ...transform,
          };
        }
      }
    }
    return {
      ...transform,
    };
  };

  return (
    <DndContext
      modifiers={[modifier]}
      onDragStart={(e) => {
        setDragInfo(
          e.active.id ? (JSON.parse(e.active.id) as IDragInfo) : undefined
        );
      }}
      onDragMove={({ droppableRects }) => {
        layoutRectMapRef.current = droppableRects;
        currentSizeRef.current = {
          offsetLeft: draggableElementRef.current?.offsetLeft || 0,
          offsetTop: draggableElementRef.current?.offsetTop || 0,
          width: draggableElementRef.current?.offsetWidth || 0,
          height: draggableElementRef.current?.offsetHeight || 0,
        };
      }}
      onDragEnd={({ over, active, delta }) => {
        const dragInfo = JSON.parse(active.id) as IDragInfo;

        if (dragInfo.type === "resize-cell") {
          if (parentSizeRef.current && currentSizeRef.current) {
            resizeCell({
              info: dragInfo,
              parentRect: parentSizeRef.current,
              currentRect: currentSizeRef.current,
              layoutRectangles: getLayoutRectangles(),
              delta,
            });
          }
        } else if (
          dragInfo.type === "resize-row" &&
          parentSizeRef.current &&
          currentSizeRef.current
        ) {
          resizeRow({
            info: dragInfo,
            parentRect: parentSizeRef.current,
            currentRect: currentSizeRef.current,
            layoutRectangles: getLayoutRectangles(),
            delta,
          });
        }

        if (over?.id) {
          const dropInfo = JSON.parse(over.id) as IDropInfo;

          if (dragInfo.type === "move") {
            if (dropInfo.id === EViewName.Empty) {
              moveView(
                dragInfo.id as EViewName,
                EViewName.Empty,
                EDropArea.Top
              );
            } else {
              moveView(
                dragInfo.id as EViewName,
                dropInfo.id as EViewName,
                dropInfo.dropArea as EDropArea
              );
            }
          }
        }
        handleClear();
      }}
      onDragCancel={handleClear}
    >
      <LayoutResultContext.Provider value={layoutContext}>
        {children}
      </LayoutResultContext.Provider>
    </DndContext>
  );
};

interface ILayoutContext {
  layout: ILayoutResult;
  doDragStart: (props: {
    node: React.MutableRefObject<HTMLElement | null>;
    info: IDragInfo;
  }) => void;
}
export interface IDoStartDragEventArgs {
  node: MutableRefObject<HTMLElement | null>;
  info: IDragInfo;
}
export const LayoutResultContext = React.createContext<ILayoutContext>({
  layout: (undefined as unknown) as ILayoutResult,
  doDragStart: (props: IDoStartDragEventArgs) => {
    console.log(props);
  },
});

const findParentByClassName = (
  element: HTMLElement,
  className: string
): HTMLElement | undefined => {
  if (element.className.includes(className)) {
    return element;
  }
  if (element.parentNode) {
    return findParentByClassName(element.parentNode as HTMLElement, className);
  }
};
