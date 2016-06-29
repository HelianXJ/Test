import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import connect from 'assets/js/lib/connect';
import Layout from 'assets/js/layouts/default';
import reducer from './reducer';
import * as actions from './actions';

class IndexShow extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <Layout className="my-root-index-show">
                <div onClick={this.props.actions.helloFromIndexShow}>show</div>
                <div onClick={this.props.actions.helloFromIndexShow2}>show2</div>
                <div onClick={this.props.actions.getContent}>get</div>
                <div>{this.props.state.get('orders')}</div>
                <div>{this.props.state.get('index_show_content')}</div>
                <Link to="/login">LOGIN</Link>
            </Layout>
        );
    }

//    componentWillReceiveProps(props) {
//    }
}

export default connect(actions, reducer)(IndexShow);
