export declare const ICONS: {
    CLOSE: string;
    DRAG_HANDLE: string;
};
export declare type IconType = keyof typeof ICONS;
interface Props {
    name: string;
    size: number;
    color: string;
    backgroundColor?: string;
}
export declare function Icon(props: Props): JSX.Element;
export {};
