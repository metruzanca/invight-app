import { Models } from "@rematch/core";
import { menu } from "./menu";

export interface RootModel extends Models<RootModel> {
  menu: typeof menu;
}

export const models: RootModel = { menu };