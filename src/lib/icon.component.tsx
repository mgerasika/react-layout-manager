import React, { useMemo } from "react";
import { ReactComponent as Close } from "./icon/icon-close.svg";
import { ReactComponent as DragHandle } from "./icon/icon-drag-handle.svg";

export const ICONS = {
  CLOSE: "CLOSE",
  DRAG_HANDLE: "DRAG_HANDLE",
};

export type IconType = keyof typeof ICONS;

interface Props {
  name: string;
  size: number;
  color: string;
  backgroundColor?: string;
}

export function Icon(props: Props): JSX.Element {
  const { name, size, color, backgroundColor = "transparent" } = props;

  return useMemo(() => {
    switch (name) {
      case ICONS.CLOSE:
        return (
          <Close
            id="icon-close"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );

      case ICONS.DRAG_HANDLE:
        return (
          <DragHandle
            id="icon-drag-handle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );

      default:
        return <></>;
    }
  }, [name, size, color, backgroundColor]);
}
