import * as React from 'react';
import './index.scss';
import { Social } from '../../components/common/social';
import SocialSites from '../../config/social-sites';
const { Component } = React;

export class Contact extends Component<{}, {}> {
    render() {
        return (
            <div className="text-center">
                <div className="top-section">
                    <h1>
                        Swaraj Panigrahi
                    </h1>
                    <h2>
                        CONTACT
                    </h2>
                </div>

                <div className="bottom-section">
                    <h2>
                        Info
                </h2>
                    <p>
                        Tel.: 903-505-8036
                </p>
                    <p>
                        Email: connect@swarajp.me
                </p>

                    <h2>
                        Address
                </h2>
                    <p>
                        Bengaluru,
                </p>
                    <p>
                        India
                </p>

                    <h2>Follow me</h2>
                    <Social
                        socialMedia={SocialSites}
                    />
                </div>
            </div>
        );
    }
}