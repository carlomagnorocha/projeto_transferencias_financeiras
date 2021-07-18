import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducers } from '../reducers/combineAllReducers.js';

 
const persistConfig = {
    key: 'root',
    storage,
}
 
const persistedReducer = persistReducer(persistConfig, Reducers)
 
function configureStore() {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

export default configureStore;