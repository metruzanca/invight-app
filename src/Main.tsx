import React, { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native";
import { NativeBaseProvider, Box } from 'native-base';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Persistor } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';

import { useLoadFonts } from "@hooks/index";
import { FormattedMessage } from "react-intl";
import { LangProvider } from "./lang/LangProvider";
import { Routes } from "./routes";

type Props = {
  store: Store
  persistor: Persistor
}

const Loading = () => (
  <View style={{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center'
  }}>
    <ActivityIndicator size="large" />
  </View>
);

export const Main: React.FC<Props> = ({
  store, persistor,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useLoadFonts().then(
      () => setLoading(false) 
    );
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LangProvider>
          <NativeBaseProvider>
            <Routes />
          </NativeBaseProvider>
        </LangProvider>
      </PersistGate>
    </Provider>
  );
}