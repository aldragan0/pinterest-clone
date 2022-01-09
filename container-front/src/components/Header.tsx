import '../styles/Header.css';

export const Header = () => {

  return (
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
  );
}