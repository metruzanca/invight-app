// import { registerRootComponent } from 'expo';
import React from 'react';
import { Main } from './src/Main';
import configureStore from '@store/index';

const { persistor, store } = configureStore();

export default () => <Main store={store} persistor={persistor} />;
// IDK if this is necessary
// registerRootComponent(App);