import { Coordinates, LayoutRect } from "@dnd-kit/core/dist/types";
import { EDropArea } from "../multi-droppable/multi-droppable.component";
import { ILayout, ILayoutRow } from "./layout.component";
interface IProps {
    allViewNames: string[];
    defaultLayout: ILayout;
}
export interface IDragInfo {
    id: string;
    viewName?: string;
    type: "move" | "resize-cell" | "resize-row";
}
export interface IDropInfo {
    id: string;
    dropArea?: EDropArea | undefined;
}
export interface ILayoutRect {
    info: IDropInfo;
    rect: LayoutRect;
}
export interface ILayoutResult {
    rows: ILayoutRow[];
    moveView: (fromView: string, toView: string, position: EDropArea) => void;
    closeView: (view: string) => void;
    resetLayout: () => void;
    hiddenViews: string[];
    dragInfo: IDragInfo | undefined;
    setDragInfo: (dragInfo: IDragInfo | undefined) => void;
    resizeCell: (props: {
        info: IDragInfo;
        delta: Coordinates;
        parentRect: LayoutRect;
        currentRect: LayoutRect;
        layoutRectangles: ILayoutRect[];
    }) => void;
    resizeRow: (props: {
        info: IDragInfo;
        delta: Coordinates;
        parentRect: LayoutRect;
        currentRect: LayoutRect;
        layoutRectangles: ILayoutRect[];
    }) => void;
}
export declare const useLayout: ({ defaultLayout, allViewNames: allViews, }: IProps) => ILayoutResult;
export {};
