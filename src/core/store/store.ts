import {combineReducers, configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesSlice";
import paginationReducer from "./reducers/paginationSlice";
import authReducer from "./reducers/authSlice";
import modalReducer from "./reducers/modalSlice";
import searchReducer from "./reducers/searchSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  moviesReducer,
  paginationReducer,
  authReducer,
  modalReducer,
  searchReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
};

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];