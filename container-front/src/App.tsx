import React from 'react';
import './App.css';
//@ts-ignore
const Auth = React.lazy(() => import('auth/Auth'));

export default () => (
  <React.Fragment>
    <header className="navigator">
      <ul className='links'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Business</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <ul>
        <li className='button-primary'><a href="#">Log in</a></li>
        <li className='button-secondary'><a href="#">Sign Up</a></li>
      </ul>
    </header>
    <main>
      <div className='title'>
        <h1>Explore a variety of content <span className='emphasis'>today</span></h1>
      </div>
      <div id='background'>
        <img src='https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'></img>
      </div>
    </main>
    <footer>
      <nav>
        <ul>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Learn More</a></li>
          <li><a href="">Our App</a></li>
          <li><a href="https://www.pexels.com">Photos provided by Pexels</a></li>
        </ul>
      </nav>
    </footer>
  </React.Fragment>
);
