import { UnitTestRunner } from "@nx/angular/generators";

export interface MySbHostGeneratorGeneratorSchema {
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
  skipTests?: boolean;
  unitTestRunner?: UnitTestRunner;
}
