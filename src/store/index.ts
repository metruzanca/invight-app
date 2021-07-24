import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import persistPlugin, { getPersistor } from '@rematch/persist';
import loadingPlugin from '@rematch/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootModel, models } from '@models/index';
import {
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from 'react-redux';

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

  return { persistor, store };
};


export default configureStore;

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export const useDispatch = () => reduxUseDispatch<Dispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => reduxUseSelector<RootState, TSelected>(selector);
