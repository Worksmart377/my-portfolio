import React from 'react';
import Profile from '../assets/profilepic3.png';
import Pink from '../assets/pink.png';
import { FaGithub, FaLinkedin, FaBehanceSquare, FaEtsy } from 'react-icons/fa';


const About = () => {
    return (
        <div name='about' className='about-container'>
            <div class='card mb-3 about'>
                <h3 class='card-header'>Hi, I'm Steph! </h3>
                <div class='card-body about'>
                    <h5 class='card-title'>
                        I am a Wife, Software Engineer, Creator & Artist.
                    </h5>
                </div>
                    <div className='image-container'>
                        <img src={Pink} alt='paint' style={{height: '400px', width: '240px',zIndex:'-1', margin: '0'}} />
                        <img className='profile' src={Profile} alt='profile' style={{height: '350px', width: '320px'}} />
                        <img src={Pink} alt='paint' style={{height: '400px', width: '240px', zIndex:'-1', margin: '0'}} />
                    </div>
                    <div class='card-body'>
                        <p class='card-text'>
                        👋🏻 	Welcome and thanks for stopping by! I love working with technology! It’s fun, inspiring, frustrating, and exuberating all at one time. I have always been an artist and creator at heart, so one of the things I love most about programming is the ability to create something that can help or inspire some one. Solving problems and trying to find creative ways to improve processes brings me so much fulfillment as well. I believe in teaching and training other people in order to assist them in achieving their goals, that means there’s no gate keeping information here. I also work on digital designs and products in my spare time, so check out my Behance profile too! 
                        <br />
	                    I am a Software Engineer with over a decade of customer service and retail management experience. One of my management roles was an asset protection assistant manager where my focus was on facility safety, security, inventory management, and compliance. I have an eye for detail, the ability to work with high level officials, as well as communicate and collaborate effectively with the rest of my team on business critical tasks. I have 8 years of experience working with cross-functional teams, mentoring and training, creative problem solving, root-cause analysis, and data analysis.  I also have a strong interest in art, meaning I create projects with a strong design aesthetic in mind. I recently graduated from a Software Engineer Immersive facilitated by General Assembly and sponsored by Adobe Digital Academy. I am currently attending WGU for B.S in Software Engineering as well as learning new concepts in blockchain and web3 development.
                        <br />
                        I am currently seeking a remote full-time, internship, or apprenticeship role in tech. I am always looking to make new connections so feel free to send me a message!


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
                        <a href='https://www.PlatinumStyleIcons.etsy.com'>
                        <FaEtsy size={40} />
                        </a>
                    </div>
                
            </div>
        </div>
    );
};

export default About;
