import React from 'react';
import classNames from 'classnames';

import { TIconName, TIconPosition, TIconSize } from './icon.types';

import './icon.scss';

interface IIconProps {
    name: TIconName;
    size?: TIconSize;
    color?: string;
    position?: TIconPosition;
    className?: string;
    children?: React.ReactNode;
}

export function EIcon({ name, size, position, className, children, color }: IIconProps): JSX.Element {

    return (<span
        className={classNames(className, {
            [`ev-icon-${name}`]: true,
            [`icon-${size}`]: typeof size !== 'number',
            [`icon-${position}`]: !!position,
            [`icon-${color}`]: !!color,
        })}
        style={{ fontSize: typeof size === 'number' ? `${size}px` : undefined }}
    >
        {children}
    </span>);
}

EIcon.defaultProps = {
    size: 'medium',
};
