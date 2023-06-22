import React from 'react'
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import HTML from '../assets/html.png';
import DJ from '../assets/django.png';
import PY from '../assets/python.png';
import R from '../assets/react.png';
import Canva from '../assets/Canva.gif';
import Art from '../assets/digitalart.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';



const Skills = () => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
    return (
        <div name='skills'>
            <div >
                <h3>My Skills</h3>
                &nbsp;
                <p className='h5'>These are my current skills, but I am always learning so come back and check for updates!</p>
                &nbsp;
            </div>
            <div className='logos'>
                <div className='logos-slide'>
                    <img src={CSS} alt="css logo" />
                    <img src={JS} alt="javascript logo" />
                    <img src={HTML} alt="html logo" />
                    <img src={DJ} alt="Django logo" />
                    <img src={PY} alt="python logo" />
                    <img src={R} alt="react logo" />
                    <img src={Git} alt="git logo" />
                    <img src={GitHub} alt="github logo" />
                    <img src={Art} alt="digital art logo" />
                    <img className='canva' src={Canva} alt="canva logo" />
                </div>
            </div>
        </div>
    )
}

export default Skills