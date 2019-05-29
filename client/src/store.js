import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

  const persistConfig = {
    key: 'root',
    storage
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
//const store = createStore(rootReducer, composeWithDevTools())

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
