import React from 'react';
import TopBar from "../component/topbar";
import Footer from "../component/footer";
import Sidebar from "../component/sidebar";

export default class DefaultLayout extends React.Component {
    render() {
        return <div className={ this.props.className }>
            	
        		<TopBar name="John" />
            	
            	<div className="wrapper">
            		<div className="container">
            			<div className="row">
            				<Sidebar />
            			</div>
            		</div>
            	</div>
            	{this.props.children}
        </div>;
    }
}
