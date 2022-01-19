import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ErrorBar } from "./ErrorBar";
import { UnauthorizedError } from "../exceptions";

export default (props: { signupRoute: string; mainRoute: string }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [_, setToken] = useLocalStorage("token", "");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email);

    fetch(`http://localhost:5000/auth/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: improve the error handling logic
        console.log(res);
        if (res?.statusCode === 401) {
          throw new UnauthorizedError(res.message);
        }
        setToken(res.accessToken);
        navigate(props.mainRoute);
      })
      .catch((e) => {
        console.warn(e, "Wrong email or password combination");
        setError("Wrong email or password combination");
      });
  };

  return (
    <div className="Login">
      <h2>Login to #App</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <button className="primary">Login</button>
      </form>
      {error && <ErrorBar message={error} closeMessage={() => setError("")} />}
      <div>
        <Link className="ref" to={props.signupRoute}>
          Create an account instead?
        </Link>
      </div>
    </div>
  );
};
