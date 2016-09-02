import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'lib/store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import IndexShowContainer from './containers/index/show';
import LoginShowContainer from './containers/login/show';
import NotFoundContainer from './error/not-found';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ IndexShowContainer } />
            <Route path="/login" component={ LoginShowContainer }/>
            <Route path="*" component={ NotFoundContainer }/>
        </Router>
    </Provider>,
    document.getElementById('container')
);
