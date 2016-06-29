import React from 'react';

export default class Sidebar extends React.Component {
	render () {
		return <div>
					<div className="span3">
                        <div className="sidebar">
                            <ul className="widget widget-menu unstyled">
                                <li className="active">
                                	<a className="collapsed" data-toggle="collapse" href="#togglePages">
                                		<i className="menu-icon icon-dashboard"></i>
                                		<i className="icon-chevron-up pull-right"></i>
                                		<i className="icon-chevron-down pull-right"></i>
                                		用户管理
                                	</a>
                                	<ul id="togglePages" className="collapse unstyled">
                                        <li><a href="/users"><i className="icon-inbox"></i>用户权限</a></li>
                                        <li><a href="other-user-profile.html"><i className="icon-inbox"></i>所有用户 </a></li>
                                        <li><a href="other-user-listing.html"><i className="icon-inbox"></i>mmm </a></li>
                                    </ul>
                                </li>
                                <li><a href="activity.html"><i className="menu-icon icon-bullhorn"></i>News Feed </a>
                                </li>
                                <li><a href="message.html"><i className="menu-icon icon-inbox"></i>Inbox <b className="label green pull-right">
                                    11</b> </a></li>
                                <li><a href="task.html"><i className="menu-icon icon-tasks"></i>Tasks <b className="label orange pull-right">
                                    19</b> </a></li>
                            </ul>
                            
                            <ul className="widget widget-menu unstyled">
                                <li><a href="ui-button-icon.html"><i className="menu-icon icon-bold"></i> Buttons </a></li>
                                <li><a href="ui-typography.html"><i className="menu-icon icon-book"></i>Typography </a></li>
                                <li><a href="form.html"><i className="menu-icon icon-paste"></i>Forms </a></li>
                                <li><a href="table.html"><i className="menu-icon icon-table"></i>Tables </a></li>
                                <li><a href="charts.html"><i className="menu-icon icon-bar-chart"></i>Charts </a></li>
                            </ul>
                            <ul className="widget widget-menu unstyled">
                                <li><a className="collapsed" data-toggle="collapse" href="#togglePagestwo"><i className="menu-icon icon-cog">
                                </i><i className="icon-chevron-down pull-right"></i><i className="icon-chevron-up pull-right">
                                </i>More Pages </a>
                                    <ul id="togglePagestwo" className="collapse unstyled">
                                        <li><a href="other-login.html"><i className="icon-inbox"></i>Login </a></li>
                                        <li><a href="other-user-profile.html"><i className="icon-inbox"></i>Profile </a></li>
                                        <li><a href="other-user-listing.html"><i className="icon-inbox"></i>All Users </a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)" /*onClick={this.props.actions.logout}*/><i className="menu-icon icon-signout"></i>Logout </a></li>
                            </ul>
                        </div>
                    </div>
		</div>;
	}
}