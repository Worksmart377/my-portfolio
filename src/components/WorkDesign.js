import React from 'react';
import Designs from '../assets/Avatars.png';
import Turtle from '../assets/Turtle.png';

const WorkDesign = () => {
    return (
    <div name='design'>
        <div className='paragraph-div'>
        <h2>My Design Work</h2>
        <p>Check out some of my recent work</p>
        <div className='grid'>
            <div className='card-item'>
            <div class='card text-white bg-primary mb-3' style={{ maxWidth: '30rem' }}>
                <div class='card-header'>
                    Personalized Avatars
                </div>
                <div class='card-body programming'>
                <p class='card-text'>
                    These can be personalized however you like, whether for a special holiday or event or just for social media I've got you covered. Please fill out the form below if interested. 
                </p>
                <img className='home-page' src={Designs} alt='home page' />
                <div className='btns'>
                  <a href='https://www.behance.net/gallery/171505013/Personalized-Avatars'>
                    <button className='btn btn-outline-secondary'>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
            <div className='card-item'>
            <div class='card text-white bg-primary mb-3' style={{ maxWidth: '30rem' }}>
                <div class='card-header'>
                    Logo Creations
                </div>
                <div class='card-body programming'>
                <p class='card-text'>
                    I have designed logos for businesses as well as applications before. If you are interested in getting a logo then please fill out the contact form below.
                </p>
                <img className='home-page' src={Turtle} alt='home page' />
                <div className='btns'>
                  <a href='https://www.behance.net/gallery/171506331/Logo-Creations'>
                    <button className='btn btn-outline-secondary'>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default WorkDesign;
