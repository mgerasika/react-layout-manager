import { PRIVATE_SYMBOL } from "../constants/private-symbol.constant";
import { ILayoutCell } from "./layout-cell.interface";
import { ILayoutPrivateInfo } from "./layout-private-info.interface";

export interface ILayoutRow {
  [PRIVATE_SYMBOL]?: ILayoutPrivateInfo;
  cells: ILayoutCell[];
  height?: number;
}
