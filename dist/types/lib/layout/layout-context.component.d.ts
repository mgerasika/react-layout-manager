import React, { MutableRefObject, ReactNode } from "react";
import { IDragInfo, ILayoutResult } from "./layout.hook";
interface Props {
    layout: ILayoutResult;
    children: ReactNode;
}
export declare const LayoutContext: ({ layout, children }: Props) => JSX.Element;
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
export declare const LayoutResultContext: React.Context<ILayoutContext>;
export {};
