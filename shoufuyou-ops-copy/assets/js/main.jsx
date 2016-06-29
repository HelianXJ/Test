import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import IndexShowContainer from './containers/index/show';
import LoginShowContainer from './containers/login/show';
import EnviromtShowContainer from './containers/environment/show';
import UserContainer from './containers/users';
import NotFoundContainer from './error/not-found';

const history = syncHistoryWithStore(browserHistory, store);

// devtool
import DevTools from './containers/devtools/DevTools';
import { createStore, compose } from "redux";

const enhancer = compose(
    DevTools.instrument()
);

let rootElement = document.getElementById('container');

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={IndexShowContainer} />
                <Route path="/login" component={LoginShowContainer}/>
                <Route path="/users" component={UserContainer}/>
                <Route path="/environment" component={EnviromtShowContainer}/>
                <Route path="*" component={NotFoundContainer}/>
            </Router>
        </div>
    </Provider>,
    rootElement
);

// ReactDOM.render(
//     <Provider store={store}>
//         <div>
//             <Router history={history}>
//                 <Route path="/" component={IndexShowContainer} />
//                 <Route path="/login" component={LoginShowContainer}/>
//                 <Route path="/users" component={UserContainer}/>
//                 <Route path="/environment" component={EnviromtShowContainer}/>
//                 <Route path="*" component={NotFoundContainer}/>
//             </Router>
//             // <DevTools/>
//         </div>
//     </Provider>,
//     rootElement
// );
