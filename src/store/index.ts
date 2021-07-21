import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import persistPlugin, { getPersistor } from '@rematch/persist';
import loadingPlugin from '@rematch/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootModel, models } from '@models/index';

// Plugins
const persistConfig ={
  key: "root",
  version: 2,
  storage: AsyncStorage,
  blacklist: [],
}

const loadingConfig = {

}

const configureStore = () => {
  const store = init<RootModel>({
    models,
    redux: {
      middlewares: [],
    },
    plugins: [
      persistPlugin(persistConfig),
      loadingPlugin(loadingConfig),
    ],
  });

  const persistor = getPersistor();
  const { dispatch } = store;

  return { persistor, store, dispatch };
};


export default configureStore;

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;