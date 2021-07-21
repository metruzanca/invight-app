import React, { useEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native";

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Persistor } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import { useLoadFonts } from "./hooks";

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
          <View>
            <Text>Open up App.tsx to start working on your app!</Text>
          </View>
      </PersistGate>
    </Provider>
  );
}