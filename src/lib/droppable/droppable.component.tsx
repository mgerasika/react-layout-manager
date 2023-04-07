import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';
import { IDropInfo } from '../interfaces/drop-info.interface';

import './droppable.scss';

interface IProps {
	info: IDropInfo;
	children?: ReactNode;
	isDragging?: boolean;
}
export  function Droppable({info, children}: IProps): JSX.Element {
	const { isOver, setNodeRef } = useDroppable({
		id : JSON.stringify(info),
	});
	const style = {
		display: isOver ? 'block' : 'none',
	} as React.CSSProperties;

	return (
		<div className="droppable" ref={setNodeRef}>
			<div className="droppable-hover" style={style}></div>
			{children}
		</div>
		
	);
}
