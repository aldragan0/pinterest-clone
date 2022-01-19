import "./Header.css";
import UserIcon from "../../assets/user-icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

export default (props: {
  mainRoute: string;
  setSearch: (value: string) => void;
}) => {
  //TODO: move auth logic into the explore page, only pas props here
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
        <form
          onSubmit={(e: React.FormEvent<HTMLElement>) => {
            e.preventDefault();
            props.setSearch(search);
          }}
        >
          <input
            type="search"
            name="search"
            placeholder="Enter your search here..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
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
