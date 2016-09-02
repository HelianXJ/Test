import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import containerReducer from './reducers/container-reducer';
import userReducer from './reducers/user-reducer';
import userMiddleware from './middlewares/user-middleware';

export default createStore(
    combineReducers({
        'routing': routerReducer,
        'container': containerReducer,
        'user': userReducer,
    }),
    compose(
        applyMiddleware(
            thunk,
            routerMiddleware(browserHistory),
            userMiddleware,
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
