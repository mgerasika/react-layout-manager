import { ReactNode } from 'react';
import { IDropInfo } from '../layout/layout.hook';
import './droppable.scss';
interface Props {
    info: IDropInfo;
    children?: ReactNode;
    isDragging?: boolean;
}
export declare function Droppable({ info, children }: Props): JSX.Element;
export {};
