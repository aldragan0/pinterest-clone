import '../styles/Header.css';

import { Link } from 'react-router-dom';

export const Header = (props: {
  loginRoute: string,
  signupRoute: string
}) => {
  return (
    <header className="navigator">
      <ul className='links'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Business</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <ul>
        <li className='button-primary'>
          <Link to={props.loginRoute}>Log in</Link>
        </li>
        <li className='button-secondary'>
          <Link to={props.signupRoute}>Sign Up</Link>
        </li>
      </ul>
    </header >
  );
}