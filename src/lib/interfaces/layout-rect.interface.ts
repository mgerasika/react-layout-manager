import { LayoutRect } from "@dnd-kit/core";
import { IDropInfo } from "./drop-info.interface";

export interface ILayoutRect {
  info: IDropInfo;
  rect: LayoutRect;
}
