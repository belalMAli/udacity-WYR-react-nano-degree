import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../Reducers';

import { composeWithDevTools } from 'redux-devtools-extension'
export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware]

    // if (process.env.NODE_ENV === 'development') {
    //     middlewares.push(logger)
    // }

    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]

    let composedEnhancers;
    if (process.env.NODE_ENV === 'development') {
        composedEnhancers = composeWithDevTools(...enhancers)
    } else {
        composedEnhancers = compose(...enhancers)
    }


    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}