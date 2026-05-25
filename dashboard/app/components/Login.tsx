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
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={uname}
          onChange={e => setUname(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}
