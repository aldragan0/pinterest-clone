import "./Header.css";
import UserIcon from "../../assets/user-icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default (props: { mainRoute: string }) => {
  //TODO: move auth logic into the explore page, only pas props here
  const navigate = useNavigate();

  const value = localStorage.getItem("token");
  const token = value != null ? JSON.parse(value) : value;

  const setToken = (value: string) => {
    localStorage.setItem("token", JSON.stringify(value));
  };

  useEffect(() => {
    if (!token) {
      navigate(props.mainRoute);
    }
  });

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
            <button
              className="button-secondary"
              onClick={() => {
                setToken("");
                console.log("Going back to home page");
                navigate(props.mainRoute);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
