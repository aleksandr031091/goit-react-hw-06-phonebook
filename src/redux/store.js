import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactReducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage: storage,
  whitelist: ["contacts"],
};

const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, contactReducer),
  //   devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);

export default store;
