import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'lib/actions/user-actions';

require('less/layouts/default.less');
require('vendor/bootstrap/css/bootstrap.min.css');
require('vendor/bootstrap/css/bootstrap-theme.css');

export default class DefaultLayout extends React.Component {
    render() {
        return <div className={ this.props.className }>
            <h2>首付游 OPS</h2>
            <div>{ this.props.username }</div>
            <div onClick={ this.props.logout }>退出</div>
            { this.props.children }
        </div>;
    }
}

export default connect(
    state => ({
        username: state.user.name
    }), {
        logout
    }
)(DefaultLayout);
