import React from 'react';
import Layout from 'js/layouts/default';

export default class NotFound extends React.Component {
    render() {
        return <Layout className="my-root-error-404">
            <h1>Not Found</h1>
        </Layout>;
    }
}
