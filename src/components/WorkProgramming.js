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
            <div class='card border-info mb-3' style={{ maxWidth: '30rem' }}>
              <div class='card-header'>
                📓 Commit Planner (Django + Python fullstack app)📓
              </div>
              <div class='card-body programming'>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img className='home-page' src={Commit} alt='home page' />
                <div className='btns'>
                <a href='https://commit-planner.herokuapp.com/'>
                  <button className='btn btn-outline-dark'>Demo</button>
                </a>
                <a href='https://github.com/Worksmart377/commit'>
                  <button className='btn btn-outline-dark'>Code</button>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card-item'>
            <div class='card border-info mb-3' style={{ maxWidth: '30rem' }}>
              <div class='card-header'>
                🐢 Turtle Tokens (MERN Stack Single-Page Application) 🐢
              </div>
              <div class='card-body programming'>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img className='home-page' src={Tokens} alt='home page' />
                <div className='btns'>
                <a href='https://turtle-tokesn.herokuapp.com/'>
                  <button className='btn btn-outline-dark'>Demo</button>
                </a>
                <a href='https://github.com/Worksmart377/turtle-tokens'>
                  <button className='btn btn-outline-dark'>Code</button>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className='card-item'>
            <div class='card border-info mb-3' style={{ maxWidth: '30rem' }}>
              <div class='card-header'>
                🍲 Weekly Meal Planner (Full-stack CRUD Application) 🗒️
              </div>
              <div class='card-body programming'>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img className='home-page' src={Meal} alt='home page' />
                <div className='btns'>
                <a href='https://young-badlands-56713.herokuapp.com/'>
                  <button className='btn btn-outline-dark'>Demo</button>
                </a>
                <a href='https://github.com/Worksmart377/meal-planner'>
                  <button className='btn btn-outline-dark'>Code</button>
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

export default WorkProgramming;
