import { Link } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
import { useLogin } from "utils";

export const Login = () => {
  const {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  } = useLogin();

  return (
    <section className="loginContainer">
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
        <small>See your growth and consulting support</small>
      </div>

      <form className="margin-2 form" action="login">
        <label htmlFor="Email">
          Email
          <input
            className="inp"
            type="email"
            placeholder="Email"
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Password">
          Password
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          className="submit"
          type="submit"
          value="Login"
          onClick={(event) => loginHandler(event)}
        />
        <input
          className="submit"
          type="submit"
          onClick={(event) => dummyHandler(event)}
          value="Login as Test Credential"
        />
      </form>
      <p>
        Don't have an account?
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
