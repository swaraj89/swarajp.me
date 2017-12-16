import * as FontAwesome from 'react-icons/lib/fa';
import * as React from 'react';

class SocialSite {
    name: string;
    icon: any;
    linkto: string;
    title: string;
}

const SocialSites: Array<SocialSite> = [{
    name: 'github',
    icon: <FontAwesome.FaGithub />,
    linkto: 'github.com/swaraj89',
    title: 'github'
}, {
    name: 'Facebook',
    icon: <FontAwesome.FaFacebook />,
    linkto: 'github.com/swaraj89',
    title: 'Facebook'
}, {
    name: 'Twitter',
    icon: <FontAwesome.FaTwitter />,
    linkto: 'github.com/swaraj89',
    title: 'Twitter'
}, {
    name: 'LinkedIn',
    icon: <FontAwesome.FaLinkedin />,
    linkto: 'github.com/swaraj89',
    title: 'LinkedIn'
}, {
    name: 'Instagram',
    icon: <FontAwesome.FaInstagram />,
    linkto: 'github.com/swaraj89',
    title: 'Instagram'
}];

export default SocialSites;
