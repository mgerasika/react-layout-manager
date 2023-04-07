import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { ILayoutPrivateInfo } from "./layout-private-info.interface";
import { ILayoutRow } from "./layout-row.interface";

export interface ILayoutCell {
  [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
  viewName?: string;
  width?: number;
  rows?: ILayoutRow[];
}
