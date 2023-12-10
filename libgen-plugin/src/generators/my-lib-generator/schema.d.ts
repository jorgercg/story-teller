export interface MyLibGeneratorGeneratorSchema {
  name: string;
  directory: string;
  importPath?: string;
  standalone?: boolean;
  buildable?: boolean;
  publishable?: boolean;
  prefix?: string;
  style?: "css" | "scss" | "sass" | "less" | "none";
  flat?: boolean;
  addTailwind?: boolean;
  selector?: string;
}
