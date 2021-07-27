import { createModel } from "@rematch/core";
import { RootModel } from "./index";
import { initialState } from "@store/menu";
import { Mock, Menu } from "@lib/index";

// Not the best place for DI, but for now it will do
const api = new Mock()

export const menu = createModel<RootModel>()({
  state: initialState,
  reducers: {
    initMenu: (state, payload: Menu) => payload
  },
  effects: dispatch => ({
    async loadQR(payload: { id: string }, rootState) {
      const data = await api.getMenu(payload.id)
      dispatch.menu.initMenu(data)
    }
  })
})