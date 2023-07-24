import React from 'react';
import Commit from '../assets/Commit.png';
import Tokens from '../assets/TurtleTokens.png';
import Meal from '../assets/meal-planner.png';
import Robo from '../assets/Robo.png';

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
              <p class="card-text">This is the best handy dandy planner ever! It's meant to assist developers in creating new projects and keeping their tasks organized. You can add tasks and assign them to your projects. You can even search for youtube tutorials in order to implement a feature or correct and error if needed. I hope you enjoy using it as much as I enjoyed making it!</p>
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
              <p class="card-text">This application is meant for the user who is brand new to cryptocurrency. It is a resource for the user to learn the basics of crypto and get information on the most popular coins. In this time where everything is moving into a digital age, I believe that knowledge and action on these topics can help users to transition into the new financial system seemlessly. None of the information given is meant to give financial advice in anyway.</p>
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
              <p class="card-text">Meal planning can be a pain, especially on a busy schedule. We wanted to build a weekly planner application that would give the user some organizational assistance. You will find a page to create recipes, a page to view and update the recipes, as well as a shopping list page to view any ingredients the user may need to grab for the week.</p>
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
          <div className='card-item'>
            <div class='card border-info mb-3' style={{ maxWidth: '30rem' }}>
              <div class='card-header'>
              Robo Friends React App
              </div>
              <div class='card-body programming'>
              <p class="card-text">This project is a simple react app and a great way to practice some basic skills. Feel free to fork and clone if you want to add to it.</p>
                <img className='home-page' src={Robo} alt='home page' />
                <div className='btns'>
                <a href='https://some-robo-friends-app.netlify.app/'>
                  <button className='btn btn-outline-dark'>Demo</button>
                </a>
                <a href='https://github.com/Worksmart377/robofriends'>
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
