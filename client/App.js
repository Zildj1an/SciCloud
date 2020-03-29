import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Home from "./src/Home.js";
import persist from "./src/Store.js";

const persistStore = persist();

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
