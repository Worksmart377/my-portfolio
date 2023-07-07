import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import HTML from '../assets/html.png';
import DJ from '../assets/django.png';
import PY from '../assets/python.png';
import R from '../assets/react.png';
import Canva from '../assets/Canva.png';
import Art from '../assets/digitalart.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';



const Skills = () => {

    const images = [CSS, JS, PY, DJ, HTML, Art, Git, GitHub, R, Canva]
    
    const [imageIndex, setImageIndex] = useState(0)
    const settings= {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3, 
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setImageIndex(next)
        
    }
    return (
        
        <div name='skills'>
            <div className='skills-paragraph' >
                <h3>My Skills</h3>
                &nbsp;
                <p className='h5'>These are my current skills, but I am always learning so come back and check for updates!</p>
                &nbsp;
            </div>
            <div className='img-container'>    
                <Slider {...settings}>
                {images.map((img, idx) => (
                <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                    <img  src={img} alt='logo' />
                </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Skills