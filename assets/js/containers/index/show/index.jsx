import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import connect from 'lib/connect';
import Layout from 'js/layouts/default';
import reducer from './reducer';
import * as actions from './actions';

require('less/login/show.less');

class IndexShow extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return <Layout className="my-root-index-show">
        </Layout>;
    }
}

export default connect(actions, reducer)(IndexShow);
