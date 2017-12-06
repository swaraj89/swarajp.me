import * as React from 'react';

const { Component } = React;

export class Contact extends Component<{}, {}> {
    render() {
        return (
            <div className="text-center">

            <h1>CONTACT</h1>

            <h2>Info</h2>
            <p>Tel.: 903-505-8036</p>
            <p>Email: connect@swarajp.me</p>
           
            <h2>Address</h2>
            <p>Bengaluru,</p>
            <p>India</p>

            <h3>Follow me</h3>
            
            </div>
        );
    }
}