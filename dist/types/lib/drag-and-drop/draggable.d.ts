import { useDraggable } from "@dnd-kit/core";
import React, { ReactNode } from "react";
import { IDragInfo } from "../layout/layout.hook";
export declare type DraggableProps = ReturnType<typeof useDraggable>["listeners"] & ReturnType<typeof useDraggable>["attributes"] & {
    ref: ReturnType<typeof useDraggable>["setNodeRef"];
};
interface Props {
    className?: string;
    info: IDragInfo;
    isCustomDragElement?: boolean;
    children?: ReactNode;
    renderContent?: (props: DraggableProps) => ReactNode;
    onMove?: (props: {
        x: number;
        y: number;
    }) => void;
    onDragStart?: (props: {
        info: IDragInfo;
        node: React.MutableRefObject<HTMLElement | null>;
    }) => void;
}
export declare function Draggable({ info, isCustomDragElement, renderContent, children, className, onMove, onDragStart, }: Props): JSX.Element;
export {};
