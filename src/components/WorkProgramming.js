import React from 'react';
import Commit from '../assets/Commit.png';
import Tokens from '../assets/TurtleTokens.png';
import Meal from '../assets/meal-planner.png';

const WorkProgramming = () => {
    return (
    <div name='work'>
        <div>
            <div className='paragraph-div'>
                <h2>My Programming Work</h2>
                <p>Check out some of my recent work</p>
            </div>
            <div className='grid'>
                <div className='card-item'>
                    <div className='card-paragraph-div'>
                        <div>
                        <p className='project-description'>📓 Commit Planner (Django + Python fullstack app)📓</p>
                        </div>
                        <img className='home-page' src={Commit} alt="home page" />
                        <div className='card-btns'>
                            <a href="https://commit-planner.herokuapp.com/">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/Worksmart377/commit">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-item'>
                    <div className='card-paragraph-div'>
                        <div>
                        <p className='project-description'>🐢 Turtle Tokens (MERN Stack Single-Page Application) 🐢</p>
                        </div>
                        <img className='home-page' src={Tokens} alt="home page" />
                        <div className='card-btns'>
                            <a href="https://turtle-tokesn.herokuapp.com/">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/Worksmart377/turtle-tokens">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-item'>
                    <div className='card-paragraph-div'>
                        <div>
                        <p className='project-description'>🍲 Weekly Meal Planner (Full-stack CRUD Application) 🗒️</p>
                        </div>
                        <img className='home-page' src={Meal} alt="home page" />
                        <div className='card-btns'>
                            <a href="https://young-badlands-56713.herokuapp.com/">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/Worksmart377/meal-planner">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WorkProgramming