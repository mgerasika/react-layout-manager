import { DraggableProps } from "../draggable/draggable.component";
import "./layout.scss";
export interface ILayout {
    rows: ILayoutRow[];
}
export declare const PRIVATE_SYMBOL: unique symbol;
interface ILayoutPrivateInfo {
    tempId: string;
}
export interface ILayoutCell {
    [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
    viewName?: string;
    width?: number;
    rows?: ILayoutRow[];
}
export interface ILayoutRow {
    [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
    cells: ILayoutCell[];
    height?: number;
}
interface Props {
    renderView: (props: {
        viewName: string;
        draggableProps: DraggableProps;
    }) => JSX.Element;
}
export declare const EMPTY_VIEW_NAME = "Empty";
export declare const Layout: ({ renderView }: Props) => JSX.Element;
export {};
