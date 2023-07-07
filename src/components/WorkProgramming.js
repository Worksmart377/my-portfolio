import React from 'react';
import Commit from '../assets/Commit.png'

const WorkProgramming = () => {
    return (
    <div name='work'>
        <div>
            <div className='paragraph-div'>
                <h2>My Programming Work</h2>
                <p>Check out some of my recent work</p>
            </div>
            <div className='grid'>
                <div className='card-item'style={{backgroundImage:`url(${Commit})`}}>
                    <div className='card-paragraph-div'>
                        <div>
                        <p className='project-description'>📓 Commit Planner (Django + Python fullstack app)📓</p>
                        </div>
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
            </div>
        </div>
    </div>
    )
}

export default WorkProgramming