import React from 'react';
import { browserHistory } from 'react-router';
import connect from 'lib/connect';
import reducer from './reducer';
import * as actions from './actions';

require('less/login/show.less');

class LoginShow extends React.Component {
    render() {
        return <div className="my-root-login-show">
            <h1>首付游 OPS!</h1>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    this.props.actions.login(
                        this.refs.username.value.trim(),
                        this.refs.password.value.trim()
                    );
                }
            }>
                <input ref="username" className="form-control" placeholder="用户名" type="text" name="username"/>
                <input ref="password" className="form-control" placeholder="密码" type="password" name="password"/>
                <button className="btn btn-lg btn-primary btn-block">登录</button>
            </form>
            <div>{ this.props.state.message }</div>
        </div>;
    }
}

export default connect(actions, reducer)(LoginShow);
