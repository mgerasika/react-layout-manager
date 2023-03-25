import classNames from "classnames";
import React, { ReactNode } from "react";
import { Icon, ICONS, IconType } from "../icon2";
import "./card.scss";

interface Props {
  leftIcon?: IconType | JSX.Element;
  title: string;
  count?: number;
  children: ReactNode;
  className?: string;
  onCloseClick?: () => void;
}
export const Card = ({
  title,
  count,
  leftIcon,
  className: cn,
  children,
  onCloseClick,
}: Props): JSX.Element => {
  const renderLeftIcon = (): JSX.Element | null => {
    if (!leftIcon) {
      return null;
    }
    if (typeof leftIcon === "string") {
      return (
        <div className="card-header-icon">
          <Icon name={ICONS[leftIcon]} color={"white"} size={16} />
        </div>
      );
    }
    return <div className="card-header-icon">{leftIcon}</div>;
  };

  return (
    <div className={classNames("card", cn)}>
      <div className="card-header">
        {renderLeftIcon()}
        <div className="card-title">
          {title}
          {count && <span className="count">{count}</span>}
        </div>
        <button
          className="card-btn-close no-style round"
          onClick={onCloseClick}
        >
          <Icon name={ICONS.CLOSE} color={"white"} size={16} />
        </button>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};
