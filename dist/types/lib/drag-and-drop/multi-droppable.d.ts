import './multi-droppable.scss';
export declare enum EDropArea {
    Top = "Top",
    Left = "Left",
    Right = "Right",
    Bottom = "Bottom"
}
interface Props {
    id: string;
    className?: string;
    isDragging?: boolean;
    children: JSX.Element;
}
export declare function MultiDroppable({ children, id, isDragging, }: Props): JSX.Element;
export {};
