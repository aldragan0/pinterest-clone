import "./Header.css";
import UserIcon from "../../assets/user-icon.png";

export default () => {
  return (
    <header className="main-nav">
      <nav>
        <form>
          <input type="search" placeholder="Enter your search here..." />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>
            <a href="">
              <img className="user-icon" src={UserIcon} alt="Icon" />
            </a>
          </li>
          <li>
            <a href="" className="button-secondary">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
