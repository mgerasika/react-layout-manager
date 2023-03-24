
import { Droppable } from './droppable';
import './multi-droppable.scss';

export enum EDropArea {
	Top = 'Top',
	Left = 'Left',
	Right = 'Right',
	Bottom = 'Bottom',
}
interface Props {
	id: string;
	className?: string;
	isDragging?: boolean;
	children: JSX.Element;
}
export  function MultiDroppable({
	children,
	id,
	isDragging,
}: Props): JSX.Element {
	return (
		<div className="full-height relative">
			{isDragging && (
				<div className="multi-droppable">
					<div className="multi-droppable-sector top">
						<Droppable
							info={{ id: id, dropArea: EDropArea.Top }}
							isDragging={isDragging}
						/>
					</div>
					<div className="d-flex multi-droppable-sector central">
						<Droppable
							info={{ id: id, dropArea: EDropArea.Left }}
							isDragging={isDragging}
						/>
						<Droppable
							info={{ id: id, dropArea: EDropArea.Right }}
							isDragging={isDragging}
						/>
					</div>

					<div className="multi-droppable-sector bottom">
						<Droppable
							info={{ id: id, dropArea: EDropArea.Bottom }}
							isDragging={isDragging}
						/>
					</div>
				</div>
			)}
			<div
				className="full-height"
				style={{ opacity: isDragging ? 0.5 : 1 }}
			>
				{children}
			</div>
		</div>
	);
}
