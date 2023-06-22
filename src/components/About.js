import React from 'react';
import Profile from '../assets/profilepic.png';
import Pink from '../assets/pink.png';
import Blue from '../assets/blue.png';
import { FaGithub, FaLinkedin, FaBehanceSquare } from 'react-icons/fa';


const About = () => {
    return (
        <div name='about' className='about-container'>
            <div class='card mb-3'>
                <h3 class='card-header'>Hi, I'm Steph! </h3>
                <div class='card-body'>
                    <h5 class='card-title'>
                        I am a Wife, Software Engineer, Creator & Artist.
                    </h5>
                </div>
                    <div className='image-container'>
                        <img src={Pink} alt='paint' style={{height: '400px', width: '240px',zIndex:'-1', margin: '0'}} />
                        <img className='profile' src={Profile} alt='profile' style={{height: '350px', width: '320px'}} />
                        <img src={Blue} alt='paint' style={{height: '400px', width: '240px', zIndex:'-1', margin: '0'}} />
                    </div>
                    <div class='card-body'>
                        <p class='card-text'>
                        I am a Software Engineer with over eight years of customer facing retail management experience. I managed a wide range of compliance, security, and safety related reports. I have an eye for detail, the ability to work with high level officials, communicate and collaborate well with the rest of my team on business critical tasks. I also have a strong interest in art, meaning I create projects with a strong design aesthetic in mind. I recently graduated from a Software Engineer Immersive facilitated by General Assembly and sponsored by Adobe Digital Scholar Program. I love to learn new tech stacks and my current skills include React, JavaScript, Python, Django, HTML, CSS and more. I am so excited for the rest of my journey in Tech and I am always looking to make new connections or looking for work opportunities. Feel free to connect or send me a message!
                        </p>
                    </div>
                    <div class='card-body'>
                        <a href='https://www.linkedin.com/in/stephany-nelson' class='card-link'>
                        <FaLinkedin size={40} />
                        </a>
                        <a href='https://github.com/Worksmart377' class='card-link'>
                        <FaGithub size={40} />
                        </a>&nbsp;
                        <a href='https://www.behance.net/MrsN377'>
                        <FaBehanceSquare size={40} />
                        </a>
                    </div>
                    <div class='card-footer text-muted'>2 days ago
                </div>
            </div>
        </div>
    );
};

export default About;
