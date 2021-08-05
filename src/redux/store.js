import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactReducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const contactsPersistConfig = {
  key: "contacts",
  storage: storage,
  whitelist: ["contacts"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, contactReducer),
  middleware,
  //   devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);

export default store;
