import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBar } from "./ErrorBar";
import '../styles/CreateAccount.css';

export function CreateAccount(props: { loginRoute: string }) {
  let navigation = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password: string = e.target.password.value;

    if (password.length < 8) {
      alert("Password should be at least 8 chars");
      return;
    }

    console.log(email);

    fetch(`http://localhost:5010/user/signup`, {
      headers: { 'Content-Type': 'application/json', },
      method: "POST",
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then(() => console.log("Account created"))
      .catch(() => {
        console.log("User already exists");
        setError("User already exists");
      })
    e.target.email.value = "";
    e.target.password.value = "";
    navigation("/login");
  };

  return (
    <div className="App">
      <h2>Sign up for your account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="name@email.com" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <button className="primary">Create Account</button>
      </form>
      {error && <ErrorBar message={error} closeMessage={() => setError('')} />}
      <div>
        <Link className="ref" to={props.loginRoute}>
          Go back to login?
        </Link>
      </div>
    </div>
  );
}