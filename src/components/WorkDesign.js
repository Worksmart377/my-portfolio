import React from 'react';
import Designs from '../assets/Avatars.png';


const WorkDesign = () => {
    return (
        <div name='work'>
        <div>
            <div className='paragraph-div'>
                <h2>My Design Work</h2>
                <p>Check out some of my recent work</p>
            </div>
            <div className='container'>
                <div className='card-item'>
                    <div className='card-paragraph-div'>
                        <div>
                        <p className='project-description'>Personalized Avatars</p>
                        </div>
                        <img className='home-page' src={Designs} alt="home page" />
                        <div className='card-btns'>
                            <a href="https://www.behance.net/gallery/171505013/Personalized-Avatars">
                                <button>Demo</button>
                            </a>
                            {/* <a href="https://github.com/Worksmart377/commit">
                                <button>Shop</button>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default WorkDesign;