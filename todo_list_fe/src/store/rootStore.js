import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../todoListScreen/reducers'

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState ,
        applyMiddleware(
            thunkMiddleware,
            apiMiddleware,
        )
    );
    return store;
}