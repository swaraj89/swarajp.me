import * as React from 'react';

const { Component } = React;

export class NotFound extends Component<{}, {}> {
    render() {
        return (
            <h1>404!<p>Go to Index instead</p></h1>
            
        );
    }
}