import "./Header.css";

import { Link } from "react-router-dom";

export const Header = (props: { loginRoute: string; signupRoute: string }) => {
  return (
    <header className="home-nav">
      <ul className="home-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul>
        <li className="home-button-primary">
          <Link to={props.loginRoute}>Log in</Link>
        </li>
        <li className="home-button-secondary">
          <Link to={props.signupRoute}>Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};
