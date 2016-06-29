import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import containerReducerProxy from './container-reducer-proxy';

// devtool
import DevTools from '../containers/devtools/DevTools'

export default createStore(
    combineReducers({
        'routing': routerReducer,
        'container': containerReducerProxy
    }),
    compose(
        applyMiddleware(
            thunk,
            routerMiddleware(browserHistory)
        ),
        DevTools.instrument(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
