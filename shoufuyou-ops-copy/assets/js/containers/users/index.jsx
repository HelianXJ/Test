import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import connect from 'assets/js/lib/connect';
import Layout from 'assets/js/layouts/default';
import reducer from './reducer';
import * as actions from './actions';

class IndexShow extends React.Component {
    render() {
        return (
            <Layout className="my-root-index-show">
            </Layout>
        );
    }

//    componentWillReceiveProps(props) {
//    }
}

export default connect(actions, reducer)(IndexShow);