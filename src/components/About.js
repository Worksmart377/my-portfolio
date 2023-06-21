import React from 'react';
import Profile from '../assets/profilepic.png';

const About = () => {
  return (
    <div name='about' className=''>
      <div class='card mb-3'>
        <h3 class='card-header'>Hi, I'm Steph! </h3>
        <div class='card-body'>
          <h5 class='card-title'>
            I am a Wife, Software Engineer, Creator & Artist.
          </h5>
          <h6 class='card-subtitle text-muted'>Support card subtitle</h6>
        </div>
        <div className='image-container'>
        <img src={Profile} alt='profile' style={{height: '350px', width: '250px'}} />
        </div>
        <div class='card-body'>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>Cras justo odio</li>
          <li class='list-group-item'>Dapibus ac facilisis in</li>
          <li class='list-group-item'>Vestibulum at eros</li>
        </ul>
        <div class='card-body'>
          <a href='#' class='card-link'>
            Card link
          </a>
          <a href='#' class='card-link'>
            Another link
          </a>
        </div>
        <div class='card-footer text-muted'>2 days ago</div>
      </div>
      <div class='card'>
        <div class='card-body'>
          <h4 class='card-title'>Card title</h4>
          <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' class='card-link'>
            Card link
          </a>
          <a href='#' class='card-link'>
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
