import * as React from 'react';
import './index.scss';
const { Component } = React;

class SocialSite {
    name: string;
    icon: any;
    linkto: string;
    title: string;
}

export interface ISocialProps {
    socialMedia: Array<SocialSite>;
}

export class Social extends Component<ISocialProps, {}> {
    public render() {
        const { socialMedia } = this.props;
        
        return socialMedia.map((medium, index) => {
            return (
                <a key={index} href={medium.linkto} title={medium.title} className='icons'>
                    {medium.icon}
                </a>
            );
        });
    }
}