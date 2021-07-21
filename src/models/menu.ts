import { createModel } from "@rematch/core";
import { RootModel } from "./index";
import { initialState, Menu } from "@store/menu";


export const menu = createModel<RootModel>()({
  state: initialState,
  reducers: {
    initMenu(state, payload: Menu) {
      return payload
    }
  },
  effects: dispatch => ({
    async loadQR(payload, state) {

    }
  })
})