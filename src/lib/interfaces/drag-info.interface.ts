export interface IDragInfo {
  id: string;
  viewName?: string;
  type: "move" | "resize-cell" | "resize-row";
}
