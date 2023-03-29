import { ReactNode } from "react";
import { IconType } from "../icon.component";
import "./card.scss";
interface Props {
    leftIcon?: IconType | JSX.Element;
    title: string;
    count?: number;
    children: ReactNode;
    className?: string;
    onCloseClick?: () => void;
}
export declare const Card: ({ title, count, leftIcon, className: cn, children, onCloseClick, }: Props) => JSX.Element;
export {};
