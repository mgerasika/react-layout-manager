import { EDropArea } from "../enums/drop-area.enum";

export interface IDropInfo {
  id: string;
  dropArea?: EDropArea | undefined;
}
