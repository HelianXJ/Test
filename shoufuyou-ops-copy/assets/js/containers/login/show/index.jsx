import React from 'react';
import { browserHistory } from 'react-router';
import connect from 'assets/js/lib/connect';
import reducer from './reducer';
import * as actions from './actions';

// class LoginShow extends React.Component {
//     render() {
//         return <div onClick={() => {
//             browserHistory.push('/');
//         }}>login show dsdf</div>;
//     }
// }

class LoginShow extends React.Component {
	render () {
		return (
			<div>
				<div className="navbar navbar-fixed-top">
					<div className="navbar-inner">
						<div className="container">
							<a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
								<i className="icon-reorder shaded"></i>
							</a>

						  	<div className="brand" href="index.html">
						  		首付游
						  	</div>

							<div className="nav-collapse collapse navbar-inverse-collapse">
							
								<ul className="nav pull-right">

								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="wrapper">
					<div className="container">
						<div className="row">
							<div className="module module-login span4 offset4">
								<form className="form-vertical" action="/login" method="post">
									<div className="module-head">
										<h3>Sign In</h3>
									</div>
									<div className="module-body">
										<div className="control-group">
											<div className="controls row-fluid">
												<input className="span12" name="username" type="text" id="inputEmail" placeholder="Username" />
											</div>
										</div>
										<div className="control-group">
											<div className="controls row-fluid">
												<input className="span12" name="password" type="password" id="inputPassword" placeholder="Password" />
											</div>
										</div>
									</div>
									<div className="module-foot">
										<div className="control-group">
											<div className="controls clearfix">
												<button type="submit" className="btn btn-primary pull-right">Login</button>
												<label className="checkbox">
													<input type="checkbox" /> Remember me
												</label>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="footer">
					<div className="container">
					</div>
				</div>
			</div>
		)
	}
}

export default connect(actions, reducer)(LoginShow);
