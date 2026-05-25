import React from "react";
import styles from "./topbar.module.css";

export function Topbar() {
  return (
    <header className={styles.topbar} role="banner">
      <form role="search" className={styles["topbar-search"]}>
        <label htmlFor="dashboard-search" style={{ display: 'none' }}>Search Here</label>
        <input
          id="dashboard-search"
          type="text"
          placeholder="Search Here"
        />
        <span className={styles["topbar-search-icon"]}>
          <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </span>
      </form>
      <div className={styles["topbar-actions"]}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Notifications">
          <svg width="26" height="26" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Messages">
          <svg width="26" height="26" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 11h8M8 7h8"/></svg>
        </button>
        <div className={styles["topbar-user"]}>
          <span>Hannah Morales</span>
          <span className={styles["topbar-avatar"]} aria-label="User avatar">
            <svg width="24" height="24" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
          </span>
        </div>
      </div>
    </header>
  );
}
