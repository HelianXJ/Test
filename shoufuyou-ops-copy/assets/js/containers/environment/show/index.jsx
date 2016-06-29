import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import connect from 'assets/js/lib/connect';
import reducer from './reducer';
import * as actions from './actions';

require('assets/less/environment.less');

class EnviromtShow extends React.Component { 

    render() {
        return (
            <div className="my-enviroment-index">
            	<Link className="btn btn-primary" to="/">环境一</Link>
            	<Link className="btn btn-primary" to="/">环境二</Link>
            	<Link className="btn btn-primary" to="/">环境三</Link>
            </div>
        );
    }
}

export default connect(actions, reducer)(EnviromtShow);