"use client";
import { useState } from "react";
import styles from "./login.module.css";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [uname, setUname] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (uname === "root" && pw === "root") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className={styles.loginBg}>
      <form className={styles.loginForm} onSubmit={handleSubmit} aria-label="Login form">
        <h2>Login</h2>
        <label htmlFor="login-username">Username</label>
        <input
          id="login-username"
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={uname}
          onChange={e => setUname(e.target.value)}
          required
          aria-required="true"
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          required
          aria-required="true"
        />
        <button type="submit">Login</button>
        {error && <div className={styles.error} role="alert">{error}</div>}
      </form>
    </div>
  );
}
