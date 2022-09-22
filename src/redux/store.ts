import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

// Reducer imports go here
import appReducer from './slices/AppRedux';
import authReducer from './slices/AuthRedux';
import projectReducer from './slices/ProjectRedux';

// Persist config
const createPersistConfig = (key: string, blacklist?: string[]) => ({
	key,
	storage,
	blacklist,
});

const rootReducer = combineReducers({
	app: appReducer,
	auth: persistReducer(createPersistConfig('auth'), authReducer),
	project: projectReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
