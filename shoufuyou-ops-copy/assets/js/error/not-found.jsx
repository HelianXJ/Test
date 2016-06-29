import React from 'react';
import Layout from 'assets/js/layouts/default';

export default class NotFound extends React.Component {
    render() {
        console.log(this.props);
        return <Layout rootClassName="my-root-error-404">
            <div>{this.props.params.id}</div>
        </Layout>;
    }
}
