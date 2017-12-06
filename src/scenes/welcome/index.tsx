import * as React from 'react';

const { Component } = React;

export class Welcome extends Component <{}, {}> {
    render() {
        return (
            <div className="text-center">
                <h1>Welcome</h1>
                <h2>H2 Welcome</h2>
            </div>
        );
    }
}