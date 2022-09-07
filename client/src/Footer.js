import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return ( 
        <footer id='footer'>
            <div id='comment'>
                <h3>A BETTER WORLD IS POSSIBLE</h3>
            </div>
            <div id='footer-logo'>
                <img src="https://secondthought.us/wp-content/uploads/elementor/thumbs/Logo2.001-p37d96m6rckaf0gxfyf5ak4n5ni5iprpv675lmomx8.jpeg" alt="second thought logo"/>
            </div>
            <div id='footer-socials'>
            <SocialIcon className='footer-social-icons'url='https://www.youtube.com/channel/UCJm2TgUqtK1_NLBrjNQ1P-w' style={{ height: 35, width: 35 }} fgColor="white"/>
            <SocialIcon className='footer-social-icons'url='https://www.facebook.com/second.thought.yt' style={{ height: 35, width: 35 }} fgColor="white"/>
            <SocialIcon className='footer-social-icons'url='https://twitter.com/_SecondThought' style={{ height: 35, width: 35 }} fgColor="white"/>
            </div>
            <div id='footer-tube'>
                <ul>
                    <h3>YOUTUBE CHANNEL</h3>
                    <li><a>SOCIALISM 101</a></li>
                    <li><a>AMERICAN FOREIGN POLICY</a></li>
                    <li><a>AMERICAN DOMESTIC POLICY</a></li>
                    <li><a>AMERICAN POLITICS</a></li>
                    <li><a>AMERICAN HEALTHCARE</a></li>
                </ul>
            </div>
            <div id='footer-resources'>
                <ul>
                    <h3>RESOURCES</h3>
                    <li><a>VIDEO</a></li>
                    <li><a>AUDIO</a></li>
                    <li><a>PRINT</a></li>
                    
                </ul>
            </div>
        </footer>
    );
}

export default Footer;