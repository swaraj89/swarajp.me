import * as React from 'react';
import { Social } from '../../components/common/social';
import SocialSites from '../../config/social-sites';
import './index.scss';

const { Component } = React;

export class Welcome extends Component <{}, {}> {
    render() {
        return (
            <div className="text-center">
                <div className="text-center main-header-container">
                    <h1 className="main-header">Swaraj</h1>
                    <h1 className="main-header">Panigrahi</h1>
                
                <p>
                    I am a full stack web developer specialiasing in Javascript and its frameworks
                </p>
                <Social
                    socialMedia={SocialSites}
                />
                </div>
            </div>
        );
    }
}