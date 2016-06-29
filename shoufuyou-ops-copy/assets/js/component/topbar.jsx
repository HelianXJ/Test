import React from 'react';

export default class TopBar extends React.Component {
    render() {
        return <div>
		     		<div className="navbar navbar-fixed-top">
			            <div className="navbar-inner">
			                <div className="container">
			                    <a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
			                    <i className="icon-reorder shaded"></i></a><a className="brand" href="/">首付游 </a>
			                    <div className="nav-collapse collapse navbar-inverse-collapse">
			                        <ul className="nav nav-icons">
			                            <li className="active"><a href="#"><i className="icon-envelope"></i></a></li>
			                            <li><a href="#"><i className="icon-eye-open"></i></a></li>
			                            <li><a href="#"><i className="icon-bar-chart"></i></a></li>
			                        </ul>
			                        
			                        <ul className="nav pull-right">
			                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
			                                <b className="caret"></b></a>
			                                <ul className="dropdown-menu">
			                                    <li><a href="#">Item No. 1</a></li>
			                                    <li className="divider"></li>
			                                    <li className="nav-header">Example Header</li>
			                                    <li><a href="#">A Separated link</a></li>
			                                </ul>
			                            </li>
			                            <li><a href="#">Support </a></li>
			                            <li className="nav-user dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
			                                <img src="images/user.png" className="nav-avatar" />
			                                <b className="caret"></b></a>
			                                <ul className="dropdown-menu">
			                                    <li><a href="#">Your Profile</a></li>
			                                    <li><a href="#">Edit Profile</a></li>
			                                    <li><a href="#">Account Settings</a></li>
			                                    <li className="divider"></li>
			                                    <li>
			                                    	<form action="/logout" method="post">
			                                    		<button type="submit">Logout</button>
			                                    	</form>
			                                    </li>
			                                </ul>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			            </div>
			        </div>
		        </div>;
    }
}