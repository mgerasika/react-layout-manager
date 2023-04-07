import { Droppable } from "../droppable/droppable.component";
import { EDropArea } from "../enums/drop-area.enum";
import "./multi-droppable.scss";


interface IProps {
  id: string;
  className?: string;
  isDragging?: boolean;
  children: JSX.Element;
}
export function MultiDroppable({
  children,
  id,
  isDragging,
}: IProps): JSX.Element {
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
      <div className="full-height" style={{ opacity: isDragging ? 0.5 : 1 }}>
        {children}
      </div>
    </div>
  );
}
