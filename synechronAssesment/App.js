/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/Containers/Navigations';
import {userOperation} from './src/redux/Reducers/UserReducer';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const rootReducer = combineReducers({
    userOperation: userOperation,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const applicationStore = createStore(persistedReducer);
  const persistorStore = persistStore(applicationStore);

  return (
    <Provider store={applicationStore}>
      <PersistGate loading={null} persistor={persistorStore}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
